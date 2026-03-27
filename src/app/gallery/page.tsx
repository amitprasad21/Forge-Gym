"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";
import { GALLERY_IMAGES } from "@/constants/data";

/* ------------------------------------------------------------------ */
/*  FILTER CATEGORIES                                                  */
/* ------------------------------------------------------------------ */
const FILTERS = [
  { label: "All", value: "all" },
  { label: "Facility", value: "facility" },
  { label: "Training", value: "training" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8 pt-20 md:pt-24">
        {/* Tagline */}
        <div className="mb-6 flex items-center justify-center gap-3 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
          <span className="h-px w-10 bg-forge-red" />
          <span className="text-sm font-semibold uppercase tracking-widest text-forge-red">
            Our Space
          </span>
          <span className="h-px w-10 bg-forge-red" />
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-black uppercase leading-[0.95] text-white opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          INSIDE THE
          <br />
          <span className="text-forge-red">FORGE</span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-forge-gray-400 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.35s" }}
        >
          Step inside our world-class facility. From the iron-stacked training
          floor to the high-energy group zones, every corner of The Forge is
          built to fuel your best performance.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forge-black to-transparent" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. FILTER BAR                                                      */
/* ------------------------------------------------------------------ */
function FilterBar({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            "rounded-lg px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300",
            activeFilter === filter.value
              ? "bg-forge-red text-white shadow-lg shadow-forge-red/25"
              : "bg-white/5 text-forge-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. GALLERY GRID                                                    */
/* ------------------------------------------------------------------ */
function GalleryGrid({ activeFilter }: { activeFilter: FilterValue }) {
  const { ref, isVisible } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {filteredImages.map((image, index) => {
        // Every 3rd image (index 2, 5, 8...) is taller for visual variety
        const isTall = index % 3 === 2;

        return (
          <div
            key={image.src}
            onClick={() => setSelectedImage(image)}
            className={cn(
              "group relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer",
              isTall ? "sm:row-span-2" : ""
            )}
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div
              className={cn(
                "relative w-full overflow-hidden",
                isTall ? "h-[400px] sm:h-full" : "h-[280px] sm:h-[300px]"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Red accent top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-forge-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Alt text overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 flex items-end p-5 opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <div>
                  <span className="mb-1 inline-block rounded bg-forge-red/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {image.category}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors duration-300 hover:bg-forge-red hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 pt-10 pb-6 text-center text-white">
              <span className="mb-2 inline-block rounded bg-forge-red px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <p className="text-lg font-semibold tracking-wide drop-shadow-md">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  4. GALLERY CTA SECTION                                             */
/* ------------------------------------------------------------------ */
function GalleryCTA() {
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
          WANT TO SEE IT
          <br />
          <span className="text-forge-red">IN PERSON?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-gray-400">
          Photos only tell half the story. Walk through our doors, feel the
          energy, and experience what makes The Forge unlike any gym you have
          ever set foot in.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contact" variant="primary" size="lg">
            Book a Visit
          </CTAButton>
          <CTAButton href="/programs" variant="outline" size="lg">
            Explore Programs
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  return (
    <>
      <PageHero />

      {/* Gallery Section */}
      <section className="section-padding bg-forge-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tagline="Gallery"
            title={"WHERE IRON\nMEETS AMBITION"}
            description="Explore our state-of-the-art facility and see our community in action."
          />

          {/* Filter Bar */}
          <div className="mb-10">
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Image Grid */}
          <GalleryGrid activeFilter={activeFilter} />
        </div>
      </section>

      <GalleryCTA />
    </>
  );
}
