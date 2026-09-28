/** Supported document formats for upload */
export type DocumentFormat = "pdf" | "txt" | "csv" | "image";

/** Upload status of each document */
export type UploadStatus = "pending" | "uploading" | "done" | "error";

/** Represents a single uploaded document */
export interface UploadedDocument {
  id: string;
  file: File;
  name: string;
  format: DocumentFormat;
  sizeBytes: number;
  status: UploadStatus;
  /** Error message when status is "error" */
  errorMessage?: string;
  /** Timestamp of upload */
  addedAt: number;
}

/** A finding's classification */
export type FindingKind =
  | "fact"
  | "comparison"
  | "discrepancy"
  | "missing"
  | "interpretation";

/** One atomic finding produced by analysis */
export interface Finding {
  id: string;
  kind: FindingKind;
  label: string;
  value: string;
  /** IDs of documents that support this finding */
  sourceDocumentIds: string[];
}

/** A row in a comparison table */
export interface ComparisonRow {
  field: string;
  /** Key = document id, Value = extracted value for that field */
  values: Record<string, string>;
  hasDiscrepancy: boolean;
}

/** A missing-info item */
export interface MissingItem {
  id: string;
  field: string;
  documentId: string;
  documentName: string;
  reason: string;
}

/** A discrepancy item */
export interface Discrepancy {
  id: string;
  field: string;
  details: string;
  /** Values from different documents */
  conflictingValues: {
    documentId: string;
    documentName: string;
    value: string;
  }[];
}

/** The structured result coming back from the backend */
export interface AnalysisResult {
  id: string;
  prompt: string;
  /** Consolidated text summary */
  summary: string;
  /** Key-value pairs extracted across documents */
  keyValues: Finding[];
  /** Side-by-side comparison */
  comparisonRows: ComparisonRow[];
  /** Identified discrepancies */
  discrepancies: Discrepancy[];
  /** Missing information */
  missingItems: MissingItem[];
  /** Names of documents analysed, keyed by ID */
  documentNames: Record<string, string>;
  /** When the analysis was created */
  createdAt: string;
}

/** Possible analysis status */
export type AnalysisStatus = "idle" | "loading" | "success" | "error";

/** Tabs on the results page */
export type ResultTab =
  | "summary"
  | "comparison"
  | "discrepancies"
  | "missing"
  | "keyValues";

/** Accepted MIME types mapped to formats */
export const ACCEPTED_FORMATS: Record<string, DocumentFormat> = {
  "application/pdf": "pdf",
  "text/plain": "txt",
  "text/csv": "csv",
  "image/png": "image",
  "image/jpeg": "image",
  "image/webp": "image",
};

/** Max file size — 10 MB */
export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

/** Preset analysis prompts */
export const PRESET_PROMPTS: string[] = [
  "Compare the information across all uploaded documents.",
  "Identify inconsistencies between the documents.",
  "Extract key dates, obligations, financial values, and missing information.",
  "Compare the financial position of the companies represented.",
  "Highlight discrepancies in names, addresses, licence details, or revenue figures.",
];
