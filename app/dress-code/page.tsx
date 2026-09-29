import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const colors = [
  { name: "Oxblood", className: "bg-[#70263a]" },
  { name: "Gold", className: "bg-[#b28a3e]" },
  { name: "Emerald Green", className: "bg-[#176044]" },
  { name: "White", className: "border border-[#d8d0bc] bg-white" },
];

export default function DressCodePage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#176044]">
      <SiteHeader />
      <SiteHero
        image="/images/hero6.jpeg"
        imageAlt="Joy and Ayoola standing together in their blue wedding outfits"
      />
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Dress Code</p>
          <h1 className="font-serif text-4xl md:text-5xl">Come dressed in our colours</h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#49564e]">
            We invite our guests to celebrate with us in oxblood, gold, emerald green and white.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {colors.map((color) => (
              <div key={color.name}>
                <div className={`mx-auto h-20 w-20 rounded-full sm:h-28 sm:w-28 ${color.className}`} />
                <p className="mt-4 text-[9px] uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.15em]">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
