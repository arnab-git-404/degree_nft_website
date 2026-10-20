import Link from "next/link";
import { appUrl } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

const tickerItems = [
  "Issued on Solana",
  "Student owned",
  "Tamper evident",
  "Verified in seconds",
  "No middlemen",
  "Permanent record",
];

const principles = [
  {
    title: "Issued at the source",
    description:
      "Universities publish credentials from a verified registry, not from an inbox.",
  },
  {
    title: "Owned by the graduate",
    description:
      "Every degree lives in the student wallet, ready to share for the rest of their career.",
  },
  {
    title: "Verified in the open",
    description:
      "Employers confirm the issuer and the record without a phone call or a PDF attachment.",
  },
];

const steps = [
  {
    number: "01",
    title: "Issue",
    description:
      "A verified university allocates a credential to a student wallet and anchors its metadata on-chain.",
    detail: "University admin",
  },
  {
    number: "02",
    title: "Claim",
    description:
      "The graduate accepts the allocation and holds a permanent credential NFT in their own wallet.",
    detail: "Student wallet",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Anyone can inspect the issuer, the degree, and the on-chain record in seconds.",
    detail: "Public registry",
  },
];

const audiences = [
  {
    label: "Universities",
    description:
      "Issue degrees once and keep a permanent, auditable record of every cohort.",
  },
  {
    label: "Students",
    description:
      "Carry proof of achievement in your own wallet, not in a drawer or a forgotten portal.",
  },
  {
    label: "Employers",
    description:
      "Check the issuer, the degree, and the record without waiting on a verification desk.",
  },
];

