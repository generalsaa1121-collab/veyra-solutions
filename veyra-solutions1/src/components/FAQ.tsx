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
    <div className="border-b border-border">
      <button
        className="w-full flex items-start justify-between gap-8 py-7 text-left cursor-pointer group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-display font-medium text-navy group-hover:text-navy-mid transition-colors duration-200"
          style={{ fontSize: 'clamp(0.92rem, 1.4vw, 1.05rem)', letterSpacing: '-0.01em', lineHeight: 1.4 }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-charcoal-muted mt-0.5"
          aria-hidden="true"
          style={{
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '400px' : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.25s ease',
        }}
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
      className="bg-surface border-t border-border py-28 lg:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className={`lg:col-span-4 reveal ${visible ? 'visible' : ''}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-navy" />
              <span className="text-2xs font-semibold tracking-[0.18em] uppercase text-charcoal-muted font-display">
                FAQ
              </span>
            </div>
            <h2
              id="faq-heading"
              className="font-display font-bold text-navy text-balance mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Common questions.
            </h2>
            <p className="text-ink-muted font-light leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              If your question isn't here, the discovery call is the right place to ask it.
            </p>
          </div>

          {/* Right */}
          <div
            className={`lg:col-span-8 reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="border-t border-border">
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
