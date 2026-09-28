import type {
  AnalysisResult,
  ComparisonRow,
  Discrepancy,
  Finding,
  MissingItem,
} from "../../../shared/types";

/**
 * Zod-like runtime validation for the analysis response shape.
 * Ensures the backend response matches our expected structure before we trust it.
 */
export function isValidAnalysisResult(data: unknown): data is AnalysisResult {
  if (!data || typeof data !== "object") return false;
  const obj = data as Record<string, unknown>;

  if (typeof obj.id !== "string") return false;
  if (typeof obj.prompt !== "string") return false;
  if (typeof obj.summary !== "string") return false;
  if (typeof obj.createdAt !== "string") return false;

  if (!Array.isArray(obj.keyValues)) return false;
  if (!Array.isArray(obj.comparisonRows)) return false;
  if (!Array.isArray(obj.discrepancies)) return false;
  if (!Array.isArray(obj.missingItems)) return false;
  if (!obj.documentNames || typeof obj.documentNames !== "object") return false;

  return true;
}

/** Type guard for Finding */
export function isFinding(item: unknown): item is Finding {
  if (!item || typeof item !== "object") return false;
  const obj = item as Record<string, unknown>;
  return (
    typeof obj.id === "string" &&
    typeof obj.kind === "string" &&
    typeof obj.label === "string" &&
    typeof obj.value === "string" &&
    Array.isArray(obj.sourceDocumentIds)
  );
}

/** Type guard for ComparisonRow */
export function isComparisonRow(item: unknown): item is ComparisonRow {
  if (!item || typeof item !== "object") return false;
  const obj = item as Record<string, unknown>;
  return (
    typeof obj.field === "string" &&
    typeof obj.values === "object" &&
    typeof obj.hasDiscrepancy === "boolean"
  );
}

/** Type guard for Discrepancy */
export function isDiscrepancy(item: unknown): item is Discrepancy {
  if (!item || typeof item !== "object") return false;
  const obj = item as Record<string, unknown>;
  return (
    typeof obj.id === "string" &&
    typeof obj.field === "string" &&
    typeof obj.details === "string" &&
    Array.isArray(obj.conflictingValues)
  );
}

/** Type guard for MissingItem */
export function isMissingItem(item: unknown): item is MissingItem {
  if (!item || typeof item !== "object") return false;
  const obj = item as Record<string, unknown>;
  return (
    typeof obj.id === "string" &&
    typeof obj.field === "string" &&
    typeof obj.documentId === "string" &&
    typeof obj.reason === "string"
  );
}
