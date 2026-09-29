import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const numbers = Array.from({ length: 10 }, (_, index) => String(index + 1).padStart(2, "0"));
const bridesmaidPhotos = [
  { name: "Faith Danladi", image: "/images/Faith%20Danladi.png" },
  { name: "Gloria Ozoza", image: "/images/Gloria%20Ozoza.png" },
  { name: "Shehu Favour", image: "/images/Shehu%20Favour.png" },
];
const groomsmanPhotos = [
  { name: "Gbolahan John Olayinka", image: "/images/Gbolahan%20John%20Olayinka.jpg" },
  { name: "Samuel Ayobami Olayinka", image: "/images/Samuel%20Ayobami%20Olayinka.jpeg" },
];

export default function SquadPage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#176044]">
      <SiteHeader />
      <SiteHero
        image="/images/hero5.png"
        imageAlt="Joy and Ayoola together outdoors"
      />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Standing with us</p>
            <h1 className="font-serif text-4xl md:text-5xl">The Squad</h1>
            <div className="mx-auto my-7 h-px w-10 bg-[#b28a3e]" />
            <p className="leading-7 text-[#49564e]">Our closest friends standing beside us as we celebrate this day.</p>
          </header>
          <div className="grid gap-16 md:grid-cols-2 md:gap-14">
            <SquadGroup title="Bride’s Side" honorRole="Maid of Honor" memberRole="Bridesmaid" memberLabel="Bridesmaids" photos={bridesmaidPhotos} />
            <SquadGroup title="Groom’s Side" honorRole="Best Man" memberRole="Groomsman" memberLabel="Groomsmen" photos={groomsmanPhotos} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function SquadGroup({ title, honorRole, memberRole, memberLabel, photos }: { title: string; honorRole: string; memberRole: string; memberLabel: string; photos: { name: string; image: string }[] }) {
  return (
    <section aria-label={title}>
      <div className="mb-5 border-b border-[#176044]/15 pb-4">
        <h2 className="font-serif text-3xl">{title}</h2>
        <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-[#b28a3e]">Wedding Party</span>
      </div>
      <h3 className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#806a3a]">{honorRole}</h3>
      <div className="max-w-[11rem]"><Portrait role={honorRole} number="" /></div>
      <h3 className="mb-4 mt-9 text-[10px] uppercase tracking-[0.2em] text-[#806a3a]">{memberLabel}</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3">
        {numbers.map((number, index) => {
          const person = photos[index];
          return <Portrait key={number} role={memberRole} number={number} name={person?.name} image={person?.image} />;
        })}
      </div>
    </section>
  );
}

function Portrait({ role, number, name, image }: { role: string; number: string; name?: string; image?: string }) {
  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden border border-[#176044]/15 bg-[#f8f7f5]">
        {image ? (
          <Image src={image} alt={`${name}, ${role}`} fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 190px" className="object-cover" />
        ) : (
          <div role="img" aria-label={`${role} ${number} portrait photo placeholder`} className="absolute inset-0 flex items-end p-3 sm:p-4">
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#49564e]">Portrait photo</span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex items-baseline gap-2 text-xs text-[#49564e]">
        {number && <span className="text-[9px] tracking-[0.15em] text-[#b28a3e]">{number}</span>}
        <span>{name ?? "Name to be added"}</span>
      </figcaption>
    </figure>
  );
}
