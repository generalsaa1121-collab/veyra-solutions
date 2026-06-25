import { useEffect, useRef } from 'react'

export default function Hero() {
  const headlineRef = useRef(null)

  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.9s cubic-bezier(0.25,1,0.5,1), transform 0.9s cubic-bezier(0.25,1,0.5,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream-light">
      {/* Subtle warm grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Bronze accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bronze/30 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
              Digital Foundation for Local Businesses
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-ink"
          >
            Helping local businesses{' '}
            <span className="italic text-ink/70">become easier</span>{' '}
            to find, trust, and hire.
          </h1>

          {/* Sub */}
          <p className="mt-8 md:mt-10 font-sans text-lg md:text-xl text-ink/55 leading-relaxed max-w-2xl">
            Modern websites, stronger online presence, and practical systems
            designed to help local businesses build trust and convert more customers.
          </p>

          {/* CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream text-sm font-medium rounded-full hover:bg-ink/80 transition-colors duration-200 cursor-pointer"
            >
              Schedule a Consultation
              <ArrowRight />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/55 hover:text-ink transition-colors duration-200 cursor-pointer"
            >
              See what we do
              <span className="text-bronze" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Bottom rule with label */}
        <div className="mt-24 md:mt-32 flex items-center gap-6">
          <span className="block flex-1 h-px bg-ink/10" />
          <span className="font-sans text-xs text-ink/30 tracking-widest uppercase">
            Serving home service businesses across the region
          </span>
          <span className="block flex-1 h-px bg-ink/10" />
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
