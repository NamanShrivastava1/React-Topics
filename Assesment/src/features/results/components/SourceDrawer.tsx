import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { closeDrawer } from "../state/results.slice";

const SourceDrawer = () => {
  const dispatch = useAppDispatch();
  const drawerDocumentId = useAppSelector((s) => s.results.drawerDocumentId);
  const result = useAppSelector((s) => s.results.result);

  if (!drawerDocumentId || !result) return null;

  const docName = result.documentNames[drawerDocumentId] ?? "Unknown Document";

  // Gather all findings from this document
  const relatedFindings = result.keyValues.filter((kv) =>
    kv.sourceDocumentIds.includes(drawerDocumentId),
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/15 z-40 transition-opacity duration-200"
        onClick={() => dispatch(closeDrawer())}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto border-l border-neutral-200">
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h3 className="text-[0.8125rem] font-semibold text-neutral-900">
              Document Source
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">{docName}</p>
          </div>
          <button
            type="button"
            onClick={() => dispatch(closeDrawer())}
            className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-4">
          <p className="text-[0.6875rem] text-neutral-500 uppercase tracking-wider font-medium">
            Findings from this document
          </p>

          {relatedFindings.length === 0 ? (
            <p className="text-[0.8125rem] text-neutral-400">
              No extracted findings linked to this document.
            </p>
          ) : (
            <ul className="space-y-2">
              {relatedFindings.map((f) => (
                <li
                  key={f.id}
                  className="border border-neutral-100 rounded-lg px-3.5 py-2.5 text-[0.8125rem] bg-neutral-50/50"
                >
                  <span className="font-medium text-neutral-800">{f.label}:</span>{" "}
                  <span className="text-neutral-600">{f.value}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Comparison rows mentioning this document */}
          {result.comparisonRows.length > 0 && (
            <>
              <p className="text-[0.6875rem] text-neutral-500 uppercase tracking-wider font-medium mt-5">
                Comparison values
              </p>
              <ul className="space-y-1.5">
                {result.comparisonRows
                  .filter((row) => drawerDocumentId in row.values)
                  .map((row) => (
                    <li key={row.field} className="text-[0.8125rem] text-neutral-700">
                      <span className="font-medium">{row.field}:</span>{" "}
                      {row.values[drawerDocumentId]}
                      {row.hasDiscrepancy && (
                        <span className="text-amber-600 text-xs ml-1.5">
                          ⚠ discrepancy
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SourceDrawer;
