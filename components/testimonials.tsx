'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      'Civis Law guided our startup through its Series A financing with exceptional clarity. Manjit and the team were always reachable and gave us strategic advice that went beyond just legal — they truly understood our business.',
    name: 'Priya Sharma',
    role: 'Co-Founder, TechSphere India',
    city: 'Bengaluru',
  },
  {
    quote:
      'We engaged Civis Law for a complex commercial dispute. The precision in their litigation strategy and their deep understanding of Indian commercial law led to an outcome we couldn\'t have achieved elsewhere.',
    name: 'Rajesh Malhotra',
    role: 'Managing Director, Malhotra Group',
    city: 'Mumbai',
  },
  {
    quote:
      'Manjit handled our M&A transaction with remarkable efficiency. His attention to detail and proactive communication throughout the due diligence process gave us complete confidence at every step.',
    name: 'Anita Krishnamurthy',
    role: 'CEO, Vantage Capital',
    city: 'Chennai',
  },
  {
    quote:
      'As a first-time founder, I was overwhelmed by legal complexities. Civis Law simplified everything — from incorporation to our investor agreements. Their pan-India reach means they truly understand the market.',
    name: 'Arjun Sethi',
    role: 'Founder, GreenTech Ventures',
    city: 'Hyderabad',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 mb-5" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#c9a84c"
          stroke="#c9a84c"
          strokeWidth="1"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToNext()
    }, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [active])

  const goTo = (index: number) => {
    if (isAnimating || index === active) return
    setIsAnimating(true)
    setActive(index)
    setTimeout(() => setIsAnimating(false), 500)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const goToNext = () => {
    const next = (active + 1) % testimonials.length
    goTo(next)
  }

  const goToPrev = () => {
    const prev = (active - 1 + testimonials.length) % testimonials.length
    goTo(prev)
  }

  return (
    <section
      className="bg-[#f5f0e8] py-20 md:py-28"
      aria-label="What Our Clients Say"
    >
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="gold-divider justify-center mb-4">CLIENT STORIES</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] text-balance font-serif"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="relative bg-[#0d1b3e] rounded-2xl p-8 md:p-12 overflow-hidden shadow-xl">
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 text-[8rem] leading-none text-[#c9a84c]/5 font-serif select-none pointer-events-none"
              aria-hidden="true"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              &ldquo;
            </div>

            <div
              className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
            >
              <StarRating />

              <blockquote className="mb-8">
                <p className="text-white/85 text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
              </blockquote>

              <footer className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-[#c9a84c] font-bold font-serif text-lg">
                    {testimonials[active].name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[active].name}</p>
                  <p className="text-white/50 text-sm">{testimonials[active].role}</p>
                  <p className="text-[#c9a84c] text-xs tracking-wider">{testimonials[active].city}</p>
                </div>
              </footer>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goToPrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#0d1b3e]/20 hover:border-[#c9a84c] hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-[#c9a84c] flex items-center justify-center transition-all duration-200 min-h-[44px] min-w-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div role="tablist" aria-label="Testimonial navigation" className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 min-h-[44px] flex items-center px-1 ${
                  i === active ? 'bg-transparent' : 'bg-transparent'
                }`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2 bg-[#c9a84c]' : 'w-2 h-2 bg-[#0d1b3e]/25 hover:bg-[#0d1b3e]/50'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#0d1b3e]/20 hover:border-[#c9a84c] hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-[#c9a84c] flex items-center justify-center transition-all duration-200 min-h-[44px] min-w-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
