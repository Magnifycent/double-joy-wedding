import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

export default function InvitationPage() {
  return (
    <main className="min-h-screen bg-white text-[#176044]">
      <SiteHeader />
      <SiteHero compact />
      <section className="px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#176044]">You are invited</p>
          <h1 className="font-serif text-4xl md:text-5xl">We would love to celebrate with you.</h1>
          <Image
            src="/invitation.png"
            alt="Wedding invitation for Joy Oyiza Josiah and Ayoola Peter Olayinka, Saturday 12 December 2026 in Okene, Kogi State"
            width={1200}
            height={1600}
            unoptimized
            className="mx-auto mt-10 h-auto w-full max-w-sm"
          />
          <a href="/invitation.png" download="Joy-and-Ayoola-Wedding-Invitation.png" className="mt-8 inline-block border border-[#70263a] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-[#70263a] transition hover:bg-[#70263a] hover:text-white">Download Invitation</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
