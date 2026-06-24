const industries = [
  { name: 'Home Services', examples: 'HVAC · Plumbing · Electrical · Landscaping · Cleaning' },
  { name: 'Healthcare & Wellness', examples: 'Dental · Chiropractic · Physical Therapy · Optometry' },
  { name: 'Legal & Professional', examples: 'Law Firms · CPAs · Financial Advisors · Insurance' },
  { name: 'Hospitality & Food', examples: 'Restaurants · Cafés · Catering · Event Venues' },
  { name: 'Automotive', examples: 'Auto Repair · Detailing · Body Shops · Dealerships' },
  { name: 'Retail & Specialty', examples: 'Boutiques · Pet Services · Salons · Fitness Studios' },
]

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-36 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy mb-6 opacity-70">
              Industries
            </p>
            <h2 className="font-bold text-charcoal text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.08 }}>
              Built for businesses that serve their community.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-charcoal-muted font-light leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
              We work exclusively with local service-based businesses. Our approach is tailored to how customers in your category actually search, compare, and decide.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-white p-10 group hover:bg-gray-50 transition-colors duration-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-navy transition-colors duration-200" style={{ letterSpacing: '-0.01em' }}>
                {ind.name}
              </h3>
              <p className="text-sm text-charcoal-muted font-light tracking-wide">
                {ind.examples}
              </p>
            </div>
          ))}
        </div>

        {/* Not us callout */}
        <div className="mt-20 border border-gray-100 p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-muted mb-3">
                We are not
              </p>
              <h3 className="text-2xl font-bold text-charcoal" style={{ letterSpacing: '-0.02em' }}>
                A marketing agency.
              </h3>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-base text-charcoal-muted font-light leading-relaxed mb-6">
                Veyra Solutions is a consulting firm, not a marketing agency, lead gen company, or social media manager. We don't run ads. We don't post content. We don't generate leads for you.
              </p>
              <p className="text-base text-charcoal font-medium leading-relaxed">
                We fix the foundational layer — so that when a customer finds you, they trust you immediately and know exactly how to hire you.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
