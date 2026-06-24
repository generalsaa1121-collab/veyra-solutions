import { useState } from 'react'

const faqs = [
  {
    question: 'How is Veyra Solutions different from a marketing agency?',
    answer:
      'Marketing agencies focus on generating attention — ads, social media, email campaigns. We focus on what happens before that: ensuring your business looks credible, is easy to find in organic search, and has a clear path from first impression to hired. We build the infrastructure; you get the customers.',
  },
  {
    question: 'Do you work with businesses outside the US?',
    answer:
      'Currently, we focus exclusively on US-based local businesses. Our expertise is in the specific search behaviors, platforms, and customer expectations in domestic markets.',
  },
  {
    question: 'What size business do you typically work with?',
    answer:
      "Most of our clients are owner-operated or small-team businesses with 1–25 employees. We've also worked with multi-location businesses in a single market. What matters more than size is that you're a genuine local service provider with real customers.",
  },
  {
    question: 'How long does an engagement take?',
    answer:
      "Depends on scope. A focused Google Business optimization and website refresh can be complete in 3–4 weeks. More comprehensive engagements — including automation and journey improvements — typically run 6–10 weeks. We'll give you a clear timeline in the proposal phase.",
  },
  {
    question: 'Do you offer ongoing support after the project ends?',
    answer:
      "Yes. Many clients choose a lighter ongoing relationship for monitoring, refinement, and expanding into additional services. This is not a default monthly retainer — it's scoped to what actually makes sense for your business.",
  },
  {
    question: 'What do you need from us to get started?',
    answer:
      "Mostly access and availability. We'll need login credentials for your existing platforms (website, Google Business, etc.) and 30–60 minutes of your time for discovery. You don't need to prepare anything elaborate — we ask the right questions.",
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-gray-100">
      <button
        className="w-full flex items-center justify-between text-left py-7 gap-8 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium text-charcoal group-hover:text-navy transition-colors duration-200" style={{ letterSpacing: '-0.005em' }}>
          {question}
        </span>
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
            <path d="M6 0v12M0 6h12" stroke="#0F1E3A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-7 pr-14">
          <p className="text-base text-charcoal-muted font-light leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-36 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-navy mb-6 opacity-70">
              FAQ
            </p>
            <h2 className="font-bold text-charcoal text-balance" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Common questions.
            </h2>
            <p className="mt-6 text-base text-charcoal-muted font-light leading-relaxed">
              If something isn't covered here, reach out — we respond to every inquiry.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
            <div className="border-t border-gray-100" />
          </div>
        </div>

      </div>
    </section>
  )
}
