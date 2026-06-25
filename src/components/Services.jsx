import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    number: '01',
    title: 'Website Modernization',
    description:
      'We rebuild or redesign your website to reflect the real quality of your business — fast, clear, mobile-first, and built to convert visitors into calls.',
    details: ['Clean, professional design', 'Mobile-optimized layout', 'Clear calls-to-action', 'Fast load performance'],
  },
  {
    number: '02',
    title: 'Google Business Optimization',
    description:
      'Your Google Business Profile is often the first thing customers see. We optimize it so your business stands out and earns trust before they even visit your site.',
    details: ['Complete profile setup', 'Category & keyword alignment', 'Photo and content strategy', 'Review process guidance'],
  },
  {
    number: '03',
    title: 'Customer Journey Improvements',
    description:
      'We map how customers move from discovery to contact and identify every point where you lose them — then fix it.',
    details: ['Contact flow simplification', 'Trust signal placement', 'Clarity of services offered', 'Response pathway setup'],
  },
  {
    number: '04',
    title: 'Business Automation',
    description:
      'Practical systems that save time and reduce dropped leads — without complicated software. We focus on what actually works for local service businesses.',
    details: ['Lead capture & follow-up', 'Appointment scheduling', 'Review request automation', 'Simple CRM setup'],
  },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="bg-cream py-24 md:py-36" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className={`mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-tight max-w-lg">
              Four areas. One goal.
            </h2>
            <p className="font-sans text-base text-ink/50 max-w-sm leading-relaxed">
              We focus on the digital foundation — not campaigns, not ads, not social media.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-ink/[0.08]">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} baseInView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, baseInView }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const visible = baseInView || inView

  return (
    <div
      ref={ref}
      className={`group bg-cream p-8 md:p-10 lg:p-12 hover:bg-cream-warm transition-colors duration-300 cursor-default ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze">{service.number}</span>
        <span className="text-ink/20 group-hover:text-bronze transition-colors duration-300" aria-hidden="true">
          <DiagonalArrow />
        </span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-4">{service.title}</h3>
      <p className="font-sans text-sm text-ink/55 leading-relaxed mb-8">{service.description}</p>
      <ul className="flex flex-col gap-2" role="list">
        {service.details.map(d => (
          <li key={d} className="flex items-center gap-2.5 font-sans text-sm text-ink/45">
            <span className="w-1 h-1 rounded-full bg-bronze flex-shrink-0" aria-hidden="true" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DiagonalArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
