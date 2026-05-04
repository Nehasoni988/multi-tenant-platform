import type { FeatureExtractionPipeline } from "@huggingface/transformers";
import type { EmbeddedChunks } from "../types/channelTypes";
import { useEffect, useState } from "react";

export const useSemanticSearch = (
  query: string,
  embedder: FeatureExtractionPipeline | null,
  vectorStore: EmbeddedChunks[],
) => {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || !embedder || !vectorStore?.length) return;

    let cancelled = false;

    const search = async () => {
      try {
        setLoading(true);

        const output = await embedder(query, {
          pooling: "mean",
          normalize: true,
        });

        const queryEmbedding = Array.from(output.data);

        const topChunks = vectorStore
          .map((chunk) => ({
            ...chunk,
            score: cosineSimilarity(chunk.embedding, queryEmbedding),
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 3);

        if (!cancelled) {
          setAnswer(topChunks.map((c) => c.text).join("\n\n"));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    search();

    return () => {
      cancelled = true;
    };
  }, [query, vectorStore, embedder]);

  //   Methods
  const cosineSimilarity = (a: number[], b: number[]) => {
    let dot = 0,
      magA = 0,
      magB = 0;

    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      magA += a[i] * a[i];
      magB += b[i] * b[i];
    }

    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
  };

  return {
    answer,
    loading,
  };
};
