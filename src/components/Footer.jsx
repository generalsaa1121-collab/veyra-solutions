import Logo from './Logo'

const services = [
  'Website Modernization',
  'Google Business Optimization',
  'Customer Journey Improvements',
  'Business Automation',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="mb-6" />
            <p className="text-sm text-charcoal-muted font-light leading-relaxed max-w-xs">
              Helping local businesses become easier to find, trust, and hire.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-muted mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-charcoal hover:text-navy transition-colors duration-200 font-light">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-muted mb-6">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@veyrasolutions.com" className="text-sm text-charcoal hover:text-navy transition-colors duration-200 font-light">
                  hello@veyrasolutions.com
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-charcoal hover:text-navy transition-colors duration-200 font-light">
                  Book a discovery call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-charcoal-muted font-light">
            © {year} Veyra Solutions. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-muted font-light tracking-wide">
            Premium · Consulting-Focused · Modern · Timeless · Minimal
          </p>
        </div>

      </div>
    </footer>
  )
}
