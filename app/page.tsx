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
      <SiteFooter />
    </main>
  );
}
