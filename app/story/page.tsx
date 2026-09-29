import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#176044]">
      <SiteHeader />
      <SiteHero
        compact
        image="/images/hero2.png"
        imageAlt="Joy and Ayoola seated together in their wedding attire"
      />
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl">Two hearts, one journey.</h1>
          <div className="mx-auto my-7 h-px w-10 bg-[#b28a3e]" />
          <p className="leading-8 text-[#49564e]">
            Our story is one of friendship, love, growth and grace. After more than two beautiful years together, we are grateful to begin this new chapter surrounded by the people we love.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
