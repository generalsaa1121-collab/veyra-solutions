import { useInView } from '../hooks/useInView'

const steps = [
  {
    n: '01',
    title: 'Evaluate',
    description:
      'A 30-minute conversation to understand your business, your market, and where the gaps are. No pitch. Just clarity on what\'s actually worth doing.',
    detail: 'Website audit · Google profile review · Customer journey analysis',
  },
  {
    n: '02',
    title: 'Improve',
    description:
      'We execute the plan. Website, optimization, systems — done properly, without cutting corners. You stay informed without being in the weeds.',
    detail: 'Design & development · Profile optimization · System setup',
  },
  {
    n: '03',
    title: 'Strengthen',
    description:
      'We track what\'s working, share clear reporting, and refine as needed. Most clients see meaningful improvement within the first 60–90 days.',
    detail: 'Performance review · Refinement · Ongoing support',
  },
]

export default function Process() {
  const { ref, visible } = useInView()

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 lg:py-40"
      style={{ background: '#1E2D1F' }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-bronze/60" />
                <span
                  className="text-2xs font-semibold uppercase"
                  style={{ letterSpacing: '0.2em', color: 'rgba(154,123,79,0.8)' }}
                >
                  How It Works
                </span>
              </div>
              <h2
                id="process-heading"
                className="font-display text-balance"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12,
                  color: '#F7F4EF',
                }}
              >
                A straightforward operating model.
                <br />
                <em style={{ fontStyle: 'italic', color: 'rgba(247,244,239,0.55)' }}>
                  Three phases, one clear outcome.
                </em>
              </h2>
            </div>
          </div>
        </div>

        {/* Steps — full-width horizontal on desktop */}
        <div className="border-t" style={{ borderColor: 'rgba(200,195,186,0.15)' }}>
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`border-b py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 reveal ${visible ? 'visible' : ''}`}
              style={{
                borderColor: 'rgba(200,195,186,0.15)',
                transitionDelay: `${0.1 + i * 0.12}s`,
              }}
            >
              {/* Large ghost step number */}
              <div className="lg:col-span-2 flex items-start">
                <span
                  className="font-display font-bold select-none tabular-nums"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'rgba(200,195,186,0.15)',
                  }}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
              </div>

              {/* Step title */}
              <div className="lg:col-span-3 flex items-start pt-1">
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.2,
                    color: '#F7F4EF',
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <p
                  className="font-light leading-relaxed"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(247,244,239,0.65)' }}
                >
                  {step.description}
                </p>
              </div>

              {/* Detail tag */}
              <div className="lg:col-span-3 flex items-start justify-end pt-1">
                <p
                  className="font-body"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.04em',
                    lineHeight: 1.7,
                    color: 'rgba(154,123,79,0.7)',
                    textAlign: 'right',
                  }}
                >
                  {step.detail.split(' · ').map((d, j) => (
                    <span key={j} className="block">{d}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className={`mt-14 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-medium cursor-pointer transition-opacity duration-200 hover:opacity-70"
            style={{ color: '#F7F4EF' }}
          >
            <span>Start with a free discovery call</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
