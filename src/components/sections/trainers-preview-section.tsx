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
            "flex flex-wrap justify-center gap-6 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {previewTrainers.map((trainer, index) => (
            <div key={`${trainer.name}-${index}`} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <TrainerCard {...trainer} />
            </div>
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
