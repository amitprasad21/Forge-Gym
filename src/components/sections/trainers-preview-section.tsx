"use client";

import SectionHeading from "@/components/ui/section-heading";
import TrainerCard from "@/components/ui/trainer-card";
import CTAButton from "@/components/ui/cta-button";
import { TRAINERS } from "@/constants/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

export default function TrainersPreviewSection() {
  const { ref, isVisible } = useScrollReveal();
  const previewTrainers = TRAINERS.slice(0, 3);

  return (
    <section className="section-padding bg-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="MEET THE TEAM"
          title="EXPERT TRAINERS"
          description="Our certified professionals bring passion, expertise, and results to every session."
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
          {previewTrainers.map((trainer) => (
            <TrainerCard key={trainer.name} {...trainer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/trainers" variant="outline">
            Meet All Trainers
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
