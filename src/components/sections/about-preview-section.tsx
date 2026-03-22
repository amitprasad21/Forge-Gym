"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { ABOUT_PREVIEW } from "@/constants/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

export default function AboutPreviewSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-forge-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {/* Left - Text Content */}
          <div>
            <SectionHeading
              tagline={ABOUT_PREVIEW.tagline}
              title={ABOUT_PREVIEW.title}
              description={ABOUT_PREVIEW.description}
              align="left"
            />

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {ABOUT_PREVIEW.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-forge-gray-400">
                  <svg
                    className="h-5 w-5 shrink-0 text-forge-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CTAButton href="/about" variant="outline">
                Learn More About Us
              </CTAButton>
            </div>
          </div>

          {/* Right - Gym Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={ABOUT_PREVIEW.image}
                alt="The Forge Gym training floor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Red Accent Border */}
            <div className="absolute -top-3 -left-3 h-24 w-24 border-t-2 border-l-2 border-forge-red/40 rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-forge-red/40 rounded-br-xl" />

            {/* Floating Accent */}
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-forge-red/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
