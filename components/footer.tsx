import Image from 'next/image'
import Link from 'next/link'
import CallPopover from './call-popover'

const practiceLinks = [
  'Corporate Law',
  'Startup Advisory',
  'Civil Litigation',
  'Contract Drafting',
  'Intellectual Property',
  'NI Act — Cheque Bounce',
  'Financial Fraud Matters',
]

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#about' },
  { label: 'Industries', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080f22] border-t border-white/5 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-5" aria-label="Civis Law home">
              <div className="w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-[#c9a84c]/30">
                <Image
                  src="/images/civis-logo.png"
                  alt="Civis Law logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="text-white font-serif font-bold tracking-[0.15em] text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
                  CIVIS LAW
                </div>
                <div className="text-[#c9a84c] text-[0.55rem] tracking-[0.3em] font-semibold uppercase">
                  Counsel. Strategy. Impact.
                </div>
              </div>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Precision in law. Foundations in trust. Expert legal counsel for corporates, startups,
              and individuals across India.
            </p>

            <p className="text-white/30 text-xs tracking-widest uppercase mb-4">EST. 2026 · NEW DELHI</p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/civis-law/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Civis Law on LinkedIn"
                className="inline-flex w-9 h-9 rounded-lg bg-white/5 hover:bg-[#c9a84c]/20 border border-white/10 hover:border-[#c9a84c]/40 items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1JKanGC737/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Civis Law on Facebook"
                className="inline-flex w-9 h-9 rounded-lg bg-white/5 hover:bg-[#c9a84c]/20 border border-white/10 hover:border-[#c9a84c]/40 items-center justify-center text-white/50 hover:text-[#c9a84c] transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3
              className="text-white font-bold text-sm tracking-wider uppercase mb-5 font-serif"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Practice Areas
            </h3>
            <ul className="space-y-2.5" role="list">
              {practiceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-[#c9a84c] text-sm transition-colors duration-200 hover-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-white font-bold text-sm tracking-wider uppercase mb-5 font-serif"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Company
            </h3>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-[#c9a84c] text-sm transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-bold text-sm tracking-wider uppercase mb-5 font-serif"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <CallPopover variant="footer" label="Call Us" />
              </li>
              <li>
                <a
                  href="mailto:civislawltd@gmail.com"
                  className="flex items-center gap-2.5 text-white/45 hover:text-[#c9a84c] text-sm transition-colors duration-200 min-h-[44px]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                  civislawltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/45 text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                New Delhi, India
              </li>
              <li className="pt-1">
                <p className="text-white/35 text-xs">
                  Manjit Kr Tomar
                  <br />
                  <span className="text-[#c9a84c]/60">Founder & Managing Partner</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            &copy; 2026 Civis Law. All rights reserved. &middot; Founded by Manjit Kr Tomar.
          </p>
          <div className="flex gap-4 text-xs text-white/25">
            <a href="/privacy" className="hover:text-[#c9a84c] transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="/terms" className="hover:text-[#c9a84c] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
