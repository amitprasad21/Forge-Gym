"use client";

import Image from "next/image";
import CTAButton from "@/components/ui/cta-button";
import { HERO_DATA } from "@/constants/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-forge-black">
      {/* Background Image — single clean overlay */}
      <div className="absolute inset-0">
        <Image
          src={HERO_DATA.backgroundImage}
          alt="The Forge Gym training floor"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-forge-black/90 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full py-32 lg:py-40">
          <div className="max-w-2xl">
            {/* Tagline */}
            <p
              className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-forge-red/90 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.1s" }}
            >
              {HERO_DATA.tagline}
            </p>

            {/* Headline — refined sizing, mixed weight */}
            <h1
              className="text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.2s" }}
            >
              Train Hard.{" "}
              <span className="text-forge-red">Transform</span>{" "}
              Faster.
            </h1>

            {/* Description */}
            <p
              className="mt-5 max-w-md text-base leading-relaxed text-white/60 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.35s" }}
            >
              {HERO_DATA.description}
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-8 flex flex-wrap gap-3 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.5s" }}
            >
              <CTAButton href={HERO_DATA.primaryCTA.href} variant="primary" size="md">
                {HERO_DATA.primaryCTA.label}
              </CTAButton>
              <CTAButton href={HERO_DATA.secondaryCTA.href} variant="secondary" size="md">
                {HERO_DATA.secondaryCTA.label}
              </CTAButton>
            </div>

            {/* Stats — subtle, compact */}
            <div
              className="mt-14 flex flex-wrap gap-8 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.65s" }}
            >
              {HERO_DATA.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-xl font-semibold text-white lg:text-2xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forge-black to-transparent" />
    </section>
  );
}
