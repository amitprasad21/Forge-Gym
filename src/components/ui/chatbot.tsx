"use client";

import { useState, useEffect, useRef } from "react";
import { MEMBERSHIP_PLANS, CONTACT_INFO } from "@/constants/data";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */
interface ChatMessage {
  text: string;
  sender: "bot" | "user";
  /** If set, render plan selection buttons instead of plain text */
  showPlans?: boolean;
  /** If set, bot is waiting for the user's name before redirect */
  awaitingName?: boolean;
}

interface SelectedPlan {
  name: string;
  price: string;
  period: string;
}

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */
function getWhatsAppUrl(userName: string, plan: SelectedPlan) {
  const msg = encodeURIComponent(
    `Hi! My name is ${userName}. I'm interested in the *${plan.name}* membership plan (Rs.${plan.price}/${plan.period}) at The Forge Gym. Could you share more details and help me get started?`
  );
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`;
}

function getBotReply(userText: string): { text: string; showPlans?: boolean } {
  const text = userText.toLowerCase();

  if (
    text.includes("price") ||
    text.includes("membership") ||
    text.includes("fees") ||
    text.includes("cost") ||
    text.includes("plan")
  ) {
    return {
      text: "Our membership plans are:\n1 Month - Rs.2,000\n3 Months - Rs.4,500\n6 Months - Rs.7,000\n12 Months - Rs.12,000\n\nTap a plan below to get started:",
      showPlans: true,
    };
  }

  if (text.includes("trainer") || text.includes("coach")) {
    return { text: "We have 1 expert trainer:\nYash Rathod - Head Strength Coach\n\nThe gym is owned and founded by Jeet Singh." };
  }

  if (text.includes("program") || text.includes("workout") || text.includes("training")) {
    return { text: "We offer:\n- Strength & Power\n- HIIT & Conditioning\n- Personal Training\n- Group Training\n- Boxing & Combat\n- Yoga & Mobility" };
  }

  if (text.includes("timing") || text.includes("open") || text.includes("hours") || text.includes("time")) {
    return { text: "Gym Hours:\nMonday - Saturday: 5:00 AM to 11:00 PM\nSunday: Closed" };
  }

  if (text.includes("location") || text.includes("address") || text.includes("where")) {
    return { text: "We are located at:\nGround Floor, A57, Zeta I, Greater Noida, Uttar Pradesh 201310" };
  }

  if (text.includes("contact") || text.includes("phone") || text.includes("number") || text.includes("call")) {
    return { text: "You can contact us at:\nPhone: 7017799025\nEmail: Jeetutk750@gmail.com" };
  }

  if (text.includes("book") || text.includes("join") || text.includes("trial")) {
    return { text: "You can book your free trial or join through the Contact page or directly on WhatsApp!" };
  }

  if (text.includes("offer") || text.includes("discount")) {
    return { text: "We often run joining offers and trial deals. Please contact us on WhatsApp for the latest offer." };
  }

  if (text.includes("owner") || text.includes("founder")) {
    return { text: "The owner and founder of The Forge Gym is Jeet Singh." };
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return { text: "Hey! Welcome to The Forge Gym! Ask me about membership, trainer, timings, or programs." };
  }

  if (text.includes("bmi") || text.includes("calculator")) {
    return { text: "You can calculate your BMI on our homepage! Just scroll down past the hero section." };
  }

  return { text: "Sorry, I didn't understand that.\nYou can ask me about:\n- Membership\n- Trainer\n- Programs\n- Timings\n- Location\n- Contact" };
}

/* ------------------------------------------------------------------ */
/*  ICONS                                                              */
/* ------------------------------------------------------------------ */
function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */
const QUICK_REPLIES = ["Membership", "Programs", "Timings", "Location"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hi! Welcome to The Forge Gym. How can I help you today?", sender: "bot" },
  ]);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [awaitingName, setAwaitingName] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* -- Handle plan selection -- */
  const handlePlanSelect = (plan: typeof MEMBERSHIP_PLANS[number]) => {
    setSelectedPlan({ name: plan.name, price: plan.price, period: plan.period });
    setAwaitingName(true);
    setMessages((prev) => [
      ...prev,
      { text: plan.name, sender: "user" as const },
      {
        text: `Great choice! You selected the *${plan.name}* plan (Rs.${plan.price}/${plan.period}).\n\nPlease type your name so we can connect you on WhatsApp:`,
        sender: "bot" as const,
        awaitingName: true,
      },
    ]);
  };

  /* -- Handle normal send / name collection -- */
  const handleSend = () => {
    if (!input.trim()) return;

    if (awaitingName && selectedPlan) {
      const userName = input.trim();
      const url = getWhatsAppUrl(userName, selectedPlan);

      setMessages((prev) => [
        ...prev,
        { text: userName, sender: "user" as const },
        {
          text: `Thanks ${userName}! Redirecting you to WhatsApp now...`,
          sender: "bot" as const,
        },
      ]);

      setAwaitingName(false);
      setSelectedPlan(null);
      setInput("");

      // Small delay so user sees the confirmation message
      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 600);
      return;
    }

    const { text: reply, showPlans } = getBotReply(input);
    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user" as const },
      { text: reply, sender: "bot" as const, showPlans },
    ]);
    setInput("");
  };

  const handleQuickReply = (text: string) => {
    const { text: reply, showPlans } = getBotReply(text);
    setMessages((prev) => [
      ...prev,
      { text, sender: "user" as const },
      { text: reply, sender: "bot" as const, showPlans },
    ]);
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
              <div key={i}>
                <div
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

                {/* Plan selection buttons after membership reply */}
                {msg.showPlans && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {MEMBERSHIP_PLANS.map((plan) => (
                      <button
                        key={plan.name}
                        type="button"
                        onClick={() => handlePlanSelect(plan)}
                        className="flex items-center gap-1.5 rounded-xl border border-forge-red/30 bg-forge-red/10 px-3 py-1.5 text-xs font-semibold text-forge-red transition-all duration-200 hover:bg-forge-red hover:text-white"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        {plan.name} - Rs.{plan.price}
                      </button>
                    ))}
                  </div>
                )}
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
              placeholder={awaitingName ? "Type your name..." : "Ask about gym..."}
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
