"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MEMBERSHIP_PLANS, CONTACT_INFO } from "@/constants/data";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */
interface ChatMessage {
  text: string;
  sender: "bot" | "user";
  showPlans?: boolean;
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

/** Basic name validation — letters, spaces, dots, hyphens only, 2-50 chars */
function isValidName(name: string): boolean {
  const trimmed = name.trim();
  if (trimmed.length < 2 || trimmed.length > 50) return false;
  // Must contain at least 2 letter characters
  const letterCount = (trimmed.match(/[a-zA-Z\u0900-\u097F\u0980-\u09FF]/g) || []).length;
  if (letterCount < 2) return false;
  return true;
}

function getBotReply(userText: string): { text: string; showPlans?: boolean } {
  const text = userText.toLowerCase().trim();

  // Handle empty / very short input
  if (text.length === 0) {
    return { text: "It looks like you sent an empty message. Try asking about membership, programs, or timings!" };
  }

  // Greetings (check early — common entry point)
  if (/^(hi|hey|hello|hii+|hola|yo|sup|good\s?(morning|evening|afternoon|night))/.test(text)) {
    return { text: "Hey! Welcome to The Forge Gym! Ask me about membership, trainer, timings, or programs." };
  }

  // Thank you
  if (/thank|thanks|thx|thnx|thnks|ty/.test(text)) {
    return { text: "You're welcome! Is there anything else I can help you with?" };
  }

  // Bye / goodbye
  if (/^(bye|goodbye|see you|good\s?bye|later|cya)/.test(text)) {
    return { text: "Goodbye! See you at The Forge. Stay strong!" };
  }

  // Membership / pricing
  if (/price|membership|fees|cost|plan|package|rate|charge|amount|pay|rupee|rs\.?|how\s?much/.test(text)) {
    return {
      text: "Our membership plans are:\n1 Month - Rs.2,000\n3 Months - Rs.4,500\n6 Months - Rs.7,000\n12 Months - Rs.12,000\n\nTap a plan below to get started:",
      showPlans: true,
    };
  }

  // Trainer / coach
  if (/trainer|coach|instructor|staff/.test(text)) {
    return { text: "We have 2 expert trainers:\n1. Jeet Singh - Founder & Head Trainer\n2. Yash Rathod - Head Strength Coach" };
  }

  // Programs / workouts
  if (/program|workout|training|class|session|exercise|routine/.test(text)) {
    return { text: "We offer:\n- Strength & Power\n- HIIT & Conditioning\n- Personal Training\n- Group Training\n- Boxing & Combat\n- Yoga & Mobility" };
  }

  // Timings / hours
  if (/timing|open|hour|time|schedule|close|when/.test(text)) {
    return { text: "Gym Hours:\nMonday - Saturday: 5:00 AM to 11:00 PM\nSunday: Closed" };
  }

  // Location / address
  if (/location|address|where|direction|map|find|reach|route/.test(text)) {
    return { text: "We are located at:\nGround Floor, A57, Zeta I, Greater Noida, Uttar Pradesh 201310\n\nYou can search 'The Forge Gym Greater Noida' on Google Maps!" };
  }

  // Contact
  if (/contact|phone|number|call|whatsapp|email|mail/.test(text)) {
    return { text: "You can contact us at:\nPhone: 7017799025\nEmail: Jeetutk750@gmail.com\n\nOr just tap the green WhatsApp button below!" };
  }

  // Booking / joining / trial
  if (/book|join|trial|register|sign\s?up|enroll|start|begin|admission/.test(text)) {
    return {
      text: "Great! You can join by selecting a membership plan below, or book a free trial through our Contact page.\n\nHere are our plans:",
      showPlans: true,
    };
  }

  // Offers / discounts
  if (/offer|discount|deal|promo|coupon|sale|free/.test(text)) {
    return { text: "We often run joining offers and trial deals. Please contact us on WhatsApp for the latest offer!" };
  }

  // Owner / founder
  if (/owner|founder|who\s?(own|start|found|creat)/.test(text)) {
    return { text: "The owner and founder of The Forge Gym is Jeet Singh." };
  }

  // BMI / calculator
  if (/bmi|body\s?mass|calculator/.test(text)) {
    return { text: "You can calculate your BMI on our homepage! Just scroll down past the hero section." };
  }

  // Equipment / facility
  if (/equipment|facility|machine|gear|amenity|locker|shower|parking/.test(text)) {
    return { text: "We have a 10,000+ sq ft facility with:\n- Competition-grade Rogue & Hammer Strength equipment\n- Dedicated strength zones\n- Recovery & stretching area\n- Locker rooms\n\nVisit our Gallery page to see more!" };
  }

  // Age / requirement
  if (/age|requirement|eligib|minor|kid|child/.test(text)) {
    return { text: "Members must be at least 16 years old to join. Anyone under 18 needs parental consent. Contact us for more details!" };
  }

  // Diet / nutrition
  if (/diet|nutrition|food|meal|supplement|protein/.test(text)) {
    return { text: "Our 3-month plan and above include a nutrition consultation. Our trainer Yash Rathod also provides personalized meal plans. Ask us for details!" };
  }

  // Help
  if (/help|what\s?can|menu|option|feature/.test(text)) {
    return { text: "I can help you with:\n- Membership plans & pricing\n- Programs & workouts\n- Gym timings\n- Location & directions\n- Contact info\n- Trainer details\n- Facility & equipment\n\nJust type or tap a quick reply below!" };
  }

  // Fallback — friendlier with suggestions
  return { text: "I'm not sure I understood that. Try asking about:\n- Membership\n- Programs\n- Timings\n- Location\n- Trainer\n- Contact\n\nOr tap a quick reply below!" };
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
  const [nameAttempts, setNameAttempts] = useState(0);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const addMessages = useCallback((...msgs: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...msgs]);
  }, []);

  /* -- Handle plan selection -- */
  const handlePlanSelect = (plan: typeof MEMBERSHIP_PLANS[number]) => {
    // Prevent selecting another plan while already awaiting name
    if (awaitingName) {
      addMessages(
        { text: plan.name, sender: "user" },
        { text: `You already selected a plan. Please type your name first to continue, or type "cancel" to start over.`, sender: "bot" }
      );
      return;
    }

    setSelectedPlan({ name: plan.name, price: plan.price, period: plan.period });
    setAwaitingName(true);
    setNameAttempts(0);
    addMessages(
      { text: plan.name, sender: "user" },
      { text: `Great choice! You selected the ${plan.name} plan (Rs.${plan.price}/${plan.period}).\n\nPlease type your name so we can connect you on WhatsApp:`, sender: "bot" }
    );
  };

  /* -- Handle send -- */
  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Limit input length
    const safeInput = trimmed.slice(0, 200);

    if (awaitingName && selectedPlan) {
      // Check for cancel
      if (/^(cancel|back|reset|stop|no|nevermind|nvm)$/i.test(safeInput)) {
        setAwaitingName(false);
        setSelectedPlan(null);
        setNameAttempts(0);
        addMessages(
          { text: safeInput, sender: "user" },
          { text: "No problem! Let me know if you'd like to explore other plans or need any help.", sender: "bot" }
        );
        setInput("");
        return;
      }

      // Validate name
      if (!isValidName(safeInput)) {
        const attempts = nameAttempts + 1;
        setNameAttempts(attempts);

        if (attempts >= 3) {
          // Too many failed attempts — bail out gracefully
          setAwaitingName(false);
          setSelectedPlan(null);
          setNameAttempts(0);
          addMessages(
            { text: safeInput, sender: "user" },
            { text: "Seems like we're having trouble. No worries! You can contact us directly on WhatsApp by tapping the green button, or visit our Contact page.", sender: "bot" }
          );
        } else {
          addMessages(
            { text: safeInput, sender: "user" },
            { text: "Please enter a valid name (at least 2 letters). For example: Rahul, Priya, Amit Kumar", sender: "bot" }
          );
        }
        setInput("");
        return;
      }

      // Valid name — redirect
      const userName = safeInput;
      const url = getWhatsAppUrl(userName, selectedPlan);

      addMessages(
        { text: userName, sender: "user" },
        { text: `Thanks ${userName}! Redirecting you to WhatsApp now...`, sender: "bot" }
      );

      setAwaitingName(false);
      setSelectedPlan(null);
      setNameAttempts(0);
      setInput("");

      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 600);
      return;
    }

    // Normal message flow
    const { text: reply, showPlans } = getBotReply(safeInput);
    addMessages(
      { text: safeInput, sender: "user" },
      { text: reply, sender: "bot", showPlans }
    );
    setInput("");
  };

  const handleQuickReply = (text: string) => {
    // If awaiting name, don't process quick replies as normal messages
    if (awaitingName) {
      addMessages(
        { text, sender: "user" },
        { text: `Please type your name first to continue with the ${selectedPlan?.name} plan, or type "cancel" to start over.`, sender: "bot" }
      );
      return;
    }
    const { text: reply, showPlans } = getBotReply(text);
    addMessages(
      { text, sender: "user" },
      { text: reply, sender: "bot", showPlans }
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chatbox */}
      {open && (
        <div className="mb-2 w-[340px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/10 bg-forge-black shadow-2xl shadow-black/50 sm:max-w-[90vw]">
          {/* Header */}
          <div className="flex items-center justify-between bg-forge-red px-4 py-3">
            <div>
              <h3 className="text-base font-bold text-white sm:text-lg">The Forge Gym</h3>
              <p className="text-[11px] text-white/80 sm:text-xs">Your fitness assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex h-72 flex-col space-y-3 overflow-y-auto px-3 py-3 sm:h-80 sm:px-4">
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
                        ? "max-w-[85%] whitespace-pre-line rounded-2xl border border-white/5 bg-forge-gray-900 px-3 py-2 text-[13px] leading-relaxed text-white sm:px-4 sm:text-sm"
                        : "max-w-[85%] whitespace-pre-line rounded-2xl bg-forge-red px-3 py-2 text-[13px] leading-relaxed text-white sm:px-4 sm:text-sm"
                    }
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Plan selection buttons */}
                {msg.showPlans && (
                  <div className="mt-2 grid grid-cols-2 gap-1.5 sm:gap-2">
                    {MEMBERSHIP_PLANS.map((plan) => (
                      <button
                        key={plan.name}
                        type="button"
                        onClick={() => handlePlanSelect(plan)}
                        className="rounded-lg border border-forge-red/30 bg-forge-red/10 px-2 py-2 text-[11px] font-semibold text-forge-red transition-all duration-200 hover:bg-forge-red hover:text-white sm:px-3 sm:text-xs"
                      >
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
          <div className="flex flex-wrap gap-1.5 border-t border-white/5 px-3 py-2 sm:gap-2">
            {QUICK_REPLIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleQuickReply(item)}
                className="rounded-full border border-white/5 bg-forge-gray-900 px-2.5 py-1 text-[11px] text-white transition-colors duration-200 hover:bg-forge-red sm:px-3 sm:text-xs"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-white/5 p-2.5 sm:p-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              maxLength={200}
              placeholder={awaitingName ? "Type your name..." : "Ask about gym..."}
              className="flex-1 rounded-xl border border-white/10 bg-forge-gray-900 px-3 py-2 text-[13px] text-white outline-none transition-colors duration-200 placeholder:text-forge-gray-500 focus:border-forge-red sm:px-4 sm:text-sm"
            />
            <button
              type="button"
              onClick={handleSend}
              aria-label="Send message"
              className="rounded-xl bg-forge-red p-2 text-white transition-colors duration-200 hover:bg-forge-red-light"
            >
              <SendIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-forge-red shadow-lg shadow-forge-red/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-forge-red/30 active:scale-95 sm:h-14 sm:w-14"
      >
        {open ? (
          <XIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        ) : (
          <MessageCircleIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
        )}
      </button>
    </div>
  );
}
