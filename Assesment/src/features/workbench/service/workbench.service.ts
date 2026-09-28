import axios from "axios";
import type { AnalysisResult } from "../../../shared/types";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001/api";

/**
 * Submit documents + prompt to the backend for analysis.
 * Sends as multipart/form-data.
 */
export async function submitAnalysis(
  files: File[],
  prompt: string,
): Promise<AnalysisResult> {
  const formData = new FormData();
  files.forEach((file) => formData.append("documents", file));
  formData.append("prompt", prompt);

  const { data } = await axios.post<AnalysisResult>(
    `${API_BASE}/analyses`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 120_000,
    },
  );

  return data;
}

/**
 * Fetch a previously computed analysis by ID.
 */
export async function fetchAnalysis(id: string): Promise<AnalysisResult> {
  const { data } = await axios.get<AnalysisResult>(
    `${API_BASE}/analyses/${id}`,
    { timeout: 30_000 },
  );
  return data;
}
