import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { faqGroups } from "@/lib/faq";
import { appUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Plain-English answers about DegreeNFT wallets, claiming and sharing degrees, safety, and verification. No crypto knowledge required.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | DegreeNFT",
    description:
      "Plain-English answers about DegreeNFT wallets, claiming and sharing degrees, safety, and verification.",
    url: "/faq",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-ink/20">
          <div
            className="hero-grid pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="border-b border-ink/20 px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:border-b-0 lg:border-r lg:px-12 lg:pb-18 lg:pt-20">
              <div className="flex items-center justify-between gap-4 border-b border-ink/20 pb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60 sm:text-[10px]">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cobalt" />
                  FAQ / The short answers
                </span>
                <span className="hidden sm:block">No crypto homework</span>
              </div>

              <h1 className="mt-10 font-serif text-[clamp(3.8rem,9vw,8rem)] leading-[0.84] tracking-[-0.04em]">
                Questions,
                <br />
                <em className="italic text-cobalt">answered plainly.</em>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                Everything people ask before they claim their first degree.
                Short answers, no jargon, and a link to the full walkthrough
                whenever you want the longer version.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/learn"
                  className="group inline-flex h-11 items-center gap-3 bg-cobalt px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink"
                >
                  Open the step-by-step guide
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`${appUrl}/verify`}
                  className="group inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-ink"
                >
                  Verify a credential
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <aside className="relative bg-[#e7e1d3] px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_47px,rgba(17,16,14,0.07)_48px)]"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                  Jump to
                </p>

                <ol className="mt-5 divide-y divide-ink/15 border-y border-ink/15">
                  {faqGroups.map((group, index) => (
                    <li key={group.id}>
                      <a
                        href={`#${group.id}`}
                        className="group flex items-center justify-between gap-4 py-3.5 text-sm font-medium transition-colors hover:text-cobalt"
                      >
                        <span>{group.title}</span>
                        <span className="flex items-center gap-3 font-mono text-[9px] tracking-[0.14em] text-ink/40">
                          0{index + 1}
                          <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 border border-ink/25 bg-paper/60 p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt">
                    New to wallets?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    Read step 01 first. It explains what a wallet is without a
                    single piece of crypto jargon.
                  </p>
                  <Link
                    href="/learn/wallet-basics"
                    className="mt-3 inline-flex items-center gap-2 border-b border-ink/30 pb-0.5 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors hover:border-cobalt hover:text-cobalt"
                  >
                    Wallet basics
                    <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {faqGroups.map((group, groupIndex) => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-20 border-b border-ink/20"
          >
            <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
              <div className="border-b border-ink/20 px-5 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
                  0{groupIndex + 1} / {group.title}
                </p>
                <p className="mt-5 max-w-[20ch] font-serif text-2xl leading-tight tracking-tight">
                  {group.description}
                </p>
              </div>

              <div className="px-5 sm:px-8 lg:px-12">
                {group.items.map((item) => (
                  <details
                    key={item.id}
                    id={item.id}
                    className="group scroll-mt-24 border-b border-ink/20 last:border-b-0"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                      <h2 className="text-base font-semibold leading-6 sm:text-lg">
                        {item.question}
                      </h2>
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-ink/30 font-mono text-base leading-none text-ink/60 transition-transform duration-200 group-open:rotate-45 group-open:border-cobalt group-open:text-cobalt"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-ink/65">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-cobalt text-paper">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-acid">
              Still have a question?
            </p>
            <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-[24ch] font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] tracking-[-0.04em]">
                The guide has the full walkthrough,{" "}
                <em className="italic text-acid">step by step.</em>
              </h2>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/learn"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-acid px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-paper"
                >
                  Read the guide
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={appUrl}
                  className="group inline-flex h-12 items-center justify-center gap-3 border border-paper/40 px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  Open the dApp
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
