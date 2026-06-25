import Logo from './Logo'

const services = [
  'Website Modernization',
  'Google Business Optimization',
  'Customer Journey Improvements',
  'Business Automation',
  'Digital Presence Improvements',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-depth border-t border-rim/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 lg:py-20">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="mb-6" />
            <p className="text-sm text-ink-muted font-light leading-relaxed max-w-xs" style={{ lineHeight: 1.7 }}>
              Helping local businesses become easier to find, trust, and hire.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-2xs font-semibold tracking-[0.18em] uppercase text-ink-dim mb-6 font-display">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-ink-muted hover:text-ink transition-colors duration-200 font-light cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-2xs font-semibold tracking-[0.18em] uppercase text-ink-dim mb-6 font-display">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@veyrasolutions.com"
                  className="text-sm text-ink-muted hover:text-ink transition-colors duration-200 font-light cursor-pointer"
                >
                  hello@veyrasolutions.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-ink-muted hover:text-gold transition-colors duration-200 font-light cursor-pointer"
                >
                  Book a discovery call
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-rim/30 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-dim font-light">
            © {year} Veyra Solutions. All rights reserved.
          </p>
          <p className="text-xs text-ink-dim font-light tracking-wide">
            Local Business. Digital Foundation. Real Results.
          </p>
        </div>

      </div>
    </footer>
  )
}
