import { createFileRoute } from "@tanstack/react-router";
import { integrityPrinciples } from "@/lib/site-data";
import { FinalCta, GhostButton, PageHero, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/integrity")({
  component: Integrity,
  head: () => ({
    meta: [
      { title: "Integrity Charter — Mysuru MSME Awards 2026" },
      {
        name: "description",
        content:
          "Awards cannot be purchased, nominations are free, no public voting, no sponsor influence. The Mysuru MSME Awards Integrity Charter.",
      },
      { property: "og:title", content: "Credibility Before Celebration." },
      {
        property: "og:description",
        content: "The seven principles governing Mysuru MSME Awards 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/integrity" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/integrity" }],
  }),
});

const controls = [
  "Evidence Assessment",
  "Minimum Quality Thresholds",
  "Score Variance Monitoring",
  "Jury Moderation",
  "Conflict Management",
  "Result Locking",
  "Process Oversight",
];

function Integrity() {
  return (
    <>
      <PageHero
        eyebrow="Integrity Charter"
        title="Credibility Before Celebration."
        lede="The credibility of the platform is built into the process. These principles govern every stage of Mysuru MSME Awards 2026."
      />

      <Section eyebrow="The Charter" title="Seven Governing Principles">
        <div className="divide-y divide-white/[0.08] border-t border-border">
          {integrityPrinciples.map((p) => (
            <div key={p.number} className="flex items-baseline gap-6 py-6">
              <span className="w-10 shrink-0 font-serif text-lg tabular-nums text-brass/70">
                {p.number}
              </span>
              <div>
                <p className="font-serif text-xl leading-tight text-paper">{p.title}</p>
                <p className="mt-1 max-w-[70ch] text-[14px] text-paper/60">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Evaluation Framework" title="100-Point Evaluation">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[16px] border border-brass/20 bg-oxblood/[0.15] p-8 backdrop-blur-[2px] lg:col-span-5">
            <div className="flex items-baseline gap-4">
              <p className="font-serif text-5xl text-brass">70%</p>
              <p className="text-[14px] text-paper/75">Application &amp; Documentary Assessment</p>
            </div>
            <div className="mt-8 flex items-baseline gap-4">
              <p className="font-serif text-5xl text-brass-soft">30%</p>
              <p className="text-[14px] text-paper/75">Finalist Assessment &amp; Verification</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[13px] uppercase tracking-[0.25em] text-mist">
              Supporting Controls
            </p>
            <div className="mt-4 grid gap-px overflow-hidden rounded-[12px] bg-white/[0.08] sm:grid-cols-2">
              {controls.map((c) => (
                <div key={c} className="bg-ink px-5 py-5 text-[14px] text-paper/80">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 max-w-[72ch] text-[13px] leading-relaxed text-paper/55">
          Commercial participation, sponsorship, advertising or exhibition purchases have no
          influence on award evaluation or results.
        </p>
        <div className="mt-7">
          <GhostButton to="/award-rules">View Award Rules</GhostButton>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
