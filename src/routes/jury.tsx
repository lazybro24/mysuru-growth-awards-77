import { createFileRoute } from "@tanstack/react-router";
import { juryPanel } from "@/lib/site-data";
import { FinalCta, GhostButton, PageHero, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/jury")({
  component: Jury,
  head: () => ({
    meta: [
      { title: "Jury — Mysuru MSME Awards 2026" },
      {
        name: "description",
        content:
          "An independent jury framework designed around expertise, fairness, evidence and integrity. Minimum three independent evaluators per application.",
      },
      { property: "og:title", content: "Independent Expertise. Credible Recognition." },
      {
        property: "og:description",
        content: "How the Mysuru MSME Awards jury evaluates applications independently.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/jury" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/jury" }],
  }),
});

const evaluationFlow = [
  "Minimum 3 Independent Evaluators",
  "Independent Scoring",
  "Evidence Review",
  "Conflict Checks",
  "Score Moderation Where Required",
  "Finalist Assessment",
  "Results Lock",
];

const independence = [
  "Confidentiality",
  "Conflict-of-Interest Declaration",
  "Independent Evaluation",
  "Evidence-Based Scoring",
  "No Commercial Influence",
];

function Jury() {
  return (
    <>
      <PageHero
        eyebrow="Jury Framework"
        title="Independent Expertise. Credible Recognition."
        lede="Applications are evaluated through an independent jury framework designed around expertise, fairness, evidence and integrity."
      />

      <Section eyebrow="Recommended Grand Jury" title="Seven Perspectives">
        <div className="divide-y divide-white/[0.08] border-t border-border">
          {juryPanel.map((j, i) => (
            <div key={j.role} className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-5">
              <span className="w-10 shrink-0 font-serif text-lg tabular-nums text-brass/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-[16rem] flex-1">
                <p className="font-serif text-xl leading-tight text-paper">{j.role}</p>
                <p className="mt-1 text-[13px] text-paper/50">{j.who}</p>
              </div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-mist">{j.perspective}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How Evaluation Works" title="A Documented, Repeatable Process">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] bg-white/[0.08] sm:grid-cols-4 lg:grid-cols-7">
          {evaluationFlow.map((step, i) => (
            <div key={step} className="bg-ink px-4 py-5">
              <p className="font-serif text-lg text-brass/70">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 text-[12px] leading-snug text-paper/75">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-paper/55">
          MSME of the Year is separately evaluated through the Grand Jury framework.
        </p>
      </Section>

      <Section eyebrow="Jury Independence" title="Every Juror Is Expected to Comply With">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {independence.map((item) => (
            <div
              key={item}
              className="rounded-[16px] border border-border bg-white/[0.04] p-6 backdrop-blur-[2px]"
            >
              <p className="text-[15px] text-paper/85">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <GhostButton to="/integrity">View Integrity Framework</GhostButton>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
