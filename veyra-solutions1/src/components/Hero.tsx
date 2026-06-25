import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// ─── Dark panel palette ──────────────────────────────────────────────
const D = {
  bg:       '#0D0B09',
  sep:      'rgba(200,195,186,0.09)',
  text:     'rgba(247,244,239,0.90)',
  muted:    'rgba(247,244,239,0.44)',
  faint:    'rgba(247,244,239,0.20)',
  card:     'rgba(247,244,239,0.046)',
  bronze:   '#9A7B4F',
  bronzeA:  'rgba(154,123,79,0.68)',
  bronzeBg: 'rgba(154,123,79,0.1)',
  hl:       'rgba(154,123,79,0.11)',
  hlBorder: 'rgba(154,123,79,0.22)',
  green:    '#4FA87A',
  greenBg:  'rgba(79,168,122,0.13)',
  greenB:   'rgba(79,168,122,0.22)',
}
const FONT = { fontFamily: 'Inter, system-ui, sans-serif' }

// ─── Typing hook ─────────────────────────────────────────────────────
function useTyping(text: string, msPerChar: number): string {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    setOut('')
    const id = setInterval(() => {
      i++
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, msPerChar)
    return () => clearInterval(id)
  }, []) // intentionally mount-only — scene unmounts when switching
  return out
}

// ─── Animated counter ────────────────────────────────────────────────
function useCount(from: number, to: number, ms: number, active: boolean, dp = 0): number {
  const [val, setVal] = useState(from)
  useEffect(() => {
    if (!active) { setVal(from); return }
    const t0 = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - t0) / ms, 1)
      const e = 1 - (1 - p) ** 3
      const next = parseFloat((from + (to - from) * e).toFixed(dp))
      setVal(next)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setVal(parseFloat(to.toFixed(dp)))
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps
  return val
}

// ─── Stars ───────────────────────────────────────────────────────────
function Stars({ n, size = 9 }: { n: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '1.5px', lineHeight: 1 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 12 12">
          <path
            d="M6 1 L7.6 4.4 L11.4 5 L8.7 7.6 L9.5 11.4 L6 9.5 L2.5 11.4 L3.3 7.6 L0.6 5 L4.4 4.4 Z"
            fill={i <= Math.round(n) ? D.bronze : 'rgba(200,195,186,0.2)'}
          />
        </svg>
      ))}
    </span>
  )
}

