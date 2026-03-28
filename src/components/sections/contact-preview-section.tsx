import CTAButton from "@/components/ui/cta-button";
import SectionHeading from "@/components/ui/section-heading";
import { CONTACT_INFO } from "@/constants/data";

export default function ContactPreviewSection() {
  return (
    <section className="section-padding bg-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="GET IN TOUCH"
          title="FIND US"
          description="Ready to start your fitness journey? Visit us or reach out today."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left - Contact Info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="flex gap-4 rounded-xl border border-white/5 bg-forge-gray-900/50 p-5 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forge-red/10">
                <svg
                  className="h-5 w-5 text-forge-red"
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
                <h4 className="text-sm font-bold text-white">Address</h4>
                <p className="mt-1 text-sm leading-relaxed text-forge-gray-400">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 rounded-xl border border-white/5 bg-forge-gray-900/50 p-5 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forge-red/10">
                <svg
                  className="h-5 w-5 text-forge-red"
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
                <h4 className="text-sm font-bold text-white">Phone</h4>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="mt-1 inline-block text-sm text-forge-gray-400 transition-colors hover:text-forge-red"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 rounded-xl border border-white/5 bg-forge-gray-900/50 p-5 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forge-red/10">
                <svg
                  className="h-5 w-5 text-forge-red"
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
                <h4 className="text-sm font-bold text-white">Email</h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="mt-1 inline-block text-sm text-forge-gray-400 transition-colors hover:text-forge-red"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 rounded-xl border border-white/5 bg-forge-gray-900/50 p-5 transition-all duration-300 hover:border-forge-red/20 hover:bg-forge-gray-900">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forge-red/10">
                <svg
                  className="h-5 w-5 text-forge-red"
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
                <h4 className="text-sm font-bold text-white">Hours</h4>
                <div className="mt-2 space-y-1.5">
                  {CONTACT_INFO.hours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between gap-6 text-sm"
                    >
                      <span className="text-forge-gray-400">{schedule.day}</span>
                      <span className="font-medium text-forge-gray-300">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <CTAButton
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage || "")}`}
              variant="primary"
              className="w-full"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </CTAButton>
          </div>

          {/* Right - Google Maps Embed */}
          <div className="overflow-hidden rounded-xl shadow-lg shadow-black/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.4901!3d28.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e1e1e1e1e1%3A0x1234567890abcdef!2sZeta+I%2C+Greater+Noida%2C+Uttar+Pradesh+201310!5e0!3m2!1sen!2sin"
              className="h-[400px] w-full lg:h-full lg:min-h-[520px]"
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
