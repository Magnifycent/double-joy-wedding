import RsvpForm from "../components/RsvpForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const rsvpContacts = [
  { name: "Gideon", phone: "080 6528 0648", href: "tel:+2348065280648" },
  { name: "Gbolahan", phone: "070 3925 4806", href: "tel:+2347039254806" },
  { name: "Blessing", phone: "090 3069 8689", href: "tel:+2349030698689" },
];

export default function RsvpPage() {
  return (
    <main className="min-h-screen bg-white text-[#263b31]">
      <SiteHeader />
      <SiteHero compact />
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Kindly reply</p>
            <h1 className="font-display text-5xl md:text-6xl">Will you celebrate with us?</h1>
            <span aria-hidden="true" className="mx-auto my-7 block h-px w-12 bg-[#b28a3e]" />
            <p className="leading-7 text-[#49564e]">
              Please let us know if you’ll be joining us on Saturday, 12 December 2026. Your reply will help us prepare for the day.
            </p>
          </header>

          <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <aside className="border-t border-[#b28a3e]/55 pt-6 md:sticky md:top-28 md:self-start">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b28a3e]">The day</p>
              <h2 className="mt-3 font-display text-3xl text-[#70263a]">Saturday, 12 December 2026</h2>
              <dl className="mt-7 space-y-6 text-sm leading-6 text-[#49564e]">
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#176044]">Church Wedding</dt>
                  <dd className="mt-1">9:00 AM<br />Deeper Life Bible Church Regional Headquarters<br />Obehira Road, Okene</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-[#176044]">Reception</dt>
                  <dd className="mt-1">12:00 Noon<br />Zigi&apos;s Event Center<br />Opp. Afims Hotels, Obehira Road</dd>
                </div>
              </dl>
            </aside>

            <div className="border-t border-[#b28a3e]/55 pt-6">
              <RsvpForm />
            </div>
          </div>

          <section aria-labelledby="rsvp-help-title" className="mt-16 border-t border-[#b28a3e]/45 pt-9 md:mt-20">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b28a3e]">RSVP assistance</p>
              <h2 id="rsvp-help-title" className="mt-3 font-display text-3xl md:text-4xl">
                Questions about your reply?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#49564e]">
                You can contact any of us directly if you need help with your response.
              </p>
            </div>
            <div className="mt-8 grid border-y border-[#b28a3e]/45 sm:grid-cols-3">
              {rsvpContacts.map((contact, index) => (
                <address
                  key={contact.name}
                  className={`not-italic px-5 py-5 text-center ${index < rsvpContacts.length - 1 ? "border-b border-[#b28a3e]/25 sm:border-b-0 sm:border-r" : ""}`}
                >
                  <p className="font-serif text-2xl text-[#70263a]">{contact.name}</p>
                  <a
                    href={contact.href}
                    aria-label={`Call ${contact.name} at ${contact.phone}`}
                    className="mt-2 inline-block text-sm text-[#176044] underline decoration-[#b28a3e]/70 underline-offset-4 transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
                  >
                    {contact.phone}
                  </a>
                </address>
              ))}
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
