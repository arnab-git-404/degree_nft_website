import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { appUrl } from "@/lib/site";
import { getGuideStep, guideSteps } from "@/lib/guide";

type StepPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideSteps.map((step) => ({ slug: step.slug }));
}

export async function generateMetadata({
  params,
}: StepPageProps): Promise<Metadata> {
  const { slug } = await params;
  const step = getGuideStep(slug);

  if (!step) {
    return {};
  }

  const title = `${step.title.lead} ${step.title.accent}`;

  return {
    title,
    description: step.summary,
    alternates: {
      canonical: `/learn/${step.slug}`,
    },
    openGraph: {
      title: `${title} | DegreeNFT`,
      description: step.summary,
      url: `/learn/${step.slug}`,
    },
  };
}

export default async function GuideStepPage({ params }: StepPageProps) {
  const { slug } = await params;
  const step = getGuideStep(slug);

  if (!step) {
    notFound();
  }

  const index = guideSteps.findIndex((item) => item.slug === step.slug);
  const previous = index > 0 ? guideSteps[index - 1] : undefined;
  const next = index < guideSteps.length - 1 ? guideSteps[index + 1] : undefined;

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-ink/20">
          <div
            className="hero-grid pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="border-b border-ink/20 px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:border-b-0 lg:border-r lg:px-12 lg:pb-16 lg:pt-16">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50"
              >
                <Link href="/learn" className="transition-colors hover:text-cobalt">
                  Guide
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-ink/75">Step {step.number}</span>
              </nav>

              <h1 className="mt-8 max-w-[14ch] font-serif text-[clamp(3.5rem,8.5vw,7.5rem)] leading-[0.84] tracking-[-0.04em]">
                {step.title.lead}{" "}
                <em className="italic text-cobalt">{step.title.accent}</em>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                {step.intro}
              </p>

              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/20 pt-5 font-mono text-[9px] uppercase tracking-[0.16em]">
                <div>
                  <dt className="text-ink/40">Step</dt>
                  <dd className="mt-1 text-ink">
                    {step.number} / {String(guideSteps.length).padStart(2, "0")}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/40">Read time</dt>
                  <dd className="mt-1 text-ink">{step.duration}</dd>
                </div>
                <div>
                  <dt className="text-ink/40">For</dt>
                  <dd className="mt-1 text-ink">{step.audience}</dd>
                </div>
              </dl>
            </div>

            <aside className="bg-ink px-5 py-8 text-paper sm:px-8 lg:px-10 lg:py-12">
              <div className="flex items-start justify-between gap-4 border-b border-paper/20 pb-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-acid">
                    Step {step.number}
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/45">
                    In this step
                  </p>
                </div>
                <span
                  className="font-serif text-6xl leading-none text-paper/15"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </div>

              <ol className="mt-5 space-y-3">
                {step.sections.map((section, sectionIndex) => (
                  <li
                    key={section.title}
                    className="flex gap-3 text-sm leading-6 text-paper/70"
                  >
                    <span className="mt-0.5 font-mono text-[9px] tracking-[0.12em] text-acid">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-paper/20 pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-paper/40">
                  You&apos;ll need
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-paper/65">
                  {step.need.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 bg-acid"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-ink/20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
              <div className="max-w-3xl">
                {step.sections.map((section, sectionIndex) => (
                  <section
                    key={section.title}
                    className="border-t border-ink/20 py-8 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt">
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                        {section.title}
                      </h2>
                    </div>

                    <p className="mt-5 text-base leading-7 text-ink/70">
                      {section.body}
                    </p>

                    {section.points && (
                      <ul className="mt-5 space-y-3">
                        {section.points.map((point, pointIndex) => (
                          <li key={point} className="flex gap-3">
                            {section.ordered ? (
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ink/30 font-mono text-[9px] text-cobalt">
                                {pointIndex + 1}
                              </span>
                            ) : (
                              <span
                                className="mt-2.5 h-1 w-1 shrink-0 bg-cobalt"
                                aria-hidden="true"
                              />
                            )}
                            <span className="text-sm leading-6 text-ink/70">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.tip && (
                      <p className="mt-6 border-l-2 border-cobalt bg-cobalt/[0.06] px-4 py-3 text-sm leading-6 text-ink/70">
                        <span className="mr-2 font-mono text-[9px] uppercase tracking-[0.16em] text-cobalt">
                          Note
                        </span>
                        {section.tip}
                      </p>
                    )}
                  </section>
                ))}
              </div>
            </article>

            <aside className="border-t border-ink/20 px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-16">
              <div className="space-y-8 lg:sticky lg:top-24">
                <div className="border border-ink/25 bg-[#e7e1d3] p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">
                    Before you move on
                  </p>
                  <ul className="mt-4 space-y-3">
                    {step.checklist.map((item) => (
                      <li key={item}>
                        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-ink/75">
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 shrink-0 accent-cobalt"
                          />
                          <span>{item}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cobalt">
                    Words decoded
                  </p>
                  <dl className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
                    {step.terms.map((term) => (
                      <div key={term.term} className="py-4">
                        <dt className="font-mono text-[9px] uppercase tracking-[0.16em]">
                          {term.term}
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-ink/65">
                          {term.meaning}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="border-t border-ink/20 pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/45">
                    Official links only
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink/65">
                    Open the dApp from the links on this site. Ignore anyone who
                    asks for your recovery phrase or offers to “help” by
                    connecting your wallet for you.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <nav
          aria-label="Guide pagination"
          className="grid border-b border-ink/20 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/learn/${previous.slug}`}
              className="group flex flex-col gap-3 border-b border-ink/20 px-5 py-8 transition-colors hover:bg-cobalt hover:text-paper sm:border-b-0 sm:border-r sm:px-8 lg:px-12"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 group-hover:text-paper/55">
                <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Back / Step {previous.number}
              </span>
              <span className="font-serif text-3xl tracking-tight">
                {previous.navLabel}
              </span>
            </Link>
          ) : (
            <Link
              href="/learn"
              className="group flex flex-col gap-3 border-b border-ink/20 px-5 py-8 transition-colors hover:bg-cobalt hover:text-paper sm:border-b-0 sm:border-r sm:px-8 lg:px-12"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 group-hover:text-paper/55">
                <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Back
              </span>
              <span className="font-serif text-3xl tracking-tight">
                The whole guide
              </span>
            </Link>
          )}

          {next ? (
            <Link
              href={`/learn/${next.slug}`}
              className="group flex flex-col items-start gap-3 px-5 py-8 transition-colors hover:bg-cobalt hover:text-paper sm:items-end sm:px-8 lg:px-12"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 group-hover:text-paper/55">
                Next / Step {next.number}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-serif text-3xl tracking-tight">
                {next.navLabel}
              </span>
            </Link>
          ) : (
            <Link
              href="/faq"
              className="group flex flex-col items-start gap-3 px-5 py-8 transition-colors hover:bg-cobalt hover:text-paper sm:items-end sm:px-8 lg:px-12"
            >
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45 group-hover:text-paper/55">
                Keep reading
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-serif text-3xl tracking-tight">
                The FAQ
              </span>
            </Link>
          )}
        </nav>

        <section className="bg-ink text-paper">
          <div className="flex flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-16">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-acid">
                Try it for real
              </p>
              <h2 className="mt-4 max-w-[20ch] font-serif text-4xl leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                The dApp is where the steps{" "}
                <em className="italic text-acid">become real.</em>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={appUrl}
                className="group inline-flex h-12 items-center gap-3 bg-acid px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-paper"
              >
                Open the dApp
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <Link
                href="/learn"
                className="inline-flex h-12 items-center gap-3 border border-paper/30 px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                Back to the guide
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
