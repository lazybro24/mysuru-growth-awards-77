import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-12">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-brass">
            <span className="size-1.5 rounded-full bg-brass" />
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-[20ch] font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight tracking-tight text-paper">
            {title}
          </h1>
          {lede && (
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-paper/65">{lede}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1280px] px-6 pb-16">
        {(eyebrow || title) && (
          <div className="border-b border-border pb-6">
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mt-2 max-w-[24ch] font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight text-paper">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className="pt-8">{children}</div>
      </div>
    </section>
  );
}

export function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[16px] border border-border bg-white/[0.04] p-8 backdrop-blur-[2px] ${className}`}
    >
      {children}
    </div>
  );
}

export function BrassButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center rounded-[10px] bg-brass px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-ink ring-1 ring-brass/60"
    >
      {children}
    </Link>
  );
}

export function GhostButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center rounded-[10px] border border-paper/25 px-4 py-2.5 text-sm font-medium uppercase tracking-wide text-paper"
    >
      {children}
    </Link>
  );
}

export function FinalCta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-[1280px] px-6 pb-20">
        <div className="relative overflow-hidden rounded-[20px] border border-brass/25">
          <div className="absolute inset-0 bg-gradient-to-br from-oxblood/40 via-ink to-forest/40" />
          <div className="absolute -top-24 right-10 size-72 rounded-full bg-brass/15 blur-3xl" />
          <div className="relative px-8 py-14 text-center md:px-14 md:py-16">
            <h2 className="mx-auto max-w-[16ch] font-serif text-[clamp(1.9rem,4.5vw,3.25rem)] leading-tight text-paper">
              Your Business Has a Story. Let Mysuru Recognise It.
            </h2>
            <p className="mx-auto mt-4 max-w-[44ch] text-base text-paper/65">
              Showcase your achievements. Demonstrate your impact. Join the businesses shaping
              Mysuru's future.
            </p>
            <div className="mt-8 flex justify-center">
              <BrassButton to="/nominate">Nominate Now</BrassButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
