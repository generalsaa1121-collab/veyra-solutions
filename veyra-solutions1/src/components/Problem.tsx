import { useInView } from '../hooks/useInView'

const gaps = [
  {
    n: '01',
    title: 'You do great work — but your online presence doesn\'t show it.',
    body: 'A dated website, an incomplete Google profile, and no clear way to contact you costs you customers every day — not because you\'re less qualified, but because you\'re harder to trust at a glance.',
  },
  {
    n: '02',
    title: 'Customers research before they call.',
    body: 'Before anyone picks up the phone, they\'ve already checked your website, your Google reviews, and how easy it is to reach you. If any of that feels off — they move on.',
  },
  {
    n: '03',
    title: 'Digital infrastructure isn\'t optional anymore.',
    body: 'The businesses winning local searches aren\'t necessarily better at the actual work. They\'re better at being found, trusted, and hired. That gap is closeable.',
  },
]

export default function Problem() {
  const { ref, visible } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-depth border-t border-rim/30 py-28 lg:py-40"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-blue-brand" />
            <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-ink-dim font-display">
              The Problem
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <h2
              id="problem-heading"
              className="font-display font-bold text-ink text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              The gap between how good you are and how visible that looks online.
            </h2>
            <p className="text-ink-muted font-light leading-relaxed self-end text-lg" style={{ letterSpacing: '-0.01em' }}>
              Most local service businesses are excellent at what they do. The problem
              is a disconnect — between the quality of the actual work and how that
              quality comes across to someone who finds you online for the first time.
            </p>
          </div>
        </div>

        {/* Gaps */}
        <div className="border-t border-rim/30">
          {gaps.map((gap, i) => (
            <div
              key={gap.n}
              className={`border-b border-rim/30 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Number */}
              <div className="lg:col-span-1 flex lg:justify-center pt-1">
                <span
                  className="font-display font-bold text-rim select-none"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}
                  aria-hidden="true"
                >
                  {gap.n}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-5">
                <h3
                  className="font-display font-semibold text-ink leading-snug"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '-0.015em' }}
                >
                  {gap.title}
                </h3>
              </div>

              {/* Body */}
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                  {gap.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
