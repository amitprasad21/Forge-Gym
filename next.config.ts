import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── Image Optimization ─────────────────────────────────────────── */
  images: {
    // All images are local — no external domains needed
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  /* ── Production Performance ─────────────────────────────────────── */
  reactStrictMode: true,
  poweredByHeader: false,

  /* ── Caching & Headers ──────────────────────────────────────────── */
  async headers() {
    return [
      {
        // Cache static assets aggressively
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts aggressively
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
