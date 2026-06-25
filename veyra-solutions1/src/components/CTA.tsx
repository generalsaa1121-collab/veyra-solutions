import { useInView } from '../hooks/useInView'
import { LogoMark } from './Logo'

export default function CTA() {
  const { ref, visible } = useInView()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-navy py-32 lg:py-48 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Ghost V mark — large, atmospheric */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
        style={{ opacity: 0.05 }}
      >
        <LogoMark size={560} color="#FFFFFF" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">

          <div className={`flex items-center gap-4 mb-10 reveal ${visible ? 'visible' : ''}`}>
            <div className="w-8 h-px bg-white/30" />
            <span className="text-2xs font-semibold tracking-[0.18em] uppercase text-white/50 font-display">
              Get Started
            </span>
          </div>

          <h2
            id="cta-heading"
            className={`font-display font-bold text-white text-balance mb-8 reveal ${visible ? 'visible' : ''}`}
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.75rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.06,
              transitionDelay: '0.1s',
            }}
          >
            Ready to be easier to find?
          </h2>

          <p
            className={`text-xl font-light leading-relaxed mb-14 max-w-xl reveal ${visible ? 'visible' : ''}`}
            style={{
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '-0.005em',
              transitionDelay: '0.2s',
            }}
          >
            Start with a 30-minute discovery call. No pitch, no pressure — just
            a clear look at where you stand and what's worth doing.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-start gap-5 reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <a
              href="mailto:hello@veyrasolutions.com"
              className="inline-flex items-center justify-center px-10 py-4 text-2xs font-semibold tracking-[0.1em] uppercase text-navy bg-white hover:bg-surface-soft transition-colors duration-200 cursor-pointer"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:hello@veyrasolutions.com"
              className="inline-flex items-center gap-2 py-4 text-sm font-light transition-colors duration-200 cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              or email hello@veyrasolutions.com
            </a>
          </div>

          {/* Trust bar */}
          <div
            className={`mt-20 pt-10 border-t grid grid-cols-1 sm:grid-cols-3 gap-8 reveal ${visible ? 'visible' : ''}`}
            style={{ borderColor: 'rgba(255,255,255,0.1)', transitionDelay: '0.4s' }}
          >
            {[
              { label: 'Response Time', value: 'Within 24 hours' },
              { label: 'First Meeting', value: '30 min, no obligation' },
              { label: 'Who We Work With', value: 'US local service businesses' },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-2xs font-semibold tracking-[0.14em] uppercase mb-2 font-display"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
