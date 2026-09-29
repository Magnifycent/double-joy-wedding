import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/couple", label: "Meet the Couple" },
  { href: "/schedule", label: "Schedule" },
  { href: "/dress-code", label: "Dress Code" },
  { href: "/church-program", label: "Church Program" },
  { href: "/squad", label: "The Squad" },
  { href: "/families", label: "Our Families" },
  { href: "/invitation", label: "Invitation" },
];

const navLinkClass =
  "text-[10px] uppercase tracking-[0.12em] text-[#176044] transition hover:text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e]";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#b28a3e]/35 bg-white shadow-sm">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 md:px-6 md:py-3">
        <Link href="/" aria-label="Double Joy home" className="shrink-0">
          <span className="relative block size-13 overflow-hidden rounded-full bg-[#fffdf1]">
            <Image src="/logo.jpeg" alt="" width={120} height={120} priority className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
          </span>
        </Link>

        <div className="hidden items-center gap-x-4 xl:gap-x-6 2xl:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <details className="group relative 2xl:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#70263a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28a3e] [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="grid w-4 gap-[3px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </summary>
          <div className="absolute right-0 top-full mt-3 flex max-h-[75svh] w-64 flex-col overflow-y-auto border border-[#b28a3e]/50 bg-white px-5 py-3 text-right shadow-xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${navLinkClass} border-b border-[#b28a3e]/20 py-3 last:border-b-0`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
