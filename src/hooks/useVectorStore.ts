import { useEffect, useState } from "react";
import type {
  Chunk,
  EmbeddedChunks,
  Pdf,
  Transcript,
  Video,
} from "../types/channelTypes";
import type { FeatureExtractionPipeline } from "@huggingface/transformers";

export const useVectorStore = (
  data: Video | Pdf | null,
  embedder: FeatureExtractionPipeline | null,
) => {
  const [vectorStore, setVectorStore] = useState<EmbeddedChunks[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!embedder || !data) return;

    let cancelled = false;

    const buildVectorStore = async () => {
      try {
        setLoading(true);

        // Extract payloa safely
        const payload: (Transcript | Chunk)[] =
          "duration" in data ? data.transcript : data.chunks;

        // Remove the not-available text
        const validChunks = payload.filter((item) => item.text);

        const embedded = await Promise.all(
          validChunks.map(async (chunk) => {
            const output = await embedder(chunk.text, {
              pooling: "mean",
              normalize: true,
            });

            return {
              id: chunk.id,
              text: chunk.text,
              embedding: Array.from(output.data),
            };
          }),
        );

        if (!cancelled) {
          setVectorStore(embedded);
        }
      } catch (error) {
        console.error("Vector store error:", error);
      } finally {
        setLoading(false);
      }
    };

    buildVectorStore();

    return () => {
      cancelled = true;
    };
  }, [data, embedder]);

  return {
    vectorStore,
    loading,
  };
};
