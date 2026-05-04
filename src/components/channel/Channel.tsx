import { useEffect, useState } from "react";
import { PDF } from "../media/PDF";
import { Video } from "../media/Video";
import ChatBot, { type RcbUserSubmitTextEvent } from "react-chatbotify";
import type { Channel as ChannelType } from "../../types/channelTypes";

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
  const settings = {
    event: {
      rcbUserSubmitText: true,
    },
    emoji: {
      disabled: true,
    },
    fileAttachment: {
      disabled: true,
    },
  };

  // styles here
  const styles = {
    headerStyle: {
      background: "#2663EB",
      color: "#fff",
    },
    tooltipStyle: {
      display: "none",
    },
    sendButtonStyle: {
      background: "#2663EB",
      color: "#fff",
    },
    sendButtonHoveredStyle: {
      background: "#2663EB",
      color: "#fff",
    },
    chatButtonStyle: {
      background: "#2663EB",
      color: "#fff",
    },
    notificationIconStyle: {
      display: "none",
    },
    notificationBadgeStyle: {
      display: "none",
    },
  };

  const themes = [{ id: "minimal_midnight" }];

  // State
  const [activeTab, setActiveTab] = useState("pdf"); // pdf | videos
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
    <>
      <div className="flex-1 p-4">
        {channel && (
          <>
            {/* Inner Tabs */}
            <div className="flex border-b mb-4">
              <button
                onClick={() => setActiveTab("pdf")}
                className={`px-4 py-2 ${
                  activeTab === "pdf"
                    ? "border-b-2 border-blue-600 font-semibold"
                    : ""
                }`}
              >
                PDF
              </button>

              <button
                onClick={() => setActiveTab("videos")}
                className={`px-4 py-2 ${
                  activeTab === "videos"
                    ? "border-b-2 border-blue-600 font-semibold"
                    : ""
                }`}
              >
                Videos
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "pdf" && (
              <div>
                {channel.content.pdfs.map((pdf) => (
                  <PDF
                    pdf={pdf}
                    key={pdf.id}
                    onAnswer={onAnswer}
                    query={query}
                  />
                ))}
              </div>
            )}

            {activeTab === "videos" && (
              <div className="grid grid-cols-2 gap-8">
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
          </>
        )}

        <ChatBot
          themes={themes}
          flow={flow}
          settings={settings}
          styles={styles}
        />
      </div>
    </>
  );
};
