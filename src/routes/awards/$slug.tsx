import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories } from "@/lib/site-data";
import { BrassButton, GhostButton } from "@/components/site/PageShell";

export const Route = createFileRoute("/awards/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  component: CategoryPage,
  head: ({ params, loaderData }) => {
    const title = loaderData?.category.title ?? "Award Category";
    const description = loaderData?.category.overview ?? "Mysuru MSME Awards 2026 category.";
    return {
      meta: [
        { title: `${title} — Mysuru MSME Awards 2026` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — Mysuru MSME Awards 2026` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/awards/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/awards/${params.slug}` }],
    };
  },
});

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[16px] border border-border bg-white/[0.04] p-7 backdrop-blur-[2px]">
      <p className="text-[11px] uppercase tracking-[0.3em] text-brass">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-paper/75">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-brass/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <>
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-10">
          <Link to="/awards" className="u text-[12px] uppercase tracking-[0.25em] text-mist">
            ← All Categories
          </Link>
          <div className="reveal mt-6 flex items-baseline gap-6">
            <span className="font-serif text-3xl tabular-nums text-brass/70">
              {category.number}
            </span>
            <div>
              <h1 className="max-w-[22ch] font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-tight text-paper">
                {category.title}
              </h1>
              <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-brass">
                {category.tag}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-[64ch] text-base leading-relaxed text-paper/65">
            {category.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {category.qualificationOnly ? (
              <GhostButton to="/awards">Explore Applicable Categories</GhostButton>
            ) : (
              <BrassButton to="/nominate">Apply for This Award</BrassButton>
            )}
            <GhostButton to="/eligibility">Check Eligibility</GhostButton>
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <List title="Eligibility" items={category.eligibility} />
            <List title="Who Should Apply" items={category.whoShouldApply} />
            <List title="Evaluation Criteria" items={category.criteria} />
            <List title="Evidence Required" items={category.evidence} />
          </div>

          <div className="mt-6 rounded-[16px] border border-brass/20 bg-oxblood/[0.15] p-8 backdrop-blur-[2px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Recognition</p>
            <p className="mt-3 max-w-[52ch] font-serif text-2xl leading-snug text-paper">
              {category.recognition}
            </p>
            <p className="mt-4 text-[12px] text-paper/50">
              Evaluation: 70% Application &amp; Documentary Assessment + 30% Finalist Assessment
              &amp; Verification. Nomination Fee: ₹0.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
