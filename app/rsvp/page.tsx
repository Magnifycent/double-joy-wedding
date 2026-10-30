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
      <section id="page-content" className="scroll-mt-24 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#806a3a]">Kindly reply</p>
            <h1 className="font-display text-5xl md:text-6xl">Will you celebrate with us?</h1>
            <span aria-hidden="true" className="mx-auto my-7 block h-px w-12 bg-[#b28a3e]" />
            <p className="text-base leading-7 text-[#38463d]">
              Please let us know if you’ll be joining us. Your reply will help us prepare for the celebration.
            </p>
          </header>

          <div className="mx-auto max-w-3xl border-t border-[#b28a3e]/55 pt-7 md:pt-9">
            <RsvpForm />
          </div>

          <section aria-labelledby="rsvp-help-title" className="mt-16 border-t border-[#b28a3e]/45 pt-9 md:mt-20">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#806a3a]">RSVP assistance</p>
              <h2 id="rsvp-help-title" className="mt-3 font-display text-3xl md:text-4xl">
                Questions about your reply?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#38463d]">
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
                    className="mt-2 inline-block text-base font-medium text-[#176044] underline decoration-[#b28a3e]/70 underline-offset-4 transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
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
