"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";

const CERTIFICATES = [
  { src: "/images/certificate/crt1.png", alt: "Certificate 1" },
  { src: "/images/certificate/crt2.png", alt: "Certificate 2" },
  { src: "/images/certificate/crt4.JPG", alt: "Certificate 3" },
  { src: "/images/certificate/crt5.PNG", alt: "Certificate 4" },
  { src: "/images/certificate/crt6.png", alt: "Certificate 5" },
  { src: "/images/certificate/crt7.png", alt: "Certificate 6" },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding bg-gradient-dark overflow-hidden border-t border-forge-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="OUR ACHIEVEMENTS"
          title="CERTIFICATIONS"
          description="Recognized excellence and verified professional qualifications."
        />

        <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden flex-row">
            <div
              className="flex gap-6 sm:gap-8 animate-marquee-left flex-row group-hover:[animation-play-state:paused]"
              style={{ "--marquee-speed": "35s" } as React.CSSProperties}
            >
              {[...Array(2)].map((_, setIndex) =>
                CERTIFICATES.map((cert, index) => (
                  <div
                    key={`${setIndex}-${cert.src}-${index}`}
                    className="relative flex aspect-[4/3] w-[280px] sm:w-[350px] flex-shrink-0 flex-col overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-105"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 280px, 350px"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-forge-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-forge-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
