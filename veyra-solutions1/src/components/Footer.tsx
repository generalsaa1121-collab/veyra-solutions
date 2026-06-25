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
    <footer style={{ background: '#1C1917' }}>
      <div
        className="border-t"
        style={{ borderColor: 'rgba(200,195,186,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 lg:py-20">

            {/* Brand */}
            <div className="lg:col-span-4">
              <Logo inverted className="mb-7" />
              <p
                className="font-light leading-relaxed max-w-xs"
                style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(247,244,239,0.45)' }}
              >
                Helping local businesses become easier to find, trust, and hire.
              </p>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 lg:col-start-7">
              <p
                className="text-2xs font-semibold uppercase mb-6 font-body"
                style={{ letterSpacing: '0.2em', color: 'rgba(154,123,79,0.7)' }}
              >
                Services
              </p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="v-underline inline text-sm font-light cursor-pointer"
                      style={{ color: 'rgba(247,244,239,0.45)', lineHeight: 1.6 }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 lg:col-start-10">
              <p
                className="text-2xs font-semibold uppercase mb-6 font-body"
                style={{ letterSpacing: '0.2em', color: 'rgba(154,123,79,0.7)' }}
              >
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@veyrasolutions.com"
                    className="v-underline inline text-sm font-light cursor-pointer"
                    style={{ color: 'rgba(247,244,239,0.45)' }}
                  >
                    hello@veyrasolutions.com
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="v-underline inline text-sm font-light cursor-pointer"
                    style={{ color: 'rgba(247,244,239,0.45)' }}
                  >
                    Book a discovery call
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div
            className="border-t py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderColor: 'rgba(200,195,186,0.1)' }}
          >
            <p
              className="text-xs font-light"
              style={{ color: 'rgba(247,244,239,0.3)' }}
            >
              © {year} Veyra Solutions. All rights reserved.
            </p>
            <p
              className="text-xs font-light tracking-wide"
              style={{ color: 'rgba(247,244,239,0.2)', letterSpacing: '0.08em' }}
            >
              Local Business · Digital Foundation · Built with Care
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
