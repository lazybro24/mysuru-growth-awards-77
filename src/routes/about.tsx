import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, GhostButton, PageHero, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Mysuru MSME Awards 2026" },
      {
        name: "description",
        content:
          "A business recognition and growth platform created to identify, recognise and enable enterprises contributing to Mysuru's economic progress.",
      },
      { property: "og:title", content: "About — Mysuru MSME Awards 2026" },
      {
        property: "og:description",
        content: "Recognition should be the beginning—not the end. Learn about the platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const opportunities = [
  "Recognition",
  "Visibility",
  "Knowledge",
  "Business Connections",
  "Finance & Growth Ecosystem Access",
  "Market Opportunities",
];

const purpose = [
  { title: "Recognize Excellence", body: "Celebrate credible business achievement." },
  {
    title: "Enable Growth",
    body: "Connect MSMEs with relevant knowledge, finance, technology and opportunities.",
  },
  {
    title: "Build Connections",
    body: "Bring entrepreneurs, buyers, institutions and ecosystem stakeholders together.",
  },
  {
    title: "Inspire Tomorrow",
    body: "Showcase businesses capable of inspiring Mysuru's next generation of entrepreneurs.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Platform"
        title="Building a Platform for Mysuru's Business Excellence"
        lede="Mysuru MSME Awards 2026 is a business recognition and growth platform created to identify, recognise and enable enterprises and entrepreneurs contributing to Mysuru's economic progress."
      />

      <Section
        eyebrow="Why Mysuru MSME Awards?"
        title="Recognition Should Be the Beginning—Not the End."
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <p className="text-[15px] leading-relaxed text-paper/65 lg:col-span-5">
            Recognition should not simply end with a trophy. The platform aims to create
            opportunities for businesses through:
          </p>
          <div className="grid gap-px overflow-hidden rounded-[12px] bg-white/[0.08] sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {opportunities.map((o) => (
              <div key={o} className="bg-ink px-5 py-6">
                <p className="text-[14px] text-paper/80">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Our Purpose" title="Four Commitments">
        <div className="grid gap-6 sm:grid-cols-2">
          {purpose.map((p) => (
            <div
              key={p.title}
              className="rounded-[16px] border border-border bg-white/[0.04] p-7 backdrop-blur-[2px]"
            >
              <p className="font-serif text-xl text-paper">{p.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-paper/65">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our Vision" title="A Credible Platform for Mysuru">
        <div className="rounded-[16px] border border-brass/20 bg-oxblood/[0.15] p-8 backdrop-blur-[2px]">
          <p className="max-w-[46ch] font-serif text-2xl leading-snug text-brass-soft">
            To build Mysuru's most credible platform for MSME recognition, connection and business
            growth.
          </p>
        </div>
      </Section>

      <Section eyebrow="Powered By" title="Toya Corporate Consulting Services Pvt. Ltd.">
        <div className="max-w-[70ch] space-y-4 text-[15px] leading-relaxed text-paper/65">
          <p>
            Toya serves as the organizing entity and Awards Secretariat, responsible for award
            administration, stakeholder coordination, nomination management, verification
            coordination and event execution.
          </p>
          <p>
            Merit-based award evaluation and outcomes remain governed through the defined
            independent jury framework.
          </p>
        </div>
        <div className="mt-7">
          <GhostButton to="/integrity">Understand Our Integrity Framework</GhostButton>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
