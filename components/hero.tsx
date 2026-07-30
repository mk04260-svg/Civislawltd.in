'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CallPopover from './call-popover'

const highlights = ['Corporate & Startup Law', 'Civil Litigation', 'Mergers & Acquisitions']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b3e]"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Civis Law office"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0d1b3e]/70" />
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Large CL watermark */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[28vw] font-bold text-white/[0.03] leading-none font-serif pr-8"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          CL
        </span>
      </div>

      {/* Gold accent line on left */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#c9a84c]/60 z-10 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Main copy */}
          <div
            className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Est. badge */}
            <div className="gold-divider mb-6">
              EST. 2026 &middot; NEW DELHI, INDIA
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance font-serif"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Precision
              <br />
              in Law.
              <br />
              <span className="text-[#c9a84c] italic">Power</span> in
              <br />
              Counsel.
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Civis Law delivers sharp, strategic legal counsel to corporates, startups, and
              individuals across India. Founded and led personally by{' '}
              <span className="text-[#c9a84c] font-medium">Manjit Kr Tomar</span> — every client,
              every matter, every time.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-3 mb-10" role="list">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e5c96e] text-[#0d1b3e] font-bold text-sm px-7 py-4 rounded transition-all duration-200 shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.55)] hover:-translate-y-0.5 min-h-[44px]"
              >
                Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-semibold text-sm px-7 py-4 rounded transition-all duration-200 min-h-[44px]"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — Founder card */}
          <div
            className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Decorative corner */}
              <div
                className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#c9a84c]"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#c9a84c]"
                aria-hidden="true"
              />

              <div className="bg-[#1a2d5a]/80 backdrop-blur-sm border border-[#c9a84c]/20 rounded-lg p-7 md:p-8">
                {/* Logo display */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 relative rounded-full overflow-hidden ring-2 ring-[#c9a84c]/50 shadow-xl flex-shrink-0">
                    <Image
                      src="/images/civis-logo.png"
                      alt="Civis Law"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-1">
                      COUNSEL. STRATEGY. IMPACT.
                    </p>
                    <p className="text-white/50 text-xs tracking-wider">Across India</p>
                  </div>
                </div>

                <div className="h-px bg-[#c9a84c]/20 mb-6" />

                <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  FOUNDER & MANAGING PARTNER
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold text-white mb-1 font-serif"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Manjit Kr Tomar
                </h2>
                <p className="text-white/50 text-sm mb-4">Civis Law — Founded 2026</p>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Expert in corporate transactions, startup ecosystems, and civil litigation — Manjit
                  leads every engagement with personal commitment and strategic precision.
                </p>

                <div className="flex flex-col gap-3 items-start">
                  <CallPopover variant="inline" label="Call Us" />
                  <a
                    href="mailto:civislawltd@gmail.com"
                    className="flex items-center gap-3 text-white/70 hover:text-[#c9a84c] transition-colors text-sm group min-h-[44px]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                      </svg>
                    </span>
                    civislawltd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-[0.6rem] tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-[#c9a84c]/30 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1/2 bg-[#c9a84c] animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Pan-India banner strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#c9a84c]/10 border-t border-[#c9a84c]/20 py-3 px-6 hidden md:flex items-center justify-center gap-8 text-xs text-white/50 tracking-widest uppercase">
        {[
          'New Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Pan-India'
        ].map((city, i) => (
          <span key={city} className="flex items-center gap-2">
            {i > 0 && <span className="text-[#c9a84c]/40">·</span>}
            {city === 'Pan-India' ? (
              <span className="text-[#c9a84c] font-semibold">{city}</span>
            ) : city}
          </span>
        ))}
      </div>
    </section>
  )
}
