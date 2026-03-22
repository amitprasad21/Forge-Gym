"use client";

import SectionHeading from "@/components/ui/section-heading";
import ProgramCard from "@/components/ui/program-card";
import CTAButton from "@/components/ui/cta-button";
import { PROGRAMS } from "@/constants/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

export default function ProgramsPreviewSection() {
  const { ref, isVisible } = useScrollReveal();
  const previewPrograms = PROGRAMS.slice(0, 3);

  return (
    <section className="section-padding bg-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="OUR PROGRAMS"
          title="TRAIN YOUR WAY"
          description="From raw strength to high-intensity conditioning, we have a program designed for every goal."
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
          {previewPrograms.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/programs" variant="outline">
            View All Programs
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
