import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Bot, User, LoaderCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const suggestions = [
  "What are Priyanka's strongest AI skills?",
  "Tell me about her projects",
  "What experience does she have?",
];

function PortfolioChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Priyanka's AI assistant. Ask me about her skills, projects, education, or professional experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesContainerRef = useRef(null);
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    const isNearBottom = distanceFromBottom < 100;

    if (isNearBottom) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (customQuestion = null) => {
    const question = customQuestion || input.trim();

    if (!question || loading) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/portfolio-chat`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          question,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "I couldn't find information about that.",
        },
      ]);
    } catch (error) {
      console.error("Portfolio AI error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting to my knowledge base right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="
        relative
        flex
        h-[520px]
        w-full
        max-w-[520px]
        flex-col
        overflow-hidden
        rounded-[2rem]
        border
        border-violet-500/30
        bg-[#090e1e]
        shadow-2xl
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-600/20 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-[90px]" />

      {/* HEADER */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="font-semibold text-white">Ask Prii </h3>

            <p className="text-xs text-gray-500">Powered by RAG + Qwen</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs text-green-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          AI Online
        </div>
      </div>

      {/* MESSAGES */}
      <div className="relative flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((message, index) => {
          const isUser = message.role === "user";

          return (
            <div
              key={index}
              className={`flex gap-3 ${
                isUser ? "justify-end" : "justify-start"
              }`}
            >
              {!isUser && (
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600/20 text-violet-400">
                  <Bot size={16} />
                </div>
              )}

              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-2 leading-6">{children}</p>
                  ),

                  ul: ({ children }) => (
                    <ul className="list-disc ml-5 space-y-1">{children}</ul>
                  ),

                  ol: ({ children }) => (
                    <ol className="list-decimal ml-5 space-y-1">{children}</ol>
                  ),

                  li: ({ children }) => (
                    <li className="leading-6">{children}</li>
                  ),

                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),

                  h1: ({ children }) => (
                    <h1 className="text-lg font-bold mb-2">{children}</h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="text-base font-bold mb-2">{children}</h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="font-semibold mb-1">{children}</h3>
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>

              {isUser && (
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <User size={16} />
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600/20">
              <Bot size={16} className="text-violet-400" />
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-gray-400">
              <LoaderCircle size={16} className="animate-spin" />
              Searching Priyanka's profile...
            </div>
          </div>
        )}

        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto"
        ></div>
      </div>

      {/* SUGGESTIONS */}
      {messages.length <= 1 && (
        <div className="px-5 pb-4">
          <p className="mb-3 text-xs text-gray-500">Try asking</p>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-2
                  text-left
                  text-xs
                  text-gray-400
                  transition
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-violet-300
                "
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* INPUT */}
      <div className="border-t border-white/10 bg-[#080c18] p-4">
        <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2 focus-within:border-violet-500/50">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Priyanka..."
            rows={1}
            className="
              max-h-24
              flex-1
              resize-none
              bg-transparent
              px-3
              py-2
              text-sm
              text-white
              outline-none
              placeholder:text-gray-600
            "
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="
              flex
              h-10
              w-10
              flex-shrink-0
              items-center
              justify-center
              rounded-lg
              bg-violet-600
              text-white
              transition
              hover:bg-violet-500
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <Send size={17} />
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-gray-600">
          Answers are generated from Priyanka's professional profile.
        </p>
      </div>
    </div>
  );
}

export default PortfolioChat;
