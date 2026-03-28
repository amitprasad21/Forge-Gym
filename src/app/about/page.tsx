"use client";

import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

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
                Our founder Jeet Singh -- a former competitive athlete and certified
                strength coach -- grew frustrated with cookie-cutter gyms that
                treated fitness as an afterthought. He envisioned a space
                where serious training met genuine community, and every detail
                was designed to help people become the strongest version of
                themselves.
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

          {/* Right - Decorative Card */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-forge-gray-800 bg-forge-gray-900">
              {/* Geometric cross-hatch pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(230,57,70,0.3)_49%,rgba(230,57,70,0.3)_51%,transparent_52%)] bg-[length:30px_30px]" />
              </div>

              {/* Red accent corner borders */}
              <div className="absolute top-4 left-4 h-24 w-24 border-t-2 border-l-2 border-forge-red/40" />
              <div className="absolute bottom-4 right-4 h-24 w-24 border-b-2 border-r-2 border-forge-red/40" />

              {/* Horizontal accent line */}
              <div className="absolute top-1/2 left-8 right-8 h-px -translate-y-1/2 bg-gradient-to-r from-forge-red/30 via-forge-red/10 to-forge-red/30" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-forge-red/10">
                  <svg
                    className="h-10 w-10 text-forge-red"
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
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-forge-gray-500">
                  Est. March 2026
                </p>
                <p className="mt-1 text-sm font-medium uppercase tracking-widest text-forge-gray-500">
                  The Forge Gym
                </p>
              </div>
            </div>

            {/* Floating glow accent */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-xl bg-forge-red/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-forge-red/5 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. OUR MISSION SECTION                                            */
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
  { value: "500+", label: "Members & Growing" },
  { value: "15+", label: "Expert Trainers" },
  { value: "10K+", label: "Sq Ft Facility" },
  { value: "50+", label: "Weekly Classes" },
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
      <OurMissionSection />
      <OurValuesSection />
      <StatsSection />
      <AboutCTA />
    </>
  );
}
