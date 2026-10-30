import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";

const firstDate = [
  "Interestingly, our first date wasn't really a date in the deliberate sense.",
  "It was an assignment - we both went to one of our church branches. So we went together. No fancy dinner, no movies, just service. Just worship, the Word, and serving side by side.",
  "But even then, it felt different. It felt right.",
  "Looking back now, it was the most perfect way to start because our journey began right where we wanted our foundation to always be: in the presence of God.",
];

const proposal = [
  "I didn't suspect a thing!",
  "It was a casual evening, around 9 PM, when I got a video call from him. He started talking, and at first I thought it was just sweet compliments. I was smiling, listening, completely unsuspecting.",
  "Until the very end when he proposed!",
  "I was so delighted, so surprised, and just in awe of how God fulfilled His word.",
  "You see, back in 2025, I had received an instruction from God and I wrote it down in my journal: 15th of March, 2026, my date of receiving a marriage proposal. And like Mary, I asked, How shall these things be?",
  "And God answered me. He said, Blessed is she who believes, for there shall be a performance of those things spoken to her. And He also said, I will hasten My word to perform it.",
  "I held onto those words.",
  "Interestingly, the church had already reached a decision to allow him to propose on the 15th of March. But it eventually happened on the 16th of March.",
  "I remember on the 15th, I went back to God to remind Him of what He said. And He simply reassured me and gave me deep peace.",
  "And then, the very next day, it happened!",
  "Here we are, a living testimony that God indeed hastens His word to perform it.",
];

const brideStory = [
  "On September 25th, 2024, I walked into the hospital with my Dad. It was supposed to be just another day, just a simple checkup.",
  "For a long time, my heart had made a quiet prayer to God - Lord, keep me for The One. Keep me from distractions. I wasn't looking around, I was just waiting patiently on God.",
  'As soon as I stepped into the hospital premises, something strange happened. I heard a soft, clear whisper in my heart that said, "Your husband is here."',
  "I chuckled within me and quickly brushed it aside. Your husband is here? In the hospital?",
  "I bumped into a few familiar faces as we walked through. I greeted them, smiled, but in my heart I knew - none of them was what that voice meant. So I just went ahead for the test.",
  "When it was time, I walked into an office. There were two people in there, busy at work.",
  "One of them is now my Love, my most favourite person in this world, but on that day, he was simply a cheerful stranger. He was focused on the system, working diligently with a bright smile on his face. There was a certain calm and kindness about him.",
  "I greeted both of them. He looked up, responded so politely, and immediately returned to his work. No extra talk, no lingering stares. Just simple courtesy.",
  "I left the room after he was done checking me, thinking that was the end of it.",
  "But on my way out, I had to go back to collect my report. And that was when God ordered our steps to align.",
  "He handed me the report, and we started talking properly for the first time. His voice was warm, his manner so respectful. In those few minutes of conversation, I realized we were speaking the same language of faith. We share similar faith and values - the very things I had been praying for.",
  "What I thought was just a routine hospital visit with my Dad turned out to be the day God was answering a prayer I had prayed in secret.",
  "I came for a checkup, but I found the beginning of forever. Glory to God",
];

