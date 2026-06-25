import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Services',    href: '#services'   },
  { label: 'Process',     href: '#process'    },
  { label: 'Industries',  href: '#industries' },
  { label: 'FAQ',         href: '#faq'        },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-ink/[0.07]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between" style={{ height: '4rem' }}>
          <a href="#" aria-label="Veyra Solutions">
            <span className="font-serif text-[1.35rem] font-semibold tracking-tight text-ink">
              Veyra<span className="text-bronze">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[0.8125rem] font-sans font-medium text-ink/55 hover:text-ink transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-ink text-cream text-[0.8125rem] font-medium rounded-full hover:bg-ink/80 transition-colors duration-200 cursor-pointer"
          >
            Schedule a Consultation
          </a>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 -mr-2 cursor-pointer"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-ink transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-px bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-ink transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-ink/[0.07] px-6 py-6">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-ink/70 hover:text-ink transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center w-full px-5 py-3 bg-ink text-cream text-sm font-medium rounded-full cursor-pointer"
            >
              Schedule a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
