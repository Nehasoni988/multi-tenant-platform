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
  const { embedder } = useEmbedder();
  const { vectorStore } = useVectorStore(pdf, embedder);
  const { answer, loading: searchLoading } = useSemanticSearch(
    query,
    embedder,
    vectorStore,
  );

  useEffect(() => {
    if (answer && !searchLoading) {
      onAnswer(answer);
    }
  }, [answer]);

  return (
    <>
      <div>{pdf.title}</div>

      {/* 📄 PDF Viewer */}
      <iframe
        src={pdf.url}
        width="100%"
        height="600px"
        title="PDF Viewer"
        className="mt-5"
      />
    </>
  );
};
