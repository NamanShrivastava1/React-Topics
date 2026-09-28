import { useAppSelector } from "../../../shared/hooks";

const SummaryCard = () => {
  const result = useAppSelector((s) => s.results.result);

  if (!result) return null;

  return (
    <div className="space-y-5">
      {/* Prompt used */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3">
        <p className="text-[0.6875rem] text-neutral-500 uppercase tracking-wider font-medium mb-1">
          Analysis Instruction
        </p>
        <p className="text-[0.8125rem] text-neutral-700 leading-relaxed">{result.prompt}</p>
      </div>

      {/* Consolidated summary */}
      <div>
        <h3 className="text-[0.8125rem] font-medium text-neutral-800 mb-2">
          Consolidated Summary
        </h3>
        <div className="text-[0.8125rem] text-neutral-600 leading-relaxed whitespace-pre-wrap">
          {result.summary}
        </div>
      </div>

      {/* Documents analysed */}
      <div>
        <h3 className="text-[0.8125rem] font-medium text-neutral-800 mb-2">
          Documents Analysed
        </h3>
        <ul className="space-y-1.5">
          {Object.entries(result.documentNames).map(([id, name]) => (
            <li
              key={id}
              className="text-[0.8125rem] text-neutral-600 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryCard;
