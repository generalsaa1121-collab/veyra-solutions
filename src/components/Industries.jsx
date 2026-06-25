import { useInView } from '../hooks/useInView'

const INDUSTRIES = [
  { name: 'Roofing',      icon: RoofIcon      },
  { name: 'Landscaping',  icon: LeafIcon      },
  { name: 'HVAC',         icon: HvacIcon      },
  { name: 'Electrical',   icon: BoltIcon      },
  { name: 'Cleaning',     icon: SparkleIcon   },
  { name: 'Contracting',  icon: WrenchIcon    },
]

export default function Industries() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="industries" className="bg-ink py-24 md:py-36" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`mb-14 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
              Who We Work With
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 id="industries-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-cream leading-tight max-w-lg">
              Built for home service businesses.
            </h2>
            <p className="font-sans text-sm text-cream/45 max-w-xs leading-relaxed">
              We understand the customer journey specific to local trade and service businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-cream/[0.06]">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} parentInView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ industry, index, parentInView }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const visible = parentInView || inView
  const Icon = industry.icon

  return (
    <div
      ref={ref}
      className={`group bg-ink hover:bg-cream/[0.04] transition-colors duration-300 p-8 md:p-10 flex flex-col gap-5 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="w-10 h-10 rounded-full border border-cream/[0.12] flex items-center justify-center text-bronze">
        <Icon />
      </div>
      <span className="font-serif text-xl font-semibold text-cream/80 group-hover:text-cream transition-colors duration-200">
        {industry.name}
      </span>
    </div>
  )
}

function RoofIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.08L5.71 21 6 20.5C7 18.5 10 17 12 17c4 0 8-3 8-9 0-1-.29-2-.63-2.63C19.37 8 18.26 8.29 17 8Z" />
      <path d="M3.82 19.08C5.51 15.79 8 11.73 8 8" />
    </svg>
  )
}
function HvacIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  )
}
function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  )
}
function WrenchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
