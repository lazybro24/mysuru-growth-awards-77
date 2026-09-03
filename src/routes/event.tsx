import { createFileRoute } from "@tanstack/react-router";
import { GhostButton, PageHero, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/event")({
  component: EventPage,
  head: () => ({
    meta: [
      { title: "The Event — Mysuru MSME Awards 2026" },
      {
        name: "description",
        content:
          "One day, four outcomes: MSME Growth Summit, Business Connect, Finance & Growth Clinic and the Mysuru MSME Awards 2026 ceremony.",
      },
      { property: "og:title", content: "One Day. Four Outcomes." },
      {
        property: "og:description",
        content: "Mysuru's MSME business and recognition platform — Learn, Connect, Grow, Celebrate.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/event" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/event" }],
  }),
});

const outcomes = [
  {
    key: "Learn",
    title: "MSME Growth Summit",
    body: "Relevant conversations around business growth, finance, technology, markets, people and competitiveness.",
  },
  {
    key: "Connect",
    title: "Business Connect",
    body: "Structured opportunities connecting MSMEs with businesses, buyers, corporations, institutions and professional partners.",
  },
  {
    key: "Grow",
    title: "Finance & Growth Clinic",
    body: "Access to relevant financial, technological, professional and institutional expertise.",
  },
  {
    key: "Celebrate",
    title: "Mysuru MSME Awards 2026",
    body: "Recognising enterprises and entrepreneurs contributing to Mysuru's future.",
  },
];

const experience = [
  "MSME Growth Summit",
  "MSME Showcase",
  "Business Connect Lounge",
  "Finance & Growth Desk",
  "Finalists Gallery",
  "Grand Awards Ceremony",
  "Networking Dinner",
];

function EventPage() {
  return (
    <>
      <PageHero
        eyebrow="Mysuru's MSME Business & Recognition Platform"
        title="One Day. Four Outcomes."
        lede="A single day built around learning, connections, growth access and recognition for Mysuru's MSME ecosystem."
      />

      <Section eyebrow="The Day" title="Learn · Connect · Grow · Celebrate">
        <div className="grid gap-6 sm:grid-cols-2">
          {outcomes.map((o) => (
            <div
              key={o.key}
              className="rounded-[16px] border border-border bg-white/[0.04] p-7 backdrop-blur-[2px]"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">{o.key}</p>
              <p className="mt-3 font-serif text-xl text-paper">{o.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-paper/65">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Event Experience" title="What the Day Includes">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] bg-white/[0.08] sm:grid-cols-4 lg:grid-cols-7">
          {experience.map((e) => (
            <div key={e} className="bg-ink px-4 py-6 text-[13px] leading-snug text-paper/80">
              {e}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Event Information" title="Date & Venue">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[16px] border border-brass/20 bg-oxblood/[0.15] p-8 backdrop-blur-[2px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Event Date</p>
            <p className="mt-3 font-serif text-2xl text-paper">To Be Announced</p>
          </div>
          <div className="rounded-[16px] border border-border bg-forest/15 p-8 backdrop-blur-[2px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Venue</p>
            <p className="mt-3 font-serif text-2xl text-paper">Mysuru — To Be Announced</p>
          </div>
        </div>
        <p className="mt-8 text-[13px] text-paper/55">Once confirmed:</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <GhostButton to="/contact">Register to Attend</GhostButton>
          <GhostButton to="/contact">Showcase Your Business</GhostButton>
          <GhostButton to="/partners">Become a Partner</GhostButton>
        </div>
      </Section>
    </>
  );
}
