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
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 lg:py-20">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="mb-6" />
            <p className="text-sm text-ink-muted font-light leading-relaxed max-w-xs" style={{ lineHeight: 1.75 }}>
              Helping local businesses become easier to find, trust, and hire.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-2xs font-semibold tracking-[0.16em] uppercase text-charcoal-muted mb-6 font-display">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-ink-muted hover:text-navy transition-colors duration-200 font-light cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-2xs font-semibold tracking-[0.16em] uppercase text-charcoal-muted mb-6 font-display">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@veyrasolutions.com"
                  className="text-sm text-ink-muted hover:text-navy transition-colors duration-200 font-light cursor-pointer"
                >
                  hello@veyrasolutions.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-ink-muted hover:text-navy transition-colors duration-200 font-light cursor-pointer"
                >
                  Book a discovery call
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-border py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-light font-light">
            © {year} Veyra Solutions. All rights reserved.
          </p>
          <p className="text-xs text-ink-light font-light tracking-wide">
            Premium · Consulting-Focused · Modern · Timeless · Minimal
          </p>
        </div>

      </div>
    </footer>
  )
}
