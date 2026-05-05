import { useEffect } from "react";
import type { Pdf as PdfType } from "../../types/channelTypes";
import { useEmbedder } from "../../hooks/useEmbedded";
import { useVectorStore } from "../../hooks/useVectorStore";
import { useSemanticSearch } from "../../hooks/useSemanticSearch";

interface ComponentProps {
  pdf: PdfType;
  query: string;
  onAnswer: Function;
}

export const PDF = ({ pdf, query, onAnswer }: ComponentProps) => {
  // Custom Hooks
  const { embedder } = useEmbedder();
  const { vectorStore } = useVectorStore(pdf, embedder);
  const { answer, loading: searchLoading } = useSemanticSearch(
    query,
    embedder,
    vectorStore,
  );

  // Hooks
  useEffect(() => {
    if (answer && !searchLoading) {
      onAnswer(answer);
    }
  }, [answer]);

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
      {/* PDF Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{pdf.title}</p>
          <p className="text-xs text-gray-400">PDF Document</p>
        </div>
      </div>
      
      {/* Viewer */}
      <iframe 
        src={pdf.url}
        width="100%"
        height="600px"
        title="PDF Viewer"
        className="block"
      />
    </div>
  );
};
