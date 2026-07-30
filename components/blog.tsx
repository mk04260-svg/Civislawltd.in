'use client'

import { useEffect, useRef, useState } from 'react'

const articles = [
  {
    category: 'STARTUP LAW',
    readTime: '7 min read',
    title: 'ESOP Structuring for Indian Startups: What Every Founder Must Know',
    excerpt:
      'Employee stock option plans are powerful tools for attracting talent, but poorly structured ESOPs can create serious legal and tax complications.',
    date: 'July 15, 2026',
  },
  {
    category: 'CORPORATE LAW',
    readTime: '5 min read',
    title: 'Key Clauses to Watch in a Shareholders Agreement',
    excerpt:
      "A shareholders agreement is the backbone of corporate governance. Here are the provisions that matter most and why you should never overlook them.",
    date: 'June 28, 2026',
  },
  {
    category: 'LITIGATION',
    readTime: '6 min read',
    title: 'Arbitration vs. Litigation: Choosing the Right Path for Commercial Disputes',
    excerpt:
      'Both routes offer distinct advantages depending on the nature of your dispute, the relationship between parties, and the urgency of resolution.',
    date: 'June 10, 2026',
  },
]

export default function Blog() {
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
    <section id="blog" className="bg-[#0d1b3e] py-20 md:py-28" aria-label="From Our Desk">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <div className="gold-divider mb-4">LEGAL INSIGHTS</div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              From Our Desk
            </h2>
          </div>
          <a
            href="#blog"
            className="text-[#c9a84c] text-sm font-semibold tracking-wider hover:text-[#e5c96e] transition-colors flex-shrink-0 flex items-center gap-1 min-h-[44px]"
          >
            View all articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className={`group bg-white/5 hover:bg-white/8 border border-white/8 hover:border-[#c9a84c]/30 rounded-xl overflow-hidden transition-all duration-400 hover:-translate-y-1 cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top accent */}
              <div className="h-0.5 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c] transition-all duration-300" aria-hidden="true" />

              <div className="p-6 md:p-7">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#c9a84c] text-[0.65rem] font-bold tracking-[0.15em] uppercase">
                    {article.category}
                  </span>
                  <span className="text-white/35 text-xs">{article.readTime}</span>
                </div>

                <h3
                  className="text-white font-bold text-base md:text-lg mb-3 leading-snug group-hover:text-[#c9a84c] transition-colors duration-300 font-serif"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  <a href="#blog" className="hover:underline">
                    {article.title}
                  </a>
                </h3>

                <p className="text-white/55 text-sm leading-relaxed mb-5">{article.excerpt}</p>

                <div className="h-px bg-white/8 mb-4" />

                <div className="flex items-center gap-2 text-white/35 text-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
