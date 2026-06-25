import { useInView } from '../hooks/useInView'

const frictions = [
  {
    n: '01',
    title: 'They found you — but didn\'t trust what they saw.',
    body: 'A dated website, incomplete Google profile, or inconsistent information sends customers to a competitor — not because you\'re less qualified, but because you\'re harder to trust at a glance.',
  },
  {
    n: '02',
    title: 'They checked your reviews — and then moved on.',
    body: 'Before anyone calls, they\'ve already formed an opinion. Sparse reviews, no response to feedback, or a thin online record erodes confidence before the conversation even starts.',
  },
  {
    n: '03',
    title: 'They tried to contact you — and the friction was too high.',
    body: 'Buried phone numbers, slow response times, no online booking, no clear next step. Every unnecessary click is a customer you lost to someone who made it easier.',
  },
]

export default function Problem() {
  const { ref, visible } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-parchment-warm border-t border-stone/40 py-28 lg:py-40"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header — editorial asymmetric */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-bronze" />
                <span
                  className="text-2xs font-semibold uppercase text-bronze"
                  style={{ letterSpacing: '0.2em' }}
                >
                  The Gap
                </span>
              </div>
              <h2
                id="problem-heading"
                className="font-display text-ink text-balance"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12,
                }}
              >
                Your work is excellent.
                <br />
                <em style={{ fontStyle: 'italic', color: '#9A7B4F' }}>Your digital presence</em>
                <br />
                may not reflect it.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p
                className="text-ink-muted font-light leading-relaxed"
                style={{ fontSize: '1.0rem', lineHeight: 1.8, letterSpacing: '-0.005em' }}
              >
                Most local service businesses are excellent at the actual work.
                The problem is a disconnect — between the quality of that work
                and how it reads to someone who finds you online for the first time.
                That gap is costing you customers every week.
              </p>
            </div>

          </div>
        </div>

        {/* Friction list — editorial horizontal rows */}
        <div className="border-t border-stone/40">
          {frictions.map((item, i) => (
            <div
              key={item.n}
              className={`border-b border-stone/40 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="lg:col-span-1 flex items-start pt-1">
                <span
                  className="font-body font-medium text-stone-dark select-none"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}
                  aria-hidden="true"
                >
                  {item.n}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3
                  className="font-display text-ink"
                  style={{
                    fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p
                  className="text-ink-muted font-light leading-relaxed"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial pull quote */}
        <div className={`mt-16 lg:mt-20 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <blockquote className="pl-6 lg:pl-16 border-l-2 border-bronze/40">
            <p
              className="font-display text-ink-muted"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                lineHeight: 1.5,
              }}
            >
              "The businesses winning local search aren't necessarily better at the
              actual work. They're better at being found, trusted, and hired.
              That gap is closeable."
            </p>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
