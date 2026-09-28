import { useCopyOutput } from "../hook/useCopyOutput";
import { useAppSelector } from "../../../shared/hooks";
import { useNavigate } from "react-router";

const AnalysisHeader = () => {
  const result = useAppSelector((s) => s.results.result);
  const { copy, copied } = useCopyOutput();
  const navigate = useNavigate();

  if (!result) return null;

  const docCount = Object.keys(result.documentNames).length;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-xs text-neutral-500 hover:text-neutral-800 mb-1.5 inline-flex items-center gap-1 transition-colors"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Workbench
        </button>
        <h1 className="text-[1.125rem] font-semibold text-neutral-900 tracking-tight">
          Analysis Results
        </h1>
        <p className="text-[0.8125rem] text-neutral-500 mt-0.5">
          {docCount} document{docCount !== 1 ? "s" : ""} analysed
          {" · "}
          {new Date(result.createdAt).toLocaleString()}
        </p>
      </div>

      <button
        type="button"
        onClick={copy}
        className="
          shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border
          border-neutral-200 bg-white text-[0.8125rem] text-neutral-600
          hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-150
        "
      >
        {copied ? (
          <>
            <svg
              className="w-4 h-4 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy Output
          </>
        )}
      </button>
    </div>
  );
};

export default AnalysisHeader;
