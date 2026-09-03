import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/awards", label: "Awards" },
  { to: "/eligibility", label: "Eligibility" },
  { to: "/jury", label: "Jury" },
  { to: "/integrity", label: "Integrity" },
  { to: "/event", label: "Event" },
  { to: "/partners", label: "Partners" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-[10px] border border-brass/40 bg-oxblood/40 font-serif text-sm text-brass">
            M
          </div>
          <div className="leading-none">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-paper">
              Mysuru MSME Awards
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-mist">2026</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] text-paper/70 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="u hover:text-paper"
              activeProps={{ className: "text-brass" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/partners"
            className="hidden items-center rounded-[8px] border border-paper/25 px-3 py-2 text-[12px] font-medium uppercase tracking-wide text-paper lg:inline-flex"
          >
            Become a Partner
          </Link>
          <Link
            to="/nominate"
            className="inline-flex items-center rounded-[8px] bg-brass px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-ink ring-1 ring-brass/60"
          >
            Nominate Now
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-[8px] border border-paper/20 text-paper xl:hidden"
          >
            <span className="text-sm">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto max-w-[1280px] px-6 pb-6 xl:hidden">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 rounded-[12px] border border-border bg-white/[0.04] p-5 text-[14px] text-paper/75">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="u">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
