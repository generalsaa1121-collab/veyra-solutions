import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    q: 'What makes Veyra Solutions different from a marketing agency?',
    a: 'We don\'t run ads, manage social media, or generate leads through paid channels. We strengthen the digital foundation — the website, the Google presence, the customer journey, the systems — so that when a customer finds you through any channel, they trust you enough to reach out. It\'s a different problem and a different solution.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most clients see meaningful improvement within 60–90 days. Some changes — like Google Business optimization — can move quickly. Others, like organic search positioning, build over time. We\'ll set honest expectations from the start.',
  },
  {
    q: 'Do I need to be involved day-to-day?',
    a: 'No. We handle the work. We\'ll need your input at the start — context about your business, approval on key decisions — but we\'re built for busy owners who don\'t have time to manage another project. You stay informed, not in the weeds.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on the scope of what\'s needed. We don\'t publish pricing because we don\'t believe in one-size-fits-all packages. The discovery call is free, and we\'ll be straight with you about what\'s worth doing and what it will cost.',
  },
  {
    q: 'Do you work with businesses outside the trades?',
    a: 'Our core expertise is in local service businesses — contractors, tradespeople, cleaning companies, and similar. If your business is in a different category, reach out anyway and we\'ll tell you honestly if we\'re a good fit.',
  },
  {
    q: 'What if I already have a website?',
    a: 'That\'s fine. Sometimes we rebuild, sometimes we refine. We start with an audit and recommend what\'s actually necessary — not the most expensive option, the most effective one.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-rim/30">
      <button
        className="w-full flex items-start justify-between gap-6 py-7 text-left cursor-pointer group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-display font-medium text-ink group-hover:text-gold transition-colors duration-200"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', letterSpacing: '-0.01em' }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-ink-dim group-hover:text-gold transition-all duration-200 mt-0.5"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transitionProperty: 'transform, color' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '500px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="pb-7 text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem' }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { ref, visible } = useInView()

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-depth border-t border-rim/30 py-28 lg:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className={`lg:col-span-4 reveal ${visible ? 'visible' : ''}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-blue-brand" />
              <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-ink-dim font-display">
                FAQ
              </span>
            </div>
            <h2
              id="faq-heading"
              className="font-display font-bold text-ink text-balance mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Common questions.
            </h2>
            <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              If your question isn't here, the discovery call is the right place to ask it.
            </p>
          </div>

          {/* Right */}
          <div className={`lg:col-span-8 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="border-t border-rim/30">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
