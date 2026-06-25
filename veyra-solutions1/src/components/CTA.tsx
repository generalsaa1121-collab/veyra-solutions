import { useInView } from '../hooks/useInView'
import { LogoMark } from './Logo'

export default function CTA() {
  const { ref, visible } = useInView()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-void border-t border-rim/30 py-32 lg:py-48 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(59,95,192,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Large ghost mark */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <div style={{ opacity: 0.04 }}>
          <LogoMark size={600} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">

          <div className={`flex items-center gap-4 mb-10 reveal ${visible ? 'visible' : ''}`}>
            <div className="w-8 h-px bg-gold" />
            <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-gold font-display">
              Get Started
            </span>
          </div>

          <h2
            id="cta-heading"
            className={`font-display font-bold text-ink text-balance mb-8 reveal ${visible ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.04,
              transitionDelay: '0.1s',
            }}
          >
            Ready to be easier to{' '}
            <span className="text-gold">find?</span>
          </h2>

          <p
            className={`text-xl text-ink-muted font-light leading-relaxed mb-14 max-w-xl reveal ${visible ? 'visible' : ''}`}
            style={{ letterSpacing: '-0.01em', transitionDelay: '0.2s' }}
          >
            Start with a 30-minute discovery call. No pitch, no pressure — just a clear
            look at where you stand and what's worth doing.
          </p>

          <div className={`flex flex-col sm:flex-row items-start gap-5 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <a
              href="mailto:hello@veyrasolutions.com"
              className="inline-flex items-center justify-center px-10 py-4 text-2xs font-semibold tracking-[0.12em] uppercase bg-gold text-void hover:bg-gold-light transition-colors duration-200 cursor-pointer"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:hello@veyrasolutions.com"
              className="inline-flex items-center gap-2 py-4 text-sm text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
            >
              or email hello@veyrasolutions.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Trust bar */}
          <div
            className={`mt-20 pt-10 border-t border-rim/30 grid grid-cols-1 sm:grid-cols-3 gap-8 reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            {[
              { label: 'Response Time', value: 'Within 24 hours' },
              { label: 'First Meeting', value: '30 min, no obligation' },
              { label: 'Who We Work With', value: 'US local service businesses' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xs font-semibold tracking-[0.16em] uppercase text-ink-dim mb-2 font-display">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-ink">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
