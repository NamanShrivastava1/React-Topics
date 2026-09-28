import { describe, it, expect } from "vitest";
import {
  normalizeEvaluateResponse,
  isValidAnalysisResult,
  isFinding,
} from "../results.schemas";
import type { EvaluateApiResponse } from "../../../../shared/types";

describe("results.schemas normalization and validation", () => {
  const sampleApiResponse: EvaluateApiResponse["data"] = {
    sessionId: 101,
    prompt: "Compare documents for discrepancies",
    status: "completed",
    summary: "Found 1 discrepancy and 1 missing value.",
    model: "gpt-4o",
    processingTimeMs: 1250,
    allFindingsCount: 4,
    documentsAnalyzed: [
      { id: 1, name: "application.pdf", mimeType: "application/pdf", pageCount: 2 },
      { id: 2, name: "w2_form.pdf", mimeType: "application/pdf", pageCount: 1 },
    ],
    comparisonTable: [
      {
        field: "Annual Income",
        status: "discrepant",
        values: {
          "application.pdf": "$120,000",
          "w2_form.pdf": "$115,000",
        },
      },
      {
        field: "Applicant Name",
        status: "consistent",
        values: {
          "application.pdf": "John Doe",
          "w2_form.pdf": "John Doe",
        },
      },
    ],
    discrepancies: [
      {
        id: 1,
        result_id: 101,
        type: "discrepancy",
        severity: "high",
        classification: "discrepancy",
        createdAt: "2026-09-28T00:00:00Z",
        updatedAt: "2026-09-28T00:00:00Z",
        title: "Income Mismatch",
        description: "Application states $120k while W2 states $115k",
        evidences: [
          {
            id: 1,
            finding_id: 1,
            document_id: 1,
            chunk_id: 1,
            quote: "$120,000 declared income",
            page_number: 1,
            createdAt: "2026-09-28T00:00:00Z",
            updatedAt: "2026-09-28T00:00:00Z",
          },
          {
            id: 2,
            finding_id: 1,
            document_id: 2,
            chunk_id: 2,
            quote: "Box 1 Wages: $115,000",
            page_number: 1,
            createdAt: "2026-09-28T00:00:00Z",
            updatedAt: "2026-09-28T00:00:00Z",
          },
        ],
      },
    ],
    keyValues: [
      {
        id: 11,
        result_id: 101,
        type: "fact",
        severity: "low",
        classification: "extracted_fact",
        createdAt: "2026-09-28T00:00:00Z",
        updatedAt: "2026-09-28T00:00:00Z",
        title: "Stated Employer",
        description: "Acme Corp",
        evidences: [
          {
            id: 3,
            finding_id: 11,
            document_id: 1,
            chunk_id: 1,
            quote: "Employer: Acme Corp",
            page_number: 1,
            createdAt: "2026-09-28T00:00:00Z",
            updatedAt: "2026-09-28T00:00:00Z",
          },
        ],
      },
      {
        id: 12,
        result_id: 101,
        type: "interpretation",
        severity: "medium",
        classification: "ai_interpretation",
        createdAt: "2026-09-28T00:00:00Z",
        updatedAt: "2026-09-28T00:00:00Z",
        title: "Employment Stability",
        description: "High tenure indicated across documents",
        evidences: [
          {
            id: 4,
            finding_id: 12,
            document_id: 1,
            chunk_id: 1,
            quote: "Employed 5 years",
            page_number: 1,
            createdAt: "2026-09-28T00:00:00Z",
            updatedAt: "2026-09-28T00:00:00Z",
          },
          {
            id: 5,
            finding_id: 12,
            document_id: 2,
            chunk_id: 2,
            quote: "W2 history",
            page_number: 1,
            createdAt: "2026-09-28T00:00:00Z",
            updatedAt: "2026-09-28T00:00:00Z",
          },
        ],
      },
    ],
    missingInformation: [
      {
        id: "m1",
        field: "Signing Date",
        documentId: "2",
        documentName: "w2_form.pdf",
        reason: "Page 2 signature section was blank",
      },
    ],
    markdownOutput: "## Analysis Output\n\nDiscrepancy identified in Annual Income.",
  };

  it("should normalize evaluate backend API response correctly", () => {
    const result = normalizeEvaluateResponse(sampleApiResponse);

    expect(result.id).toBe("101");
    expect(result.prompt).toBe("Compare documents for discrepancies");
    expect(result.summary).toBe("Found 1 discrepancy and 1 missing value.");
    expect(result.documentNames["1"]).toBe("application.pdf");
    expect(result.documentNames["2"]).toBe("w2_form.pdf");

    // Comparison rows
    expect(result.comparisonRows).toHaveLength(2);
    expect(result.comparisonRows[0].field).toBe("Annual Income");
    expect(result.comparisonRows[0].hasDiscrepancy).toBe(true);
    expect(result.comparisonRows[0].values["1"]).toBe("$120,000");
    expect(result.comparisonRows[0].values["2"]).toBe("$115,000");
    expect(result.comparisonRows[1].hasDiscrepancy).toBe(false);

    // Discrepancies
    expect(result.discrepancies).toHaveLength(1);
    expect(result.discrepancies[0].id).toBe("1");
    expect(result.discrepancies[0].conflictingValues).toHaveLength(2);
    expect(result.discrepancies[0].conflictingValues[0].documentName).toBe(
      "application.pdf",
    );

    // Key values / findings classification
    expect(result.keyValues).toHaveLength(2);
    expect(result.keyValues[0].kind).toBe("fact");
    expect(result.keyValues[1].kind).toBe("interpretation");
    expect(result.keyValues[1].sourceDocumentIds).toEqual(["1", "2"]);

    // Missing information
    expect(result.missingItems).toHaveLength(1);
    expect(result.missingItems[0].field).toBe("Signing Date");
  });

  it("should validate a valid normalized analysis result", () => {
    const result = normalizeEvaluateResponse(sampleApiResponse);
    expect(isValidAnalysisResult(result)).toBe(true);
  });

  it("should reject invalid analysis result structures", () => {
    expect(isValidAnalysisResult(null)).toBe(false);
    expect(isValidAnalysisResult({})).toBe(false);
    expect(isValidAnalysisResult({ id: "123" })).toBe(false);
  });

  it("should validate individual findings correctly", () => {
    const validFinding = {
      id: "f1",
      kind: "fact" as const,
      label: "Name",
      value: "Alice",
      sourceDocumentIds: ["doc-1"],
    };
    expect(isFinding(validFinding)).toBe(true);

    const invalidFinding = {
      id: "f2",
      label: "Name without kind",
    };
    expect(isFinding(invalidFinding)).toBe(false);
  });
});
