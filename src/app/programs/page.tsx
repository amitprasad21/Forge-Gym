"use client";

import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import ProgramCard from "@/components/ui/program-card";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";
import { PROGRAMS, MEMBERSHIP_PLANS } from "@/constants/data";

/* ------------------------------------------------------------------ */
/*  1. PAGE HERO                                                       */
/* ------------------------------------------------------------------ */
function PageHero() {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] items-center overflow-hidden bg-forge-black">
      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(230,57,70,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(230,57,70,0.06)_0%,transparent_50%)]" />

      {/* Decorative geometric elements */}
      <div className="absolute top-10 left-10 h-20 w-20 border-t-2 border-l-2 border-forge-red/20" />
      <div className="absolute bottom-10 right-10 h-20 w-20 border-b-2 border-r-2 border-forge-red/20" />
      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-forge-red/10 to-transparent" />

      {/* Corner dots */}
      <div className="absolute top-10 right-16 h-2 w-2 rounded-full bg-forge-red/30" />
      <div className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-forge-red/30" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-[20%] h-full w-px rotate-12 bg-gradient-to-b from-transparent via-forge-red/8 to-transparent" />
      <div className="absolute top-0 left-[25%] h-full w-px -rotate-12 bg-gradient-to-b from-transparent via-forge-red/5 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="mb-6 flex items-center justify-center gap-3 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
          <span className="h-px w-10 bg-forge-red" />
          <span className="text-sm font-semibold uppercase tracking-widest text-forge-red">
            Our Programs
          </span>
          <span className="h-px w-10 bg-forge-red" />
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-black uppercase leading-[0.95] text-white opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          TRAIN YOUR
          <br />
          <span className="text-forge-red">WAY</span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-forge-gray-400 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.35s" }}
        >
          From strength and conditioning to yoga and combat -- find the
          perfect program to match your goals, your schedule, and your
          ambition.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forge-black to-transparent" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. PROGRAMS GRID                                                   */
/* ------------------------------------------------------------------ */
function ProgramsGridSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-forge-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Explore"
          title={"ALL PROGRAMS"}
          description="Every program at The Forge is designed by certified coaches to deliver real, measurable results."
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {PROGRAMS.map((program, index) => (
            <div
              key={program.id}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProgramCard
                id={program.id}
                title={program.title}
                description={program.description}
                image={program.image}
                features={program.features}
                level={program.level}
                duration={program.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. MEMBERSHIP PLANS                                                */
/* ------------------------------------------------------------------ */
function MembershipPlansSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-b from-forge-black via-forge-gray-900/50 to-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Membership"
          title={"CHOOSE YOUR\nPLAN"}
          description="Flexible plans built for every stage of your fitness journey. No contracts, no hidden fees."
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 items-center gap-6 md:grid-cols-3 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "group relative overflow-hidden rounded-2xl border transition-all duration-500",
                plan.popular
                  ? "border-forge-red bg-forge-gray-900 shadow-2xl shadow-forge-red/10 md:scale-105 md:z-10"
                  : "border-white/5 bg-forge-gray-900/50 hover:border-forge-red/20 hover:bg-forge-gray-900"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="flex items-center justify-center bg-forge-red py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Top accent line for non-popular */}
              {!plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forge-red/30 via-forge-red/60 to-forge-red/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}

              <div className={cn("p-8", plan.popular && "pt-14")}>
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
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-forge-gray-500">
                    $
                  </span>
                  <span
                    className={cn(
                      "text-5xl font-black tracking-tight",
                      plan.popular ? "text-white" : "text-white"
                    )}
                  >
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

/* ------------------------------------------------------------------ */
/*  4. BOTTOM CTA                                                      */
/* ------------------------------------------------------------------ */
function BottomCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-forge-dark py-20 md:py-28">
      {/* Red gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-forge-red/10 via-transparent to-forge-red/5" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-forge-red/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-forge-red/10 blur-3xl" />

      {/* Geometric accents */}
      <div className="absolute top-8 left-8 h-16 w-16 border-t-2 border-l-2 border-forge-red/20" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-forge-red/20" />

      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
          CAN&apos;T
          <br />
          <span className="text-forge-red">DECIDE?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-gray-400">
          Not sure which program or plan is the right fit? Reach out to our
          team for a free consultation and we will help you find the perfect
          path to your goals.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contact" variant="primary" size="lg">
            Book a Free Consultation
          </CTAButton>
          <CTAButton href="/about" variant="outline" size="lg">
            Learn About Us
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function ProgramsPage() {
  return (
    <>
      <PageHero />
      <ProgramsGridSection />
      <MembershipPlansSection />
      <BottomCTA />
    </>
  );
}
