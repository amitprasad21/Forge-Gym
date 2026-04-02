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
function YouTubeIcon() {
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
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}



function ThreadsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="45 35 110 150"
      fill="currentColor"
    >
      <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.326-38.092 34.71.528 9.818 5.235 18.28 13.256 23.811 6.776 4.673 15.472 7.013 24.487 6.592 11.899-.555 21.228-5.2 27.721-13.81 4.936-6.543 8.048-14.978 9.378-25.543 5.624 3.393 9.804 7.862 12.195 13.298 4.062 9.227 4.298 24.378-3.835 32.51-7.133 7.133-15.705 10.207-28.625 10.313-14.324-.118-25.162-4.693-32.211-13.6C74.615 141.04 70.97 127.063 70.834 110c.136-17.063 3.781-31.04 10.835-41.514 7.049-8.907 17.887-13.482 32.211-13.6 14.453.126 25.464 4.748 32.717 13.74 3.518 4.362 6.186 9.777 8.028 16.19l14.584-3.906c-2.373-8.269-6.063-15.353-11.09-21.284-9.9-12.276-24.166-18.678-42.364-18.84h-.136c-18.076.163-32.204 6.558-42.014 19.015C65.103 70.673 60.763 87.191 60.6 110l.003.263c.163 22.81 4.503 39.327 12.9 49.098 9.81 12.457 23.938 18.852 42.014 19.015h.136c15.803-.129 27.165-4.397 36.768-13.816 12.435-12.193 12.153-27.473 6.835-39.55-3.808-8.647-10.627-15.575-19.719-20.022Zm-38.36 44.327c-9.985.553-20.366-3.943-20.939-14.612-.417-7.764 5.498-16.435 25.507-17.588 2.227-.128 4.407-.186 6.541-.186 6.303 0 12.2.6 17.519 1.77-1.993 22.833-14.707 30.063-28.628 30.616Z" />
    </svg>
  );
}

const socialIcons = [
  { name: "Instagram", icon: InstagramIcon, href: CONTACT_INFO.socials.instagram, colorHover: "hover:bg-[#E1306C]/20 hover:text-[#E1306C]", colorBase: "text-[#E1306C]" },
  { name: "youtube", icon: YouTubeIcon, href: CONTACT_INFO.socials.youtube, colorHover: "hover:bg-[#FF0000]/20 hover:text-[#FF0000]", colorBase: "text-[#FF0000]" },
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
              href="/contact"
              className="text-xs text-forge-white/30 transition-colors duration-300 hover:text-forge-white/50"
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
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
