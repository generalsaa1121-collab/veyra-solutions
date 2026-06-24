export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white pt-18" aria-label="Hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-widest uppercase text-navy mb-10 opacity-70">
            Business Growth Consulting
          </p>

          {/* Headline */}
          <h1 className="font-bold text-charcoal leading-none mb-10 text-balance" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 1.02 }}>
            Your business should be easier{' '}
            <span className="text-navy">to find,<br />to trust,</span>{' '}
            and to hire.
          </h1>

          {/* Sub */}
          <p className="text-xl text-charcoal-muted font-light leading-relaxed max-w-2xl mb-14" style={{ letterSpacing: '-0.01em' }}>
            Veyra Solutions works with local businesses to close the gap between how good they are and how visible that looks online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider text-white bg-navy hover:bg-navy-700 transition-colors duration-200"
              style={{ letterSpacing: '0.08em' }}
            >
              START A CONVERSATION
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-navy transition-colors duration-200"
            >
              See what we do
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-16 left-6 right-6 lg:left-12 lg:right-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-t border-gray-100 pt-8">
          <p className="text-xs text-charcoal-muted tracking-widest uppercase">
            Serving local businesses across the US
          </p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-navy" style={{ letterSpacing: '-0.02em' }}>4</p>
              <p className="text-xs text-charcoal-muted tracking-widest uppercase mt-0.5">Core Services</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-navy" style={{ letterSpacing: '-0.02em' }}>100%</p>
              <p className="text-xs text-charcoal-muted tracking-widest uppercase mt-0.5">Local Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
