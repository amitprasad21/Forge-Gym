import HeroSection from "@/components/sections/hero-section";
import HighlightsSection from "@/components/sections/highlights-section";
import AboutPreviewSection from "@/components/sections/about-preview-section";
import ProgramsPreviewSection from "@/components/sections/programs-preview-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import TrainersPreviewSection from "@/components/sections/trainers-preview-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import GalleryPreviewSection from "@/components/sections/gallery-preview-section";
import CTASection from "@/components/sections/cta-section";
import ContactPreviewSection from "@/components/sections/contact-preview-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AboutPreviewSection />
      <ProgramsPreviewSection />
      <WhyChooseSection />
      <TrainersPreviewSection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <CTASection />
      <ContactPreviewSection />
    </>
  );
}
