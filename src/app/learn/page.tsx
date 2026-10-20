import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { appUrl } from "@/lib/site";
import { glossary, guideSteps, type GuideStep } from "@/lib/guide";
import { featuredFaqIds, getFaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "New to crypto? Start here",
  description:
    "A plain-English, step-by-step guide to claiming and sharing a DegreeNFT academic credential. No crypto experience needed.",
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title: "New to crypto? Start here | DegreeNFT",
    description:
      "A plain-English, step-by-step guide to claiming and sharing a DegreeNFT academic credential. No crypto experience needed.",
    url: "/learn",
  },
};

const graduateSteps = guideSteps.slice(0, 5);
const verifierSteps = guideSteps.slice(5);

const featuredFaqs = featuredFaqIds.flatMap((id) => {
  const item = getFaqItem(id);
  return item ? [item] : [];
});

function StepList({ steps }: { steps: GuideStep[] }) {
  return (
    <ol>
      {steps.map((step) => (
        <li key={step.slug}>
          <Link
            href={`/learn/${step.slug}`}
            className="group grid gap-4 border-b border-ink/20 px-5 py-7 transition-colors hover:bg-cobalt hover:text-paper sm:px-8 lg:grid-cols-[6rem_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:px-12"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl leading-none lg:text-5xl">
                {step.number}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 group-hover:text-paper/50 lg:hidden">
                {step.duration}
              </span>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt group-hover:text-acid">
                {step.navLabel}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                {step.title.lead}{" "}
                <em className="italic">{step.title.accent}</em>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60 group-hover:text-paper/65">
                {step.summary}
              </p>
            </div>
            <div className="hidden items-center gap-4 lg:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40 group-hover:text-paper/50">
                {step.duration}
              </span>
              <span className="flex h-10 w-10 items-center justify-center border border-ink/25 transition-colors group-hover:border-paper/40 group-hover:bg-paper group-hover:text-ink">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function LearnPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-ink/20">
          <div
            className="hero-grid pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="border-b border-ink/20 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:border-b-0 lg:border-r lg:px-12 lg:pb-20 lg:pt-20">
              <div className="flex items-center justify-between gap-4 border-b border-ink/20 pb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60 sm:text-[10px]">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cobalt" />
                  Guide / For humans, not crypto natives
                </span>
                <span className="hidden sm:block">No jargon required</span>
              </div>

              <h1 className="mt-10 font-serif text-[clamp(3.9rem,10vw,9rem)] leading-[0.82] tracking-[-0.04em] sm:mt-12">
                New to crypto?
                <br />
                <em className="italic text-cobalt">Start here.</em>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                You do not need to understand blockchain, buy a coin, or become a
                crypto person. If you can install an app and follow a few steps,
                you can own and share a degree.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/learn/wallet-basics"
                  className="group inline-flex h-11 items-center gap-3 bg-cobalt px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink"
                >
                  Start with step 01
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/faq"
                  className="group inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-ink"
                >
                  Read the FAQ
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/20 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/50">
                <div className="flex gap-2">
                  <dt>Length</dt>
                  <dd className="text-ink">6 short steps</dd>
                </div>
                <div className="flex gap-2">
                  <dt>Time</dt>
                  <dd className="text-ink">~20 minutes</dd>
                </div>
                <div className="flex gap-2">
                  <dt>Cost</dt>
                  <dd className="text-ink">Free to read</dd>
                </div>
              </dl>
            </div>

            <aside className="relative bg-[#e7e1d3] px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_47px,rgba(17,16,14,0.07)_48px)]"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                  Before you start
                </p>

                <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
                  {[
                    "A phone or laptop",
                    "An email address",
                    "20 spare minutes",
                    "Zero crypto knowledge",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-sm font-medium">{item}</span>
                      <span className="font-mono text-[9px] tracking-[0.14em] text-ink/40">
                        0{index + 1}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border border-ink/25 bg-paper/60 p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt">
                    One rule
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    Never share your recovery phrase. Not with a university, a
                    wallet app, or anyone claiming to be support.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="steps" className="scroll-mt-16 border-b border-ink/20">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="border-b border-ink/20 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
                01 / The path
              </p>
              <p className="mt-6 max-w-[17ch] font-serif text-2xl leading-tight tracking-tight">
                Six steps from “what is a wallet?” to a verified degree.
              </p>
              <p className="mt-5 max-w-[24ch] text-sm leading-6 text-ink/60">
                Do them in order the first time. After that, jump to whichever
                step you need.
              </p>
            </div>

            <div>
              <div className="border-b border-ink/20 bg-paper px-5 py-3 sm:px-8 lg:px-12">
                <p className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em]">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-cobalt" />
                    For graduates
                  </span>
                  <span className="text-ink/45">Steps 01–05</span>
                </p>
              </div>
              <StepList steps={graduateSteps} />

              <div className="border-b border-ink/20 bg-paper px-5 py-3 sm:px-8 lg:px-12">
                <p className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em]">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-acid" />
                    For employers & anyone verifying
                  </span>
                  <span className="text-ink/45">Step 06</span>
                </p>
              </div>
              <StepList steps={verifierSteps} />
            </div>
          </div>
        </section>

        <section className="border-b border-ink/20">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="border-b border-ink/20 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
                02 / Plain English
              </p>
              <p className="mt-6 max-w-[18ch] font-serif text-2xl leading-tight tracking-tight">
                Words that stop being scary.
              </p>
            </div>

            <div className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.03em]">
                No jargon. Just the words{" "}
                <em className="italic text-cobalt">you need.</em>
              </h2>

              <dl className="mt-12 grid border-t border-ink/20 sm:grid-cols-2">
                {glossary.map((item, index) => (
                  <div
                    key={item.term}
                    className={`border-b border-ink/20 py-7 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-ink/20 sm:pr-8"
                        : "sm:pl-8"
                    }`}
                  >
                    <dt className="font-serif text-2xl tracking-tight sm:text-3xl">
                      {item.term}
                    </dt>
                    <dd className="mt-3 max-w-md text-sm leading-6 text-ink/65">
                      {item.meaning}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/20 bg-acid">
          <div className="grid gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-12 lg:py-16">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em]">
                Safety / Read this once
              </p>
              <h2 className="mt-6 max-w-[22ch] font-serif text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                The one rule: never share your{" "}
                <em className="italic text-cobalt">recovery phrase.</em>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-ink/70">
                No real university, wallet, or support team will ever ask for it.
                Not by email, not in a DM, not on a call. If someone does, it is
                a scam — close the conversation and keep the words offline.
              </p>
            </div>

            <Link
              href="/learn/create-wallet"
              className="group inline-flex h-12 items-center gap-3 border border-ink bg-ink px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-acid transition-colors hover:bg-paper hover:text-ink"
            >
              See how to store it
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section className="border-b border-ink/20">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="border-b border-ink/20 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
                03 / Still wondering
              </p>
              <p className="mt-6 max-w-[16ch] font-serif text-2xl leading-tight tracking-tight">
                The questions almost everyone asks.
              </p>
            </div>

            <div className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
              <div className="grid border-t border-ink/20 sm:grid-cols-2">
                {featuredFaqs.map((faq, index) => (
                  <Link
                    key={faq.id}
                    href={`/faq#${faq.id}`}
                    className={`group border-b border-ink/20 py-6 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-ink/20 sm:pr-8"
                        : "sm:pl-8"
                    }`}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt">
                      Question 0{index + 1}
                    </span>
                    <p className="mt-3 max-w-sm font-serif text-2xl leading-tight tracking-tight">
                      {faq.question}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors group-hover:border-cobalt group-hover:text-cobalt">
                      Read the answer
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  All questions
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cobalt text-paper">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-acid">
              Ready when you are
            </p>
            <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-[22ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.86] tracking-[-0.04em]">
                The best way to get it is to{" "}
                <em className="italic text-acid">do step one.</em>
              </h2>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/learn/wallet-basics"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-acid px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-paper"
                >
                  Start with wallet basics
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
