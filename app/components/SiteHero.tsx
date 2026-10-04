"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SiteHero({
  compact = false,
  image,
  imageAlt = "",
}: {
  compact?: boolean;
  image?: string;
  imageAlt?: string;
}) {
  const hasImage = Boolean(image);

  return (
    <section
      aria-labelledby="wedding-hero-title"
      className={`relative flex overflow-hidden px-6 text-center ${hasImage ? "h-[72svh] min-h-[24rem] max-h-[48rem] items-end justify-center bg-[#263b31] pb-1 pt-10 text-white md:items-center md:justify-start md:text-left md:pb-10" : `items-center justify-center bg-white py-14 text-[#176044] ${compact ? "min-h-[24rem] md:min-h-[30rem]" : "min-h-[calc(100svh-5rem)] py-16"}`}`}
    >
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover object-center md:object-contain md:object-right" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/5 md:bg-gradient-to-r md:from-[#263b31] md:via-[#263b31]/85 md:to-[#263b31]/0" />
        </>
      )}
      <div aria-hidden="true" className={`pointer-events-none absolute inset-4 border sm:inset-7 ${hasImage ? "border-white/45" : "border-[#b28a3e]/35"}`} />
      <div className={`relative mx-auto w-full max-w-4xl ${hasImage ? "pb-3 md:ml-[8vw] md:mr-0 md:max-w-[40rem] md:pb-0" : ""}`}>
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-[10px] uppercase tracking-[0.35em] ${hasImage ? "mb-4" : "mb-6"}`}
        >
          A celebration of love
        </motion.p>
        <motion.h1
          id="wedding-hero-title"
          style={{ color: hasImage ? "#ffffff" : "#70263a" }}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`font-serif font-medium leading-none ${hasImage ? "text-4xl text-white sm:text-6xl md:text-6xl lg:text-8xl" : `text-[#70263a] ${compact ? "text-5xl sm:text-6xl md:text-7xl" : "text-6xl sm:text-7xl md:text-8xl"}`}`}
        >
          Double Joy
        </motion.h1>
        <div className={`mx-auto h-px w-14 bg-[#b28a3e] ${hasImage ? "my-4 md:my-7" : "my-7"}`} />
        <p className={`text-xs uppercase tracking-[0.22em] ${hasImage ? "mt-5" : "mt-8"}`}>
          12 December 2026
        </p>
        <p className={`text-xs ${hasImage ? "mt-1" : "mt-2"}`}>Okene, Kogi State</p>
      </div>
    </section>
  );
}
