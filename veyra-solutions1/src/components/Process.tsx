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
      className="bg-depth border-t border-rim/30 py-28 lg:py-40 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-blue-brand" />
            <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-ink-dim font-display">
              How It Works
            </span>
          </div>
          <h2
            id="process-heading"
            className="font-display font-bold text-ink max-w-2xl text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            Straightforward from day one.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rim/30">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`bg-depth p-8 lg:p-10 flex flex-col gap-6 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Step number — large ghost */}
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-black text-rim select-none leading-none"
                  style={{ fontSize: '3.5rem', letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-3 flex-shrink-0" aria-hidden="true" />
              </div>

              <div>
                <h3
                  className="font-display font-semibold text-ink mb-3"
                  style={{ fontSize: '1.2rem', letterSpacing: '-0.015em' }}
                >
                  {step.title}
                </h3>
                <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9rem' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connector note */}
        <div className={`mt-12 flex items-center gap-6 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <div className="flex-1 h-px bg-rim/40" />
          <p className="text-sm text-ink-dim font-light italic text-center max-w-md">
            Most clients go from first conversation to live results in under 8 weeks.
          </p>
          <div className="flex-1 h-px bg-rim/40" />
        </div>

      </div>
    </section>
  )
}
