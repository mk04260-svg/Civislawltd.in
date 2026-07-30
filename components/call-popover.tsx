'use client'

import { useEffect, useRef, useState } from 'react'

const PHONE_DISPLAY = '+91 92208 46222'
const PHONE_TEL = '+919220846222'

type Variant = 'cta' | 'inline' | 'footer'

export default function CallPopover({
  variant = 'inline',
  label = 'Call Us',
}: {
  variant?: Variant
  label?: string
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const PhoneIcon = ({ size = 16 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  )

  // Trigger styling per variant
  const triggerClass =
    variant === 'cta'
      ? 'inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#c9a84c]/50 text-white hover:text-[#c9a84c] font-semibold text-sm px-7 py-4 rounded transition-all duration-200 min-h-[44px]'
      : variant === 'footer'
        ? 'flex items-center gap-2.5 text-white/45 hover:text-[#c9a84c] text-sm transition-colors duration-200 min-h-[44px]'
        : 'flex items-center gap-3 text-white/70 hover:text-[#c9a84c] transition-colors text-sm group min-h-[44px]'

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={triggerClass}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {variant === 'inline' ? (
          <>
            <span className="w-8 h-8 rounded-full bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 transition-colors">
              <PhoneIcon size={14} />
            </span>
            {label}
          </>
        ) : (
          <>
            <PhoneIcon size={variant === 'cta' ? 16 : 14} />
            {label}
          </>
        )}
      </button>

      {/* Popover */}
      <div
        role="dialog"
        aria-label="Phone number"
        className={`absolute bottom-full left-0 mb-3 z-50 origin-bottom-left transition-all duration-200 ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-[#c9a84c]/30 p-4 w-60">
          <p className="text-[#5a6278] text-[0.65rem] font-semibold tracking-widest uppercase mb-1">
            Call Directly
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 group/link"
          >
            <span className="w-10 h-10 rounded-full bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover/link:bg-[#c9a84c] group-hover/link:text-[#0d1b3e] transition-colors">
              <PhoneIcon size={18} />
            </span>
            <span
              className="text-[#0d1b3e] font-bold text-base font-serif"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {PHONE_DISPLAY}
            </span>
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 block text-center bg-[#c9a84c] hover:bg-[#e5c96e] text-[#0d1b3e] font-bold text-xs tracking-wide uppercase px-4 py-2.5 rounded transition-colors"
          >
            Tap to Call
          </a>
          {/* Arrow */}
          <span className="absolute left-6 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-[#c9a84c]/30 rotate-45" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
