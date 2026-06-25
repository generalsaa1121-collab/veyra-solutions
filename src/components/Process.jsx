import { useInView } from '../hooks/useInView'

const STEPS = [
  {
    step: 'Evaluate',
    label: '01',
    description:
      'We start by reviewing your current digital presence — website, Google Business Profile, contact flow, and online visibility. We look for gaps that are costing you customers.',
  },
  {
    step: 'Improve',
    label: '02',
    description:
      'We make targeted, practical improvements. No unnecessary complexity. We focus on the changes that have the highest impact on trust and conversion.',
  },
  {
    step: 'Strengthen',
    label: '03',
    description:
      'We put systems in place so the improvements hold. Review processes, automation, and a cleaner customer journey that continues working after our engagement ends.',
  },
]

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="process" className="bg-cream-warm py-24 md:py-36 border-t border-ink/[0.07]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`mb-16 md:mb-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
              How It Works
            </span>
          </div>
          <h2 id="process-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ink max-w-lg leading-tight">
            Three steps to a stronger digital presence.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[2.25rem] left-[3.5rem] right-[3.5rem] h-px bg-ink/[0.08]" aria-hidden="true" />

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {STEPS.map((item, i) => (
              <ProcessStep key={item.label} item={item} index={i} parentInView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ item, index, parentInView }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const visible = parentInView || inView

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Step number bubble */}
      <div className="relative w-[4.5rem] h-[4.5rem] mb-8">
        <div className="w-full h-full rounded-full border border-ink/[0.12] bg-cream flex items-center justify-center">
          <span className="font-sans text-xs font-medium tracking-[0.12em] text-bronze">{item.label}</span>
        </div>
      </div>

      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-4">{item.step}</h3>
      <p className="font-sans text-sm text-ink/55 leading-relaxed">{item.description}</p>
    </div>
  )
}
