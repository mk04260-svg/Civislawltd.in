'use client'

import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: 'What types of clients does Civis Law work with?',
    a: 'We work with a broad spectrum of clients — from early-stage startups and growing SMEs to large corporates, HNIs, and individuals facing civil matters. Our practice is built to serve both business and personal legal needs with equal rigour.',
  },
  {
    q: 'How do I schedule a consultation with Manjit Kr Tomar?',
    a: 'You can reach us directly at +91 92208 46222 or email civislawltd@gmail.com to schedule a consultation. We offer an initial free consultation to understand your situation before recommending a course of action.',
  },
  {
    q: "What is your approach to startup legal advisory?",
    a: 'We start with a deep-dive into your business model, funding stage, and growth plans. From there, we handle everything from incorporation and founder agreements to term sheet review, ESOP structuring, and regulatory compliance — ensuring your legal foundation is as strong as your vision.',
  },
  {
    q: 'Do you handle matters outside New Delhi?',
    a: 'Yes. While we are headquartered in New Delhi, we handle corporate and startup matters across India. For civil litigation, we primarily practice before Delhi courts, though we can advise and co-counsel on matters in other jurisdictions.',
  },
  {
    q: 'How are your legal fees structured?',
    a: 'Our fee structure depends on the nature of the engagement — retainer, fixed-fee for discrete projects, or time-based billing for complex matters. We provide complete transparency upfront. Contact us for a tailored quote.',
  },
  {
    q: 'Can Civis Law assist with international transactions?',
    a: 'Absolutely. We advise on cross-border transactions, foreign investment structuring (FDI/FEMA compliance), and international joint ventures. For matters requiring foreign jurisdiction expertise, we work with a trusted network of international counsel.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
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

  const toggle = (i: number) => {
    setOpen(open === i ? null : i)
  }

  return (
    <section className="bg-[#f5f0e8] py-20 md:py-28" aria-label="Frequently Asked Questions">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="gold-divider justify-center mb-4">COMMON QUESTIONS</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] text-balance font-serif"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <dl
          className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b transition-colors duration-200 ${
                open === i ? 'border-[#c9a84c]/40' : 'border-[#d4c9b0]'
              }`}
            >
              <dt>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left min-h-[44px]"
                  aria-expanded={open === i}
                >
                  <span
                    className={`font-semibold text-sm md:text-base transition-colors duration-200 ${
                      open === i ? 'text-[#0d1b3e]' : 'text-[#0d1b3e]/80'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === i
                        ? 'bg-[#c9a84c] text-[#0d1b3e] rotate-45'
                        : 'bg-[#0d1b3e]/8 text-[#0d1b3e]/50'
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                className={`overflow-hidden transition-all duration-400 ${
                  open === i ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-[#5a6278] text-sm leading-relaxed">{faq.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
