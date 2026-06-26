import { motion } from 'framer-motion';

/* ─── Cinematic timing constants ─── */
// Phase 1 (0–0.3s):   Stage lights begin sweeping
// Phase 2 (0.3–2.5s): Logo emerges from darkness — the reveal
// Phase 3 (2.0–2.6s): Eyebrow text
// Phase 4 (2.3–3.0s): Headline
// Phase 5 (2.7–3.2s): Live indicator + sub-tagline
// Phase 6 (3.1–3.7s): CTAs
// Phase 7 (3.6–4.4s): Live footage cards
const T = {
  logoIn:    { delay: 0.25, duration: 2.30 },
  eyebrow:   { delay: 2.05, duration: 0.70 },
  headline:  { delay: 2.35, duration: 0.80 },
  indicator: { delay: 2.65, duration: 0.55 },
  subtext:   { delay: 2.85, duration: 0.65 },
  ctas:      { delay: 3.10, duration: 0.65 },
  cards:     { delay: 3.60, duration: 0.90 },
  scroll:    { delay: 4.40, duration: 0.80 },
};

/* ─── Spotlight beams (pivot = viewport-left %) ─── */
const SPOTS = [
  { pivot: 7,  w: 255, color: '#FF2D78', alpha: 0.52, blur: 22, anim: 'spotSweep1', dur: 10.0 },
  { pivot: 20, w: 208, color: '#FFF8E0', alpha: 0.30, blur: 28, anim: 'spotSweep2', dur: 13.5, desktop: true },
  { pivot: 36, w: 375, color: '#FF2D78', alpha: 0.39, blur: 32, anim: 'spotSweep3', dur: 16.0 },
  { pivot: 51, w: 445, color: '#FFF8E0', alpha: 0.24, blur: 36, anim: 'spotSweep4', dur: 11.5, desktop: true },
  { pivot: 66, w: 268, color: '#C9A84C', alpha: 0.40, blur: 24, anim: 'spotSweep5', dur: 14.0 },
  { pivot: 81, w: 232, color: '#FF2D78', alpha: 0.36, blur: 19, anim: 'spotSweep6', dur:  9.0, desktop: true },
  { pivot: 93, w: 192, color: '#FFF8E0', alpha: 0.20, blur: 22, anim: 'spotSweep7', dur: 12.0 },
];

/* ─── Particles ─── */
const PARTICLES = [
  { left: '5%',  s:'2px', bg:'#fff',    op:0.45, a:'floatUp 9.2s ease-in infinite 0.0s'  },
  { left: '14%', s:'2px', bg:'#FF2D78', op:0.55, a:'floatUp 12.5s ease-in infinite 1.3s' },
  { left: '23%', s:'2px', bg:'#fff',    op:0.40, a:'floatUp 8.8s ease-in infinite 2.7s'  },
  { left: '33%', s:'3px', bg:'#C9A84C', op:0.50, a:'floatUp 11.1s ease-in infinite 0.7s' },
  { left: '43%', s:'2px', bg:'#FF2D78', op:0.55, a:'floatUp 10.3s ease-in infinite 1.9s', desktop: true },
  { left: '52%', s:'2px', bg:'#fff',    op:0.45, a:'floatUp 7.6s ease-in infinite 3.4s'  },
  { left: '62%', s:'3px', bg:'#fff',    op:0.50, a:'floatUp 13.7s ease-in infinite 0.4s', desktop: true },
  { left: '71%', s:'2px', bg:'#C9A84C', op:0.45, a:'floatUp 8.9s ease-in infinite 2.2s'  },
  { left: '80%', s:'2px', bg:'#FF2D78', op:0.55, a:'floatUp 9.4s ease-in infinite 1.1s', desktop: true },
  { left: '89%', s:'3px', bg:'#fff',    op:0.45, a:'floatUp 11.2s ease-in infinite 3.8s' },
  { left: '96%', s:'2px', bg:'#C9A84C', op:0.50, a:'floatUp 7.8s ease-in infinite 0.9s'  },
  { left: '28%', s:'2px', bg:'#FFF8E0', op:0.35, a:'floatUp 10.0s ease-in infinite 2.9s', desktop: true },
];

