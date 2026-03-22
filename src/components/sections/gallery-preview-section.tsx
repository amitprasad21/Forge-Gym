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
}: {
  images: typeof GALLERY_IMAGES;
  direction?: "left" | "right";
  speed?: number;
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
            className="group/img relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-80 md:h-64 md:w-96"
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

export default function GalleryPreviewSection() {
  const { ref, isVisible } = useScrollReveal();

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
        <MarqueeRow images={ROW_1} direction="left" speed={45} />
        <MarqueeRow images={ROW_2} direction="right" speed={50} />
      </div>

      <div className="mt-14 text-center">
        <CTAButton href="/gallery" variant="outline">
          View Full Gallery
        </CTAButton>
      </div>
    </section>
  );
}
