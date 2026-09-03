import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, integrityPrinciples, nominationSteps } from "@/lib/site-data";
import { BrassButton, FinalCta, GhostButton } from "@/components/site/PageShell";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mysuru MSME Awards 2026 — Recognizing Excellence" },
      {
        name: "description",
        content:
          "Mysuru's business recognition and growth platform. 10 award categories, 50 finalist recognitions, ₹0 nomination fee, independent evidence-based jury.",
      },
      { property: "og:title", content: "Mysuru MSME Awards 2026" },
      {
        property: "og:description",
        content:
          "Recognizing Excellence. Enabling Growth. Inspiring Tomorrow. Nominate your Mysuru enterprise — free of cost.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const purposes = [
  { title: "Recognize", body: "Celebrate credible business excellence." },
  { title: "Showcase", body: "Give deserving Mysuru businesses greater visibility." },
  { title: "Connect", body: "Bring businesses and opportunities together." },
  { title: "Enable", body: "Create access to knowledge and growth ecosystems." },
  { title: "Celebrate", body: "Recognise entrepreneurial achievement." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pt-8 pb-4">
          <div className="grid min-h-[520px] items-center gap-8 lg:grid-cols-12">
            <div className="reveal lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-brass">
                <span className="size-1.5 rounded-full bg-brass" /> Business Recognition &amp;
                Growth Platform
              </span>
              <h1 className="mt-6 max-w-[15ch] font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-tight tracking-tight text-paper">
                Mysuru MSME Awards 2026
              </h1>
              <p className="mt-6 max-w-[34ch] font-serif text-[clamp(1.1rem,2.2vw,1.6rem)] leading-snug text-brass-soft">
                Recognizing Excellence. Enabling Growth. Inspiring Tomorrow.
              </p>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-paper/65">
                Celebrating the enterprises, entrepreneurs and people contributing to Mysuru's
                economic progress — creating meaningful recognition, visibility, connections and
                growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BrassButton to="/nominate">Nominate Now</BrassButton>
                <GhostButton to="/awards">Explore Awards</GhostButton>
              </div>
            </div>

            <div className="relative h-[420px] lg:col-span-5 lg:h-[520px]">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-brass/25 via-oxblood/20 to-forest/30"
                  style={{ transform: "rotate(-9deg) scale(1.4)" }}
                />
              </div>
              <div
                className="reveal reveal-d1 absolute left-0 top-10 w-[78%] rounded-[16px] border border-border bg-white/[0.06] p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-[2px]"
                style={{ transform: "rotate(-4deg)" }}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-brass">
                  The Highest Honour
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight text-paper">
                  MSME of the Year
                </p>
                <div className="mt-4 h-px bg-white/10" />
                <p className="mt-4 text-[13px] leading-relaxed text-paper/60">
                  Exceptional overall excellence, sustainable growth, innovation and leadership
                  across Mysuru's MSME ecosystem.
                </p>
              </div>
              <div
                className="reveal reveal-d2 absolute right-0 top-[26%] w-[64%] rounded-[16px] border border-brass/30 bg-brass/[0.08] p-6 backdrop-blur-[3px]"
                style={{ transform: "rotate(3deg)" }}
              >
                <p className="font-serif text-5xl leading-none text-brass">₹0</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-paper/70">
                  Nomination Fee
                </p>
                <p className="mt-3 text-[13px] text-paper/60">
                  No paid awards. No public voting. No sponsor influence.
                </p>
              </div>
              <div
                className="reveal reveal-d3 absolute left-8 bottom-6 flex w-[70%] items-center justify-between rounded-[16px] border border-border bg-forest/20 p-5 backdrop-blur-[3px]"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-mist">
                    Independent Jury
                  </p>
                  <p className="font-serif text-xl text-paper">Evidence-Based</p>
                </div>
                <span className="font-serif text-3xl text-brass">×10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-6">
          <div className="reveal reveal-d4 grid grid-cols-2 divide-x divide-y divide-white/10 rounded-[14px] border border-border bg-white/[0.04] backdrop-blur-[2px] md:grid-cols-5 md:divide-y-0">
            <div className="px-5 py-5">
              <p className="font-serif text-2xl text-brass">10</p>
              <p className="mt-1 text-[12px] text-paper/60">Award Categories</p>
            </div>
            <div className="px-5 py-5">
              <p className="font-serif text-2xl text-brass">50</p>
              <p className="mt-1 text-[12px] text-paper/60">Finalist Recognitions</p>
            </div>
            <div className="px-5 py-5">
              <p className="font-serif text-2xl text-brass">₹0</p>
              <p className="mt-1 text-[12px] text-paper/60">Nomination Fee</p>
            </div>
            <div className="px-5 py-5">
              <p className="font-serif text-2xl text-brass">Ind.</p>
              <p className="mt-1 text-[12px] text-paper/60">Independent Jury</p>
            </div>
            <div className="px-5 py-5">
              <p className="font-serif text-2xl text-brass">Ev.</p>
              <p className="mt-1 text-[12px] text-paper/60">Evidence-Based Evaluation</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS PLATFORM EXISTS */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="border-b border-border pb-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass">
              Why This Platform Exists
            </p>
            <h2 className="mt-2 max-w-[24ch] font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-paper">
              More Than an Award. A Platform for Growth.
            </h2>
          </div>
          <div className="grid gap-8 pt-8 lg:grid-cols-12">
            <div className="space-y-4 text-[15px] leading-relaxed text-paper/65 lg:col-span-5">
              <p>
                Great businesses are being built across Mysuru every day—creating employment,
                introducing innovation, serving customers, strengthening industries and
                contributing to the region's economy.
              </p>
              <p>
                Mysuru MSME Awards 2026 has been created to identify, recognise and showcase these
                enterprises while connecting Mysuru's MSME ecosystem with opportunities that can
                help businesses grow.
              </p>
              <Link to="/about" className="u inline-block text-[13px] font-medium text-brass">
                About the Platform
              </Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[12px] bg-white/[0.08] sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {purposes.map((p) => (
                <div key={p.title} className="bg-ink px-5 py-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brass">{p.title}</p>
                  <p className="mt-2 text-[13px] leading-snug text-paper/70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES LEDGER */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 py-16">
          <div className="flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">
                Official Award Categories
              </p>
              <h2 className="mt-2 max-w-[20ch] font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight text-paper">
                10 Awards Celebrating Business Excellence
              </h2>
            </div>
            <Link to="/awards" className="u hidden text-[13px] text-paper/70 hover:text-paper sm:block">
              Explore All Categories
            </Link>
          </div>

          <div className="mt-2 divide-y divide-white/[0.08]">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/awards/$slug"
                params={{ slug: c.slug }}
                className="group flex items-baseline gap-6 py-5"
              >
                <span className="w-10 shrink-0 font-serif text-lg tabular-nums text-brass/70">
                  {c.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-xl leading-tight text-paper">{c.title}</p>
                  <p className="mt-1 text-[13px] text-paper/50">{c.short}</p>
                </div>
                <span className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-mist transition-colors group-hover:text-brass">
                  {c.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION + INTEGRITY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[16px] border border-border bg-white/[0.04] p-8 backdrop-blur-[2px]">
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-brass/10 blur-2xl" />
                <p className="relative text-[11px] uppercase tracking-[0.3em] text-brass">
                  Recognition Structure
                </p>
                <h3 className="relative mt-3 font-serif text-3xl leading-tight text-paper">
                  10 Categories. 50 Finalist Recognitions.
                </h3>
                <ul className="relative mt-6 space-y-3 text-[14px]">
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-brass">01</span>
                    <span className="text-paper/80">Winner</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-brass/80">02</span>
                    <span className="text-paper/80">1st Runner-Up</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-brass/60">03</span>
                    <span className="text-paper/80">2nd Runner-Up</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-brass/40">04</span>
                    <span className="text-paper/70">Official Finalist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-brass/40">05</span>
                    <span className="text-paper/70">Official Finalist</span>
                  </li>
                </ul>
                <p className="relative mt-6 text-[12px] leading-relaxed text-paper/50">
                  Subject to required eligibility and evaluation standards.
                </p>
              </div>
            </div>

            <div className="reveal reveal-d1 lg:col-span-7">
              <div className="h-full rounded-[16px] border border-brass/20 bg-oxblood/[0.15] p-8 backdrop-blur-[2px]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-brass">
                  Integrity Charter
                </p>
                <h3 className="mt-3 max-w-[16ch] font-serif text-3xl leading-tight text-paper">
                  Recognition That Must Be Earned.
                </h3>
                <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {integrityPrinciples.slice(0, 6).map((p) => (
                    <div key={p.number}>
                      <p className="font-serif text-sm tabular-nums text-brass/70">{p.number}</p>
                      <p className="mt-0.5 text-[14px] text-paper/80">{p.title}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 max-w-[60ch] text-[12px] leading-relaxed text-paper/50">
                  Commercial participation, sponsorship, advertising or exhibition purchases have
                  no influence on award evaluation or results.
                </p>
                <Link
                  to="/integrity"
                  className="u mt-7 inline-block text-[13px] font-medium text-brass"
                >
                  View Integrity Charter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-16">
          <div className="border-t border-border pt-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Eligibility</p>
            <h3 className="mt-2 max-w-[24ch] font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-paper">
              Could Your Business Be One of Mysuru's Best?
            </h3>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-paper/65">
              Eligible Micro, Small and Medium Enterprises with substantial business operations
              within Mysuru District may participate, subject to the applicable category
              requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <GhostButton to="/eligibility">Check Eligibility</GhostButton>
              <GhostButton to="/eligibility">Find My Award Category</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* NOMINATION JOURNEY */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-16">
          <div className="border-t border-border pt-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-brass">
                  Nomination Journey
                </p>
                <h3 className="mt-2 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-paper">
                  Simple to Enter. Serious to Win.
                </h3>
              </div>
              <p className="font-serif text-2xl text-brass">₹0</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] bg-white/[0.08] sm:grid-cols-4 lg:grid-cols-8">
              {nominationSteps.map((step, i) => (
                <div key={step} className="bg-ink px-4 py-5">
                  <p className="font-serif text-lg text-brass/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-[12px] leading-snug text-paper/75">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <BrassButton to="/nominate">Start Nomination</BrassButton>
            </div>
          </div>
        </div>
      </section>

      {/* JURY + EVENT + PARTNERSHIP */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="rounded-[16px] border border-border bg-white/[0.04] p-8 backdrop-blur-[2px] lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Jury</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-paper">
                Judged by Experience. Governed by Independence.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-paper/65">
                Applications are evaluated through an independent jury framework representing
                business leadership, finance, manufacturing, technology, banking, academia,
                entrepreneurship, people practices, ESG and governance.
              </p>
              <Link to="/jury" className="u mt-6 inline-block text-[13px] font-medium text-brass">
                Explore the Jury
              </Link>
            </div>

            <div className="rounded-[16px] border border-border bg-forest/15 p-8 backdrop-blur-[2px] lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Event</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-paper">
                One Day. Four Outcomes.
              </h3>
              <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brass">Learn</p>
                  <p className="mt-1 text-[14px] text-paper/75">MSME Growth Summit</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brass">Connect</p>
                  <p className="mt-1 text-[14px] text-paper/75">Business Connect</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brass">Grow</p>
                  <p className="mt-1 text-[14px] text-paper/75">
                    Finance • Buyers • Partners • Opportunities
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brass">Celebrate</p>
                  <p className="mt-1 text-[14px] text-paper/75">Mysuru MSME Awards 2026</p>
                </div>
              </div>
              <Link to="/event" className="u mt-7 inline-block text-[13px] font-medium text-brass">
                Explore the Event
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass">Partnership</p>
            <h3 className="mt-2 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-paper">
              Build With Mysuru's Business Community
            </h3>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-paper/65">
              Partner with a platform bringing together entrepreneurs, businesses, institutions and
              ecosystem leaders.
            </p>
            <div className="mt-6">
              <GhostButton to="/partners">Become a Partner</GhostButton>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
