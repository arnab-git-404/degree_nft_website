import Link from "next/link";
import { appUrl } from "@/lib/site";
import { ArrowRightIcon, CapIcon } from "@/components/icons";

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/#system", label: "The system" },
  { href: "/#how-it-works", label: "Mechanism" },
  { href: "/faq", label: "FAQ" },
  { href: "/#verify", label: "Verify" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/20 bg-paper/90 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink text-paper">
            <CapIcon className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-[-0.02em]">
            DegreeNFT
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50 sm:inline">
            Academic registry
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.18em] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-cobalt"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/learn"
            className="hidden h-9 items-center border border-ink/25 px-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-cobalt hover:text-cobalt sm:inline-flex xl:hidden"
          >
            New here?
          </Link>
          <a
            href={appUrl}
            className="group inline-flex h-9 items-center gap-2 border border-ink bg-ink px-3.5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-cobalt hover:bg-cobalt sm:px-4"
          >
            Open dApp
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <details className="relative lg:hidden">
            <summary className="flex h-9 cursor-pointer list-none items-center border border-ink/25 px-3 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-cobalt hover:text-cobalt [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 border border-ink bg-paper p-2 shadow-[8px_8px_0_0_rgba(17,16,14,0.12)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-cobalt hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/learn/wallet-basics"
                className="mt-1 block border-t border-ink/20 px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt"
              >
                Start here
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