function Ticker() {
  return (
    <div className="overflow-hidden border-b border-ink/20 bg-cobalt py-3 text-paper">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {tickerItems.map((item) => (
              <span
                key={item}
                className="mx-6 font-mono text-[10px] uppercase tracking-[0.22em]"
              >
                {item}
                <span className="ml-6 text-acid">+</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-ink/20">
          <div
            className="pointer-events-none absolute inset-0 hero-grid"
            aria-hidden="true"
          />

          <div className="relative grid w-full lg:grid-cols-[1.35fr_0.65fr]">
            <div className="border-b border-ink/20 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:border-b-0 lg:border-r lg:px-12 lg:pb-20 lg:pt-20">
              <div className="flex items-center justify-between gap-4 border-b border-ink/20 pb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60 sm:text-[10px]">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cobalt" />
                  On-chain credential registry
                </span>
                <span className="hidden sm:block">Solana / Devnet</span>
              </div>

              <h1 className="mt-10 font-serif text-[clamp(4.2rem,11vw,10.5rem)] leading-[0.8] tracking-[-0.04em] sm:mt-12">
                Degrees
                <br />
                that <em className="italic text-cobalt">prove</em>
                <br />
                themselves.
              </h1>

              <div className="mt-10 grid max-w-2xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                  DegreeNFT gives universities a secure way to issue academic
                  credentials on-chain, gives students true ownership, and gives
                  employers instant proof of authenticity.
                </p>
                <p className="hidden max-w-[13ch] border-l border-ink/20 pl-4 font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-ink/45 sm:block">
                  A degree should outlive the portal that issued it.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={appUrl}
                  className="group inline-flex h-11 items-center gap-3 bg-cobalt px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink"
                >
                  Open the dApp
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`${appUrl}/verify`}
                  className="group inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-ink"
                >
                  Verify a credential
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <dl className="mt-14 grid max-w-2xl grid-cols-3 border-t border-ink/20 pt-5">
                <div className="pr-4">
                  <dt className="font-serif text-2xl tracking-tight sm:text-3xl">
                    100%
                  </dt>
                  <dd className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/50 sm:text-[9px]">
                    Student owned
                  </dd>
                </div>
                <div className="border-l border-ink/20 px-4">
                  <dt className="font-serif text-2xl tracking-tight sm:text-3xl">
                    0
                  </dt>
                  <dd className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/50 sm:text-[9px]">
                    Middlemen
                  </dd>
                </div>
                <div className="border-l border-ink/20 pl-4">
                  <dt className="font-serif text-2xl tracking-tight sm:text-3xl">
                    &lt;1 min
                  </dt>
                  <dd className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/50 sm:text-[9px]">
                    To verify
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="relative flex min-h-[560px] flex-col justify-between overflow-hidden bg-[#e7e1d3] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,transparent,transparent_47px,rgba(17,16,14,0.07)_48px)]"
                aria-hidden="true"
              />
              <span
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[8px] uppercase tracking-[0.35em] text-ink/35 lg:block"
                aria-hidden="true"
              >
                Official specimen
              </span>

              <div className="relative flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                <span>Specimen / 001</span>
                <span>Registry copy</span>
              </div>

              <div className="relative mx-auto my-10 w-full max-w-[430px] -rotate-2 border border-ink/30 bg-[#fffdf8] p-5 shadow-[16px_16px_0_0_rgba(17,16,14,0.13)] sm:p-7 lg:my-0">
                <div
                  className="absolute -top-3 left-1/2 h-6 w-28 -translate-x-1/2 -rotate-2 bg-cobalt/90"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between border-b border-ink/20 pb-4 font-mono text-[8px] uppercase leading-5 tracking-[0.14em] sm:text-[9px]">
                  <span>
                    DegreeNFT
                    <br />
                    Academic registry
                  </span>
                  <span className="text-right">
                    No. 000001
                    <br />
                    Solana devnet
                  </span>
                </div>

                <p className="mt-9 font-mono text-[8px] uppercase tracking-[0.2em] text-ink/55 sm:text-[9px]">
                  This certifies that
                </p>
                <p className="mt-2 font-serif text-4xl italic leading-none tracking-tight sm:text-5xl">
                  Aarav Sharma
                </p>
                <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-ink/55 sm:text-[9px]">
                  has been awarded the degree of
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug sm:text-xl">
                  Bachelor of Science
                  <br />
                  Computer Science
                </p>

                <div className="mt-8 flex items-end justify-between gap-5">
                  <div className="min-w-0 flex-1">
                    <div className="h-px bg-ink/40" />
                    <p className="mt-2 font-mono text-[7px] uppercase leading-4 tracking-[0.14em] text-ink/50 sm:text-[8px]">
                      Registrar / Demo Institute of Technology
                    </p>
                  </div>
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-cobalt text-center font-mono text-[7px] uppercase leading-tight tracking-[0.12em] text-cobalt">
                    Verified
                    <br />
                    on-chain
                  </div>
                </div>

                <div
                  className="mt-7 h-1.5 w-full bg-[linear-gradient(90deg,#2b2bea,#8b5cf6,#22d3ee,#2b2bea)]"
                  aria-hidden="true"
                />
                <div className="mt-3 flex justify-between gap-4 font-mono text-[7px] uppercase tracking-[0.12em] text-ink/50 sm:text-[8px]">
                  <span>bafy...0001</span>
                  <span>7v54...VFi9</span>
                </div>
              </div>

              <div className="relative flex items-center justify-between gap-4 border-t border-ink/20 pt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/50 sm:text-[9px]">
                <span>Issuer signature</span>
                <span>Verified / immutable</span>
              </div>
            </aside>
          </div>
        </section>

        <Ticker />

        <section className="w-full border-b border-ink/20">
          <Link
            href="/learn"
            className="group flex flex-col gap-4 px-5 py-5 transition-colors hover:bg-cobalt hover:text-paper sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"
          >
            <div className="flex items-start gap-3 sm:items-center">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-cobalt group-hover:bg-acid sm:mt-0" />
              <p className="text-sm leading-6">
                <span className="font-semibold">New to crypto?</span>{" "}
                <span className="text-ink/60 group-hover:text-paper/70">
                  Follow the plain-English guide — wallet, claim, share. About
                  20 minutes.
                </span>
              </p>
            </div>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
              Start here
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>

        <section id="system" className="w-full scroll-mt-16 border-b border-ink/20">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="border-b border-ink/20 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
                01 / The shift
              </p>
              <p className="mt-6 max-w-[18ch] font-serif text-2xl leading-tight tracking-tight">
                Paper was never designed to travel.
              </p>
            </div>

            <div className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
              <h2 className="max-w-[17ch] font-serif text-[clamp(2.9rem,6vw,6.2rem)] leading-[0.92] tracking-[-0.03em]">
                Ownership should be part of the{" "}
                <em className="italic text-cobalt">degree.</em>
              </h2>

              <div className="mt-12 grid border-t border-ink/20 md:grid-cols-3">
                {principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className={`border-b border-ink/20 py-7 md:border-b-0 md:pr-7 ${
                      index === 0
                        ? "md:pl-0"
                        : "md:border-l md:border-ink/20 md:pl-7"
                    } ${index === principles.length - 1 ? "last:border-b-0" : ""}`}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt">
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-ink/65">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="relative w-full scroll-mt-16 overflow-hidden border-b border-ink/20 bg-ink text-paper"
        >
          <div
            className="pointer-events-none absolute -right-8 bottom-0 select-none font-serif text-[28vw] leading-none text-paper/[0.035]"
            aria-hidden="true"
          >
            02
          </div>

          <div className="relative px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex flex-col gap-3 border-b border-paper/20 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-acid">
                02 / The mechanism
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/45">
                Three moves. No middlemen.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className={`border-t border-paper/25 pt-6 lg:pr-10 ${
                    index > 0
                      ? "mt-10 lg:mt-0 lg:border-l lg:border-paper/25 lg:pl-10"
                      : ""
                  }`}
                >
                  <span className="font-serif text-6xl leading-none text-acid lg:text-7xl">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-paper/60">
                    {step.description}
                  </p>
                  <div className="mt-9 flex items-center justify-between gap-4 border-t border-paper/20 pt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/40">
                    <span>{step.detail}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full border-b border-ink/20">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="border-b border-ink/20 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50">
                03 / Who it is for
              </p>
              <p className="mt-6 max-w-[16ch] font-serif text-2xl leading-tight tracking-tight">
                One credential.
                <br />
                Three points of view.
              </p>
            </div>

            <div>
              {audiences.map((audience, index) => (
                <a
                  key={audience.label}
                  href={appUrl}
                  className="group grid gap-4 border-b border-ink/20 px-5 py-8 transition-colors last:border-b-0 hover:bg-cobalt hover:text-paper sm:px-8 lg:grid-cols-[0.95fr_1.15fr_auto] lg:items-center lg:gap-8 lg:px-12 lg:py-9"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-ink/40 transition-colors group-hover:text-paper/50">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-4xl tracking-tight sm:text-5xl">
                      {audience.label}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-ink/65 transition-colors group-hover:text-paper/70">
                    {audience.description}
                  </p>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/30 transition-colors group-hover:border-paper/40 group-hover:bg-paper group-hover:text-ink">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="verify"
          className="w-full scroll-mt-16 overflow-hidden border-b border-ink/20 bg-acid"
        >
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex flex-col gap-3 border-b border-ink/30 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em]">
                04 / Verification
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/55">
                No account required
              </p>
            </div>

            <a
              href={`${appUrl}/verify`}
              className="group mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <span className="font-serif text-[clamp(4rem,13vw,13rem)] leading-[0.8] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2">
                Verify a <em className="italic text-cobalt">degree.</em>
              </span>
              <span className="flex h-16 w-16 shrink-0 items-center justify-center border border-ink bg-ink text-acid transition-colors group-hover:bg-paper group-hover:text-ink">
                <ArrowUpRightIcon className="h-7 w-7" />
              </span>
            </a>

            <p className="mt-8 max-w-xl text-base leading-7 text-ink/70">
              A credential link is all it takes. Check the issuer, the graduate,
              and the record directly on Solana.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
