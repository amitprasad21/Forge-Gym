"use client";

import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { TestimonialAuthor } from "@/components/ui/testimonial-card";
import { useScrollReveal } from "@/lib/useScrollReveal";

const TESTIMONIALS: Array<{
  author: TestimonialAuthor;
  text: string;
}> = [
  {
    author: {
      name: "Michael Torres",
      handle: "Member · 2 years",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The Forge changed everything for me. I walked in 40 pounds overweight and walked out a completely different person. The trainers here don't just coach — they believe in you.",
  },
  {
    author: {
      name: "Aisha Johnson",
      handle: "Member · 1 year",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "I've been to a dozen gyms. The Forge is different. The energy, the equipment, the community — it's a place that makes you WANT to show up every single day.",
  },
  {
    author: {
      name: "David Park",
      handle: "Member · 3 years",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "As a competitive lifter, I need a gym that takes strength seriously. The Forge has the best equipment, the best coaches, and the best atmosphere I've ever trained in.",
  },
  {
    author: {
      name: "Rachel Kim",
      handle: "Member · 6 months",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "I was intimidated to join a 'serious' gym, but The Forge welcomed me from day one. The personal training program helped me build confidence and strength I never knew I had.",
  },
  {
    author: {
      name: "James Rivera",
      handle: "Member · 4 years",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Nothing compares to the atmosphere at The Forge. From the moment you walk in, you feel the energy. The coaching staff pushes you beyond what you thought was possible.",
  },
  {
    author: {
      name: "Priya Sharma",
      handle: "Member · 1.5 years",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "The group sessions are incredible — challenging but never intimidating. I've made real friends here, and my strength has doubled since I started. Best decision I ever made.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="overflow-hidden bg-forge-black py-20 md:py-28">
      {/* Header */}
      <div
        ref={ref}
        className={cn(
          "mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-forge-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forge-red">
              Real Stories
            </span>
            <span className="h-px w-8 bg-forge-red" />
          </div>
          <h2 className="max-w-[720px] text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="text-forge-red">Members</span> Say
          </h2>
          <p className="max-w-[600px] text-base text-forge-gray-400 sm:text-lg">
            Don&apos;t take our word for it. Hear from the people who&apos;ve
            transformed at The Forge.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden sm:mt-16">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-testimonial flex-row group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIndex) =>
              TESTIMONIALS.map((testimonial, i) => (
                <TestimonialCard
                  key={`${setIndex}-${i}`}
                  {...testimonial}
                />
              ))
            )}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-forge-black sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-forge-black sm:block" />
      </div>
    </section>
  );
}
