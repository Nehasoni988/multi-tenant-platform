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
  // Custom Hooks
  const { embedder } = useEmbedder();
  const { vectorStore } = useVectorStore(video, embedder);
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
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Video embed */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video info */}
      <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{video.title}</p>
          <p className="text-xs text-gray-400">Video</p>
        </div>
      </div>
    </div>
  );
};
