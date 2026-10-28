"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const dismissedKey = "double-joy-rsvp-prompt-dismissed";

export default function RsvpPrompt() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // The RSVP page is already the response flow, so do not cover it with the prompt.
    if (pathname === "/rsvp") return;

    try {
      if (window.sessionStorage.getItem(dismissedKey)) return;
    } catch {
      // If session storage is unavailable, keep the prompt usable for this visit.
    }

    const timer = window.setTimeout(() => {
      const dialog = dialogRef.current;
      if (dialog && !dialog.open) dialog.showModal();
    }, 900);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  function rememberDismissal() {
    try {
      window.sessionStorage.setItem(dismissedKey, "true");
    } catch {
      // The dialog still closes if this browser blocks session storage.
    }
  }

  function closePrompt() {
    rememberDismissal();
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="rsvp-prompt-title"
      aria-describedby="rsvp-prompt-description"
      onClose={rememberDismissal}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto border-0 bg-transparent p-0 text-[#263b31] backdrop:bg-[#1c3028]/65 backdrop:backdrop-blur-[2px]"
    >
      <div className="relative border border-[#b28a3e]/70 bg-[#fffdfa] px-7 py-10 text-center shadow-xl sm:px-12 sm:py-12">
        <button
          type="button"
          aria-label="Close RSVP invitation"
          onClick={closePrompt}
          className="absolute right-3 top-3 flex size-10 items-center justify-center text-2xl leading-none text-[#70263a] transition hover:text-[#176044] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b28a3e]"
        >
          <span aria-hidden="true">×</span>
        </button>
        <p className="text-[9px] uppercase tracking-[0.25em] text-[#b28a3e]">
          Joy &amp; Ayoola · 12 December 2026
        </p>
        <h2 id="rsvp-prompt-title" className="mx-auto mt-5 max-w-sm font-display text-3xl leading-tight text-[#70263a] sm:text-4xl">
          Will you celebrate with us?
        </h2>
        <span aria-hidden="true" className="mx-auto my-6 block h-px w-12 bg-[#b28a3e]" />
        <p id="rsvp-prompt-description" className="mx-auto max-w-sm text-sm leading-7 text-[#49564e]">
          Kindly let us know if you’ll be joining us for our wedding celebration in Okene.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/rsvp"
            onClick={closePrompt}
            className="inline-flex min-h-11 min-w-40 items-center justify-center border border-[#70263a] bg-[#70263a] px-6 py-3 text-[9px] uppercase tracking-[0.2em] text-white transition hover:border-[#176044] hover:bg-[#176044] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
          >
            RSVP
          </Link>
          <button
            type="button"
            onClick={closePrompt}
            className="min-h-11 px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-[#176044] underline decoration-[#b28a3e]/70 underline-offset-4 transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]"
          >
            Maybe later
          </button>
        </div>
      </div>
    </dialog>
  );
}
