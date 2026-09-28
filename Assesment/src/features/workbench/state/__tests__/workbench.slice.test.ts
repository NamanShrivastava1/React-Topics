import { describe, it, expect } from "vitest";
import workbenchReducer, {
  addDocuments,
  removeDocument,
  setDocumentStatus,
  setPrompt,
  clearWorkbench,
} from "../workbench.slice";
import type { UploadedDocument } from "../../../../shared/types";

describe("workbenchSlice reducer", () => {
  const initial = {
    documents: [],
    prompt: "",
  };

  const sampleDoc: UploadedDocument = {
    id: "doc-1",
    file: new File(["dummy content"], "test.pdf", { type: "application/pdf" }),
    name: "test.pdf",
    format: "pdf",
    sizeBytes: 1024,
    status: "pending",
    addedAt: Date.now(),
  };

  it("should handle adding documents", () => {
    const next = workbenchReducer(initial, addDocuments([sampleDoc]));
    expect(next.documents).toHaveLength(1);
    expect(next.documents[0].name).toBe("test.pdf");
  });

  it("should handle removing documents", () => {
    const stateWithDoc = {
      documents: [sampleDoc],
      prompt: "test prompt",
    };
    const next = workbenchReducer(stateWithDoc, removeDocument("doc-1"));
    expect(next.documents).toHaveLength(0);
  });

  it("should handle updating document status", () => {
    const stateWithDoc = {
      documents: [sampleDoc],
      prompt: "",
    };
    const next = workbenchReducer(
      stateWithDoc,
      setDocumentStatus({
        id: "doc-1",
        status: "error",
        errorMessage: "Upload failed",
      }),
    );
    expect(next.documents[0].status).toBe("error");
    expect(next.documents[0].errorMessage).toBe("Upload failed");
  });

  it("should handle setting prompt and clearing workbench", () => {
    const stateWithPrompt = workbenchReducer(initial, setPrompt("Analyze discrepancies"));
    expect(stateWithPrompt.prompt).toBe("Analyze discrepancies");

    const stateCleared = workbenchReducer(stateWithPrompt, clearWorkbench());
    expect(stateCleared.prompt).toBe("");
    expect(stateCleared.documents).toEqual([]);
  });
});
