import { useRunAnalysis } from "../hook/useRunAnalysis";

const RunAnalysisButton = () => {
  const { run, isRunning, canRun, validationError } = useRunAnalysis();

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={run}
        disabled={!canRun}
        className={`
          w-full py-2.5 px-4 rounded-lg text-[0.8125rem] font-medium transition-all duration-200
          ${
            canRun
              ? "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 shadow-sm"
              : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
          }
        `}
      >
        {isRunning ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Analysing…
          </span>
        ) : (
          "Run Analysis"
        )}
      </button>

      {validationError && (
        <p className="text-xs text-red-600">{validationError}</p>
      )}
    </div>
  );
};

export default RunAnalysisButton;
