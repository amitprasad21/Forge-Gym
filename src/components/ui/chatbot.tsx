"use client";

import { useState, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  CHATBOT RESPONSES                                                  */
/* ------------------------------------------------------------------ */
function getBotReply(userText: string): string {
  const text = userText.toLowerCase();

  if (
    text.includes("price") ||
    text.includes("membership") ||
    text.includes("fees") ||
    text.includes("cost") ||
    text.includes("plan")
  ) {
    return "Our membership plans are:\n1 Month - Rs.2,000\n3 Months - Rs.4,500\n6 Months - Rs.7,000\n12 Months - Rs.12,000";
  }

  if (text.includes("trainer") || text.includes("coach")) {
    return "We have 1 expert trainer:\nYash Rathod - Head Strength Coach\n\nThe gym is owned and founded by Jeet Singh.";
  }

  if (
    text.includes("program") ||
    text.includes("workout") ||
    text.includes("training")
  ) {
    return "We offer:\n- Strength & Power\n- HIIT & Conditioning\n- Personal Training\n- Group Training\n- Boxing & Combat\n- Yoga & Mobility";
  }

  if (
    text.includes("timing") ||
    text.includes("open") ||
    text.includes("hours") ||
    text.includes("time")
  ) {
    return "Gym Hours:\nMonday - Saturday: 5:00 AM to 11:00 PM\nSunday: Closed";
  }

  if (
    text.includes("location") ||
    text.includes("address") ||
    text.includes("where")
  ) {
    return "We are located at:\nGround Floor, A57, Zeta I, Greater Noida, Uttar Pradesh 201310";
  }

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("number") ||
    text.includes("call")
  ) {
    return "You can contact us at:\nPhone: 7017799025\nEmail: Jeetutk750@gmail.com";
  }

  if (
    text.includes("book") ||
    text.includes("join") ||
    text.includes("trial")
  ) {
    return "You can book your free trial or join through the Contact page or directly on WhatsApp!";
  }

  if (text.includes("offer") || text.includes("discount")) {
    return "We often run joining offers and trial deals. Please contact us on WhatsApp for the latest offer.";
  }

  if (text.includes("owner") || text.includes("founder")) {
    return "The owner and founder of The Forge Gym is Jeet Singh.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hey! Welcome to The Forge Gym! Ask me about membership, trainer, timings, or programs.";
  }

  if (text.includes("bmi") || text.includes("calculator")) {
    return "You can calculate your BMI on our homepage! Just scroll down past the hero section.";
  }

  return "Sorry, I didn't understand that.\nYou can ask me about:\n- Membership\n- Trainer\n- Programs\n- Timings\n- Location\n- Contact";
}

/* ------------------------------------------------------------------ */
/*  ICONS (inline SVGs - no external deps needed)                      */
/* ------------------------------------------------------------------ */
function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */
interface ChatMessage {
  text: string;
  sender: "bot" | "user";
}

const QUICK_REPLIES = ["Membership", "Programs", "Timings", "Location"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hi! Welcome to The Forge Gym. How can I help you today?",
      sender: "bot",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const processMessage = (text: string) => {
    const reply = getBotReply(text);
    setMessages((prev) => [
      ...prev,
      { text, sender: "user" as const },
      { text: reply, sender: "bot" as const },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    processMessage(input);
    setInput("");
  };

  const handleQuickReply = (text: string) => {
    processMessage(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chatbox */}
      {open && (
        <div className="mb-2 w-[340px] max-w-[90vw] overflow-hidden rounded-2xl border border-white/10 bg-forge-black shadow-2xl shadow-black/50">
          {/* Header */}
          <div className="bg-forge-red px-4 py-3">
            <h3 className="text-lg font-bold text-white">The Forge Gym</h3>
            <p className="text-xs text-white/80">Your fitness assistant</p>
          </div>

          {/* Messages */}
          <div className="flex h-80 flex-col space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === "bot" ? "flex justify-start" : "flex justify-end"
                }
              >
                <div
                  className={
                    msg.sender === "bot"
                      ? "max-w-[80%] whitespace-pre-line rounded-2xl border border-white/5 bg-forge-gray-900 px-4 py-2 text-sm text-white"
                      : "max-w-[80%] whitespace-pre-line rounded-2xl bg-forge-red px-4 py-2 text-sm text-white"
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          <div className="flex flex-wrap gap-2 border-t border-white/5 px-3 py-2">
            {QUICK_REPLIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleQuickReply(item)}
                className="rounded-full border border-white/5 bg-forge-gray-900 px-3 py-1 text-xs text-white transition-colors duration-200 hover:bg-forge-red"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-white/5 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask about gym..."
              className="flex-1 rounded-xl border border-white/10 bg-forge-gray-900 px-4 py-2 text-sm text-white outline-none transition-colors duration-200 placeholder:text-forge-gray-500 focus:border-forge-red"
            />
            <button
              type="button"
              onClick={handleSend}
              className="rounded-xl bg-forge-red p-2 text-white transition-colors duration-200 hover:bg-forge-red-light"
            >
              <SendIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-forge-red shadow-lg shadow-forge-red/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-forge-red/30 active:scale-95"
      >
        {open ? (
          <XIcon className="h-6 w-6 text-white" />
        ) : (
          <MessageCircleIcon className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}
