import Countdown from "./components/Countdown";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SiteHero from "./components/SiteHero";

export default function Home() {
  return (
    <main className="bg-[#ffffff] text-[#176044]">
      <SiteHeader />
      <SiteHero
        image="/images/hero3.png"
        imageAlt="Joy and Ayoola standing together in their wedding attire"
      />
      <section className="bg-[#f8f7f5] px-6 py-12 text-center sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Counting down to our day</p>
          <Countdown />
          <p className="mx-auto mt-8 max-w-xl font-serif text-xl leading-relaxed text-[#70263a] sm:text-2xl">
            We can&apos;t wait to celebrate our special day with you. Help us capture every moment with Joy.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
