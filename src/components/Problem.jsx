import { useInView } from '../hooks/useInView'

const SIGNALS = [
  'Referrals land on an outdated website',
  'Google searches find you — but don\'t convert',
  'No clear way for visitors to trust or contact you',
  'Your business looks smaller than it is online',
  'Competitors with worse reputations rank higher',
]

export default function Problem() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section className="bg-ink text-cream py-24 md:py-36 overflow-hidden" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
              <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
                The Problem
              </span>
            </div>
            <h2 id="problem-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] text-cream">
              You're already getting interest.{' '}
              <span className="italic text-cream/60">You're losing it before the first call.</span>
            </h2>
            <p className="mt-6 font-sans text-base text-cream/55 leading-relaxed max-w-lg">
              Most local businesses earn real trust through their work — but when a potential
              customer checks them out online, something breaks. The website looks old. The
              Google listing is incomplete. The experience doesn't match the quality of
              the business.
            </p>
            <p className="mt-4 font-sans text-base text-cream/55 leading-relaxed max-w-lg">
              That gap costs you jobs. Silently, every day.
            </p>
          </div>

          {/* Right — signal list */}
          <div>
            <ul className="flex flex-col divide-y divide-cream/[0.08]" role="list">
              {SIGNALS.map((signal, i) => (
                <li
                  key={signal}
                  className={`flex items-start gap-4 py-5 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: inView ? `${i * 80}ms` : '0ms' }}
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-bronze/40 flex items-center justify-center" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                  </span>
                  <span className="font-sans text-base text-cream/70">{signal}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 border border-bronze/20 rounded-sm bg-bronze/[0.05]">
              <p className="font-serif text-lg italic text-cream/80 leading-relaxed">
                "The quality of your work isn't the problem. The digital presentation is."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
