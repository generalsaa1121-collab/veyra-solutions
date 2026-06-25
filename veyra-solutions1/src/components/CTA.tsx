import { useInView } from '../hooks/useInView'

export default function CTA() {
  const { ref, visible } = useInView()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-32 lg:py-52"
      style={{ background: '#1C1917' }}
      aria-labelledby="cta-heading"
    >
      {/* Architectural background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Thin horizontal lines */}
        <div className="absolute inset-x-0" style={{ top: '20%', borderTop: '1px solid rgba(200,195,186,0.06)' }} />
        <div className="absolute inset-x-0" style={{ top: '50%', borderTop: '1px solid rgba(200,195,186,0.06)' }} />
        <div className="absolute inset-x-0" style={{ top: '80%', borderTop: '1px solid rgba(200,195,186,0.06)' }} />

        {/* Large ghost text — editorial background element */}
        <div
          className="absolute right-[-2%] bottom-[-8%] font-display font-bold select-none"
          style={{
            fontSize: 'clamp(12rem, 25vw, 22rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.05em',
            color: 'rgba(247,244,239,0.03)',
            fontStyle: 'italic',
          }}
        >
          Find.
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Main content */}
          <div className="lg:col-span-8">

            <div className={`flex items-center gap-4 mb-10 reveal ${visible ? 'visible' : ''}`}>
              <div className="w-6 h-px bg-bronze/60" />
              <span
                className="text-2xs font-semibold uppercase"
                style={{ letterSpacing: '0.2em', color: 'rgba(154,123,79,0.8)' }}
              >
                Get Started
              </span>
            </div>

            <h2
              id="cta-heading"
              className={`font-display text-balance reveal ${visible ? 'visible' : ''}`}
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                lineHeight: 1.07,
                color: '#F7F4EF',
                transitionDelay: '0.1s',
              }}
            >
              Ready to be easier
              <br />
              to{' '}
              <em style={{ fontStyle: 'italic', color: '#9A7B4F' }}>find, trust,</em>
              <br />
              and hire?
            </h2>

            <p
              className={`font-light leading-relaxed mt-8 max-w-xl reveal ${visible ? 'visible' : ''}`}
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'rgba(247,244,239,0.55)',
                letterSpacing: '-0.005em',
                transitionDelay: '0.2s',
              }}
            >
              Start with a 30-minute discovery call. No pitch, no pressure —
              just a clear look at where you stand and what's worth doing.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <a
                href="mailto:hello@veyrasolutions.com"
                className="v-btn v-btn-light"
              >
                Book a Discovery Call
                <svg className="v-btn-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:hello@veyrasolutions.com"
                className="v-underline text-sm font-light cursor-pointer"
                style={{ color: 'rgba(247,244,239,0.4)', paddingBottom: '1px' }}
              >
                hello@veyrasolutions.com
              </a>
            </div>
          </div>

          {/* Trust items — right column */}
          <div
            className={`lg:col-span-4 flex flex-col justify-end reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.35s' }}
          >
            <div className="space-y-7 border-t pt-8" style={{ borderColor: 'rgba(200,195,186,0.12)' }}>
              {[
                { label: 'Response Time', value: 'Within 24 hours' },
                { label: 'First Meeting', value: '30 min, no obligation' },
                { label: 'Who We Work With', value: 'US local service businesses' },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="text-3xs font-semibold uppercase mb-1.5 font-body"
                    style={{ letterSpacing: '0.18em', color: 'rgba(154,123,79,0.6)' }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'rgba(247,244,239,0.75)' }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
