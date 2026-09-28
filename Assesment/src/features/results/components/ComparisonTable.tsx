import { useAppSelector } from "../../../shared/hooks";

const ComparisonTable = () => {
  const result = useAppSelector((s) => s.results.result);

  if (!result || result.comparisonRows.length === 0) {
    return (
      <p className="text-[0.8125rem] text-neutral-400 py-4">
        No comparison data available.
      </p>
    );
  }

  const docIds = Object.keys(result.documentNames);

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200">
      <table className="w-full text-[0.8125rem] border-collapse">
        <thead>
          <tr className="bg-neutral-50">
            <th className="text-left px-4 py-2.5 font-medium text-neutral-600 border-b border-neutral-200">
              Field
            </th>
            {docIds.map((id) => (
              <th
                key={id}
                className="text-left px-4 py-2.5 font-medium text-neutral-600 border-b border-neutral-200"
              >
                {result.documentNames[id]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.comparisonRows.map((row, idx) => (
            <tr
              key={row.field}
              className={`
                ${idx % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}
                ${row.hasDiscrepancy ? "bg-amber-50/60" : ""}
              `}
            >
              <td className="px-4 py-2.5 font-medium text-neutral-800 border-b border-neutral-100">
                {row.field}
                {row.hasDiscrepancy && (
                  <span
                    className="ml-1.5 text-amber-600 text-xs"
                    title="Discrepancy detected"
                  >
                    ⚠
                  </span>
                )}
              </td>
              {docIds.map((id) => (
                <td
                  key={id}
                  className="px-4 py-2.5 text-neutral-600 border-b border-neutral-100"
                >
                  {row.values[id] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
