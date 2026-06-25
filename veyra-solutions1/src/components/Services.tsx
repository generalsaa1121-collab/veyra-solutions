import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    n: '01',
    title: 'Website Modernization',
    description:
      'A fast, credible website that converts visitors into inquiries. We rebuild or refine your online presence so it reflects the quality of your actual work — not a template from ten years ago.',
    outcomes: [
      'Mobile-first, fast-loading design',
      'Clear service and location messaging',
      'Inquiry-optimized structure',
      'Built to rank in local search',
    ],
  },
  {
    n: '02',
    title: 'Google Business Optimization',
    description:
      'Your Google Business Profile is often the first thing a customer sees. We make it complete, accurate, and positioned to earn the trust and clicks your competitors are capturing.',
    outcomes: [
      'Fully optimized profile setup',
      'Category and keyword strategy',
      'Review generation process',
      'Ongoing listing management',
    ],
  },
  {
    n: '03',
    title: 'Customer Journey Improvements',
    description:
      'We map the path a customer takes from first discovery to final hire — and identify exactly where you\'re losing them. Then we systematically remove the friction.',
    outcomes: [
      'Discovery-to-inquiry audit',
      'Contact flow optimization',
      'Trust signal placement',
      'Response time improvements',
    ],
  },
  {
    n: '04',
    title: 'Business Automation',
    description:
      'Repetitive manual tasks cost you time that should go toward your customers. We implement lightweight systems that handle the routine so you can focus on the work.',
    outcomes: [
      'Appointment and inquiry workflows',
      'Follow-up automation',
      'Review request systems',
      'Performance dashboards',
    ],
  },
]

function ServicePanel({
  service,
  index,
  visible,
}: {
  service: typeof services[0]
  index: number
  visible: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${0.08 * index}s` }}
    >
      <div
        className={`group relative border border-stone/40 p-8 lg:p-10 cursor-pointer transition-all duration-300 hover:border-bronze/60 hover:bg-parchment-warm ${
          expanded ? 'border-bronze/60 bg-parchment-warm' : ''
        }`}
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label={`${service.title} — click to expand`}
      >
        {/* Large ghost number — decorative */}
        <div
          className="absolute top-4 right-6 font-display font-bold text-stone/30 select-none pointer-events-none"
          style={{ fontSize: 'clamp(4rem, 7vw, 6rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
          aria-hidden="true"
        >
          {service.n}
        </div>

        <div className="relative z-10">
          {/* Service number + title */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <span
                className="block text-2xs font-medium text-bronze mb-3 font-body"
                style={{ letterSpacing: '0.16em' }}
              >
                {service.n}
              </span>
              <h3
                className="font-display text-ink"
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.25,
                }}
              >
                {service.title}
              </h3>
            </div>

            {/* Expand toggle */}
            <div
              className="flex-shrink-0 w-7 h-7 border border-stone/60 flex items-center justify-center mt-1 transition-all duration-300 group-hover:border-bronze/60"
              aria-hidden="true"
              style={{
                transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Description — always visible */}
          <p
            className="text-ink-muted font-light leading-relaxed pr-10"
            style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}
          >
            {service.description}
          </p>

          {/* Outcomes — expand on click */}
          <div
            style={{
              maxHeight: expanded ? '300px' : '0',
              opacity: expanded ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.35s ease, opacity 0.3s ease',
            }}
          >
            <div className="mt-7 pt-6 border-t border-stone/40">
              <p
                className="text-2xs font-semibold uppercase text-bronze mb-4 font-body"
                style={{ letterSpacing: '0.16em' }}
              >
                What we deliver
              </p>
              <ul className="space-y-2.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0" />
                    <span className="text-sm text-ink-muted font-light">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const { ref, visible } = useInView()

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-parchment-deep border-t border-stone/40 py-28 lg:py-40"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-16 lg:mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-6 h-px bg-bronze" />
                <span
                  className="text-2xs font-semibold uppercase text-bronze"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Services
                </span>
              </div>
              <h2
                id="services-heading"
                className="font-display text-ink text-balance"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12,
                }}
              >
                Four ways we strengthen your digital foundation.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end">
              <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Each service targets a specific point where local businesses lose
                customers online. Click any panel to see what we deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Service panels — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone/20">
          {services.map((s, i) => (
            <ServicePanel key={s.n} service={s} index={i} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  )
}
