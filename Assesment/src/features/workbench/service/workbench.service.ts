import axios from "axios";
import type {
  AnalysisResult,
  UploadApiResponse,
} from "../../../shared/types";
import { getAnalysisById } from "../../results/service/results.service";
import { mockAnalysisResult } from "../../results/service/mockResults";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

const USE_MOCK_API = import.meta.env.VITE_USE_MOCK === "true";

/**
 * Upload documents + prompt to the backend.
 * POST http://localhost:4000/api/upload
 * Body: FormData with "prompt" and "files"
 */
export async function uploadDocuments(
  files: File[],
  prompt: string,
): Promise<UploadApiResponse> {
  if (USE_MOCK_API) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      message:
        "Documents uploaded and ingested successfully. Ready for evaluation.",
      data: {
        sessionId: 1,
        prompt,
        status: "created",
        uploadedCount: files.length,
        processedCount: files.length,
        documents: files.map((f, i) => ({
          documentId: i + 1,
          originalName: f.name,
          mimeType: f.type || "text/plain",
          sizeBytes: f.size,
          status: "processed",
          pageCount: 1,
          chunkCount: 1,
          sha256: "mock-sha256",
        })),
      },
    };
  }

  const formData = new FormData();
  formData.append("prompt", prompt);
  files.forEach((file) => formData.append("files", file));

  const { data } = await axios.post<UploadApiResponse>(
    `${API_BASE}/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 120_000,
    },
  );

  return data;
}

/**
 * Submit documents + prompt to backend:
 * 1. POST /api/upload
 * 2. POST /api/evaluate/:sessionId
 */
export async function submitAnalysis(
  files: File[],
  prompt: string,
): Promise<AnalysisResult> {
  if (USE_MOCK_API) {
    await uploadDocuments(files, prompt);
    return {
      ...mockAnalysisResult,
      prompt,
    };
  }

  const uploadResponse = await uploadDocuments(files, prompt);

  if (!uploadResponse.success || !uploadResponse.data?.sessionId) {
    throw new Error(
      uploadResponse.message || "Document upload failed. No session created.",
    );
  }

  const sessionId = String(uploadResponse.data.sessionId);
  return getAnalysisById(sessionId);
}

/**
 * Fetch a previously computed analysis by session ID.
 */
export async function fetchAnalysis(id: string): Promise<AnalysisResult> {
  return getAnalysisById(id);
}
