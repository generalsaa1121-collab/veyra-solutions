import { useInView } from '../hooks/useInView'

export default function CTA() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section
      id="contact"
      className="bg-cream-warm border-t border-ink/[0.07] py-24 md:py-36"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
              Get Started
            </span>
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
          </div>

          <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.15]">
            Your digital foundation
            <br />
            <span className="italic text-ink/60">starts with a conversation.</span>
          </h2>

          <p className="mt-7 font-sans text-base md:text-lg text-ink/50 leading-relaxed max-w-xl mx-auto">
            No commitment. No pitch. Just an honest conversation about your
            current digital presence and where the real opportunities are.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@veyrasolutions.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream text-sm font-medium rounded-full hover:bg-ink/80 transition-colors duration-200 cursor-pointer"
            >
              Schedule a Consultation
              <ArrowRight />
            </a>
            <span className="font-sans text-sm text-ink/35">or reach us directly</span>
            <a
              href="mailto:hello@veyrasolutions.com"
              className="font-sans text-sm font-medium text-ink/55 hover:text-bronze transition-colors duration-200"
            >
              hello@veyrasolutions.com
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-12 font-sans text-xs text-ink/30 tracking-wide">
            We work with a limited number of businesses at a time to ensure quality.
          </p>
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
