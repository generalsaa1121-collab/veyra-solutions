import { useEffect, useState } from 'react'

// SVG SMIL animation — starts immediately on render, no JS class toggling needed.
// pathLength="1" normalises path length so dasharray/dashoffset work with values 0–1.
// animateMotion gives the travelling pulse with zero JS.
function JourneyDiagram() {
  const ink = '#1C1917'
  const bronze = '#9A7B4F'
  const bronzePale = 'rgba(154,123,79,0.13)'
  const stone = '#C8C3BA'
  const stoneFaint = 'rgba(200,195,186,0.35)'

  return (
    <svg
      viewBox="0 0 280 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ overflow: 'visible', maxHeight: '480px' }}
      aria-label="Customer journey: Find, Trust, Hire"
      role="img"
    >
      {/*
        prefers-reduced-motion: wrap all SMIL in a <style> block.
        SVG <style> is processed by the browser for media queries.
      */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .veyra-animate { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* ── Background architectural grid ── */}
      <line x1="140" y1="10" x2="140" y2="490" stroke={stoneFaint} strokeWidth="0.5" strokeDasharray="2 10" />
      <line x1="20"  y1="80"  x2="260" y2="80"  stroke={stoneFaint} strokeWidth="0.5" />
      <line x1="20"  y1="250" x2="260" y2="250" stroke={stoneFaint} strokeWidth="0.5" />
      <line x1="20"  y1="420" x2="260" y2="420" stroke={stoneFaint} strokeWidth="0.5" />

      {/* ── Running index marks ── */}
      <text x="18" y="83" textAnchor="end" fontSize="7" fill={stone}
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>01</text>
      <text x="18" y="253" textAnchor="end" fontSize="7" fill={stone}
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>02</text>
      <text x="18" y="423" textAnchor="end" fontSize="7" fill={stone}
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>03</text>

      {/* ══════════════════════════════
          PATH 1 — FIND → TRUST
      ══════════════════════════════ */}
      <path
        id="vp1"
        d="M 140 104 C 175 145 105 205 140 246"
        stroke={bronze}
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        opacity="0.85"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1" to="0"
          dur="1.1s"
          begin="0.4s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.4 0 0.2 1"
          keyTimes="0;1"
        />
      </path>

      {/* Annotation mark on path 1 */}
      <line x1="155" y1="175" x2="172" y2="175" stroke={bronze} strokeWidth="0.75" opacity="0.45" />
      <text x="175" y="179" fontSize="7.5" fill={bronze} opacity="0.7"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.09em' }}>RESEARCH</text>

      {/* ══════════════════════════════
          PATH 2 — TRUST → HIRE
      ══════════════════════════════ */}
      <path
        id="vp2"
        d="M 140 274 C 105 315 175 375 140 416"
        stroke={bronze}
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        opacity="0.85"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1" to="0"
          dur="1.1s"
          begin="1.3s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.4 0 0.2 1"
          keyTimes="0;1"
        />
      </path>

      {/* Annotation mark on path 2 */}
      <line x1="125" y1="345" x2="108" y2="345" stroke={bronze} strokeWidth="0.75" opacity="0.45" />
      <text x="105" y="349" fontSize="7.5" fill={bronze} opacity="0.7" textAnchor="end"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.09em' }}>DECIDE</text>

      {/* ══════════════════════════════
          TRAVELLING PULSE — full journey
          Loops continuously after initial path draw completes
      ══════════════════════════════ */}
      {/* Full combined path for animateMotion */}
      <path
        id="vp-full"
        d="M 140 104 C 175 145 105 205 140 246 C 140 260 140 260 140 274 C 105 315 175 375 140 416"
        stroke="none"
        fill="none"
      />

      {/* The travelling dot */}
      <circle r="4" fill={bronze} opacity="0">
        {/* Fade in after paths are drawn */}
        <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="2.5s" fill="freeze" />
        <animateMotion
          dur="3.5s"
          begin="2.5s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath href="#vp-full" />
        </animateMotion>
      </circle>

      {/* Soft glow around the pulse */}
      <circle r="8" fill={bronze} opacity="0" style={{ filter: 'blur(3px)' }}>
        <animate attributeName="opacity" from="0" to="0.25" dur="0.3s" begin="2.5s" fill="freeze" />
        <animateMotion dur="3.5s" begin="2.5s" repeatCount="indefinite" rotate="auto">
          <mpath href="#vp-full" />
        </animateMotion>
      </circle>

      {/* ══════════════════════════════
          NODE 1 — FIND
      ══════════════════════════════ */}
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.1s" fill="freeze" />

        {/* Outer pulse ring — loops */}
        <circle cx="140" cy="80" r="32" fill="none" stroke={bronze} strokeWidth="0.75" opacity="0.3">
          <animate attributeName="r" values="26;38;26" dur="3.5s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0;0.35" dur="3.5s" begin="1.2s" repeatCount="indefinite" />
        </circle>

        {/* Node circle */}
        <circle cx="140" cy="80" r="26" fill={bronzePale} stroke={bronze} strokeWidth="1" />

        {/* Search / location icon */}
        <circle cx="138" cy="77" r="8" stroke={ink} strokeWidth="1.2" fill="none" />
        <line x1="144" y1="83" x2="150" y2="89" stroke={ink} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* FIND labels */}
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.4s" fill="freeze" />
        <text x="140" y="120" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}
          style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '0.1em' }}>
          FIND
        </text>
        <text x="140" y="132" textAnchor="middle" fontSize="7.5" fill="#78716C"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
          Search &amp; Discovery
        </text>
      </g>

      {/* ══════════════════════════════
          NODE 2 — TRUST
      ══════════════════════════════ */}
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.1s" fill="freeze" />

        <circle cx="140" cy="250" r="32" fill="none" stroke={bronze} strokeWidth="0.75" opacity="0.3">
          <animate attributeName="r" values="26;38;26" dur="3.5s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0;0.35" dur="3.5s" begin="2s" repeatCount="indefinite" />
        </circle>

        <circle cx="140" cy="250" r="26" fill={bronzePale} stroke={bronze} strokeWidth="1" />

        {/* Trust / review signal — five small circles in star arrangement */}
        <circle cx="140" cy="245" r="2" fill={ink} />
        <circle cx="133" cy="250" r="2" fill={ink} />
        <circle cx="147" cy="250" r="2" fill={ink} />
        <circle cx="135" cy="256" r="2" fill={ink} />
        <circle cx="145" cy="256" r="2" fill={ink} />
      </g>

      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.4s" fill="freeze" />
        <text x="140" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}
          style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '0.1em' }}>
          TRUST
        </text>
        <text x="140" y="302" textAnchor="middle" fontSize="7.5" fill="#78716C"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
          Reviews &amp; Credibility
        </text>
      </g>

      {/* ══════════════════════════════
          NODE 3 — HIRE (filled)
      ══════════════════════════════ */}
      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.1s" fill="freeze" />

        <circle cx="140" cy="420" r="32" fill="none" stroke={bronze} strokeWidth="0.75" opacity="0.3">
          <animate attributeName="r" values="26;38;26" dur="3.5s" begin="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0;0.35" dur="3.5s" begin="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Filled node — hire is the destination */}
        <circle cx="140" cy="420" r="26" fill={bronze} stroke={bronze} strokeWidth="1" />

        {/* Contact / quote signal — simple phone lines in white */}
        <path
          d="M 133 414 C 132 417 132 422 134 424 L 136 426 C 137 427 138 427 139 426 L 141 424 C 142 423 142 422 141 421 L 140 420 C 139 419 139 418 140 417 L 142 415 C 143 414 143 413 142 412 L 140 411 C 139 410 138 410 137 411 Z"
          fill="rgba(247,244,239,0.85)"
        />
      </g>

      <g opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.4s" fill="freeze" />
        <text x="140" y="460" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}
          style={{ fontFamily: '"Playfair Display", Georgia, serif', letterSpacing: '0.1em' }}>
          HIRE
        </text>
        <text x="140" y="472" textAnchor="middle" fontSize="7.5" fill="#78716C"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
          Contact &amp; Quote
        </text>
      </g>
    </svg>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  const ease = 'cubic-bezier(0.16,1,0.3,1)'

  return (
    <section
      id="main"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center bg-parchment overflow-hidden"
    >
      {/* Subtle warm horizontal rule grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full border-t border-stone/20"
            style={{ top: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      {/* Right panel — warm parchment-deep tone */}
      <div
        className="absolute right-0 top-0 bottom-0 hidden lg:block"
        style={{ width: '44%', background: '#EDE8DF' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 lg:pt-0 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-screen lg:items-center gap-12 lg:gap-0">

          {/* ── Left: text content ── */}
          <div className="lg:col-span-6 lg:pr-12">

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
                style={{ letterSpacing: '0.2em' }}
              >
                Local Business Growth
              </span>
            </div>

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

          {/* ── Right: live journey diagram ── */}
          <div
            className="lg:col-span-6 flex items-center justify-center py-8 lg:py-0"
            style={{
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.5s ease 0.2s`,
            }}
          >
            <div className="w-full max-w-[220px] lg:max-w-[260px] xl:max-w-[280px]">
              <div className="mb-5 flex items-center gap-3">
                <div className="w-5 h-px" style={{ background: 'rgba(154,123,79,0.5)' }} />
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
