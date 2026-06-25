import { useEffect, useState } from 'react'
import { LogoMark } from './Logo'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="main"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,41,59,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.35) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(59,95,192,0.09) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          right: '0%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(202,138,4,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Floating logo mark — large atmospheric */}
      <div
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{ animation: mounted ? 'float 7s ease-in-out infinite' : 'none' }}
        aria-hidden="true"
      >
        <div style={{ opacity: 0.07, transform: 'scale(1)' }}>
          <LogoMark size={480} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-20">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div
            className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gold" />
            <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-gold font-display">
              Business Growth Consulting
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold text-ink text-balance leading-none mb-8 transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.04,
            }}
          >
            Helping local businesses become easier to{' '}
            <span className="text-gold">find,</span>{' '}
            <span className="text-gold">trust,</span>{' '}
            and hire.
          </h1>

          {/* Sub */}
          <p
            className={`text-lg lg:text-xl text-ink-muted font-light leading-relaxed max-w-2xl mb-12 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ letterSpacing: '-0.01em' }}
          >
            Modern websites, stronger online presence, and practical systems designed
            to help local businesses build trust and convert more customers.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-[400ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-2xs font-semibold tracking-[0.12em] uppercase bg-gold text-void hover:bg-gold-light transition-colors duration-200 cursor-pointer"
            >
              Schedule a Consultation
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-3 px-8 py-4 text-2xs font-semibold tracking-[0.12em] uppercase text-ink-muted border border-rim hover:border-ink-dim hover:text-ink transition-all duration-200 cursor-pointer"
            >
              View Our Process
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        className={`relative z-10 border-t border-rim/40 transition-all duration-700 delay-500 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-2xs text-ink-dim tracking-[0.16em] uppercase font-display">
              Serving local businesses across the United States
            </p>
            <div className="flex items-center gap-8">
              {[
                { value: '5', label: 'Core Services' },
                { value: '100%', label: 'Local Focus' },
                { value: '1', label: 'Goal: Visibility' },
              ].map((stat, i) => (
                <div key={i} className="text-right">
                  <div
                    className="font-display font-bold text-gold"
                    style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-2xs text-ink-dim tracking-[0.14em] uppercase mt-1">
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
