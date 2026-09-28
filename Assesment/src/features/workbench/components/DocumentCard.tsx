import type { UploadedDocument } from "../../../shared/types";

interface DocumentCardProps {
  doc: UploadedDocument;
  onRemove: (id: string) => void;
}

/** Format file size into a readable string */
function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Map format to a simple icon/label */
const FORMAT_LABELS: Record<string, string> = {
  pdf: "PDF",
  txt: "TXT",
  csv: "CSV",
  image: "IMG",
};

const DocumentCard = ({ doc, onRemove }: DocumentCardProps) => {
  const isError = doc.status === "error";

  return (
    <div
      className={`
        flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg border text-[0.8125rem]
        transition-colors duration-150
        ${isError ? "border-red-200 bg-red-50/60" : "border-neutral-200 bg-white hover:bg-neutral-50"}
      `}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className={`
            shrink-0 text-[0.6875rem] font-semibold px-2 py-0.5 rounded
            ${isError ? "bg-red-100 text-red-600" : "bg-neutral-100 text-neutral-500"}
          `}
        >
          {FORMAT_LABELS[doc.format] ?? doc.format.toUpperCase()}
        </span>

        <span className="truncate text-neutral-800" title={doc.name}>
          {doc.name}
        </span>

        <span className="shrink-0 text-xs text-neutral-400">
          {formatSize(doc.sizeBytes)}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {isError && (
          <span
            className="text-xs text-red-500 max-w-50 truncate"
            title={doc.errorMessage}
          >
            {doc.errorMessage}
          </span>
        )}

        <button
          type="button"
          onClick={() => onRemove(doc.id)}
          className="text-neutral-400 hover:text-red-500 transition-colors p-0.5"
          title="Remove document"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
