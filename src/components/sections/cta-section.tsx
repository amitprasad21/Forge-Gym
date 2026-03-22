import CTAButton from "@/components/ui/cta-button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0a] py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
          READY TO FORGE
          <br />
          <span className="text-forge-red">YOUR LEGACY?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-gray-400">
          Your transformation starts with a single step. Book your free trial
          today.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/contact" variant="primary" size="lg">
            Book Free Trial
          </CTAButton>
          <CTAButton
            href="tel:+15552345678"
            variant="secondary"
            size="lg"
          >
            Call Us Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
