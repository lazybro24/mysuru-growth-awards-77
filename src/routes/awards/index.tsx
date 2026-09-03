import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/lib/site-data";
import { FinalCta, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/awards/")({
  component: Awards,
  head: () => ({
    meta: [
      { title: "Award Categories — Mysuru MSME Awards 2026" },
      {
        name: "description",
        content:
          "Ten award categories recognising enterprises and entrepreneurs creating measurable impact across Mysuru's MSME ecosystem.",
      },
      { property: "og:title", content: "10 Categories. One Standard of Excellence." },
      {
        property: "og:description",
        content: "Explore the ten official Mysuru MSME Awards 2026 categories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/awards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
});

function Awards() {
  return (
    <>
      <PageHero
        eyebrow="Official Award Categories"
        title="10 Categories. One Standard of Excellence."
        lede="Recognising enterprises and entrepreneurs creating measurable impact across Mysuru's MSME ecosystem."
      />

      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-20">
          <div className="divide-y divide-white/[0.08] border-t border-border">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/awards/$slug"
                params={{ slug: c.slug }}
                className="group flex items-baseline gap-6 py-6"
              >
                <span className="w-10 shrink-0 font-serif text-lg tabular-nums text-brass/70">
                  {c.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-xl leading-tight text-paper">{c.title}</p>
                  <p className="mt-1 max-w-[70ch] text-[13px] text-paper/50">{c.overview}</p>
                </div>
                <span className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-mist transition-colors group-hover:text-brass">
                  {c.tag}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-[12px] text-paper/45">
            Each category detail page contains: Overview · Eligibility · Who Should Apply ·
            Evaluation Criteria · Evidence Required · Recognition · Apply.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
