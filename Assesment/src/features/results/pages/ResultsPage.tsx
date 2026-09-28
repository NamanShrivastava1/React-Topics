import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { setLoading, setResult, setError } from "../state/results.slice";
import { getAnalysisById } from "../service/results.service";
import { isValidAnalysisResult } from "../service/results.schemas";
import AnalysisHeader from "../components/AnalysisHeader";
import ResultTabs from "../components/ResultTabs";
import SummaryCard from "../components/SummaryCard";
import ComparisonTable from "../components/ComparisonTable";
import DiscrepancyList from "../components/DiscrepancyList";
import MissingInfoReport from "../components/MissingInfoReport";
import KeyValueGrid from "../components/KeyValueGrid";
import SourceDrawer from "../components/SourceDrawer";

const ResultsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { result, status, error, activeTab } = useAppSelector((s) => s.results);

  // If we navigate directly to /analyses/:id without a result in store, fetch it
  useEffect(() => {
    if (!id) return;

    // If result is already loaded and matches, skip
    if (result && result.id === id) return;

    const fetchResult = async () => {
      dispatch(setLoading());
      try {
        const data = await getAnalysisById(id);
        if (!isValidAnalysisResult(data)) {
          dispatch(setError("Invalid response format from server."));
          return;
        }
        dispatch(setResult(data));
      } catch (err: unknown) {
        const msg =
          err instanceof Error ? err.message : "Failed to load analysis.";
        dispatch(setError(msg));
      }
    };

    fetchResult();
  }, [id, result, dispatch]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <svg
            className="animate-spin h-6 w-6 text-neutral-400 mx-auto mb-3"
            viewBox="0 0 24 24"
          >
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
          <p className="text-[0.8125rem] text-neutral-500">Loading analysis results…</p>
        </div>
      </div>
    );
  }

  // Error state
  if (status === "error") {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-[0.8125rem] text-red-600 mb-4">{error}</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-[0.8125rem] text-neutral-600 hover:text-neutral-900 underline underline-offset-2 decoration-neutral-300"
          >
            ← Back to Workbench
          </button>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[0.8125rem] text-neutral-500">No analysis found.</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-[0.8125rem] text-neutral-600 hover:text-neutral-900 underline underline-offset-2 decoration-neutral-300 mt-3 inline-block"
          >
            ← Back to Workbench
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <AnalysisHeader />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-6">
        <ResultTabs />

        <div className="py-5">
          {activeTab === "summary" && <SummaryCard />}
          {activeTab === "comparison" && <ComparisonTable />}
          {activeTab === "discrepancies" && <DiscrepancyList />}
          {activeTab === "missing" && <MissingInfoReport />}
          {activeTab === "keyValues" && <KeyValueGrid />}
        </div>
      </main>

      <SourceDrawer />
    </div>
  );
};

export default ResultsPage;
