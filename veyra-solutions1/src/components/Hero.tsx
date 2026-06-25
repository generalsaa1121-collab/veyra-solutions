import { useEffect, useRef, useState } from 'react'

function JourneyDiagram() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const inkColor = '#1C1917'
  const bronzeColor = '#9A7B4F'
  const stoneColor = '#C8C3BA'
  const paleColor = 'rgba(154,123,79,0.12)'

  return (
    <div
      ref={wrapRef}
      className={`relative w-full ${active ? 'journey-active' : ''}`}
      aria-label="Customer journey: Find, Trust, Hire"
      role="img"
    >
      <svg
        viewBox="0 0 300 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs mx-auto lg:max-w-none"
        style={{ overflow: 'visible' }}
      >
        {/* Subtle background grid — editorial technical feel */}
        <line x1="150" y1="20" x2="150" y2="420" stroke={stoneColor} strokeWidth="0.5" strokeDasharray="2 8" opacity="0.5" />
        <line x1="20" y1="80" x2="280" y2="80" stroke={stoneColor} strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="220" x2="280" y2="220" stroke={stoneColor} strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="360" x2="280" y2="360" stroke={stoneColor} strokeWidth="0.5" opacity="0.3" />

        {/* Measurement tick marks */}
        <line x1="144" y1="76" x2="156" y2="76" stroke={stoneColor} strokeWidth="0.75" opacity="0.5" />
        <line x1="144" y1="216" x2="156" y2="216" stroke={stoneColor} strokeWidth="0.75" opacity="0.5" />
        <line x1="144" y1="356" x2="156" y2="356" stroke={stoneColor} strokeWidth="0.75" opacity="0.5" />

        {/* ─── CONNECTING PATHS ─── */}
        {/* Path 1: FIND → TRUST (slight curve) */}
        <path
          className="journey-path journey-path-1"
          d="M 150 100 C 180 140 120 180 150 215"
          stroke={bronzeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Tick mark on path 1 (mid-point annotation) */}
        <line x1="154" y1="158" x2="166" y2="158" stroke={bronzeColor} strokeWidth="1" opacity="0.4" />
        <text x="170" y="162" fontSize="8" fill={bronzeColor} opacity="0.6"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
          RESEARCH
        </text>

        {/* Path 2: TRUST → HIRE (mirror curve) */}
        <path
          className="journey-path journey-path-2"
          d="M 150 245 C 120 280 180 320 150 355"
          stroke={bronzeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        <line x1="154" y1="298" x2="166" y2="298" stroke={bronzeColor} strokeWidth="1" opacity="0.4" />
        <text x="170" y="302" fontSize="8" fill={bronzeColor} opacity="0.6"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
          DECIDE
        </text>

        {/* ─── NODE 1: FIND ─── */}
        <circle
          className="journey-node journey-node-1"
          cx="150" cy="80"
          r="22"
          fill={paleColor}
          stroke={bronzeColor}
          strokeWidth="1"
        />
        {/* Pulse ring */}
        <circle
          className="journey-pulse journey-pulse-1"
          cx="150" cy="80"
          r="14"
          fill="none"
          stroke={bronzeColor}
          strokeWidth="0.75"
          style={{ transformOrigin: '150px 80px' }}
        />
        {/* Search signal icon — thin lines forming a magnifying glass */}
        <circle
          className="journey-signal"
          cx="148" cy="77"
          r="7"
          stroke={inkColor}
          strokeWidth="1.25"
          fill="none"
        />
        <line
          className="journey-signal"
          x1="153" y1="82" x2="158" y2="87"
          stroke={inkColor}
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* FIND label */}
        <g className="journey-label-1">
          <text
            x="150" y="115"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill={inkColor}
            style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '0.08em' }}
          >
            FIND
          </text>
          <text
            x="150" y="128"
            textAnchor="middle"
            fontSize="7.5"
            fill="#78716C"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
          >
            SEARCH &amp; DISCOVERY
          </text>
        </g>

        {/* ─── NODE 2: TRUST ─── */}
        <circle
          className="journey-node journey-node-2"
          cx="150" cy="230"
          r="22"
          fill={paleColor}
          stroke={bronzeColor}
          strokeWidth="1"
        />
        <circle
          className="journey-pulse journey-pulse-2"
          cx="150" cy="230"
          r="14"
          fill="none"
          stroke={bronzeColor}
          strokeWidth="0.75"
          style={{ transformOrigin: '150px 230px' }}
        />
        {/* Star / trust signal — five dots arranged in pattern */}
        <g className="journey-signal-2">
          <circle cx="150" cy="226" r="1.5" fill={inkColor} />
          <circle cx="144" cy="230" r="1.5" fill={inkColor} />
          <circle cx="156" cy="230" r="1.5" fill={inkColor} />
          <circle cx="146" cy="235" r="1.5" fill={inkColor} />
          <circle cx="154" cy="235" r="1.5" fill={inkColor} />
        </g>

        <g className="journey-label-2">
          <text
            x="150" y="265"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill={inkColor}
            style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '0.08em' }}
          >
            TRUST
          </text>
          <text
            x="150" y="278"
            textAnchor="middle"
            fontSize="7.5"
            fill="#78716C"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
          >
            REVIEWS &amp; CREDIBILITY
          </text>
        </g>

        {/* ─── NODE 3: HIRE ─── */}
        <circle
          className="journey-node journey-node-3"
          cx="150" cy="370"
          r="22"
          fill={bronzeColor}
          stroke={bronzeColor}
          strokeWidth="1"
        />
        <circle
          className="journey-pulse journey-pulse-3"
          cx="150" cy="370"
          r="14"
          fill="none"
          stroke={bronzeColor}
          strokeWidth="0.75"
          style={{ transformOrigin: '150px 370px' }}
        />
        {/* Contact signal — phone shape */}
        <g className="journey-signal-3">
          <path
            d="M 144 364 C 143 367 143 371 145 373 L 147 375 C 148 376 149 376 150 375 L 152 373 C 153 372 153 371 152 370 L 151 369 C 150 368 150 367 151 366 L 153 364 C 154 363 154 362 153 361 L 151 360 C 150 359 149 359 148 360 Z"
            fill="rgba(247,244,239,0.8)"
            strokeWidth="0"
          />
        </g>

        <g className="journey-label-3">
          <text
            x="150" y="405"
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill={inkColor}
            style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '0.08em' }}
          >
            HIRE
          </text>
          <text
            x="150" y="418"
            textAnchor="middle"
            fontSize="7.5"
            fill="#78716C"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
          >
            CONTACT &amp; QUOTE
          </text>
        </g>

        {/* Side annotations — editorial marks */}
        <line x1="20" y1="80" x2="120" y2="80" stroke={stoneColor} strokeWidth="0.75" opacity="0.6" />
        <text x="16" y="83" textAnchor="end" fontSize="7" fill={stoneColor}
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
          01
        </text>

        <line x1="20" y1="230" x2="120" y2="230" stroke={stoneColor} strokeWidth="0.75" opacity="0.6" />
        <text x="16" y="233" textAnchor="end" fontSize="7" fill={stoneColor}
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
          02
        </text>

        <line x1="20" y1="370" x2="120" y2="370" stroke={stoneColor} strokeWidth="0.75" opacity="0.6" />
        <text x="16" y="373" textAnchor="end" fontSize="7" fill={stoneColor}
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
          03
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const ease = 'cubic-bezier(0.16,1,0.3,1)'

  return (
    <section
      id="main"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center bg-parchment overflow-hidden"
    >
      {/* Subtle warm texture — thin horizontal rule system */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-stone/20"
            style={{ top: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      {/* Right panel — parchment-deep tone */}
      <div
        className="absolute right-0 top-0 bottom-0 hidden lg:block"
        style={{ width: '44%', background: '#EDE8DF' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 lg:pt-0 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-screen lg:items-center gap-12 lg:gap-0">

          {/* Left — editorial text content */}
          <div className="lg:col-span-6 lg:pr-12">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 mb-10"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(14px)',
                transition: `opacity 0.6s ${ease}, transform 0.6s ${ease}`,
              }}
            >
              <div className="w-8 h-px bg-bronze" />
              <span
                className="text-2xs font-semibold uppercase text-bronze"
                style={{ letterSpacing: '0.2em', fontFamily: 'Inter, sans-serif' }}
              >
                Local Business Growth
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-ink text-balance mb-8"
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.6rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(20px)',
                transition: `opacity 0.7s ${ease} 0.1s, transform 0.7s ${ease} 0.1s`,
              }}
            >
              Easier to find.
              <br />
              <em style={{ fontStyle: 'italic', color: '#9A7B4F' }}>Easier to trust.</em>
              <br />
              Easier to hire.
            </h1>

            {/* Body */}
            <p
              className="text-ink-muted font-light leading-relaxed mb-12 max-w-md"
              style={{
                fontSize: '1.0625rem',
                letterSpacing: '-0.005em',
                lineHeight: 1.75,
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(20px)',
                transition: `opacity 0.7s ${ease} 0.2s, transform 0.7s ${ease} 0.2s`,
              }}
            >
              We help local service businesses strengthen the digital foundation —
              so when a customer finds you, they choose you.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'none' : 'translateY(20px)',
                transition: `opacity 0.7s ${ease} 0.3s, transform 0.7s ${ease} 0.3s`,
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-2xs font-semibold tracking-[0.12em] uppercase text-parchment bg-ink hover:bg-graphite transition-colors duration-200 cursor-pointer"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 py-4 text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
              >
                See what we do
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Horizontal rule + sub-note */}
            <div
              className="mt-16 pt-8 border-t border-stone/50"
              style={{
                opacity: mounted ? 1 : 0,
                transition: `opacity 0.8s ease 0.5s`,
              }}
            >
              <p className="text-2xs text-graphite-muted tracking-[0.16em] uppercase">
                Serving local service businesses across the United States
              </p>
            </div>
          </div>

          {/* Right — journey diagram */}
          <div
            className="lg:col-span-6 flex items-center justify-center py-8 lg:py-0"
            style={{
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.9s ease 0.3s`,
            }}
          >
            <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md">
              <div className="mb-6 flex items-center gap-3 justify-center lg:justify-start lg:pl-8">
                <div className="w-5 h-px bg-bronze/60" />
                <span
                  className="text-3xs uppercase text-graphite"
                  style={{ letterSpacing: '0.22em', fontFamily: 'Inter, sans-serif' }}
                >
                  The Customer Journey
                </span>
              </div>
              <JourneyDiagram />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
