import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" style={{ height: '4.5rem' }}>
        <a href="#" aria-label="Veyra Solutions home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-charcoal-muted hover:text-navy transition-colors duration-200 cursor-pointer tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-2xs font-semibold tracking-[0.1em] uppercase text-white bg-navy hover:bg-navy-mid transition-colors duration-200 cursor-pointer"
        >
          Schedule a Call
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 cursor-pointer text-charcoal hover:text-navy transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-white border-t border-border overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="px-6 pt-6 pb-8 flex flex-col gap-5" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-base font-medium text-charcoal hover:text-navy transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 inline-flex items-center justify-center px-6 py-3.5 text-2xs font-semibold tracking-[0.1em] uppercase text-white bg-navy cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Schedule a Call
          </a>
        </nav>
      </div>
    </header>
  )
}
