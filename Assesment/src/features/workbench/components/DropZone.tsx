import { useCallback, useRef, useState, type DragEvent } from "react";
import { useDocuments } from "../hook/useDocuments";

const DropZone = () => {
  const { handleFiles } = useDocuments();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles],
  );

  const onBrowse = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFiles(e.target.files);
        e.target.value = "";
      }
    },
    [handleFiles],
  );

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`
        border-2 border-dashed rounded-lg px-6 py-10 text-center cursor-pointer
        transition-all duration-200 ease-in-out
        ${
          isDragging
            ? "border-neutral-400 bg-neutral-100"
            : "border-neutral-300 bg-white hover:border-neutral-400 hover:bg-neutral-50"
        }
      `}
      onClick={onBrowse}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf,.txt,.csv,.png,.jpg,.jpeg,.webp"
        className="hidden"
        onChange={onFileChange}
      />

      <div className="flex flex-col items-center gap-2">
        <svg
          className="w-8 h-8 text-neutral-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-[0.8125rem] text-neutral-600">
          <span className="font-medium text-neutral-800 underline underline-offset-2 decoration-neutral-300">
            Click to browse
          </span>{" "}
          or drag & drop files here
        </p>
        <p className="text-xs text-neutral-400">
          PDF, TXT, CSV, PNG, JPEG, WEBP — up to 10 MB each
        </p>
      </div>
    </div>
  );
};

export default DropZone;
