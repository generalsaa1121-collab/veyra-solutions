import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 50); return () => clearTimeout(t) }, [])

  return (
    <section
      id="main"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center bg-surface overflow-hidden"
    >
      {/* Subtle navy tint block — right side architectural element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[42%] bg-navy-tint hidden lg:block"
        aria-hidden="true"
      />

      {/* Large ghost V mark inside the tint block */}
      <div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none"
        aria-hidden="true"
        style={{ opacity: 0.06 }}
      >
        <LogoMark size={520} color="#0F1E3A" />
      </div>

      {/* Vertical rule */}
      <div
        className="absolute left-6 lg:left-12 top-32 bottom-16 w-px bg-border hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 mb-10"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              }}
            >
              <div className="w-8 h-px bg-navy" />
              <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-navy font-display">
                Business Growth Consulting
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-navy text-balance mb-8"
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.06,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              Helping local businesses become easier to find, trust, and hire.
            </h1>

            {/* Body */}
            <p
              className="text-lg text-ink-muted font-light leading-relaxed max-w-xl mb-12"
              style={{
                letterSpacing: '-0.005em',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.2s',
              }}
            >
              Modern websites, stronger online presence, and practical systems
              designed to help local businesses build trust and convert more customers.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(16px)',
                transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.65s cubic-bezier(0.16,1,0.3,1) 0.3s',
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-2xs font-semibold tracking-[0.1em] uppercase text-white bg-navy hover:bg-navy-mid transition-colors duration-200 cursor-pointer"
              >
                Schedule a Consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-2xs font-semibold tracking-[0.1em] uppercase text-navy border border-navy hover:bg-navy-tint transition-colors duration-200 cursor-pointer"
              >
                View Our Process
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M1.5 6.5h10M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule + stats */}
      <div
        className="relative z-10 border-t border-border mt-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.8s ease-out 0.5s',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-2xs text-ink-light tracking-[0.14em] uppercase font-display">
              Serving local businesses across the United States
            </p>
            <div className="flex items-center gap-8">
              {[
                { value: '5', label: 'Core Services' },
                { value: '100%', label: 'Local Focus' },
              ].map((stat, i) => (
                <div key={i} className="text-right">
                  <div
                    className="font-display font-bold text-navy"
                    style={{ fontSize: '1.5rem', letterSpacing: '-0.025em', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-2xs text-ink-light tracking-[0.12em] uppercase mt-1 font-display">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
