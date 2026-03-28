"use client";

import SectionHeading from "@/components/ui/section-heading";
import CTAButton from "@/components/ui/cta-button";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/constants/data";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  1. PAGE HERO BANNER                                                */
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
            Get In Touch
          </span>
          <span className="h-px w-10 bg-forge-red" />
        </div>

        {/* Title */}
        <h1
          className="text-5xl font-black uppercase leading-[0.95] text-white opacity-0 animate-[fadeUp_0.6s_ease-out_forwards] md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          CONTACT
          <br />
          <span className="text-forge-red">US</span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-forge-gray-400 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: "0.35s" }}
        >
          Have a question, want to book a session, or just want to say hello? We
          are here to help you start your fitness journey.
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forge-black to-transparent" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. CONTACT CONTENT SECTION                                         */
/* ------------------------------------------------------------------ */
function ContactContentSection() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formStatus !== "idle") setFormStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\n${formData.message}`;
      window.location.href = `mailto:${CONTACT_INFO.email}?subject=Contact Form Submission: ${formData.subject}&body=${encodeURIComponent(body)}`;
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  const inputStyles =
    "w-full rounded-lg border border-forge-gray-700 bg-forge-gray-900 px-4 py-3 text-white placeholder-forge-gray-500 transition focus:border-forge-red focus:outline-none";

  return (
    <section className="section-padding bg-forge-dark">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---- Left Column: Contact Form ---- */}
          <div>
            <SectionHeading
              tagline="SEND A MESSAGE"
              title={"GET IN\nTOUCH"}
              align="left"
            />

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyles}
                />
              </div>

              {/* Subject */}
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={cn(inputStyles, !formData.subject && "text-forge-gray-500")}
                  required
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership Info</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(inputStyles, "resize-none")}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-forge-red px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-forge-white transition-all duration-300 hover:bg-forge-red/90 hover:shadow-lg hover:shadow-forge-red/25"
              >
                Send Message
              </button>

              {/* Form Status Feedback */}
              {formStatus === "success" && (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  Your email client should have opened. If not, please reach out to us directly at {CONTACT_INFO.email}
                </div>
              )}
              {formStatus === "error" && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  Something went wrong. Please try again or contact us via WhatsApp.
                </div>
              )}
            </form>
          </div>

          {/* ---- Right Column: Contact Info ---- */}
          <div className="space-y-6">
            {/* Location */}
            <div className="group rounded-xl border border-white/5 bg-forge-gray-900/50 p-6 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forge-red/10">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    Our Location
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-forge-gray-400">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group rounded-xl border border-white/5 bg-forge-gray-900/50 p-6 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forge-red/10">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    Phone
                  </h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="mt-1 inline-block text-sm text-forge-gray-400 transition-colors hover:text-forge-red"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group rounded-xl border border-white/5 bg-forge-gray-900/50 p-6 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forge-red/10">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-1 inline-block text-sm text-forge-gray-400 transition-colors hover:text-forge-red"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group rounded-xl border border-white/5 bg-forge-gray-900/50 p-6 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forge-red/10">
                  <svg
                    className="h-6 w-6 text-forge-red"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    WhatsApp
                  </h3>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-forge-gray-400 transition-colors hover:text-forge-red"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="rounded-xl border border-white/5 bg-forge-gray-900/50 p-6 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forge-red/10">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    Operating Hours
                  </h3>
                  <div className="mt-3 space-y-2">
                    {CONTACT_INFO.hours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-forge-gray-400">
                          {schedule.day}
                        </span>
                        <span className="font-medium text-white">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. MAP SECTION                                                     */
/* ------------------------------------------------------------------ */
function MapSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="FIND US"
          title={"OUR\nLOCATION"}
          description="Visit The Forge and experience the energy for yourself."
        />

        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="overflow-hidden rounded-xl border-2 border-forge-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.4901!3d28.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e1e1e1e1e1%3A0x1234567890abcdef!2sZeta+I%2C+Greater+Noida%2C+Uttar+Pradesh+201310!5e0!3m2!1sen!2sin"
              className="h-[400px] w-full md:h-[500px]"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Forge Gym — Zeta I, Greater Noida"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. CTA SECTION                                                     */
/* ------------------------------------------------------------------ */
function ContactCTA() {
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
          READY TO START
          <br />
          <span className="text-forge-red">YOUR JOURNEY?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-gray-400">
          Take the first step today. Call us or reach out on WhatsApp -- we are
          ready to help you forge a stronger you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton
            href={`tel:${CONTACT_INFO.phone}`}
            variant="primary"
            size="lg"
          >
            Call Us Now
          </CTAButton>
          <CTAButton
            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage || "")}`}
            variant="outline"
            size="lg"
          >
            WhatsApp Us
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactContentSection />
      <MapSection />
      <ContactCTA />
    </>
  );
}
