import { useDocuments } from "../hook/useDocuments";
import DocumentCard from "./DocumentCard";

const DocumentList = () => {
  const { documents, remove } = useDocuments();

  if (documents.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-neutral-500 font-medium">
        {documents.length} file{documents.length !== 1 ? "s" : ""} added
      </p>

      <div className="space-y-1.5">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} onRemove={remove} />
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
