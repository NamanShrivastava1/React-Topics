import axios from "axios";
import type { AnalysisResult } from "../../../shared/types";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001/api";

/**
 * Fetch an analysis result by its ID.
 */
export async function getAnalysisById(id: string): Promise<AnalysisResult> {
  const { data } = await axios.get<AnalysisResult>(
    `${API_BASE}/analyses/${id}`,
    { timeout: 30_000 },
  );
  return data;
}
