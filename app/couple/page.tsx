import Image from "next/image";
import Link from "next/link";
import FamilyPortrait from "../components/FamilyPortrait";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const profiles = [
  {
    id: "bride",
    title: "Meet the Bride 💍",
    name: "Joy Josiah",
    photos: ["/images/bride2.jpeg", "/images/bride3.jpeg"],
    paragraphs: [
      "Joy Josiah hails from Okene Local Government Area, Kogi State, Nigeria. She is a woman of faith, purpose, and compassion who desires to live a life that honours God, reflects His love, and positively impacts the lives of others. Her faith is an important part of her journey, inspiring her to embrace life with gratitude, humility, and a heart for service.",
      "Joy is a law graduate of Ahmadu Bello University and is currently undergoing professional legal training at the Nigerian Law School. She is passionate about justice, particularly in the areas of Alternative Dispute Resolution (ADR), technology law, and intellectual property. She hopes to build a fulfilling legal career through which she can contribute meaningfully to society and make a difference in the lives of others.",
      "Beyond her academic and professional pursuits, Joy has a deep interest in volunteering, legal advocacy, community development, and promoting access to justice. She enjoys opportunities to serve, support vulnerable people, empower communities, and contribute to initiatives that promote fairness and positive social change. Her experiences in leadership and Alternative Dispute Resolution have also strengthened her appreciation for dialogue, understanding, and peaceful conflict resolution.",
      "Looking to the future, Joy hopes to grow into a distinguished legal practitioner while remaining committed to her faith, personal development, and service to humanity. She values meaningful relationships, continuous growth, and the opportunity to live a life guided by God's purpose.",
      "As she begins this beautiful new chapter, Joy looks forward to the joys and responsibilities of marriage, building a Christ-centred home rooted in love, friendship, understanding, and mutual support. Above all, she hopes to grow alongside her partner, nurture a family grounded in faith, and build a life together that honours God and reflects His goodness.",
    ],
    storyLink: "/story#bride",
  },
  {
    id: "groom",
    title: "Meet the Groom",
    name: "Ayoola Olayinka",
    photos: ["/images/groom2.jpeg", "/images/groom4.jpeg"],
    paragraphs: [
      "Ayoola Olayinka is a born-again child of God whose life reflects a deep commitment to faith, prayer, service, and servant leadership. His journey in Christian ministry spans years of service in the Deeper Life Campus Fellowship and Deeper Life Corpers Fellowship in Nigeria, where he served in various leadership roles, including Follow-Up Coordinator and Associate Coordinator in Kogi State. He is the founder of APEX CN, a prayer community dedicated to intercession and spiritual growth, and currently serves as Prayer Coordinator for OASIS, a young adult group in his campus.",
      "Originally from Ilesa, Osun State, Nigeria, Ayoola is a Master of Public Health candidate, concentrating in Environmental and Global Health. With a background in epidemiology, biostatistics, clinical diagnostics, and community health, he has contributed to public health evaluation and neglected tropical disease programs in Nigeria. He currently serves as a Project Coordinator at a Laboratory coordinating mosquito surveillance in collaboration with citizen scientists. He is actively involved in campus leadership through multiple student organizations.",
      "Ayoola is passionate about integrating faith, academics, and service to advance community well-being and health equity. His long-term goal is to pursue an MD-PhD specializing in vector-borne and infectious diseases, combining research, public health practice, and a commitment to serving humanity.",
    ],
    storyLink: "/story#groom",
  },
];

export default function CouplePage() {
  return (
    <main className="min-h-screen bg-white text-[#263b31]">
      <SiteHeader />
      <SiteHero
        image="/images/hero5.png"
        imageAlt="Joy and Ayoola together in their wedding attire"
      />
      <section id="page-content" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-20 max-w-2xl text-center md:mb-24">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">
              A little more about us
            </p>
            <h1 className="font-display text-5xl md:text-6xl">Meet the Couple</h1>
            <span aria-hidden="true" className="mx-auto my-7 block h-px w-12 bg-[#b28a3e]" />
            <p className="leading-7 text-[#49564e]">
              A glimpse into the faith, purpose, and service that shape each of us.
            </p>
          </header>

          <div className="space-y-24 md:space-y-32">
            {profiles.map((profile, profileIndex) => (
              <article key={profile.id} aria-labelledby={`${profile.id}-title`}>
                <header className="mb-9 border-b border-[#b28a3e]/45 pb-5 md:mb-12">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#b28a3e]">{profile.title}</p>
                  <h2 id={`${profile.id}-title`} className="mt-2 font-display text-4xl md:text-5xl">
                    {profile.name}
                  </h2>
                </header>
                <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
                  <div className={profileIndex === 1 ? "md:order-2" : "md:order-1"}>
                    <div className="grid grid-cols-2 gap-3 sm:gap-5">
                      {profile.photos.map((src, index) => (
                        <figure key={src} className={index === 1 ? "mt-9 sm:mt-14" : ""}>
                          <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f7f5]">
                            <Image
                              src={src}
                              alt={`Portrait of ${profile.name}`}
                              fill
                              sizes="(max-width: 768px) 44vw, 25vw"
                              className="object-cover"
                            />
                          </div>
                          <figcaption className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#806a3a]">
                            {profile.name} · {String(index + 1).padStart(2, "0")}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                  <div className={profileIndex === 1 ? "md:order-1" : "md:order-2"}>
                    <div className="space-y-5 text-[14px] leading-7 text-[#49564e] md:text-[15px] md:leading-8">
                      {profile.paragraphs.map((paragraph, index) => (
                        <p key={`${profile.id}-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                    <Link
                      href={profile.storyLink}
                      className="mt-8 inline-flex items-center gap-3 border-b border-[#b28a3e] pb-2 text-[10px] uppercase tracking-[0.18em] text-[#176044] transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
                    >
                      Read our love story <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section id="families" aria-labelledby="families-title" className="mt-24 scroll-mt-28 border-t border-[#b28a3e]/50 pt-16 md:mt-32 md:pt-20">
            <header className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">With love and gratitude</p>
              <h2 id="families-title" className="font-display text-4xl text-[#70263a] md:text-5xl">Our Families</h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#49564e]">We are grateful for the love, faith, and support of the families who have shaped our lives.</p>
            </header>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <FamilyGroup
                title="Parents of the Bride"
                names="Pst Matthew Josiah & Mrs Christianah Josiah"
                image="/images/bride-family.jpeg"
              />
              <FamilyGroup
                title="Parents of the Groom"
                names="Hon. Ebenezer Olayinka & Mrs Ruth Olayinka"
                image="/images/groom-family.jpeg"
              />
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function FamilyGroup({ title, names, image }: { title: string; names: string; image: string }) {
  return (
    <figure>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden border border-[#176044]/15 bg-[#f8f7f5]">
        <FamilyPortrait src={image} alt={`${title} family portrait`} />
      </div>
      <figcaption className="mt-5 border-t border-[#b28a3e]/45 pt-4 text-center">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#806a3a]">{title}</p>
        <p className="mt-2 font-serif text-lg leading-7 text-[#49564e]">{names}</p>
      </figcaption>
    </figure>
  );
}
