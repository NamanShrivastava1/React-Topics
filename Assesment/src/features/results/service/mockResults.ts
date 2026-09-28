import type { AnalysisResult } from "../../../shared/types";

export const mockAnalysisResult: AnalysisResult = {
  id: "12",
  prompt:
    "Compare the financial position and revenue across all uploaded documents.",
  createdAt: new Date().toISOString(),

  summary:
    "The uploaded documents show several differences in reported financial values and company information. The financial statement reports higher revenue than the application form.",

  documentNames: {
    "doc-1": "company-application.pdf",
    "doc-2": "financial-statement.pdf",
    "doc-3": "company-details.csv",
  },

  keyValues: [
    {
      id: "kv-1",
      kind: "fact",
      label: "Company Revenue",
      value: "₹52,00,000",
      sourceDocumentIds: ["doc-2"],
    },
    {
      id: "kv-2",
      kind: "fact",
      label: "Reported Revenue",
      value: "₹45,00,000",
      sourceDocumentIds: ["doc-1"],
    },
  ],

  comparisonRows: [
    {
      field: "Revenue",
      values: {
        "doc-1": "₹45,00,000",
        "doc-2": "₹52,00,000",
      },
      hasDiscrepancy: true,
    },
    {
      field: "Profit",
      values: {
        "doc-1": "₹6,00,000",
        "doc-2": "₹8,00,000",
      },
      hasDiscrepancy: true,
    },
  ],

  discrepancies: [
    {
      id: "disc-1",
      field: "Revenue",
      details:
        "The revenue reported in the application form differs from the financial statement.",
      conflictingValues: [
        {
          documentId: "doc-1",
          documentName: "company-application.pdf",
          value: "₹45,00,000",
        },
        {
          documentId: "doc-2",
          documentName: "financial-statement.pdf",
          value: "₹52,00,000",
        },
      ],
    },
  ],

  missingItems: [
    {
      id: "missing-1",
      field: "Company registration number",
      documentId: "doc-1",
      documentName: "company-application.pdf",
      reason:
        "The registration number could not be found in the uploaded documents.",
    },
  ],
};
