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
      name: "Priya Sharma",
      handle: "Founding Member",
      avatar: "/images/testimonials/priya-sharma.jpg",
    },
    text: "The Forge changed everything for me. I walked in on opening day in Jan 2026 overweight, and I've already walked out a completely different person.",
  },
  {
    author: {
      name: "Rahul Verma",
      handle: "Member since Jan 2026",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    text: "I've been to a dozen gyms. This is different. The energy, the equipment, the community — it's a place that makes you WANT to show up every single day.",
  },
  {
    author: {
      name: "Amit Kumar",
      handle: "Founding Member",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    text: "As a competitive lifter, I need a gym that takes strength seriously. The Forge has the best equipment and atmosphere I've ever trained in.",
  },
  {
    author: {
      name: "Neha Patel",
      handle: "Member since Feb 2026",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    text: "I was intimidated to join a 'serious' gym, but The Forge welcomed me warmly from day one. The trainers are incredibly supportive.",
  },
  {
    author: {
      name: "Vikram Singh",
      handle: "Founding Member",
      avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    },
    text: "Nothing compares to the atmosphere since they launched. From the moment you walk in, you feel the energy. The coaches push you safely.",
  },
  {
    author: {
      name: "Sneha Reddy",
      handle: "Member since Jan 2026",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    text: "The new group sessions are incredible — challenging but never intimidating. I've made real friends here. Best decision I ever made.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="overflow-hidden bg-forge-dark py-20 md:py-28 border-t border-forge-white/5">
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
        <div className="group flex w-full overflow-hidden flex-row">
          <div
            className="flex gap-4 sm:gap-6 lg:gap-8 animate-marquee-left flex-row group-hover:[animation-play-state:paused]"
            style={{ "--marquee-speed": "40s" } as React.CSSProperties}
          >
            {[...Array(2)].map((_, setIndex) =>
              TESTIMONIALS.map((testimonial, i) => (
                <div key={`${setIndex}-${i}`} className="flex-shrink-0 w-[300px] sm:w-[350px]">
                  <TestimonialCard
                    {...testimonial}
                    variant="dark"
                    className="glass-card h-full"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-forge-dark sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-forge-dark sm:block" />
      </div>
    </section>
  );
}
