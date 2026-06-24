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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-18" style={{ height: '4.5rem' }}>
          <a href="#" aria-label="Veyra Solutions home">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-charcoal-muted hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-navy hover:bg-navy-700 transition-colors duration-200"
              style={{ letterSpacing: '0.06em' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-px bg-current mb-1.5 transition-transform duration-200" style={{ transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
            <span className="block w-6 h-px bg-current mb-1.5 transition-opacity duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-px bg-current transition-transform duration-200" style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-6 py-6 flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-charcoal hover:text-navy transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-white bg-navy"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
