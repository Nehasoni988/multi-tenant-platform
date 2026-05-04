import {
  pipeline,
  type FeatureExtractionPipeline,
} from "@huggingface/transformers";
import { useEffect, useState } from "react";

export const useEmbedder = () => {
  const [embedder, setEmbedder] = useState<FeatureExtractionPipeline | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadModel = async () => {
      try {
        setLoading(true);

        const extractor = await pipeline(
          "feature-extraction",
          "mixedbread-ai/mxbai-embed-xsmall-v1",
        );

        if (mounted) {
          setEmbedder(() => extractor);
        }
      } catch (err) {
        console.error("Failed to load embedder:", err);
      } finally {
        setLoading(false);
      }
    };

    loadModel();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    embedder,
    loading,
  };
};
