import type { AnalysisResult, EvaluateApiResponse } from "../../../shared/types";
import { normalizeEvaluateResponse } from "./results.schemas";

export const rawMockEvaluateResponse: EvaluateApiResponse["data"] = {
  sessionId: 1,
  prompt:
    "Identify inconsistencies and discrepancies between the application form and supporting documents.",
  status: "completed",
  model: "mock-ai-v1 (deterministic-text-analysis)",
  processingTimeMs: 7,
  documentsAnalyzed: [
    {
      id: 1,
      name: "0b7459f1-4edb-4344-8f67-d755949e9225.txt",
      mimeType: "text/plain",
      pageCount: 1,
    },
    {
      id: 2,
      name: "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt",
      mimeType: "text/plain",
      pageCount: 1,
    },
    {
      id: 3,
      name: "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv",
      mimeType: "text/csv",
      pageCount: 1,
    },
  ],
  summary: `## Analysis Summary

**Documents analyzed:** 3 ("0b7459f1-4edb-4344-8f67-d755949e9225.txt", "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt", "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv")
**Analysis prompt:** "Identify inconsistencies and discrepancies between the application form and supporting documents."
**Total findings:** 35

### Extracted Information
Found 20 categories of structured data across the documents.

### Cross-Document Comparison
Compared 7 data fields across documents. 1 fields are consistent, 6 show differences.

### ⚠️ Discrepancies Detected
Found 8 discrepancies between documents:
- Discrepancy in Names between "0b7459f1-4edb-4344-8f67-d755949e9225.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in Names between "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in License Numbers between "0b7459f1-4edb-4344-8f67-d755949e9225.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in License Numbers between "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in Revenue Figures between "0b7459f1-4edb-4344-8f67-d755949e9225.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in Revenue Figures between "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in Monetary Values between "0b7459f1-4edb-4344-8f67-d755949e9225.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"
- Discrepancy in Monetary Values between "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"

---
*Analysis performed by mock-ai-v1 (deterministic text analysis engine). Findings classified as "extracted_fact" are directly sourced from document content. Findings classified as "ai_interpretation" involve analytical inference.*`,
  comparisonTable: [
    {
      field: "Dates",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt":
          "OR 97477; December 31, 2025; March 15, 2026; November 30, 2028; April 20, 2026; April 30, 2026",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt":
          "OR 97477; December 31, 2025; March 15, 2026; November 30, 2028; April 20, 2026; April 30, 2026",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv":
          "DE 19801; January 15 2025; February 10 2026; October 31 2027",
      },
      status: "discrepant",
    },
    {
      field: "Monetary Values",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt":
          "$14,500,000; $2,100,000; $11,200,000; $3,400,000; $1,000,000",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt":
          "$14,500,000; $2,100,000; $11,200,000; $3,400,000; $1,000,000",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv":
          "$9,; 000 USD; $1,; $7,; $2,",
      },
      status: "discrepant",
    },
    {
      field: "Emails",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt":
          "compliance@alphalogistics.com",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt":
          "compliance@alphalogistics.com",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv":
          "operations@betafreight.com",
      },
      status: "discrepant",
    },
    {
      field: "Percentages",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt": "18.5%",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt": "18.5%",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv": "—",
      },
      status: "partial",
    },
    {
      field: "Names",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt": "Dr. Robert Vance",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt": "Dr. Robert Vance",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv": "Ms. Sarah Connor",
      },
      status: "discrepant",
    },
    {
      field: "License Numbers",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt":
          "Registration No: REG-2019-88421; Registered; regulatory",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt":
          "Registration No: REG-2019-88421; Registered; regulatory",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv":
          "Registered; Registration No; REG-2021-33109",
      },
      status: "discrepant",
    },
    {
      field: "Revenue Figures",
      values: {
        "0b7459f1-4edb-4344-8f67-d755949e9225.txt":
          "Revenue: $14,500,000; Profit: $2,100,000; EBITDA: $3,400,000",
        "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt":
          "Revenue: $14,500,000; Profit: $2,100,000; EBITDA: $3,400,000",
        "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv":
          "Revenue,; Profit,; EBITDA,",
      },
      status: "discrepant",
    },
  ],
  discrepancies: [
    {
      id: 28,
      result_id: 1,
      type: "discrepancy",
      title:
        'Discrepancy in Names between "0b7459f1-4edb-4344-8f67-d755949e9225.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"',
      description:
        'Only in "0b7459f1-4edb-4344-8f67-d755949e9225.txt": dr. robert vance. Only in "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv": ms. sarah connor',
      classification: "ai_interpretation",
      severity: "warning",
      createdAt: "2026-09-28T13:10:09.000Z",
      updatedAt: "2026-09-28T13:10:09.000Z",
      evidences: [
        {
          id: 116,
          finding_id: 28,
          document_id: 3,
          chunk_id: 3,
          quote:
            "5: Metric: Director, Fiscal Year 2024: Ms. Sarah Connor, Fiscal Year 2025: Ms. Sarah Connor, No",
          page_number: null,
          createdAt: "2026-09-28T13:10:09.000Z",
          updatedAt: "2026-09-28T13:10:09.000Z",
          document: {
            id: 3,
            original_name: "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv",
            mime_type: "text/csv",
          },
        },
        {
          id: 115,
          finding_id: 28,
          document_id: 1,
          chunk_id: 1,
          quote:
            "cs.com\nPhone: +1 555-019-2834\nDirector: Dr. Robert Vance\n\nFINANCIAL PERFORMANCE (FY 2025):\n- Ann",
          page_number: null,
          createdAt: "2026-09-28T13:10:09.000Z",
          updatedAt: "2026-09-28T13:10:09.000Z",
          document: {
            id: 1,
            original_name: "0b7459f1-4edb-4344-8f67-d755949e9225.txt",
            mime_type: "text/plain",
          },
        },
      ],
    },
    {
      id: 29,
      result_id: 1,
      type: "discrepancy",
      title:
        'Discrepancy in Names between "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt" and "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv"',
      description:
        'Only in "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt": dr. robert vance. Only in "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv": ms. sarah connor',
      classification: "ai_interpretation",
      severity: "warning",
      createdAt: "2026-09-28T13:10:09.000Z",
      updatedAt: "2026-09-28T13:10:09.000Z",
      evidences: [
        {
          id: 118,
          finding_id: 29,
          document_id: 3,
          chunk_id: 3,
          quote:
            "5: Metric: Director, Fiscal Year 2024: Ms. Sarah Connor, Fiscal Year 2025: Ms. Sarah Connor, No",
          page_number: null,
          createdAt: "2026-09-28T13:10:09.000Z",
          updatedAt: "2026-09-28T13:10:09.000Z",
          document: {
            id: 3,
            original_name: "7ab0113f-16ad-4919-baaa-24f61faad9cd.csv",
            mime_type: "text/csv",
          },
        },
        {
          id: 117,
          finding_id: 29,
          document_id: 2,
          chunk_id: 2,
          quote:
            "cs.com\nPhone: +1 555-019-2834\nDirector: Dr. Robert Vance\n\nFINANCIAL PERFORMANCE (FY 2025):\n- Ann",
          page_number: null,
          createdAt: "2026-09-28T13:10:09.000Z",
          updatedAt: "2026-09-28T13:10:09.000Z",
          document: {
            id: 2,
            original_name: "6b8966cb-1c00-43be-b8b4-b9d45a984069.txt",
            mime_type: "text/plain",
          },
        },
      ],
    },
  ],
  keyValues: [
    {
      id: 1,
      result_id: 1,
      type: "key_value",
      title: 'Dates found in "0b7459f1-4edb-4344-8f67-d755949e9225.txt"',
      description:
        "Extracted 6 dates: OR 97477, December 31, 2025, March 15, 2026, November 30, 2028, April 20, 2026, April 30, 2026",
      classification: "extracted_fact",
      severity: "info",
      createdAt: "2026-09-28T13:10:09.000Z",
      updatedAt: "2026-09-28T13:10:09.000Z",
      evidences: [
        {
          id: 1,
          finding_id: 1,
          document_id: 1,
          chunk_id: 1,
          quote:
            "ss: 742 Evergreen Terrace, Springfield, OR 97477\nContact Email: compliance@alphalogistic",
          page_number: null,
          createdAt: "2026-09-28T13:10:09.000Z",
          updatedAt: "2026-09-28T13:10:09.000Z",
          document: {
            id: 1,
            original_name: "0b7459f1-4edb-4344-8f67-d755949e9225.txt",
            mime_type: "text/plain",
          },
        },
      ],
    },
    {
      id: 2,
      result_id: 1,
      type: "key_value",
      title: 'Monetary Values found in "0b7459f1-4edb-4344-8f67-d755949e9225.txt"',
      description:
        "Extracted 5 monetary values: $14,500,000, $2,100,000, $11,200,000, $3,400,000, $1,000,000",
      classification: "extracted_fact",
      severity: "info",
      createdAt: "2026-09-28T13:10:09.000Z",
      updatedAt: "2026-09-28T13:10:09.000Z",
      evidences: [
        {
          id: 7,
          finding_id: 2,
          document_id: 1,
          chunk_id: 1,
          quote:
            "ERFORMANCE (FY 2025):\n- Annual Revenue: $14,500,000 USD\n- Net Profit: $2,100,000 USD\n- Oper",
          page_number: null,
          createdAt: "2026-09-28T13:10:09.000Z",
          updatedAt: "2026-09-28T13:10:09.000Z",
          document: {
            id: 1,
            original_name: "0b7459f1-4edb-4344-8f67-d755949e9225.txt",
            mime_type: "text/plain",
          },
        },
      ],
    },
  ],
  missingInformation: [],
  allFindingsCount: 35,
};

export const mockAnalysisResult: AnalysisResult =
  normalizeEvaluateResponse(rawMockEvaluateResponse);
