export default function CTA() {
  return (
    <section id="contact" className="bg-navy py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Get Started
          </p>
          <h2 className="font-bold text-white mb-8 text-balance" style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', letterSpacing: '-0.025em', lineHeight: 1.04 }}>
            Ready to be easier to find?
          </h2>
          <p className="text-xl font-light leading-relaxed mb-14" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.01em' }}>
            Start with a 30-minute discovery call. No pitch, no pressure — just a clear look at where you stand and what's worth doing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:hello@veyrasolutions.com"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold tracking-wider text-navy bg-white hover:bg-gray-50 transition-colors duration-200"
              style={{ letterSpacing: '0.08em' }}
            >
              BOOK A DISCOVERY CALL
            </a>
            <a
              href="mailto:hello@veyrasolutions.com"
              className="text-sm font-medium"
              style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}
            >
              or email hello@veyrasolutions.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-28 pt-16 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Response Time
              </p>
              <p className="text-base text-white font-medium">
                Within 24 hours
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                First Meeting
              </p>
              <p className="text-base text-white font-medium">
                30 minutes, no obligation
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Who We Work With
              </p>
              <p className="text-base text-white font-medium">
                Local service businesses, US only
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
