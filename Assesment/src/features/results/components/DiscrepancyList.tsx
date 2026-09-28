import { useAppSelector } from "../../../shared/hooks";
import SourceChip from "./SourceChip";

const DiscrepancyList = () => {
  const result = useAppSelector((s) => s.results.result);

  if (!result || result.discrepancies.length === 0) {
    return (
      <p className="text-[0.8125rem] text-neutral-400 py-4">No discrepancies found.</p>
    );
  }

  return (
    <ul className="space-y-3">
      {result.discrepancies.map((d) => (
        <li
          key={d.id}
          className="border border-amber-200/80 bg-amber-50/40 rounded-lg px-4 py-3"
        >
          <p className="text-[0.8125rem] font-medium text-neutral-800">{d.field}</p>
          <p className="text-[0.8125rem] text-neutral-600 mt-1 leading-relaxed">{d.details}</p>

          <div className="mt-2.5 space-y-1.5">
            {d.conflictingValues.map((cv, cvIdx) => (
              <div
                key={`${cv.documentId}-${cvIdx}`}
                className="flex items-center gap-2 text-[0.8125rem]"
              >
                <SourceChip
                  documentId={cv.documentId}
                  documentName={cv.documentName}
                />
                <span className="text-neutral-600">{cv.value}</span>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DiscrepancyList;
