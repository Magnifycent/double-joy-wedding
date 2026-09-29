import Countdown from "../components/Countdown";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white text-[#176044]">
      <SiteHeader />
      <SiteHero
        image="/images/hero3.png"
        imageAlt="Joy and Ayoola together in formal wedding attire"
      />
      <section className="bg-[#ffffff] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Counting down to our day</p>
          <Countdown />
        </div>
      </section>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">The Wedding</p>
            <h1 className="font-serif text-4xl md:text-5xl">Wedding Schedule</h1>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#49564e]">
              We would be honoured to have you with us as we celebrate this beautiful beginning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="border border-[#176044]/15 bg-[#ffffff] p-8 sm:p-10 md:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">01</p>
              <h2 className="mt-6 font-serif text-3xl">Church Wedding</h2>
              <dl className="mt-8 space-y-5 text-sm leading-7 text-[#49564e]">
                <div><dt className="text-[10px] uppercase tracking-[0.2em] text-[#176044]">Date</dt><dd>Saturday, 12 December 2026</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.2em] text-[#176044]">Time</dt><dd>8:00 AM</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.2em] text-[#176044]">Venue</dt><dd>Deeper Life Bible Church HQ<br />Obehira Road, Okene, Kogi State</dd></div>
              </dl>
              <a href="https://www.google.com/maps/dir/?api=1&amp;destination=Deeper+Life+Bible+Church+HQ%2C+Obehira+Road%2C+Okene%2C+Kogi+State%2C+Nigeria" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-[#176044] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#176044] transition hover:bg-[#176044] hover:text-[#ffffff]">Get Directions</a>
            </article>
            <article className="border border-[#b28a3e]/45 bg-white p-8 text-[#176044] sm:p-10 md:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#70263a]">02</p>
              <h2 className="mt-6 font-serif text-3xl">Reception</h2>
              <dl className="mt-8 space-y-5 text-sm leading-7 text-[#49564e]">
                <div><dt className="text-[10px] uppercase tracking-[0.2em] text-[#176044]">Date</dt><dd>Saturday, 12 December 2026</dd></div>
                <div><dt className="text-[10px] uppercase tracking-[0.2em] text-[#176044]">Venue</dt><dd>Zigi&apos;s Event Center<br />Opp. Afims Hotel<br />Obehira Road, Okene</dd></div>
              </dl>
              <a href="https://www.google.com/maps/dir/?api=1&amp;destination=Zigi%27s+Event+Center%2C+Opposite+Afims+Hotel%2C+Obehira+Road%2C+Okene%2C+Kogi+State%2C+Nigeria" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-[#70263a] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#70263a] transition hover:bg-[#70263a] hover:text-white">Get Directions</a>
            </article>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
