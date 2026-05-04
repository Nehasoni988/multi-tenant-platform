import { useEffect } from "react";
import { useEmbedder } from "../../hooks/useEmbedded";
import { useVectorStore } from "../../hooks/useVectorStore";
import { useSemanticSearch } from "../../hooks/useSemanticSearch";
import type { Video as VideoTypes } from "../../types/channelTypes";

interface ComponentProps {
  video: VideoTypes;
  query: string;
  onAnswer: Function;
}

export const Video = ({ video, query, onAnswer }: ComponentProps) => {
  const { embedder } = useEmbedder();
  const { vectorStore } = useVectorStore(video, embedder);
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
    <div className="bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs">
      <iframe
        width="100%"
        height="315"
        src={video.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div>{video.title}</div>
    </div>
  );
};
