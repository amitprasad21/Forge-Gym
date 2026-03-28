import HeroSection from "@/components/sections/hero-section";
import BMICalculatorSection from "@/components/sections/bmi-calculator-section";
import HighlightsSection from "@/components/sections/highlights-section";
import AboutPreviewSection from "@/components/sections/about-preview-section";
import ProgramsPreviewSection from "@/components/sections/programs-preview-section";
import PricingSection from "@/components/sections/pricing-section";
import TrainersPreviewSection from "@/components/sections/trainers-preview-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CertificatesSection from "@/components/sections/certificates-section";
import GalleryPreviewSection from "@/components/sections/gallery-preview-section";
import CTASection from "@/components/sections/cta-section";
import ContactPreviewSection from "@/components/sections/contact-preview-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BMICalculatorSection />
      <HighlightsSection />
      <AboutPreviewSection />
      <ProgramsPreviewSection />
      <PricingSection />
      <TrainersPreviewSection />
      <TestimonialsSection />
      <CertificatesSection />
      <GalleryPreviewSection />
      <CTASection />
      <ContactPreviewSection />
    </>
  );
}
