const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    body: "A focused 30-minute conversation about your business, where customers find you today, and what's getting in the way of consistent growth.",
  },
  {
    number: '02',
    title: 'Presence Audit',
    body: 'We conduct a thorough review of your website, Google Business Profile, and customer journey — identifying the highest-impact gaps.',
  },
  {
    number: '03',
    title: 'Strategy & Proposal',
    body: 'You receive a clear, prioritized plan with specific deliverables, timelines, and expected outcomes. No vague retainers or undefined scope.',
  },
  {
    number: '04',
    title: 'Execution',
    body: 'We implement the agreed work with regular check-ins and transparent progress reporting. You know exactly where things stand at every stage.',
  },
  {
    number: '05',
    title: 'Review & Refine',
    body: "After launch or delivery, we measure what's working and make targeted refinements. Results compound — we stay aligned with your goals.",
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-navy py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              How It Works
            </p>
            <h2 className="font-bold text-white text-balance" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.08 }}>
              A deliberate process. No surprises.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.01em' }}>
              Every engagement follows the same disciplined sequence. You always know what's happening, what comes next, and what success looks like.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 lg:py-12 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="lg:col-span-1">
                <span className="text-xs font-semibold tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold text-white" style={{ letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.005em' }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        </div>

      </div>
    </section>
  )
}
