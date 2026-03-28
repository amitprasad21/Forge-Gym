"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { GALLERY_IMAGES } from "@/constants/data";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

/* Split images into two rows for opposing scroll directions */
const ROW_1 = GALLERY_IMAGES.filter((_, i) => i % 2 === 0);
const ROW_2 = GALLERY_IMAGES.filter((_, i) => i % 2 === 1);

function MarqueeRow({
  images,
  direction = "left",
  speed = 40,
  onImageClick,
}: {
  images: typeof GALLERY_IMAGES;
  direction?: "left" | "right";
  speed?: number;
  onImageClick: (image: typeof GALLERY_IMAGES[0]) => void;
}) {
  /* Duplicate the list so the loop is seamless */
  const doubled = [...images, ...images];

  return (
    <div className="group/row relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-forge-black to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-forge-black to-transparent md:w-24" />

      <div
        className={cn(
          "flex gap-4 will-change-transform",
          "group-hover/row:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={
          {
            "--marquee-speed": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {doubled.map((image, index) => (
          <div
            key={`${image.alt}-${index}`}
            onClick={() => onImageClick(image)}
            className="group/img relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-80 md:h-64 md:w-96 cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover/img:scale-105"
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover/img:bg-black/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function GalleryPreviewSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="overflow-hidden bg-forge-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="INSIDE THE FORGE"
          title="OUR FACILITY"
          description="Take a look inside our 10,000+ sq ft training space built for serious athletes."
        />
      </div>

      <div
        ref={ref}
        className={cn(
          "mt-2 space-y-4 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <MarqueeRow images={ROW_1} direction="left" speed={45} onImageClick={setSelectedImage} />
        <MarqueeRow images={ROW_2} direction="right" speed={50} onImageClick={setSelectedImage} />
      </div>

      <div className="mt-14 text-center relative z-10">
        <CTAButton href="/gallery" variant="outline">
          View Full Gallery
        </CTAButton>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors duration-300 hover:bg-forge-red"
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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 pt-10 pb-6 text-center text-white">
              <span className="mb-2 inline-block rounded bg-forge-red px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <p className="text-lg font-semibold tracking-wide drop-shadow-md">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
