import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const bridePortraits = [
  "/images/bride1.jpeg",
  "/images/bride2.jpeg",
  "/images/bride3.jpeg",
];

const groomPortraits = [
  "/images/groom1.jpeg",
  "/images/groom2.jpeg",
  "/images/groom3.jpeg",
  "/images/groom4.jpeg",
];

export default function CouplePage() {
  return (
    <main className="min-h-screen bg-white text-[#176044]">
      <SiteHeader />
      <SiteHero
        image="/images/hero5.png"
        imageAlt="Joy and Ayoola together in their wedding attire"
      />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">A little more about us</p>
            <h1 className="font-serif text-4xl md:text-5xl">Meet the Couple</h1>
            <div className="mx-auto my-7 h-px w-10 bg-[#b28a3e]" />
            <p className="leading-7 text-[#49564e]">A few portraits of the bride and groom as they prepare for their wedding day.</p>
          </header>

          <PortraitCollection title="The Bride" name="Joy Oyiza Josiah" photos={bridePortraits} />
          <PortraitCollection title="The Groom" name="Ayoola Peter Olayinka" photos={groomPortraits} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function PortraitCollection({ title, name, photos }: { title: string; name: string; photos: string[] }) {
  const gridColumns = photos.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <section aria-label={title} className="mb-20 last:mb-0">
      <header className="mb-7 border-b border-[#b28a3e]/50 pb-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#b28a3e]">{title}</p>
        <h2 className="mt-2 font-serif text-3xl">{name}</h2>
      </header>
      <div className={`grid grid-cols-2 gap-4 sm:gap-6 ${gridColumns}`}>
        {photos.map((src, index) => (
          <figure key={src}>
            <div className="relative aspect-[4/5] overflow-hidden border border-[#176044]/15 bg-[#f8f7f5]">
              <Image
                src={src}
                alt={`${title} portrait ${index + 1}: ${name}`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[#49564e]">
              {title} · {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
