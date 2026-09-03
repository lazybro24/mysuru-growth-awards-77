import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-lg leading-tight text-paper">
              Mysuru MSME Awards 2026
            </p>
            <p className="mt-3 max-w-[24ch] text-[13px] leading-relaxed text-paper/55">
              Recognizing Excellence. Enabling Growth. Inspiring Tomorrow.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-mist">Explore</p>
            <ul className="mt-4 space-y-2 text-[14px] text-paper/70">
              <li><Link to="/about" className="u hover:text-paper">About</Link></li>
              <li><Link to="/awards" className="u hover:text-paper">Awards</Link></li>
              <li><Link to="/eligibility" className="u hover:text-paper">Eligibility</Link></li>
              <li><Link to="/jury" className="u hover:text-paper">Jury</Link></li>
              <li><Link to="/integrity" className="u hover:text-paper">Integrity</Link></li>
              <li><Link to="/event" className="u hover:text-paper">Event</Link></li>
              <li><Link to="/faq" className="u hover:text-paper">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-mist">Participate</p>
            <ul className="mt-4 space-y-2 text-[14px] text-paper/70">
              <li><Link to="/nominate" className="u hover:text-paper">Nominate</Link></li>
              <li><Link to="/partners" className="u hover:text-paper">Become a Partner</Link></li>
              <li><Link to="/contact" className="u hover:text-paper">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-mist">Governance</p>
            <ul className="mt-4 space-y-2 text-[14px] text-paper/70">
              <li><Link to="/award-rules" className="u hover:text-paper">Award Rules &amp; Regulations</Link></li>
              <li><Link to="/integrity" className="u hover:text-paper">Integrity Charter</Link></li>
              <li><Link to="/privacy" className="u hover:text-paper">Privacy Policy</Link></li>
              <li><Link to="/terms" className="u hover:text-paper">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-[12px] text-paper/45">
            © 2026 Mysuru MSME Awards. All Rights Reserved.
          </p>
          <p className="text-[12px] text-paper/45">
            Powered by Toya Corporate Consulting Services Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
