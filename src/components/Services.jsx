const services = [
  {
    number: '01',
    title: 'Website Modernization',
    description:
      'A fast, credible website that converts visitors into inquiries. We rebuild or refine your online presence so it reflects the quality of your actual work — not a template from 2015.',
    outcomes: [
      'Mobile-first, fast-loading design',
      'Clear service messaging',
      'Inquiry-optimized structure',
      'Built to rank in local search',
    ],
  },
  {
    number: '02',
    title: 'Google Business Optimization',
    description:
      "Your Google Business Profile is often the first thing a customer sees. We make sure it's complete, accurate, and positioned to earn the trust and clicks your competitors are capturing.",
    outcomes: [
      'Fully optimized profile setup',
      'Category and keyword strategy',
      'Review generation process',
      'Ongoing listing management',
    ],
  },
  {
    number: '03',
    title: 'Customer Journey Improvements',
    description:
      "We map the path a customer takes from first discovery to final hire — and identify where you're losing them. Then we systematically remove the friction.",
    outcomes: [
      'Discovery-to-inquiry audit',
      'Contact flow optimization',
      'Trust signal placement',
      'Response time improvements',
    ],
  },
  {
    number: '04',
    title: 'Business Automation',
    description:
      'Repetitive manual tasks are costing you time that should go toward your customers. We implement lightweight automation that handles the routine so you can focus on the work.',
    outcomes: [
      'Appointment and inquiry workflows',
      'Follow-up automation',
      'Review request systems',
      'Reporting dashboards',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-36 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-navy mb-6 opacity-70">
            Services
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <h2 className="lg:col-span-6 font-bold text-charcoal text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.08 }}>
              Four disciplines. One goal.
            </h2>
            <p className="lg:col-span-5 lg:col-start-8 text-lg text-charcoal-muted font-light leading-relaxed self-end" style={{ letterSpacing: '-0.01em' }}>
              Each service is designed to solve a specific part of the visibility problem. Most clients start with one and expand as results compound.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-px bg-gray-100">
          {services.map((svc, i) => (
            <div key={svc.number} className="bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left */}
                <div className="lg:col-span-1 border-r border-gray-100 flex items-start justify-center pt-10 lg:pt-14 pb-0 lg:pb-14 px-0">
                  <span className="text-xs font-semibold tracking-widest text-navy opacity-30 writing-vertical hidden lg:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    {svc.number}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-navy opacity-30 lg:hidden px-6">
                    {svc.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-11 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-6 lg:px-12 py-10 lg:py-14">
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl font-bold text-charcoal mb-5" style={{ letterSpacing: '-0.015em' }}>
                      {svc.title}
                    </h3>
                    <p className="text-base text-charcoal-muted font-light leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-muted mb-5">
                      What you get
                    </p>
                    <ul className="space-y-3">
                      {svc.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-navy flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-charcoal font-medium">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
