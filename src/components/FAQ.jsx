import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const FAQS = [
  {
    q: 'Do you run ads or manage social media?',
    a: "No. We're not a marketing agency, ad agency, or social media agency. We focus entirely on the digital foundation — your website, Google Business presence, online credibility, and customer journey. If your foundation is weak, advertising spend is wasted.",
  },
  {
    q: 'Do you guarantee leads or more customers?',
    a: "We don't promise leads, and we don't run lead generation campaigns. What we do is improve the digital foundation that allows your existing interest — referrals, Google searches, word of mouth — to convert more reliably into actual customers.",
  },
  {
    q: 'What kinds of businesses do you work with?',
    a: "We work with local home service businesses: roofers, landscapers, HVAC companies, electricians, cleaning companies, general contractors, and similar trades. Our approach is designed specifically for businesses that rely on local reputation and referrals.",
  },
  {
    q: 'What does the process actually look like?',
    a: "We start with an evaluation of your current digital presence — website, Google Business Profile, contact flow, and how you appear to customers searching online. From there, we identify the highest-impact improvements and work through them systematically.",
  },
  {
    q: 'How long does it take to see improvements?',
    a: "Some improvements are visible quickly — like a refreshed website or a completed Google Business Profile. Others, like improved Google search visibility, take more time. We focus on real, durable improvements rather than short-term tactics.",
  },
  {
    q: 'How is this different from hiring a web designer?',
    a: "A web designer delivers a website. We deliver a complete digital foundation — the website is one part of it. We also address your Google Business presence, customer journey, trust signals, and practical automation. Everything works together.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="faq" className="bg-cream py-24 md:py-36 border-t border-ink/[0.07]" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className={`mb-14 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-bronze" aria-hidden="true" />
            <span className="font-sans text-xs font-medium tracking-[0.18em] text-bronze uppercase">
              Questions
            </span>
          </div>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ink max-w-lg leading-tight">
            What you should know before we talk.
          </h2>
        </div>

        <dl className="divide-y divide-ink/[0.08]">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              parentInView={inView}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}

function FAQItem({ faq, index, isOpen, onToggle, parentInView }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const visible = parentInView || inView

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <dt>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
        >
          <span className="font-serif text-lg md:text-xl text-ink group-hover:text-ink/70 transition-colors duration-200">
            {faq.q}
          </span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full border border-ink/[0.12] flex items-center justify-center text-ink/40 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
            aria-hidden="true"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="pb-6 pr-14">
          <p className="font-sans text-base text-ink/55 leading-relaxed">{faq.a}</p>
        </dd>
      )}
    </div>
  )
}
