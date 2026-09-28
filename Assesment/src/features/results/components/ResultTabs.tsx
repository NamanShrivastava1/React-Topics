import type { ResultTab } from "../../../shared/types";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { setActiveTab } from "../state/results.slice";

const TABS: { key: ResultTab; label: string }[] = [
  { key: "summary", label: "Summary" },
  { key: "comparison", label: "Comparison" },
  { key: "discrepancies", label: "Discrepancies" },
  { key: "missing", label: "Missing Info" },
  { key: "keyValues", label: "Key Values" },
];

const ResultTabs = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((s) => s.results.activeTab);
  const result = useAppSelector((s) => s.results.result);

  if (!result) return null;

  // Show badge counts
  const counts: Record<ResultTab, number> = {
    summary: result.summary ? 1 : 0,
    comparison: result.comparisonRows.length,
    discrepancies: result.discrepancies.length,
    missing: result.missingItems.length,
    keyValues: result.keyValues.length,
  };

  return (
    <div className="border-b border-neutral-200">
      <nav className="flex gap-0 -mb-px overflow-x-auto">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          const count = counts[tab.key];

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => dispatch(setActiveTab(tab.key))}
              className={`
                shrink-0 px-4 py-2.5 text-[0.8125rem] font-medium border-b-2 transition-colors duration-150
                ${
                  isActive
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                }
              `}
            >
              {tab.label}
              {count > 0 && (
                <span
                  className={`
                    ml-1.5 text-[0.6875rem] px-1.5 py-0.5 rounded-full
                    ${isActive ? "bg-neutral-200 text-neutral-700" : "bg-neutral-100 text-neutral-500"}
                  `}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default ResultTabs;
