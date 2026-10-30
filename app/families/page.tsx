import FamilyPortrait from "../components/FamilyPortrait";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const families = [
  {
    title: "Parents of the Bride",
    names: "Pst Matthew Josiah & Mrs Christianah Josiah",
    image: "/images/bride-family.jpeg",
  },
  {
    title: "Parents of the Groom",
    names: "Hon. Ebenezer Olayinka & Mrs Ruth Olayinka",
    image: "/images/groom-family.jpeg",
  },
];

export default function FamiliesPage() {
  return (
    <main className="min-h-screen bg-white text-[#263b31]">
      <SiteHeader />
      <SiteHero compact />
      <section id="page-content" className="scroll-mt-24 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">With love and gratitude</p>
            <h1 className="font-display text-4xl text-[#70263a] md:text-5xl">Our Families</h1>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#49564e]">
              We are grateful for the love, faith, and support of the families who have shaped our lives.
            </p>
          </header>
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            {families.map((family) => (
              <figure key={family.title} className="mx-auto w-full max-w-xs">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#176044]/15 bg-[#f8f7f5]">
                  <FamilyPortrait src={family.image} alt={`${family.title} family portrait`} />
                </div>
                <figcaption className="mt-5 border-t border-[#b28a3e]/45 pt-4 text-center">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#806a3a]">{family.title}</p>
                  <p className="mt-2 font-serif text-lg leading-7 text-[#49564e]">{family.names}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