// ─── Avatar pill ─────────────────────────────────────────────────────
function Avatar({ initials, size = 22 }: { initials: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: D.bronzeBg, border: `1px solid ${D.hlBorder}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ ...FONT, color: D.bronze, fontSize: size * 0.36, fontWeight: 700 }}>
        {initials}
      </span>
    </div>
  )
}

// ─── Cursor ──────────────────────────────────────────────────────────
function Cursor() {
  return <span className="demo-cursor" style={{ color: D.bronzeA }} />
}

// ═══════════════════════════════════════════════════════════════
// SCENE 1 — DISCOVERY
// Business rises to #1 in search results with counters
// ═══════════════════════════════════════════════════════════════
const RESULTS = [
  { id: 'client', name: 'Premier Roofing Co.', sub: 'Licensed · Insured · Dallas, TX', s0: 3.3, s1: 4.8, r0: 18, r1: 182 },
  { id: 'comp1',  name: 'Peak Roofing & Sons',   s: 4.2, r: 91 },
  { id: 'comp2',  name: 'Eagle Home Services',    s: 3.1, r: 8  },
]

function SearchScene() {
  const [phase, setPhase] = useState(0)
  const query  = useTyping('roofing company near me', 52)
  const stars  = useCount(3.3, 4.8, 1900, phase >= 2, 1)
  const reviews = useCount(18, 182, 1900, phase >= 2)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1350) // results appear
    const t2 = setTimeout(() => setPhase(2), 2800) // client rises + counters
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  // Reorder: client starts at index 1, rises to index 0
  const ordered = phase >= 2
    ? [RESULTS[0], RESULTS[1], RESULTS[2]]
    : [RESULTS[1], RESULTS[0], RESULTS[2]]

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
    >
      {/* Search bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'rgba(247,244,239,0.06)', border: `1px solid ${D.sep}`,
        padding: '9px 12px', borderRadius: '3px',
      }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.38, flexShrink: 0 }}>
          <circle cx="6" cy="6" r="4.5" stroke={D.text} strokeWidth="1.5" />
          <path d="M10 10l2.5 2.5" stroke={D.text} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ ...FONT, color: D.text, fontSize: '12px', flex: 1, letterSpacing: '0.005em' }}>
          {query}
          {query.length < 23 && <Cursor />}
        </span>
        <span style={{ ...FONT, color: D.faint, fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {query.length >= 23 ? 'Near me' : ''}
        </span>
      </div>

      {/* Result list */}
      <AnimatePresence mode="popLayout">
        {phase >= 1 && ordered.map((r, i) => {
          const isClient = r.id === 'client'
          const atTop = phase >= 2 && i === 0
          const displayS  = isClient ? stars   : (r.s  ?? 0)
          const displayR  = isClient ? reviews : (r.r  ?? 0)

          return (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: !isClient ? (atTop ? 0.55 : 0.42) : 1, y: 0 }}
              transition={{
                layout:   { type: 'spring', stiffness: 480, damping: 42 },
                opacity:  { duration: 0.3, delay: isClient ? 0 : 0.07 * i },
                y:        { duration: 0.3, delay: 0.07 * i },
              }}
              style={{
                padding: '9px 12px', borderRadius: '2px',
                background: isClient ? D.hl   : D.card,
                border:    `1px solid ${isClient ? D.hlBorder : D.sep}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <span style={{
                  ...FONT, fontSize: '12px',
                  color:      isClient ? D.text : D.muted,
                  fontWeight: isClient ? 600 : 400,
                }}>
                  {r.name}
                </span>
                {atTop && isClient && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    style={{ ...FONT, color: D.bronze, fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em' }}
                  >
                    #1
                  </motion.span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Stars n={displayS} size={isClient ? 9 : 8} />
                <span style={{ ...FONT, color: D.bronzeA, fontSize: '10px' }}>
                  {displayS.toFixed(1)}
                </span>
                <span style={{ ...FONT, color: D.faint, fontSize: '9.5px' }}>
                  · {Math.round(displayR).toLocaleString()} reviews
                </span>
              </div>

              {isClient && (
                <div style={{ ...FONT, color: D.faint, fontSize: '9.5px', marginTop: '3px' }}>{r.sub}</div>
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Outcome */}
      {phase >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '7px',
            padding: '7px 11px', borderRadius: '2px',
            background: D.greenBg, border: `1px solid ${D.greenB}`,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: D.green, flexShrink: 0 }}
          />
          <span style={{ ...FONT, color: D.green, fontSize: '10px', fontWeight: 500 }}>
            Ranked #1 · "roofing company near me" · Dallas, TX
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SCENE 2 — TRUST
// Reviews materialize. Stars confirmed. Profile complete.
// ═══════════════════════════════════════════════════════════════
const REVIEWS = [
  { name: 'Sarah K.', initials: 'SK', time: '2 days ago', body: 'Called Monday, on-site Wednesday. Fixed our storm damage fast and correctly. Highly recommend.', stars: 5 },
  { name: 'James T.', initials: 'JT', time: '1 week ago', body: 'Most responsive contractor I\'ve hired. Free estimate, clear pricing, excellent quality.', stars: 5 },
]

function TrustScene() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 550),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3100),
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      {/* Business card header */}
      <div style={{ padding: '12px 14px', background: D.card, border: `1px solid ${D.sep}`, borderRadius: '2px' }}>
        <div style={{ ...FONT, color: D.text, fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
          Premier Roofing Co.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <Stars n={4.8} size={10} />
          <span style={{ ...FONT, color: D.bronze, fontSize: '11px', fontWeight: 600 }}>4.8</span>
          <span style={{ ...FONT, color: D.faint, fontSize: '10px' }}>· 182 reviews · Dallas, TX</span>
        </div>

        <div style={{ ...FONT, color: D.muted, fontSize: '10px', marginBottom: phase >= 1 ? '10px' : 0 }}>
          Licensed & Insured · Free Estimates
        </div>

        {phase >= 1 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '10px', borderTop: `1px solid ${D.sep}` }}
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: D.green, flexShrink: 0 }}
            />
            <span style={{ ...FONT, color: D.green, fontSize: '10px', fontWeight: 500 }}>Open now</span>
            <span style={{ ...FONT, color: D.faint, fontSize: '10px' }}>· Responds in &lt;1 hour</span>
          </motion.div>
        )}
      </div>

      {/* Reviews */}
      {REVIEWS.map((r, i) => (
        phase >= i + 2 && (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            style={{ padding: '10px 12px', background: D.card, border: `1px solid ${D.sep}`, borderRadius: '2px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Avatar initials={r.initials} size={22} />
                <span style={{ ...FONT, color: D.text, fontSize: '11px', fontWeight: 500 }}>{r.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Stars n={r.stars} size={8} />
                <span style={{ ...FONT, color: D.faint, fontSize: '9px' }}>{r.time}</span>
              </div>
            </div>
            <p style={{ ...FONT, color: D.muted, fontSize: '10.5px', lineHeight: 1.55, margin: 0 }}>
              "{r.body}"
            </p>
          </motion.div>
        )
      ))}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SCENE 3 — INQUIRY
// Message arrives. Business responds. Job booked.
// ═══════════════════════════════════════════════════════════════
function ContactScene() {
  const [phase, setPhase] = useState(0)
  const customerMsg = useTyping('Hi! I saw your reviews. Can I get a quote for a roof repair?', 32)

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 2200), // typing indicator
      setTimeout(() => setPhase(2), 3300), // response
      setTimeout(() => setPhase(3), 4500), // booking
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      {/* Chat header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '9px',
        paddingBottom: '11px', marginBottom: '14px', borderBottom: `1px solid ${D.sep}`,
      }}>
        <Avatar initials="PR" size={28} />
        <div>
          <div style={{ ...FONT, color: D.text, fontSize: '12px', fontWeight: 600, marginBottom: '2px' }}>
            Premier Roofing Co.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <motion.div
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              style={{ width: '5px', height: '5px', borderRadius: '50%', background: D.green }}
            />
            <span style={{ ...FONT, color: D.green, fontSize: '9.5px' }}>Online now</span>
          </div>
        </div>
      </div>

      {/* Message thread */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Customer message */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            background: D.hl, border: `1px solid ${D.hlBorder}`,
            borderRadius: '10px 10px 2px 10px', padding: '9px 12px', maxWidth: '85%',
          }}>
            <span style={{ ...FONT, color: D.text, fontSize: '11.5px', lineHeight: 1.5 }}>
              {customerMsg}
              {customerMsg.length < 60 && <Cursor />}
            </span>
          </div>
        </div>

        {/* Typing indicator */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ display: 'flex', alignItems: 'flex-end', gap: '7px' }}
            >
              <Avatar initials="PR" />
              <div style={{
                display: 'flex', gap: '3.5px', alignItems: 'center',
                padding: '8px 12px', borderRadius: '10px 10px 10px 2px',
                background: D.card, border: `1px solid ${D.sep}`,
              }}>
                {[0, 1, 2].map(j => (
                  <motion.div
                    key={j}
                    style={{ width: '4px', height: '4px', borderRadius: '50%', background: D.muted }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.65, delay: j * 0.15, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Business response */}
        {phase >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            style={{ display: 'flex', gap: '7px', alignItems: 'flex-end' }}
          >
            <Avatar initials="PR" />
            <div style={{
              background: D.card, border: `1px solid ${D.sep}`,
              borderRadius: '10px 10px 10px 2px', padding: '9px 12px', maxWidth: '85%',
            }}>
              <p style={{ ...FONT, color: D.text, fontSize: '11.5px', lineHeight: 1.5, margin: 0 }}>
                Hi! Absolutely — how does Thursday at 10AM work for a free on-site estimate?
              </p>
              <span style={{ ...FONT, color: D.faint, fontSize: '9px', display: 'block', marginTop: '4px' }}>
                Just now
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Booking confirmation — slides up from bottom */}
      {phase >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          style={{
            marginTop: '16px', padding: '13px 15px', borderRadius: '3px',
            background: D.greenBg, border: `1px solid ${D.greenB}`,
            display: 'flex', alignItems: 'center', gap: '12px',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25, delay: 0.15 }}
            style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              background: 'rgba(79,168,122,0.18)', border: `1px solid ${D.greenB}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 8l4 4 6-6.5" stroke={D.green} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <div>
            <div style={{ ...FONT, color: D.green, fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '3px' }}>
              Appointment Booked
            </div>
            <div style={{ ...FONT, color: D.muted, fontSize: '10.5px', lineHeight: 1.5 }}>
              Thursday, Nov 14 · 10:00 AM · Free Estimate
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// LIVE DEMO PANEL
// ═══════════════════════════════════════════════════════════════
const SCENE_MS = 5700
const SCENES = ['search', 'trust', 'contact'] as const
type SceneName = typeof SCENES[number]
const SCENE_LABEL: Record<SceneName, string> = {
  search:  'Discovery',
  trust:   'Trust',
  contact: 'Inquiry',
}

function LiveDemo() {
  const [idx, setIdx]     = useState(0)
  const [epoch, setEpoch] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setIdx(i => (i + 1) % SCENES.length)
      setEpoch(e => e + 1)
    }, SCENE_MS)
    return () => clearTimeout(id)
  }, [idx])

  const scene = SCENES[idx]

  return (
    <div style={{
      width:      '100%',
      maxWidth:   '500px',
      borderTop:  '1px solid rgba(154,123,79,0.2)',
    }}>
      {/* Header */}
      <div style={{
        padding:      '10px 14px',
        borderBottom: `1px solid ${D.sep}`,
        display:      'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <motion.div
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            style={{ width: '5px', height: '5px', borderRadius: '50%', background: D.green }}
          />
          <span style={{ ...FONT, color: D.muted, fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Live · {SCENE_LABEL[scene]}
          </span>
        </div>

        {/* Phase pills */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {SCENES.map((s, i) => (
            <motion.div
              key={s}
              animate={{ width: i === idx ? 18 : 5, background: i === idx ? D.bronze : 'rgba(200,195,186,0.2)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ height: 5, borderRadius: 3 }}
            />
          ))}
        </div>
      </div>

      {/* Progress bars */}
      <div style={{ display: 'flex', height: '2px' }}>
        {SCENES.map((s, i) => (
          <div key={s} style={{ flex: 1, background: 'rgba(200,195,186,0.07)', position: 'relative', overflow: 'hidden' }}>
            {i < idx && (
              <div style={{ position: 'absolute', inset: 0, background: `${D.bronze}65` }} />
            )}
            {i === idx && (
              <motion.div
                key={epoch}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: SCENE_MS / 1000, ease: 'linear' }}
                style={{ position: 'absolute', top: 0, bottom: 0, left: 0, background: `${D.bronze}88` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Scene */}
      <div style={{ padding: '16px', minHeight: '380px' }}>
        <AnimatePresence mode="wait">
          {scene === 'search'  && <SearchScene  key={`s-${epoch}`} />}
          {scene === 'trust'   && <TrustScene   key={`t-${epoch}`} />}
          {scene === 'contact' && <ContactScene key={`c-${epoch}`} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════
export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const ease = 'cubic-bezier(0.16,1,0.3,1)'

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="main"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#F7F4EF' }}
    >
      {/* Warm grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{ top: `${(i + 1) * 12.5}%`, borderTop: '1px solid rgba(200,195,186,0.18)' }}
          />
        ))}
      </div>

      {/* Dark right panel — grid-aligned full bleed */}
      {/* calc(50% + 99px) aligns the panel's left edge to the 5-col grid split at all viewport widths */}
      <div
        className="absolute right-0 top-0 bottom-0 hidden lg:block"
        style={{ width: 'calc(50% + 99px)', background: '#0D0B09' }}
        aria-hidden="true"
      >
        {/* Bronze separator — makes the division architecturally intentional */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'rgba(154,123,79,0.18)' }} />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 lg:pt-0 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-screen lg:items-center gap-12 lg:gap-0">

          {/* ── Left: editorial text ── */}
          <div className="lg:col-span-5 lg:pr-12">

            <div
              className="flex items-center gap-4 mb-10"
              style={{
                opacity:    mounted ? 1 : 0,
                transform:  mounted ? 'none' : 'translateY(12px)',
                transition: `opacity 0.6s ${ease}, transform 0.6s ${ease}`,
              }}
            >
              <div className="w-8 h-px bg-bronze" />
              <span className="text-2xs font-semibold uppercase text-bronze" style={{ letterSpacing: '0.2em' }}>
                Local Business Growth
              </span>
            </div>

            <h1
              className="font-display text-ink text-balance mb-8"
              style={{
                fontSize:   'clamp(2.5rem, 4.8vw, 4.4rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
                opacity:    mounted ? 1 : 0,
                transform:  mounted ? 'none' : 'translateY(18px)',
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
                fontSize:   '1.0625rem',
                letterSpacing: '-0.005em',
                lineHeight: 1.75,
                opacity:    mounted ? 1 : 0,
                transform:  mounted ? 'none' : 'translateY(18px)',
                transition: `opacity 0.7s ${ease} 0.2s, transform 0.7s ${ease} 0.2s`,
              }}
            >
              We help local service businesses strengthen the digital foundation —
              so when a customer finds you, they choose you.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-5"
              style={{
                opacity:    mounted ? 1 : 0,
                transform:  mounted ? 'none' : 'translateY(18px)',
                transition: `opacity 0.7s ${ease} 0.3s, transform 0.7s ${ease} 0.3s`,
              }}
            >
              <a href="#contact" className="v-btn v-btn-dark" style={{ padding: '1rem 2.25rem' }}>
                Schedule a Consultation
                <svg className="v-btn-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 py-4 text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <span className="v-underline" style={{ paddingBottom: '1px' }}>See what we do</span>
                <svg
                  width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div
              className="mt-16 pt-8 border-t border-stone/40"
              style={{ opacity: mounted ? 1 : 0, transition: `opacity 0.9s ease 0.5s` }}
            >
              <p className="text-2xs text-graphite-muted tracking-[0.16em] uppercase">
                Serving local service businesses across the United States
              </p>
            </div>
          </div>

          {/* ── Right: live demo panel ── */}
          <div
            className="hidden lg:flex lg:col-span-7 items-center py-16"
            style={{
              paddingLeft: '3.5rem',
              opacity:    mounted ? 1 : 0,
              transform:  mounted ? 'none' : 'translateY(12px)',
              transition: `opacity 0.6s ease 0.35s, transform 0.6s ${ease} 0.35s`,
            }}
            aria-hidden="true"
          >
            <LiveDemo />
          </div>

        </div>
      </div>
    </section>
  )
}
