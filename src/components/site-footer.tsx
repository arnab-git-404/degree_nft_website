import Link from "next/link";
import { appUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full bg-ink text-paper">
      <div className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-paper/45">
              The academic registry
            </p>
            <p className="mt-3 font-serif text-6xl leading-none tracking-[-0.04em] sm:text-8xl">
              DegreeNFT<span className="text-acid">.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-paper/60">
              A permanent, portable record of academic achievement. Built for the
              people who earn it and the people who need to trust it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-paper/40">
                Navigate
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/#system"
                    className="transition-colors hover:text-acid"
                  >
                    The system
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="transition-colors hover:text-acid"
                  >
                    Mechanism
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn"
                    className="transition-colors hover:text-acid"
                  >
                    Start here
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="transition-colors hover:text-acid"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-paper/40">
                Access
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={appUrl}
                    className="transition-colors hover:text-acid"
                  >
                    Open dApp
                  </a>
                </li>
                <li>
                  <a
                    href={`${appUrl}/verify`}
                    className="transition-colors hover:text-acid"
                  >
                    Verify credential
                  </a>
                </li>
                <li>
                  <Link
                    href="/learn/wallet-basics"
                    className="transition-colors hover:text-acid"
                  >
                    New to crypto?
                  </Link>
                </li>
                <li className="flex items-center gap-2 text-paper/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  Solana devnet
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/20 pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© DegreeNFT. All rights reserved.</span>
          <span>Credentials, not PDFs.</span>
        </div>
      </div>
    </footer>
  );
}
