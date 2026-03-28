import Link from "next/link";
import { FOOTER_DATA, CONTACT_INFO } from "@/constants/data";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}



function ThreadsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12V8H8v10a4 4 0 0 0 4 4h2" />
      <path d="M22 12A10 10 0 1 0 12 22a10 10 0 0 0 10-10z" />
      <path d="M14 12v3a2 2 0 0 1-2 2h-1" />
      <path d="M12 8a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

const socialIcons = [
  { name: "Instagram", icon: InstagramIcon, href: CONTACT_INFO.socials.instagram, colorHover: "hover:bg-[#E1306C]/20 hover:text-[#E1306C]", colorBase: "text-[#E1306C]" },
  { name: "Facebook", icon: FacebookIcon, href: CONTACT_INFO.socials.facebook, colorHover: "hover:bg-[#1877F2]/20 hover:text-[#1877F2]", colorBase: "text-[#1877F2]" },
  { name: "Threads", icon: ThreadsIcon, href: CONTACT_INFO.socials.threads, colorHover: "hover:bg-white/20 hover:text-white", colorBase: "text-white" },
];

export default function Footer() {
  return (
    <footer className="border-t border-forge-white/5 bg-forge-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <img src="/logo.png" alt="The Forge Gym Logo" className="logo h-16 md:h-24 w-auto object-contain opacity-90 transition-opacity hover:opacity-100" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-forge-white/50">
              {FOOTER_DATA.description}
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-forge-white/5 transition-all duration-300 ${social.colorBase} ${social.colorHover}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="hidden sm:block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-forge-white">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-forge-white/50 transition-colors duration-300 hover:text-forge-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="hidden sm:block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-forge-white">
              Programs
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_DATA.programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-sm text-forge-white/50 transition-colors duration-300 hover:text-forge-red"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-forge-white">
              Contact
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-forge-red/70"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm leading-relaxed text-forge-white/50">
                  {CONTACT_INFO.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-forge-red/70"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-forge-white/50 transition-colors duration-300 hover:text-forge-red"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-forge-red/70"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-forge-white/50 transition-colors duration-300 hover:text-forge-red"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-forge-red/70"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.hours.map((schedule) => (
                    <span
                      key={schedule.day}
                      className="text-sm text-forge-white/50"
                    >
                      <span className="text-forge-white/70">
                        {schedule.day}:
                      </span>{" "}
                      {schedule.time}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-forge-white/5 py-8 sm:flex-row">
          <p className="text-sm text-forge-white/30">
            &copy; 2026 The Forge Gym. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-forge-white/30 transition-colors duration-300 hover:text-forge-white/50"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-forge-white/30 transition-colors duration-300 hover:text-forge-white/50"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
