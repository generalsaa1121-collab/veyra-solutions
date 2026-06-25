export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream/40 border-t border-cream/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Wordmark */}
          <a href="#" aria-label="Veyra Solutions" className="flex items-center">
            <span className="font-serif text-lg font-semibold tracking-tight text-cream/80">
              Veyra<span className="text-bronze">.</span>
            </span>
          </a>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6" role="list">
              {[
                ['Services',    '#services'   ],
                ['Process',     '#process'    ],
                ['Industries',  '#industries' ],
                ['FAQ',         '#faq'        ],
                ['Contact',     '#contact'    ],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-xs font-medium tracking-wide text-cream/35 hover:text-cream/70 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <p className="font-sans text-xs text-cream/25">
            &copy; {year} Veyra Solutions
          </p>
        </div>

        <p className="mt-8 font-sans text-xs text-cream/20 max-w-md leading-relaxed">
          Veyra Solutions helps local businesses build a stronger digital foundation.
          We are not a marketing agency, ad agency, or social media company.
        </p>
      </div>
    </footer>
  )
}
