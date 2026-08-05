'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: '2026',
    label: 'FOUNDED',
    desc: 'A new generation of precision legal practice',
    isYear: true,
  },
  {
    value: 'Pan',
    suffix: '-India',
    label: 'PRACTICE REACH',
    desc: 'Advising clients across every major city',
    isPan: true,
  },
  {
    value: '200',
    suffix: '+',
    label: 'STARTUPS ADVISED',
    desc: 'From incorporation to Series B and beyond',
  },
  {
    value: '98',
    suffix: '%',
    label: 'CLIENT SATISFACTION',
    desc: 'Consistently rated excellent by our clients',
  },
]

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[number]
  index: number
  inView: boolean
}) {
  const numericVal = parseInt(stat.value)
  const count = useCountUp(numericVal, 1500, inView && !stat.isYear && !stat.isPan)

  // For year and pan, just show as-is; otherwise animate from 0
  const displayValue = stat.isYear
    ? stat.value
    : stat.isPan
      ? 'Pan'
      : inView
        ? count.toString()
        : '0'

  return (
    <div
      className={`text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative">
        <div
          className="text-4xl sm:text-5xl xl:text-6xl font-bold font-serif mb-1"
          style={{ fontFamily: 'var(--font-playfair)' }}
          aria-label={`${stat.value}${stat.suffix ?? ''}`}
        >
          {stat.isPan ? (
            <>
              <span className="text-white">Pan</span>
              <span className="text-[#c9a84c]">-India</span>
            </>
          ) : (
            <>
              <span className="text-white">{displayValue}</span>
              {stat.suffix && <span className="text-[#c9a84c]">{stat.suffix}</span>}
            </>
          )}
        </div>
        <div className="h-px w-12 bg-[#c9a84c] mx-auto mb-3" />
        <p className="text-[#c9a84c] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1.5">
          {stat.label}
        </p>
        <p className="text-white/50 text-xs leading-relaxed max-w-[160px] mx-auto">{stat.desc}</p>
      </div>
    </div>
  )
}

export default function Stats() {
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      aria-label="Key statistics"
      className="bg-[#080f22] border-y border-[#c9a84c]/10 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <StatCard stat={stat} index={i} inView={inView} />
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#c9a84c]/15"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
