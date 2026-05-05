import { useEffect, useState } from "react";
import { PDF } from "../media/PDF";
import { Video } from "../media/Video";
import ChatBot, { type RcbUserSubmitTextEvent } from "react-chatbotify";
import type { Channel as ChannelType } from "../../types/channelTypes";
import {
  chatbotSettings,
  chatbotStyles,
  chatbotThemes,
} from "../../data/chatbot";

declare global {
  interface WindowEventMap {
    "rcb-user-submit-text": RcbUserSubmitTextEvent;
  }
}

interface ComponentProps {
  channel: ChannelType;
}

export const Channel = ({ channel }: ComponentProps) => {
  // Constants
  const tabs = [
    {
      id: "pdf",
      label: "PDFs",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "videos",
      label: "Videos",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  // State
  const [activeTab, setActiveTab] = useState("pdf");
  const [query, setQuery] = useState("");
  const [nextPath, setNextPath] = useState(crypto.randomUUID());
  const [flow, setFlow] = useState({
    start: {
      message: "Hey! How can I help you?",
      path: nextPath,
    },
  });

  // Hooks
  useEffect(() => {
    const handleUserSubmitText = (event: RcbUserSubmitTextEvent) => {
      setQuery(event.data.inputText);
    };
    window.addEventListener("rcb-user-submit-text", handleUserSubmitText);
    return () =>
      window.removeEventListener("rcb-user-submit-text", handleUserSubmitText);
  }, []);

  // Methods
  const onAnswer = (answer: string) => {
    const currentPath = nextPath;
    const nextPathToBe = crypto.randomUUID();
    setFlow((prev) => ({
      ...prev,
      [currentPath]: { message: answer, path: nextPathToBe },
    }));
    setNextPath(nextPathToBe);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Channel Header + Tabs */}
      <div className="border-b border-gray-200 px-5 pt-4">
        <h2 className="text-base font-semibold text-gray-900 mb-3">
          {channel.title}
        </h2>
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-all -mb-px ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {activeTab === "pdf" && (
          <div className="grid grid-cols-1 gap-6">
            {channel.content.pdfs.map((pdf) => (
              <PDF pdf={pdf} key={pdf.id} onAnswer={onAnswer} query={query} />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {channel.content.videos.map((video) => (
              <Video
                video={video}
                key={video.id}
                onAnswer={onAnswer}
                query={query}
              />
            ))}
          </div>
        )}
      </div>

      <ChatBot
        themes={chatbotThemes}
        flow={flow}
        settings={chatbotSettings}
        styles={chatbotStyles}
      />
    </div>
  );
};
