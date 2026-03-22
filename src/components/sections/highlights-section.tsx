"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

const OFFERINGS = [
  {
    number: "01",
    title: "Strength Training",
    description: "Free weights, racks, and machines built for serious lifters.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6v12M17.5 6v12M3 10v4M21 10v4M6.5 10h11M6.5 14h11M3 12h3.5M17.5 12H21" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personal Training",
    description: "One-on-one coaching designed around your goals.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fat Loss & HIIT",
    description: "High-intensity sessions that burn fat and build endurance.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Group Sessions",
    description: "Team-driven workouts that push you beyond your limits.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Mobility & Recovery",
    description: "Stretching, foam rolling, and movement work to stay injury-free.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Expert Coaching",
    description: "Certified trainers who live fitness and deliver real results.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function HighlightsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header — editorial style */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-forge-red" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forge-red">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Train With
            <br />
            <span className="text-forge-red">Purpose.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500">
            Every program at The Forge is designed to deliver real, measurable results — no filler, no fluff.
          </p>
        </div>

        {/* Offerings Grid — editorial layout */}
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Top divider */}
          <div className="h-px w-full bg-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((item, index) => {
              /* Column position for border logic */
              const lgCol = index % 3; // 0, 1, 2
              const lgRow = Math.floor(index / 3); // 0, 1
              const smCol = index % 2;
              const isLastLgRow = lgRow === 1;
              const isLastSmRow = index >= 4;

              return (
              <div
                key={item.title}
                className={cn(
                  "group relative py-10 px-6 lg:px-8 transition-all duration-300",
                  /* Mobile: all except last get bottom border */
                  index < 5 && "border-b border-gray-200",
                  /* Tablet: vertical divider on right column */
                  smCol === 1 && "sm:border-l sm:border-gray-200",
                  /* Tablet: remove bottom border on last row */
                  isLastSmRow && "sm:border-b-0",
                  /* Desktop: reset tablet borders, add column dividers */
                  "lg:border-l-0",
                  lgCol === 1 && "lg:!border-l lg:border-gray-200",
                  lgCol === 2 && "lg:!border-l lg:border-gray-200",
                  /* Desktop: only first row gets bottom border */
                  isLastLgRow ? "lg:!border-b-0" : "lg:!border-b lg:border-gray-200"
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-semibold tracking-widest text-gray-300 select-none">
                    {item.number}
                  </span>
                  <div className="text-forge-red transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>

                {/* Red accent line */}
                <div className="mb-5 h-0.5 w-8 bg-forge-red transition-all duration-300 group-hover:w-14" />

                {/* Title */}
                <h3 className="text-base font-bold uppercase tracking-wide text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
              );
            })}
          </div>

          {/* Bottom divider */}
          <div className="h-px w-full bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
