'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Startups', href: '#startups' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d1b3e]/97 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="Civis Law home"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden ring-2 ring-[#c9a84c]/40 shadow-lg">
            <Image
              src="/images/civis-logo.png"
              alt="Civis Law logo"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-serif font-bold tracking-[0.15em] text-lg md:text-xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              CIVIS
            </span>
            <span className="text-[#c9a84c] text-[0.55rem] tracking-[0.35em] font-sans font-semibold uppercase">
              LAW
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover-underline ${
                  activeLink === link.label
                    ? 'text-[#c9a84c]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-[#c9a84c]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e5c96e] text-[#0d1b3e] font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200 shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.5)] hover:-translate-y-px"
          >
            Free Consultation
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen bg-[#0d1b3e]/98 backdrop-blur-md border-t border-white/10' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label)
                  setMenuOpen(false)
                }}
                className="block py-3 text-base font-medium text-white/80 hover:text-[#c9a84c] border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#c9a84c] text-[#0d1b3e] font-semibold text-sm px-5 py-3 rounded"
            >
              Free Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