/* ─── Lens flares at each light-source position ─── */
const FLARES = [
  { left: '7%',  sz: 5,  c: '#FF2D78', a: 'lensFlare 3.8s ease-in-out infinite 0.0s'  },
  { left: '36%', sz: 9,  c: '#FF2D78', a: 'lensFlare 4.5s ease-in-out infinite 0.5s'  },
  { left: '51%', sz: 8,  c: '#FFF8E0', a: 'lensFlare2 6.2s ease-in-out infinite 1.8s', desktop: true },
  { left: '66%', sz: 7,  c: '#C9A84C', a: 'lensFlare 3.5s ease-in-out infinite 2.5s'  },
  { left: '93%', sz: 4,  c: '#FFF8E0', a: 'lensFlare 5.5s ease-in-out infinite 3.1s'  },
];

const VIDEO_CARDS = [
  { id: 'bBKoIXeZuXc', label: 'LIVE — WEDDING RECEPTION', title: 'See Us Perform'  },
  { id: 'CAY7mx2UUVU', label: 'LIVE — CLUB NIGHT',         title: 'Full Energy Set' },
];

/* ─── Reusable fade-up variant factory ─── */
const fadeUp = (delay: number, duration = 0.75) => ({
  initial:    { opacity: 0, y: 22 } as const,
  animate:    { opacity: 1, y: 0  } as const,
  transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Mobile detection (module-level, stable) ─── */
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export default function Hero() {
  const spots     = isMobile ? SPOTS.filter(s => !s.desktop)     : SPOTS;
  const particles = isMobile ? PARTICLES.filter(p => !p.desktop) : PARTICLES;
  const flares    = isMobile ? FLARES.filter(f => !f.desktop)    : FLARES;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: '100svh', backgroundColor: '#0A0A0F' }}
    >

      {/* ──────────────────────────────────────────────
          BG: Subtle warm centre so lights have context
      ────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 36%, rgba(28,18,8,0.98) 0%, #0A0A0F 58%)',
        }}
        aria-hidden="true"
      />

      {/* ──────────────────────────────────────────────
          LAYER 1 — Sweeping Stage Spotlights
          Transform-only animation = GPU accelerated.
          Each beam pivots from its TOP centre (the
          imaginary ceiling fixture) and sweeps left/right.
      ────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {spots.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: `calc(${s.pivot}% - ${s.w / 2}px)`,
              width: `${s.w}px`,
              height: '110%',
              background: `linear-gradient(to bottom,
                ${s.color}${Math.round(s.alpha * 255).toString(16).padStart(2,'0')} 0%,
                ${s.color}3C 40%,
                ${s.color}14 68%,
                transparent 100%)`,
              clipPath: 'polygon(46% 0%, 54% 0%, 88% 100%, 12% 100%)',
              filter: `blur(${s.blur}px)`,
              transformOrigin: 'top center',
              willChange: 'transform',
              animation: `${s.anim} ${s.dur}s ease-in-out infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* ──────────────────────────────────────────────
          LAYER 2 — Key Light (dedicated to logo area)
          A warm fixed cone that ensures the logo zone
          is always illuminated regardless of sweep phase.
      ────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-8%', left: '50%',
          transform: 'translateX(-50%)',
          width: '920px', height: '580px',
          background:
            'radial-gradient(ellipse at 50% 22%, rgba(255,248,218,0.18) 0%, rgba(255,240,200,0.07) 38%, transparent 68%)',
          filter: 'blur(45px)',
        }}
        aria-hidden="true"
      />

      {/* ──────────────────────────────────────────────
          LAYER 3 — Atmospheric Haze (volumetric feel)
      ────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{
          position:'absolute', top:'3%', left:'18%', width:'64%', height:'68%',
          background:'radial-gradient(ellipse, rgba(255,248,218,0.13) 0%, transparent 62%)',
          filter:'blur(55px)',
          willChange:'opacity, transform',
          animation:'hazePulse 7s ease-in-out infinite',
        }} />
        <div style={{
          position:'absolute', top:0, left:'-18%', width:'68%', height:'72%',
          background:'radial-gradient(ellipse, rgba(255,45,120,0.11) 0%, transparent 62%)',
          filter:'blur(60px)',
          willChange:'opacity, transform',
          animation:'hazeShift 11s ease-in-out infinite',
        }} />
        {!isMobile && <div style={{
          position:'absolute', top:0, right:'-18%', width:'65%', height:'68%',
          background:'radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 62%)',
          filter:'blur(60px)',
          willChange:'opacity, transform',
          animation:'hazeShift 9s ease-in-out infinite 2.2s',
        }} />}
        {!isMobile && <div style={{
          position:'absolute', bottom:0, left:'8%', right:'8%', height:'52%',
          background:'radial-gradient(ellipse, rgba(255,45,120,0.07) 0%, transparent 58%)',
          filter:'blur(50px)',
          willChange:'opacity, transform',
          animation:'hazeBreath 8s ease-in-out infinite 1s',
        }} />}
      </div>

      {/* ──────────────────────────────────────────────
          LAYER 4 — Floating Particles
      ────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              bottom: '-5%',
              left: p.left,
              width: p.s, height: p.s,
              background: p.bg,
              opacity: p.op,
              animation: p.a,
            }}
          />
        ))}
      </div>

      {/* ──────────────────────────────────────────────
          LAYER 5 — Lens Flares (at ceiling fixture pts)
      ────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {flares.map((f, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '0.8%',
            left: f.left,
            width: `${f.sz}px`, height: `${f.sz}px`,
            borderRadius: '50%',
            backgroundColor: f.c,
            boxShadow: `0 0 ${f.sz * 5}px ${f.sz * 3}px ${f.c}88`,
            animation: f.a,
          }} />
        ))}
      </div>

      {/* ──────────────────────────────────────────────
          LAYER 6 — Cinematic Vignette
          Edges darker so the lit centre draws focus.
      ────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 92% 82% at 50% 38%, transparent 22%, rgba(6,6,12,0.52) 100%)',
            'linear-gradient(to bottom, rgba(6,6,12,0.48) 0%, transparent 20%, transparent 70%, rgba(6,6,12,0.88) 100%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — cinematic sequential reveal
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-10 w-full">

        {/* ── THE LOGO ── Primary visual identity ── */}
        {/* Outer: entrance scale + opacity */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: T.logoIn.duration,
            delay: T.logoIn.delay,
            ease: [0.14, 1, 0.34, 1],
          }}
        >
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="The Cliffs — New Jersey's Most Versatile 8-Piece Cover Band"
              style={{
                width: 'min(540px, 88vw)',
                objectFit: 'contain',
                display: 'block',
                filter: [
                  'drop-shadow(0 0 28px rgba(255,255,255,0.32))',
                  'drop-shadow(0 0 50px rgba(255,45,120,0.42))',
                  'drop-shadow(0 14px 40px rgba(0,0,0,0.96))',
                ].join(' '),
              }}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = 'none';
                const p = el.parentElement;
                if (p && !p.querySelector('.hero-logo-text')) {
                  const fb = document.createElement('div');
                  fb.className = 'hero-logo-text';
                  fb.innerHTML = `<div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(4rem,11vw,8rem);color:white;letter-spacing:8px;line-height:1;text-shadow:0 0 60px rgba(255,45,120,0.70),0 0 120px rgba(255,45,120,0.30)">THE CLIFFS</div>`;
                  p.appendChild(fb);
                }
              }}
            />
          </div>
        </motion.div>

        {/* ── Eyebrow ── */}
        <motion.p
          className="font-display text-cliffs-pink tracking-[0.28em] text-sm md:text-base mb-3"
          {...fadeUp(T.eyebrow.delay, T.eyebrow.duration)}
        >
          NEW JERSEY'S MOST VERSATILE 8-PIECE COVER BAND
        </motion.p>

        {/* ── Headline ── */}
        <motion.h1
          className="font-display text-white leading-none tracking-wide mb-3"
          style={{ fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)' }}
          {...fadeUp(T.headline.delay, T.headline.duration)}
        >
          New Jersey's Most{' '}
          <span
            className="text-cliffs-pink"
            style={{ textShadow: '0 0 48px rgba(255,45,120,0.50)' }}
          >
            Wanted Band.
          </span>
        </motion.h1>

        {/* ── Live indicator ── */}
        <motion.div
          className="flex items-center gap-2.5 mb-5"
          {...fadeUp(T.indicator.delay, T.indicator.duration)}
        >
          <span
            className="w-2.5 h-2.5 rounded-full bg-cliffs-pink flex-shrink-0"
            style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
            aria-hidden="true"
          />
          <span className="text-white/65 font-body text-sm tracking-wide">
            Performing this week in NJ
          </span>
        </motion.div>

        {/* ── Sub-tagline ── */}
        <motion.p
          className="text-white/55 font-body text-base md:text-lg mb-9 tracking-wider max-w-xl"
          {...fadeUp(T.subtext.delay, T.subtext.duration)}
        >
          Weddings · Private Parties · Corporate Events
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center mb-14"
          {...fadeUp(T.ctas.delay, T.ctas.duration)}
        >
          <motion.button
            type="button"
            onClick={() => scrollTo('#booking')}
            className="px-8 py-4 bg-cliffs-pink text-white font-semibold text-base rounded-full cursor-pointer"
            style={{ boxShadow: '0 0 28px rgba(255,45,120,0.40)' }}
            whileHover={{ scale: 1.06, boxShadow: '0 0 55px rgba(255,45,120,0.70)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Event
          </motion.button>
          <motion.button
            type="button"
            onClick={() => scrollTo('#videos')}
            className="px-8 py-4 border border-white/30 text-white font-semibold text-base rounded-full cursor-pointer hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Watch Us Live
          </motion.button>
        </motion.div>

        {/* ── Live Footage Cards ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl"
          {...fadeUp(T.cards.delay, T.cards.duration)}
        >
          {VIDEO_CARDS.map((v) => (
            <motion.button
              key={v.id}
              type="button"
              onClick={() => scrollTo('#videos')}
              className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer text-left w-full"
              style={{ aspectRatio: '16/9' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                alt={v.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.58) 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/22 group-hover:bg-black/5 transition-colors duration-300" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{
                    background: 'rgba(255,45,120,0.88)',
                    boxShadow: '0 0 30px rgba(255,45,120,0.50)',
                  }}
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)',
                }}
              >
                <p className="text-cliffs-pink font-display tracking-widest text-xs mb-0.5">
                  {v.label}
                </p>
                <p className="text-white font-body font-semibold text-sm">{v.title}</p>
              </div>
              {/* Live badge */}
              <div className="absolute top-3 left-3">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(0,0,0,0.60)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-cliffs-pink"
                    style={{ animation: 'pulse 2s ease-in-out infinite' }}
                  />
                  <span className="text-white/85 font-body text-xs tracking-wide">
                    LIVE FOOTAGE
                  </span>
                </div>
              </div>
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: 'inset 0 0 0 1.5px rgba(255,45,120,0.55)' }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ──────────────────────────────────────────────
          Stage Floor Reflection
      ────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <div style={{
          height: '110px',
          background: 'linear-gradient(to top, rgba(255,45,120,0.055) 0%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '72px',
          background: 'linear-gradient(to top, #0A0A0F 0%, transparent 100%)',
        }} />
      </div>

      {/* ──────────────────────────────────────────────
          Scroll Indicator
      ────────────────────────────────────────────── */}
      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/30 hover:text-white/65 transition-colors cursor-pointer"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T.scroll.delay, duration: T.scroll.duration }}
      >
        <span className="text-xs tracking-widest font-body uppercase">Scroll</span>
        <svg
          className="w-5 h-5"
          style={{ animation: 'bounce 1.8s ease-in-out infinite' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
    </section>
  );
}
