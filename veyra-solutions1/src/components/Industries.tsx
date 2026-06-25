import { useInView } from '../hooks/useInView'

const industries = [
  {
    title: 'Roofing',
    body: 'High-ticket, high-trust decisions. Your digital presence needs to match the size of the investment customers are making.',
    tag: 'High trust threshold',
  },
  {
    title: 'Landscaping',
    body: 'Visual work deserves a visual presence. We help you show — not just tell — the quality of what you create.',
    tag: 'Portfolio-driven',
  },
  {
    title: 'HVAC',
    body: 'Seasonal urgency, local competition. Customers need to find you fast and trust you instantly.',
    tag: 'Speed to trust',
  },
  {
    title: 'Electrical',
    body: 'Licensing and trust are everything. We make sure that expertise comes through before you ever pick up the phone.',
    tag: 'Credentials matter',
  },
  {
    title: 'Contracting',
    body: 'Project-based trust at scale. We help general contractors build the kind of online presence that wins larger bids.',
    tag: 'Larger decisions',
  },
  {
    title: 'Cleaning Companies',
    body: 'High repeat-customer potential, but only if the first impression earns the trust to make that call.',
    tag: 'Repeat-client focus',
  },
]

export default function Industries() {
  const { ref, visible } = useInView()

  return (
    <section
      id="industries"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-parchment border-t border-stone/40 py-28 lg:py-40"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-16 lg:mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-bronze" />
                <span
                  className="text-2xs font-semibold uppercase text-bronze"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Who We Work With
                </span>
              </div>
              <h2
                id="industries-heading"
                className="font-display text-ink text-balance"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12,
                }}
              >
                Built for local service businesses.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Our expertise sits in the trades and home services space. If you're not on this list,
                reach out — we'll tell you honestly if we're a fit.
              </p>
            </div>
          </div>
        </div>

        {/* Industry panels — editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone/40">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`border-b border-r border-stone/40 p-8 lg:p-10 group hover:bg-parchment-warm transition-colors duration-300 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.06 * i}s` }}
            >
              {/* Tag */}
              <div className="mb-6 flex items-center gap-2.5">
                <div className="w-3 h-px bg-bronze/50 flex-shrink-0" />
                <span
                  className="text-3xs font-medium uppercase text-bronze/70"
                  style={{ letterSpacing: '0.16em' }}
                >
                  {ind.tag}
                </span>
              </div>

              <h3
                className="font-display text-ink mb-4"
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.2,
                }}
              >
                {ind.title}
              </h3>

              <p
                className="text-ink-muted font-light leading-relaxed"
                style={{ fontSize: '0.9rem', lineHeight: 1.75 }}
              >
                {ind.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
