'use client'

import { useEffect, useRef, useState } from 'react'

const pillars = [
  {
    title: 'Strategic Precision',
    desc: 'Every case and transaction is approached with rigorous analysis and a clear strategic framework — no generic advice, only tailored counsel.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Client-First Approach',
    desc: 'We invest time to understand your business, goals, and risk appetite before recommending any legal course of action.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Responsive & Timely',
    desc: 'Business moves fast. We ensure our turnaround times match the pace of your decisions, without compromising quality.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    desc: 'A strong record of successful outcomes in corporate transactions, startup advisory, and civil litigation across India.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function WhyCivis() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="bg-[#0d1b3e] py-20 md:py-28 relative overflow-hidden"
      aria-label="Why Civis Law"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)`,
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="gold-divider mb-5">WHY CIVIS LAW</div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-serif leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Legal Counsel You Can Build Your Future On
            </h2>

            <p className="text-white/65 text-base leading-relaxed mb-8">
              At Civis Law, we believe the best legal service isn&apos;t just about winning — it&apos;s
              about building lasting foundations. Founder Manjit Kr Tomar leads every engagement
              with personal commitment, ensuring you receive senior-level attention from day one.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#c9a84c] pl-6 py-2 mb-8">
              <p className="text-white/80 text-base italic leading-relaxed mb-3">
                &ldquo;Our mandate is simple: understand the client&apos;s world deeply, and provide
                legal solutions that actually move them forward.&rdquo;
              </p>
              <footer className="text-[#c9a84c] text-sm font-semibold">
                — Manjit Kr Tomar, Founder & Managing Partner
              </footer>
            </blockquote>

            {/* India map decoration */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#c9a84c]/30 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <p className="text-white/50 text-sm">
                Pan-India practice — advising clients from{' '}
                <span className="text-[#c9a84c]">every major city across the country</span>
              </p>
            </div>
          </div>

          {/* Right — Pillars grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`group bg-white/5 hover:bg-white/8 border border-white/8 hover:border-[#c9a84c]/30 rounded-xl p-6 transition-all duration-400 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center mb-4 transition-colors">
                  {pillar.icon}
                </div>
                <h3
                  className="text-white font-bold text-base mb-2 font-serif"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
