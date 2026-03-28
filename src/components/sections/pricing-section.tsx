"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { MEMBERSHIP_PLANS, CONTACT_INFO } from "@/constants/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

function getWhatsAppLink(userName: string, planName: string, planPrice: string, planPeriod: string) {
  const message = encodeURIComponent(
    `Hi! My name is ${userName}. I'm interested in the *${planName}* membership plan (Rs.${planPrice}/${planPeriod}) at The Forge Gym. Could you share more details and help me get started?`
  );
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
}

/* ------------------------------------------------------------------ */
/*  NAME MODAL                                                         */
/* ------------------------------------------------------------------ */
function NameModal({
  plan,
  onClose,
}: {
  plan: { name: string; price: string; period: string };
  onClose: () => void;
}) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    const url = getWhatsAppLink(name.trim(), plan.name, plan.price, plan.period);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-forge-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-white/10 p-1.5 text-white transition-colors duration-200 hover:bg-forge-red"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-forge-red px-6 py-5">
          <h3 className="text-xl font-bold text-white">Almost There!</h3>
          <p className="mt-1 text-sm text-white/80">
            You selected the <span className="font-bold">{plan.name}</span> plan
            (Rs.{plan.price}/{plan.period})
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          <label htmlFor="user-name" className="block text-sm font-semibold text-white">
            Enter your name to connect on WhatsApp
          </label>
          <input
            id="user-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            placeholder="Your name"
            autoFocus
            className="mt-3 w-full rounded-xl border border-white/10 bg-forge-gray-900 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-forge-gray-500 focus:border-forge-red"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!name.trim()}
            className={cn(
              "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-bold uppercase tracking-wide transition-all duration-300",
              name.trim()
                ? "bg-[#25D366] text-white hover:bg-[#1fb855] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            )}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Connect on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PRICING SECTION                                                    */
/* ------------------------------------------------------------------ */
export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();
  const [modalPlan, setModalPlan] = useState<{
    name: string;
    price: string;
    period: string;
  } | null>(null);

  return (
    <section className="relative overflow-hidden bg-forge-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Membership"
          title={"CHOOSE YOUR\nPLAN"}
          description="Flexible plans built for every stage of your fitness journey. No contracts, no hidden fees."
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border transition-all duration-500 backdrop-blur-2xl",
                plan.popular
                  ? "border-forge-red/50 bg-gradient-to-br from-forge-gray-900/90 to-forge-black/90 shadow-[0_0_40px_rgba(230,57,70,0.15)] z-10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-forge-red/30 hover:shadow-2xl hover:shadow-forge-red/5"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="relative z-20 flex justify-center -mb-4 pt-4">
                  <div className="rounded-full bg-forge-red px-5 py-1.5 shadow-lg shadow-forge-red/30">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Top accent line for non-popular */}
              {!plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forge-red/30 via-forge-red/60 to-forge-red/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3
                  className={cn(
                    "text-lg font-bold uppercase tracking-wider",
                    plan.popular ? "text-forge-red" : "text-forge-gray-400"
                  )}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1 group-hover:scale-105 transition-transform duration-300 transform origin-left">
                  <span className="text-sm font-semibold text-forge-gray-500">
                    ₹
                  </span>
                  <span className="text-5xl font-black tracking-tight text-white group-hover:text-forge-red transition-colors duration-300">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm font-medium text-forge-gray-500">
                    /{plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-forge-gray-400">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-forge-gray-400"
                    >
                      <svg
                        className={cn(
                          "h-4 w-4 shrink-0",
                          plan.popular
                            ? "text-forge-red"
                            : "text-forge-gray-500"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA - opens name modal before WhatsApp */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() =>
                      setModalPlan({
                        name: plan.name,
                        price: plan.price,
                        period: plan.period,
                      })
                    }
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]",
                      plan.popular
                        ? "bg-forge-red text-white hover:bg-forge-red-light hover:shadow-lg hover:shadow-forge-red/25"
                        : "border-2 border-forge-red bg-transparent text-forge-red hover:bg-forge-red hover:text-white"
                    )}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Get Started
                  </button>
                </div>
              </div>

              {/* Decorative glow for popular plan */}
              {plan.popular && (
                <>
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-forge-red/10 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-forge-red/5 blur-3xl" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Name Modal */}
      {modalPlan && (
        <NameModal plan={modalPlan} onClose={() => setModalPlan(null)} />
      )}
    </section>
  );
}
