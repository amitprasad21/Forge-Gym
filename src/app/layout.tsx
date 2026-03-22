import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Forge Gym | Train Hard. Transform Faster.",
  description:
    "The Forge Gym — where iron meets determination. Premium strength training, personal coaching, and group fitness. Built for those who refuse to settle.",
  keywords: [
    "gym",
    "fitness",
    "strength training",
    "personal training",
    "workout",
    "The Forge Gym",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-forge-black text-forge-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
