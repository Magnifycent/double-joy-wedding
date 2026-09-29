import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const families = [
  { title: "Parents of the Bride", names: ["Pst Matthew Josiah", "Mrs Christainah Josiah"] },
  { title: "Parents of the Groom", names: ["Hon. Ebenezer Olayinka", "Mrs Ruth Olayinka"] },
];

export default function FamiliesPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#176044]">
      <SiteHeader />
      <SiteHero compact />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">With love and gratitude</p>
            <h1 className="font-serif text-4xl md:text-5xl">Our Families</h1>
          </header>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {families.map((family) => (
              <section key={family.title} aria-label={family.title}>
                <h2 className="mb-5 border-t border-[#b28a3e]/60 pt-5 text-center text-[10px] uppercase tracking-[0.2em] text-[#806a3a]">{family.title}</h2>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {family.names.map((name) => <Portrait key={name} name={name} />)}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Portrait({ name }: { name: string }) {
  return (
    <figure>
      <div role="img" aria-label={`Portrait photo placeholder for ${name}`} className="flex aspect-[4/5] items-end border border-[#176044]/15 bg-[#f8f7f5] p-3 sm:p-4">
        <span className="text-[9px] uppercase tracking-[0.15em] text-[#49564e]">Portrait photo</span>
      </div>
      <figcaption className="mt-3 text-xs text-[#49564e]">{name}</figcaption>
    </figure>
  );
}
