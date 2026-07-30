'use client'

import { useEffect, useRef, useState } from 'react'

type Service = {
  id: string
  title: string
  desc: string
  points: string[]
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: 'corporate',
    title: 'Corporate Law',
    desc: 'Entity formation, board governance, regulatory compliance, and commercial transactions for businesses of every scale.',
    points: [
      'Company & LLP incorporation and structuring',
      'Board governance and secretarial compliance',
      'Regulatory approvals and ongoing compliance',
      'Commercial and shareholder agreements',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" />
      </svg>
    ),
  },
  {
    id: 'startup',
    title: 'Startup Advisory',
    desc: 'End-to-end legal support for startups — from incorporation and equity structuring to term sheets and investor agreements.',
    points: [
      'Founder agreements and equity structuring',
      'Term sheets, SAFE notes and SHAs',
      'Investor due diligence and negotiations',
      'ESOP pool design and documentation',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'litigation',
    title: 'Civil Litigation',
    desc: 'Strategic representation in civil disputes, arbitration, and mediation with a focus on efficient, favourable outcomes.',
    points: [
      'Civil suits before trial and appellate courts',
      'Domestic and institutional arbitration',
      'Mediation and settlement strategy',
      'Recovery, injunction and enforcement matters',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    id: 'contracts',
    title: 'Contract Drafting',
    desc: 'Precision-drafted contracts that protect your interests — service agreements, NDAs, employment contracts, and more.',
    points: [
      'Service, vendor and distribution agreements',
      'NDAs and confidentiality frameworks',
      'Employment and consultant contracts',
      'Contract review and risk assessment',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'ma',
    title: 'Mergers & Acquisitions',
    desc: 'Due diligence, deal structuring, negotiation, and post-merger integration advisory for transformative transactions.',
    points: [
      'Legal and financial due diligence',
      'Deal structuring and valuation support',
      'Negotiation of definitive agreements',
      'Post-merger integration advisory',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="18" r="3" />
        <circle cx="18" cy="5" r="3" />
        <path d="M8 15V9a3 3 0 013-3h4M17 8l3-3-3-3" />
      </svg>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    desc: 'Trademark registration, patent advisory, copyright protection, and IP enforcement strategies.',
    points: [
      'Trademark search and registration',
      'Patent and design advisory',
      'Copyright protection and licensing',
      'IP enforcement and infringement action',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
  {
    id: 'ni-act',
    title: 'NI Act — Cheque Bounce',
    desc: 'End-to-end representation in Negotiable Instruments Act matters, with a focus on swift resolution of dishonoured cheque and Section 138 cases.',
    points: [
      'Section 138 complaints for cheque dishonour',
      'Statutory legal notices and demand drafting',
      'Prosecution and defence in NI Act trials',
      'Recovery, settlement and compounding of disputes',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 15h6" />
      </svg>
    ),
  },
  {
    id: 'fraud',
    title: 'Financial Fraud Matters',
    desc: 'Expert representation in financial crimes, embezzlement, and fraud cases — investigation support, criminal defence, and asset recovery.',
    points: [
      'Criminal prosecution in white-collar fraud',
      'Embezzlement and financial crime defence',
      'Investigation support and document analysis',
      'Asset freezing, forfeiture and recovery',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 1L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-6z" />
        <path d="M10 16l-2-2m0 0l-2-2m2 2l2-2m0 0l2 2M8 12l4 4m0-4l-4 4" />
      </svg>
    ),
  },
]

export default function PracticeAreas() {
  const [inView, setInView] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState<Service | null>(null)
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

  // Lock scroll + escape to close when modal open
  useEffect(() => {
    if (!active) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="services" className="bg-[#f5f0e8] py-20 md:py-28" aria-label="Our Practice Areas">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="gold-divider justify-center mb-4">WHAT WE DO</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] mb-4 text-balance font-serif"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Practice Areas
          </h2>
          <p className="text-[#5a6278] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal services tailored to the complexity and pace of modern business and
            personal legal needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActive(service)}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`Explore ${service.title}`}
              className={`group relative text-left bg-white border border-[#d4c9b0] rounded-xl p-7 cursor-pointer transition-all duration-500 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] ${
                hovered === service.id
                  ? 'border-[#c9a84c] shadow-[0_8px_40px_rgba(201,168,76,0.15)] -translate-y-1'
                  : 'hover:border-[#c9a84c]/50 hover:shadow-md'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Gold accent bar on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-[#c9a84c] transition-all duration-300 ${
                  hovered === service.id ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 ${
                  hovered === service.id
                    ? 'bg-[#0d1b3e] text-[#c9a84c]'
                    : 'bg-[#0d1b3e]/5 text-[#0d1b3e]'
                }`}
              >
                {service.icon}
              </div>

              <h3
                className="text-lg font-bold text-[#0d1b3e] mb-3 font-serif"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {service.title}
              </h3>
              <p className="text-[#5a6278] text-sm leading-relaxed mb-5">{service.desc}</p>

              <span
                className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                  hovered === service.id ? 'text-[#c9a84c]' : 'text-[#0d1b3e]/40'
                }`}
              >
                EXPLORE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {/* View all CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0d1b3e] hover:bg-[#1a2d5a] text-white font-semibold text-sm px-8 py-4 rounded transition-all duration-200 shadow-lg hover:-translate-y-0.5 min-h-[44px]"
          >
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Service detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease]"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} details`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0d1b3e]/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.4)] overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-[#0d1b3e] p-6 md:p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a84c]" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="w-12 h-12 rounded-lg bg-[#c9a84c]/15 text-[#c9a84c] flex items-center justify-center mb-4">
                {active.icon}
              </div>
              <h3
                className="text-2xl font-bold text-white font-serif"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {active.title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <p className="text-[#5a6278] text-sm md:text-base leading-relaxed mb-6">
                {active.desc}
              </p>
              <p className="text-[#0d1b3e] text-xs font-bold tracking-widest uppercase mb-4">
                What we help with
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {active.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#5a6278] text-sm">
                    <span className="mt-1 w-4 h-4 rounded-full bg-[#c9a84c]/15 text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setActive(null)}
                className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e5c96e] text-[#0d1b3e] font-bold text-sm px-6 py-4 rounded transition-all duration-200 shadow-[0_8px_30px_rgba(201,168,76,0.35)] min-h-[44px]"
              >
                Book a Free Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
