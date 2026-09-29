import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#b28a3e]/40 bg-white px-6 py-9 text-center">
      <Link href="/" className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-[#b28a3e]">
        <span className="sr-only">Double Joy home</span>
        <span className="relative block size-16 overflow-hidden rounded-full bg-[#fffdf1]">
          <Image src="/logo.jpeg" alt="" width={148} height={148} className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
        </span>
      </Link>
      <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#176044]">
        Joy &amp; Ayoola • 12.12.2026
      </p>
      <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-[#70263a]/75">
        Designed by THE MAGNIFYCENT
      </p>
    </footer>
  );
}
