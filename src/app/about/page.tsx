"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";
import { FOUNDER_INFO } from "@/constants/data";

/* ------------------------------------------------------------------ */
/*  1. PAGE HERO BANNER                                               */
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8 pt-20 md:pt-24">
        {/* Tagline */}
        <div className="mb-6 flex items-center justify-center gap-3 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
          <span className="h-px w-10 bg-forge-red" />
          <span className="text-sm font-semibold uppercase tracking-widest text-forge-red">
            About Us
          </span>
          <span className="h-px w-10 bg-forge-red" />
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-black uppercase leading-[0.95] text-white opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          THE FORGE
          <br />
          <span className="text-forge-red">STORY</span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-forge-gray-400 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.35s" }}
        >
          More than a gym. A brotherhood forged through iron, sweat, and
          relentless pursuit of greatness.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forge-black to-transparent" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. OUR STORY SECTION                                              */
/* ------------------------------------------------------------------ */
function OurStorySection() {
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
              tagline="Our Origin"
              title={"BORN FROM\nIRON"}
              align="left"
            />

            <div className="space-y-5 text-base leading-relaxed text-forge-gray-400">
              <p>
                The Forge was born in early 2026 from a simple belief: that the right
                environment can unlock potential most people never knew they had.
                Our founder and owner, Jeet Singh -- a passionate fitness
                enthusiast and entrepreneur -- grew frustrated with cookie-cutter
                gyms that treated fitness as an afterthought. He envisioned a
                space where serious training met genuine community, and every
                detail was designed to help people become the strongest version
                of themselves.
              </p>

              <p>
                What began as a dream quickly became a 10,000-square-foot
                purpose-built training facility in Greater Noida, packed with
                competition-grade Rogue and Hammer Strength equipment. Walk
                through our doors and you will feel it instantly -- the energy
                of people pushing past limits, the camaraderie of a team that
                refuses to let anyone give up, and the unmistakable sound of
                iron meeting iron.
              </p>

              <p>
                Today, The Forge is already home to a growing community of
                dedicated members -- from first-time lifters learning the
                fundamentals to seasoned athletes chasing new personal records.
                No matter where you start, this is where you are forged.
              </p>
            </div>
          </div>

          {/* Right - Gym Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/gallery/gym-interior.jpeg"
                alt="The Forge Gym interior — training floor with premium equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay with Est. badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-forge-red">
                    Est. March 2026
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-widest text-forge-gray-300">
                    The Forge Gym
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forge-red/20 backdrop-blur-sm">
                  <svg
                    className="h-6 w-6 text-forge-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Red Accent Corners */}
            <div className="absolute -top-3 -left-3 h-24 w-24 border-t-2 border-l-2 border-forge-red/40 rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-forge-red/40 rounded-br-xl" />

            {/* Floating glow accent */}
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-forge-red/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. FOUNDER SECTION                                                */
/* ------------------------------------------------------------------ */
function FounderSection() {
  const { ref, isVisible } = useScrollReveal();

  const socialLinks = [
    {
      label: "Call",
      href: `tel:+91${FOUNDER_INFO.phone}`,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${FOUNDER_INFO.whatsapp}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: FOUNDER_INFO.socials.instagram,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "Threads",
      href: FOUNDER_INFO.socials.threads,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="45 35 110 150">
          <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.326-38.092 34.71.528 9.818 5.235 18.28 13.256 23.811 6.776 4.673 15.472 7.013 24.487 6.592 11.899-.555 21.228-5.2 27.721-13.81 4.936-6.543 8.048-14.978 9.378-25.543 5.624 3.393 9.804 7.862 12.195 13.298 4.062 9.227 4.298 24.378-3.835 32.51-7.133 7.133-15.705 10.207-28.625 10.313-14.324-.118-25.162-4.693-32.211-13.6C74.615 141.04 70.97 127.063 70.834 110c.136-17.063 3.781-31.04 10.835-41.514 7.049-8.907 17.887-13.482 32.211-13.6 14.453.126 25.464 4.748 32.717 13.74 3.518 4.362 6.186 9.777 8.028 16.19l14.584-3.906c-2.373-8.269-6.063-15.353-11.09-21.284-9.9-12.276-24.166-18.678-42.364-18.84h-.136c-18.076.163-32.204 6.558-42.014 19.015C65.103 70.673 60.763 87.191 60.6 110l.003.263c.163 22.81 4.503 39.327 12.9 49.098 9.81 12.457 23.938 18.852 42.014 19.015h.136c15.803-.129 27.165-4.397 36.768-13.816 12.435-12.193 12.153-27.473 6.835-39.55-3.808-8.647-10.627-15.575-19.719-20.022Zm-38.36 44.327c-9.985.553-20.366-3.943-20.939-14.612-.417-7.764 5.498-16.435 25.507-17.588 2.227-.128 4.407-.186 6.541-.186 6.303 0 12.2.6 17.519 1.77-1.993 22.833-14.707 30.063-28.628 30.616Z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: FOUNDER_INFO.socials.youtube,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-forge-black via-forge-gray-900/50 to-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="The Vision"
          title={"MEET OUR\nFOUNDER"}
          description="The driving force behind The Forge — building a fitness movement from the ground up."
        />

        <div
          ref={ref}
          className={cn(
            "grid items-center gap-10 lg:grid-cols-5 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {/* Left - Founder Image */}
          <div className="relative lg:col-span-2">
            <div className="group relative mx-auto max-w-sm overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-forge-red">
                    {FOUNDER_INFO.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-black uppercase text-white">
                    {FOUNDER_INFO.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Accent corners */}
            <div className="absolute -top-3 -left-3 h-20 w-20 border-t-2 border-l-2 border-forge-red/40 rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-forge-red/40 rounded-br-xl" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-xl bg-forge-red/10 blur-xl" />
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-3">
            {/* Bio */}
            <p className="text-base leading-relaxed text-forge-gray-400">
              {FOUNDER_INFO.bio}
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-forge-red/30 via-forge-red/10 to-transparent" />

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Call" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group/icon flex items-center gap-2.5 rounded-xl border border-white/5 bg-forge-gray-900/60 px-4 py-3 text-forge-gray-300 transition-all duration-300 hover:border-forge-red/30 hover:bg-forge-red/10 hover:text-forge-red"
                >
                  <span className="transition-transform duration-300 group-hover/icon:scale-110">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <CTAButton
                href={`https://wa.me/${FOUNDER_INFO.whatsapp}?text=${encodeURIComponent("Hi Jeet! I'd like to connect and learn more about The Forge.")}`}
                variant="primary"
                size="lg"
              >
                Connect Now
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. OUR MISSION SECTION                                            */
/* ------------------------------------------------------------------ */
const missionPillars = [
  {
    title: "Strength",
    description:
      "We build raw, functional power. Every program is engineered to push your physical limits and unlock strength you never thought possible -- from barbell fundamentals to advanced athletic performance.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.5 6v12M17.5 6v12M3 10v4M21 10v4M6.5 10h11M6.5 14h11M3 12h3.5M17.5 12H21"
        />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "Iron sharpens iron. Our tribe pushes each other, picks each other up, and celebrates every victory together. You will never train alone at The Forge -- you train with family.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Transformation",
    description:
      "We do not just change bodies -- we change lives. Through disciplined training, expert coaching, and an unwavering support system, we help you become someone you are proud of, inside and out.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
];

function OurMissionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-b from-forge-black via-forge-gray-900/50 to-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Our Mission"
          title={"FORGED WITH\nPURPOSE"}
          description="Three pillars define everything we do at The Forge."
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 gap-6 md:grid-cols-3 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {missionPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-forge-gray-900/50 p-8 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Red top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forge-red via-forge-red-light to-forge-red opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-forge-red/10 text-forge-red transition-colors duration-300 group-hover:bg-forge-red/20">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forge-gray-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. OUR VALUES SECTION                                             */
/* ------------------------------------------------------------------ */
const values = [
  {
    number: "01",
    title: "Discipline Over Motivation",
    description:
      "Motivation fades. Discipline endures. We teach our members to build systems and habits that survive bad days, because greatness is not built on feelings -- it is built on consistency.",
  },
  {
    number: "02",
    title: "No Shortcuts",
    description:
      "There are no hacks, no cheat codes. Every rep counts, every set matters. We believe in earning results through honest, relentless effort and proper technique.",
  },
  {
    number: "03",
    title: "Results Speak",
    description:
      "We let the numbers do the talking. Personal records shattered, bodies transformed, and lives changed -- our members' results are the only testimony we need.",
  },
  {
    number: "04",
    title: "Everyone Belongs",
    description:
      "Whether you are picking up a barbell for the first time or chasing a national title, you belong here. The Forge is built for every body, every background, every goal.",
  },
];

function OurValuesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-forge-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="What We Stand For"
          title={"OUR CORE\nVALUES"}
          description="The non-negotiable principles that drive The Forge every single day."
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 gap-6 sm:grid-cols-2 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {values.map((value, index) => (
            <div
              key={value.number}
              className="group rounded-xl border border-white/5 bg-forge-gray-900/50 p-8 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Large number */}
              <span className="text-5xl font-black text-forge-red/30 transition-colors duration-300 group-hover:text-forge-red/60">
                {value.number}
              </span>

              <h3 className="mt-3 text-xl font-bold uppercase tracking-wide text-white">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forge-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. STATS / NUMBERS SECTION                                        */
/* ------------------------------------------------------------------ */
const stats = [
  { value: "100+", label: "Members & Growing" },
  { value: "1", label: "Expert Trainer" },
  { value: "10K+", label: "Sq Ft Facility" },
  { value: "3+", label: "Weekly Sessions" },
];

function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-forge-black py-16 md:py-20">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-forge-red/5 via-transparent to-forge-red/5" />

      {/* Geometric corner accents */}
      <div className="absolute top-6 left-6 h-12 w-12 border-t-2 border-l-2 border-forge-red/20" />
      <div className="absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-forge-red/20" />

      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="text-4xl font-black text-forge-red md:text-5xl lg:text-6xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-forge-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. CTA SECTION                                                    */
/* ------------------------------------------------------------------ */
function AboutCTA() {
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
          READY TO JOIN
          <br />
          <span className="text-forge-red">THE FAMILY?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-gray-400">
          Your story at The Forge starts with a single step. Come see the space,
          meet the team, and feel the energy for yourself.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contact" variant="primary" size="lg">
            Get In Touch
          </CTAButton>
          <CTAButton href="/programs" variant="outline" size="lg">
            View Programs
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      <PageHero />
      <OurStorySection />
      <FounderSection />
      <OurMissionSection />
      <OurValuesSection />
      <StatsSection />
      <AboutCTA />
    </>
  );
}
