import { useInView } from '../hooks/useInView'

const industries = [
  {
    title: 'Roofing',
    description: 'High-ticket, high-trust decisions. Your digital presence needs to match the size of the investment customers are making.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5" />
        <path d="M5 9v11h14V9" />
        <path d="M9 20v-7h6v7" />
      </svg>
    ),
  },
  {
    title: 'Landscaping',
    description: 'Visual work deserves a visual presence. We help you show — not just tell — the quality of what you create.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12" />
        <path d="M5 12C5 8.13 8.13 5 12 5s7 3.13 7 7" />
        <path d="M3 17c0-2.76 4.03-5 9-5s9 2.24 9 5" />
      </svg>
    ),
  },
  {
    title: 'HVAC',
    description: 'Seasonal urgency, local competition. Customers need to find you fast and trust you instantly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
  },
  {
    title: 'Electrical',
    description: 'Licensing and trust are everything. We make sure that expertise comes through before you ever pick up the phone.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H13L13 2Z" />
      </svg>
    ),
  },
  {
    title: 'Contracting',
    description: 'Project-based trust at scale. We help general contractors build the kind of online presence that wins larger bids.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="1" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
    ),
  },
  {
    title: 'Cleaning Companies',
    description: 'High repeat-customer potential, but only if the first impression earns the trust to make that call.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
]

export default function Industries() {
  const { ref, visible } = useInView()

  return (
    <section
      id="industries"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-surface-soft border-t border-border py-28 lg:py-40"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-navy" />
            <span className="text-2xs font-semibold tracking-[0.18em] uppercase text-charcoal-muted font-display">
              Who We Work With
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <h2
              id="industries-heading"
              className="font-display font-bold text-navy text-balance"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Built for the trades.
            </h2>
            <p className="text-ink-muted font-light leading-relaxed self-end text-lg" style={{ letterSpacing: '-0.005em' }}>
              We work exclusively with local service businesses — not e-commerce, not
              SaaS, not national brands. Our focus keeps our expertise sharp.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`bg-surface-soft p-8 lg:p-10 group hover:bg-navy-tint transition-colors duration-200 cursor-default reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.04 + i * 0.07}s` }}
            >
              <div className="text-charcoal-muted group-hover:text-navy transition-colors duration-200 mb-5">
                {ind.icon}
              </div>
              <h3
                className="font-display font-semibold text-navy mb-3"
                style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
              >
                {ind.title}
              </h3>
              <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9rem' }}>
                {ind.description}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`mt-10 text-sm text-ink-muted font-light text-center reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.5s' }}
        >
          Not in this list?{' '}
          <a href="#contact" className="text-navy hover:text-navy-mid underline underline-offset-4 transition-colors duration-200 cursor-pointer">
            Let's talk — we may still be a fit.
          </a>
        </p>

      </div>
    </section>
  )
}
