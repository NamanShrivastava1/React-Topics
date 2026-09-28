import DropZone from "../components/DropZone";
import DocumentList from "../components/DocumentList";
import PromptPanel from "../components/PromptPanel";
import RunAnalysisButton from "../components/RunAnalysisButton";
import { useAppSelector } from "../../../shared/hooks";

const WorkbenchPage = () => {
  const errorMsg = useAppSelector((s) => s.results.error);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-2xl mx-auto px-6 py-5">
          <h1 className="text-[1.125rem] font-semibold text-neutral-900 tracking-tight">
            Document Intelligence Workbench
          </h1>
          <p className="text-[0.8125rem] text-neutral-500 mt-1 leading-relaxed">
            Upload documents, provide an analysis instruction, and receive
            structured insights.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Step 1 – Upload */}
          <section>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white text-[0.625rem] font-semibold">
                1
              </span>
              <h2 className="text-[0.8125rem] font-medium text-neutral-700">
                Upload Documents
              </h2>
            </div>
            <DropZone />
            <div className="mt-3">
              <DocumentList />
            </div>
          </section>

          {/* Step 2 – Prompt */}
          <section>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white text-[0.625rem] font-semibold">
                2
              </span>
              <h2 className="text-[0.8125rem] font-medium text-neutral-700">
                Describe the Analysis
              </h2>
            </div>
            <PromptPanel />
          </section>

          {/* Step 3 – Run */}
          <section>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white text-[0.625rem] font-semibold">
                3
              </span>
              <h2 className="text-[0.8125rem] font-medium text-neutral-700">
                Run Analysis
              </h2>
            </div>
            <RunAnalysisButton />
          </section>
        </div>

        {/* Global error banner */}
        {errorMsg && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <p className="text-[0.8125rem] text-red-700">{errorMsg}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkbenchPage;
