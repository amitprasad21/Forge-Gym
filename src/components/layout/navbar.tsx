"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-forge-black/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-forge-white/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-wider text-forge-red transition-colors duration-300 group-hover:text-forge-red/80">
                THE
              </span>
              <span className="text-2xl font-extrabold tracking-wider text-forge-white transition-colors duration-300 group-hover:text-forge-white/80">
                FORGE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300",
                      isActive
                        ? "text-forge-red"
                        : "text-forge-white/70 hover:text-forge-white"
                    )}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-forge-red transition-all duration-300",
                        isActive ? "w-6" : "w-0"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden rounded bg-forge-red px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-forge-white transition-all duration-300 hover:bg-forge-red/90 hover:shadow-lg hover:shadow-forge-red/25 lg:inline-block"
              >
                Join Now
              </Link>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative flex h-10 w-10 items-center justify-center lg:hidden"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="flex w-6 flex-col items-end gap-1.5">
                  <span
                    className={cn(
                      "h-0.5 rounded-full bg-forge-white transition-all duration-300",
                      isMobileMenuOpen
                        ? "w-6 translate-y-2 rotate-45"
                        : "w-6"
                    )}
                  />
                  <span
                    className={cn(
                      "h-0.5 rounded-full bg-forge-white transition-all duration-300",
                      isMobileMenuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "h-0.5 rounded-full bg-forge-white transition-all duration-300",
                      isMobileMenuOpen
                        ? "w-6 -translate-y-2 -rotate-45"
                        : "w-5"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 flex h-full w-80 max-w-[85vw] flex-col bg-forge-dark/98 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex h-20 items-center justify-between border-b border-forge-white/5 px-6">
          <Link
            href="/"
            className="flex items-center gap-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl font-extrabold tracking-wider text-forge-red">
              THE
            </span>
            <span className="text-xl font-extrabold tracking-wider text-forge-white">
              FORGE
            </span>
          </Link>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3.5 text-base font-medium tracking-wide uppercase transition-all duration-300",
                    isActive
                      ? "bg-forge-red/10 text-forge-red"
                      : "text-forge-white/70 hover:bg-forge-white/5 hover:text-forge-white"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-forge-red" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="border-t border-forge-white/5 p-6">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full items-center justify-center rounded bg-forge-red px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-forge-white transition-all duration-300 hover:bg-forge-red/90 hover:shadow-lg hover:shadow-forge-red/25"
          >
            Join Now
          </Link>
        </div>
      </div>
    </>
  );
}