const groomStory = [
  "Our love story began in late September 2024 at the Radiology Department of Confluence University of Science and Technology Teaching Hospital, popularly known as Reference Hospital, Okene, Kogi State, where I was working.",
  "Joy came in for a checkup, and the moment she walked into the room, something changed. The room seemed brighter, my stress disappeared, and an unexplainable peace filled my heart. She was a stranger, yet something about her felt so special. I gathered the courage to ask for her contact, and when she later reached out regarding her results, our conversations began.",
  "What started as a simple encounter blossomed into a beautiful friendship, prayer partnership, and shared purpose. By November 2024, we were already prayer buddies, growing closer through faith, meaningful conversations, and our love for God. Together, we dreamed, prayed, and built the APEX Christian Network.",
  "As I got to know her, I discovered a woman whose beauty goes far beyond her appearance. Her wisdom, maturity, humility, spirituality, kindness, and beautiful heart continually amazed me. She became my friend, my confidant, my prayer partner, and one of the greatest blessings of my life.",
  "In March 2026, I took a leap of faith and asked her to spend forever with me, and she said YES! ❤️",
  "Joy is not just an answered prayer. She is the absolute best, far more than I could have prayed for or imagined. She is my favourite person, my partner in purpose, and the woman with whom I look forward to building a Christ-centred home.",
];

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white text-[#263b31]">
      <SiteHeader />
      <SiteHero
        compact
        image="/images/hero6.jpeg"
        imageAlt="Joy and Ayoola standing together in blue formal outfits"
      />
      <section id="page-content" className="scroll-mt-24 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#b28a3e]">Our Story</p>
            <h1 className="font-display text-5xl leading-none md:text-7xl">A journey held by faith</h1>
            <span aria-hidden="true" className="mx-auto my-7 block h-px w-12 bg-[#b28a3e]" />
            <p className="mx-auto max-w-xl leading-7 text-[#49564e]">
              From an ordinary hospital visit to a promise of forever, this is our story in our own words.
            </p>
          </header>

          <nav aria-label="Our story chapters" className="mx-auto mb-20 flex max-w-4xl flex-wrap justify-center gap-x-7 gap-y-4 border-y border-[#b28a3e]/35 py-5 md:mb-28">
            {[
              ["first-date", "The beginning"],
              ["proposal", "The proposal"],
              ["bride", "Her story"],
              ["groom", "His story"],
            ].map(([id, label], index) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#176044] transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
              >
                <span className="text-[#b28a3e]">0{index + 1}</span>{label}
              </a>
            ))}
          </nav>

          <div className="space-y-20 md:space-y-28">
            <Chapter id="first-date" number="01" title="Our First Date" paragraphs={firstDate} />
            <Chapter id="proposal" number="02" title="The Proposal" paragraphs={proposal} />

            <section aria-labelledby="two-perspectives-title">
              <header className="mb-10 text-center md:mb-14">
                <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#b28a3e]">September 2024</p>
                <h2 id="two-perspectives-title" className="font-display text-4xl md:text-5xl">The day our paths crossed</h2>
              </header>
              <div className="grid gap-12 border-t border-[#b28a3e]/50 pt-8 md:grid-cols-2 md:gap-16">
                <VoiceStory id="bride" number="03" title="Her Story" paragraphs={brideStory} />
                <VoiceStory id="groom" number="04" title="His Story" paragraphs={groomStory} />
              </div>
            </section>

            <blockquote className="mx-auto max-w-4xl border-y border-[#b28a3e]/50 py-10 text-center md:py-14">
              <span aria-hidden="true" className="mb-5 block font-serif text-5xl leading-none text-[#b28a3e]">“</span>
              <p className="font-serif text-3xl leading-snug text-[#70263a] md:text-4xl">
                What began as an ordinary meeting in a hospital has become an extraordinary love story, and by God&apos;s grace, we are preparing to begin our forever together. 💍❤️
              </p>
              <cite className="mt-6 block text-[9px] not-italic uppercase tracking-[0.22em] text-[#176044]">Ayoola · The Groom</cite>
            </blockquote>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Chapter({
  id,
  number,
  title,
  paragraphs,
}: {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-t border-[#b28a3e]/50 pt-8 md:grid md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:pt-10">
      <header className="mb-7 md:mb-0">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#b28a3e]">Chapter {number}</p>
        <h2 id={`${id}-title`} className="mt-3 font-display text-4xl md:text-5xl">{title}</h2>
      </header>
      <div className="space-y-5 text-[15px] leading-8 text-[#49564e] md:pt-1">
        {paragraphs.map((paragraph, index) => (
          <p key={`${id}-${index}`} className={index === 0 ? "font-serif text-xl leading-relaxed text-[#176044]" : ""}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function VoiceStory({
  id,
  number,
  title,
  paragraphs,
}: {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <article id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <header className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#b28a3e]">Chapter {number}</p>
        <h3 id={`${id}-title`} className="mt-2 font-display text-4xl text-[#70263a]">{title}</h3>
      </header>
      <div className="space-y-5 text-[14px] leading-7 text-[#49564e]">
        {paragraphs.map((paragraph, index) => (
          <p key={`${id}-${index}`} className={index === 0 ? "font-serif text-lg leading-relaxed text-[#176044]" : ""}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
