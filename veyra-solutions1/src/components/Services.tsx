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
      'Inquiry-optimized page structure',
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
  {
    n: '05',
    title: 'Digital Presence Improvements',
    description:
      'Beyond your website and Google listing, your broader digital footprint matters. We audit and strengthen every touchpoint a prospective customer might encounter.',
    outcomes: [
      'Online directory cleanup',
      'NAP consistency across platforms',
      'Reputation monitoring setup',
      'Local citation building',
    ],
  },
]

export default function Services() {
  const { ref, visible } = useInView()

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-void border-t border-rim/30 py-28 lg:py-40"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-gold font-display">
              Services
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <h2
              id="services-heading"
              className="font-display font-bold text-ink text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Five disciplines. One goal.
            </h2>
            <p className="text-ink-muted font-light leading-relaxed self-end text-lg" style={{ letterSpacing: '-0.01em' }}>
              Each service is designed to close a specific part of the visibility gap.
              Most clients start with one and expand as results compound.
            </p>
          </div>
        </div>

        {/* Service list */}
        <div className="border-t border-rim/30">
          {services.map((svc, i) => (
            <div
              key={svc.n}
              className={`border-b border-rim/30 group reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.05 + i * 0.08}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                {/* Number column */}
                <div className="lg:col-span-1 border-r border-rim/20 flex lg:items-start lg:justify-center pt-8 lg:pt-12 px-0 pb-0 lg:pb-12">
                  <span
                    className="font-display font-bold text-rim group-hover:text-gold-muted transition-colors duration-300 select-none px-6 lg:px-0"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.1em', writingMode: 'horizontal-tb' }}
                    aria-hidden="true"
                  >
                    {svc.n}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-11 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-6 lg:px-12 py-8 lg:py-12">
                  <div className="lg:col-span-5">
                    <h3
                      className="font-display font-semibold text-ink mb-4 group-hover:text-gold transition-colors duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', letterSpacing: '-0.018em' }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                      {svc.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-2xs font-semibold tracking-[0.16em] uppercase text-ink-dim mb-5 font-display">
                      What you get
                    </p>
                    <ul className="space-y-3">
                      {svc.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="mt-[0.4rem] w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-ink-muted font-light">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
