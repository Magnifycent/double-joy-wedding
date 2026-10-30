"use client";

import Image from "next/image";
import { useState } from "react";

export default function FamilyPortrait({
  src,
  alt,
  fit = "cover",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}) {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  if (imageUnavailable) {
    return (
      <div role="img" aria-label={alt} className="absolute inset-0 flex items-end border border-[#176044]/15 bg-[#f8f7f5] p-5">
        <span className="text-[9px] uppercase tracking-[0.18em] text-[#68756c]">Family portrait</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 88vw, 42vw"
      className={fit === "contain" ? "object-contain" : "object-cover"}
      onError={() => setImageUnavailable(true)}
    />
  );
}
