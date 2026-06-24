const problems = [
  {
    number: '01',
    title: "You're invisible where it matters",
    body: "Potential customers search for services like yours every day — and find your competitors instead. Not because those businesses are better, but because they're better positioned online.",
  },
  {
    number: '02',
    title: "Your presence doesn't match your quality",
    body: "An outdated website or sparse Google listing sends the wrong signal. First impressions are formed before anyone picks up the phone, and most local businesses are losing that moment.",
  },
  {
    number: '03',
    title: 'Growth is stuck at word-of-mouth',
    body: "Referrals are valuable — but they're not scalable. Without a system that works 24/7, you're leaving a steady stream of qualified, ready-to-hire customers on the table.",
  },
]

export default function Problem() {
  return (
    <section className="bg-white py-36 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy mb-6 opacity-70">
              The Problem
            </p>
            <h2 className="font-bold text-charcoal text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.08 }}>
              Great businesses are being overlooked every day.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-charcoal-muted font-light leading-relaxed" style={{ letterSpacing: '-0.01em' }}>
              Most local businesses provide genuinely excellent service. The gap isn't in delivery — it's in digital presence. Customers can't hire someone they can't find, and they won't trust someone who looks unprofessional online.
            </p>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
          {problems.map((p) => (
            <div key={p.number} className="bg-white p-10 lg:p-14">
              <p className="text-xs font-semibold tracking-widest text-navy opacity-40 mb-8">
                {p.number}
              </p>
              <h3 className="text-xl font-semibold text-charcoal mb-5 leading-snug" style={{ letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p className="text-base text-charcoal-muted font-light leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
