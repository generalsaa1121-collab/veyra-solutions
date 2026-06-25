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
    const handle = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment/96 backdrop-blur-md border-b border-stone/50'
          : 'bg-parchment/88 backdrop-blur-sm'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-ink focus:text-parchment focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" style={{ height: '4.5rem' }}>
        <a href="#main" aria-label="Veyra Solutions home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Primary navigation">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="v-underline v-underline-bronze text-sm font-medium text-graphite hover:text-ink transition-colors duration-200 cursor-pointer"
              style={{ letterSpacing: '0.01em', paddingBottom: '2px' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="v-btn v-btn-dark hidden md:inline-flex"
        >
          Schedule a Call
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 cursor-pointer text-ink transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="2" y1="2" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="0" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-parchment-warm border-t border-stone/40 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="px-6 pt-7 pb-9 flex flex-col gap-6" aria-label="Mobile navigation">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-lg font-medium text-ink hover:text-bronze transition-colors duration-200 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 v-btn v-btn-dark inline-flex"
            style={{ justifyContent: 'center', padding: '1rem 1.625rem' }}
            onClick={() => setOpen(false)}
          >
            Schedule a Call
          </a>
        </nav>
      </div>
    </header>
  )
}
