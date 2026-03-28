import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-forge-black">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(230,57,70,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-10 left-10 h-20 w-20 border-t-2 border-l-2 border-forge-red/20" />
      <div className="absolute bottom-10 right-10 h-20 w-20 border-b-2 border-r-2 border-forge-red/20" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        {/* 404 Number */}
        <h1 className="text-[10rem] font-black leading-none text-forge-red/20 sm:text-[14rem]">
          404
        </h1>

        {/* Title */}
        <h2 className="-mt-10 text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
          Page <span className="text-forge-red">Not Found</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-forge-gray-400">
          Looks like this page took a rest day. Head back to the gym floor and
          keep pushing.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-forge-red px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-forge-red-light hover:scale-[1.03] hover:shadow-lg hover:shadow-forge-red/25"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-forge-red px-8 py-4 text-lg font-bold uppercase tracking-wide text-forge-red transition-all duration-300 hover:bg-forge-red hover:text-white hover:scale-[1.03]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
