'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import CallPopover from './call-popover'

export default function CTA() {
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
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="relative bg-[#0d1b3e] py-20 md:py-28 overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c9a84c 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Decorative light streak */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-[#c9a84c]/30"
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 relative rounded-full overflow-hidden ring-2 ring-[#c9a84c]/40 shadow-[0_0_40px_rgba(201,168,76,0.2)]">
              <Image
                src="/images/civis-logo.png"
                alt="Civis Law"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>

          <div className="gold-divider justify-center mb-5">START TODAY</div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance font-serif"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Your First Consultation is Free.
          </h2>

          <p className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Speak directly with{' '}
            <span className="text-[#c9a84c] font-semibold">Manjit Kr Tomar</span>, Founder &amp;
            Managing Partner. No intermediaries. No delays. Just sharp, honest legal counsel from
            day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CallPopover variant="cta" label="Call Us" />
            <a
              href="mailto:civislawltd@gmail.com"
              className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#e5c96e] text-[#0d1b3e] font-bold text-sm px-7 py-4 rounded transition-all duration-200 shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.55)] hover:-translate-y-0.5 min-h-[44px]"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white/40 text-xs tracking-wider">
            {[
              'Free Initial Consultation',
              'Senior-Level Attention',
              'Pan-India Practice',
              'Founded 2026',
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#c9a84c]/30" aria-hidden="true">·</span>}
                <span className="w-1 h-1 rounded-full bg-[#c9a84c]/50" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
