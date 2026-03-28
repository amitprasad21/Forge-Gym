"use client";

import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { MEMBERSHIP_PLANS } from "@/constants/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

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
                <div className="absolute top-6 right-6 z-20">
                  <div className="rounded-full bg-forge-red px-4 py-1.5 shadow-lg shadow-forge-red/30">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
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

                {/* CTA */}
                <div className="mt-8">
                  <CTAButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </CTAButton>
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
    </section>
  );
}
