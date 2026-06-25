import { useInView } from '../hooks/useInView'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    description:
      'A 30-minute conversation to understand your business, your market, and where the gaps are. No pitch. Just clarity on what\'s actually worth doing.',
  },
  {
    n: '02',
    title: 'Audit & Strategy',
    description:
      'We review your current online presence — website, Google profile, customer journey — and build a prioritized roadmap based on what will move the needle fastest.',
  },
  {
    n: '03',
    title: 'Implementation',
    description:
      'We execute the plan. Website, optimization, systems — done properly, without cutting corners. You stay informed but not in the weeds.',
  },
  {
    n: '04',
    title: 'Results & Refinement',
    description:
      'We track what\'s working, share clear reporting, and refine as needed. Most clients see meaningful improvement within the first 60–90 days.',
  },
]

export default function Process() {
  const { ref, visible } = useInView()

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-navy py-28 lg:py-40"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-2xs font-semibold tracking-[0.18em] uppercase text-white/50 font-display">
              How It Works
            </span>
          </div>
          <h2
            id="process-heading"
            className="font-display font-bold text-white max-w-2xl text-balance"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Straightforward from day one.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`bg-navy p-8 lg:p-10 flex flex-col gap-8 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.08 + i * 0.1}s` }}
            >
              {/* Large ghost number */}
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-black select-none leading-none"
                  style={{
                    fontSize: '3.5rem',
                    letterSpacing: '-0.04em',
                    color: 'rgba(255,255,255,0.1)',
                  }}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <div className="w-1 h-1 bg-white/40 flex-shrink-0 mt-3" aria-hidden="true" />
              </div>

              <div>
                <h3
                  className="font-display font-semibold text-white mb-3"
                  style={{ fontSize: '1.15rem', letterSpacing: '-0.015em' }}
                >
                  {step.title}
                </h3>
                <p className="font-light leading-relaxed" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div
          className={`mt-12 flex items-center gap-6 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <p
            className="text-sm font-light italic text-center max-w-md"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Most clients go from first conversation to live results in under 8 weeks.
          </p>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
        </div>

      </div>
    </section>
  )
}
