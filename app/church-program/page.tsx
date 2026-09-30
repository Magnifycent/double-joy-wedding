import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

export default function ChurchProgramPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#176044]">
      <SiteHeader />
      <SiteHero
        image="/images/hero1.png"
        imageAlt="Joy and Ayoola together in their wedding attire"
      />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Church Wedding</p>
            <h1 className="font-serif text-4xl md:text-5xl">Order of Service</h1>
            <div className="mx-auto my-7 h-px w-10 bg-[#b28a3e]" />
            <p className="leading-7 text-[#49564e]">
              The church program will be shared here when it is available.
            </p>
          </header>
          <figure className="mx-auto max-w-3xl">
            <div
              role="img"
              aria-label="Placeholder for the church wedding order-of-program image"
              className="flex aspect-[3/4] max-h-[80svh] items-center justify-center border border-[#176044]/20 bg-[#f8f7f5] p-6 sm:p-10"
            >
              <div className="max-w-sm text-center">
                <span aria-hidden="true" className="mx-auto mb-5 block h-px w-12 bg-[#b28a3e]" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#806a3a]">Church program image</p>
                <p className="mt-3 font-serif text-2xl">Order of Service</p>
                <p className="mt-4 text-sm leading-6 text-[#49564e]">The church’s program image will appear in this frame.</p>
              </div>
            </div>
            <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.15em] text-[#806a3a]">
              Program image placeholder · 12 December 2026
            </figcaption>
          </figure>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
