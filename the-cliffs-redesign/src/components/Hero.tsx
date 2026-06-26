import { motion } from 'framer-motion';

/* ─── Spotlight configs (pivot = left % of viewport) ─── */
const SPOTS = [
  { pivot: 6,  w: 260, color: '#FF2D78', alpha: 0.55, blur: 22, anim: 'spotSweep1', dur: 10.0, delay: 0.0 },
  { pivot: 18, w: 210, color: '#FFF8E0', alpha: 0.32, blur: 28, anim: 'spotSweep2', dur: 13.5, delay: 1.5 },
  { pivot: 33, w: 340, color: '#FF2D78', alpha: 0.42, blur: 30, anim: 'spotSweep3', dur: 16.0, delay: 0.7 },
  { pivot: 50, w: 400, color: '#FFF8E0', alpha: 0.26, blur: 35, anim: 'spotSweep4', dur: 11.5, delay: 2.0 },
  { pivot: 65, w: 270, color: '#C9A84C', alpha: 0.40, blur: 24, anim: 'spotSweep5', dur: 14.0, delay: 3.2 },
  { pivot: 80, w: 230, color: '#FF2D78', alpha: 0.38, blur: 19, anim: 'spotSweep6', dur:  9.0, delay: 1.0 },
  { pivot: 93, w: 195, color: '#FFF8E0', alpha: 0.24, blur: 22, anim: 'spotSweep7', dur: 12.0, delay: 2.5 },
];

/* ─── Particle configs ─── */
const PARTICLES: Array<{
  left: string; width: string; height: string; background: string;
  opacity: number; animation: string;
}> = [
  { left: '3%',  width:'2px', height:'2px', background:'#fff',    opacity:0.45, animation:'floatUp 9.2s ease-in infinite 0.0s'  },
  { left: '8%',  width:'2px', height:'2px', background:'#FF2D78', opacity:0.55, animation:'floatUp 12.5s ease-in infinite 1.3s' },
  { left: '13%', width:'2px', height:'2px', background:'#fff',    opacity:0.40, animation:'floatUp 8.8s ease-in infinite 2.7s'  },
  { left: '19%', width:'3px', height:'3px', background:'#C9A84C', opacity:0.50, animation:'floatUp 11.1s ease-in infinite 0.7s' },
  { left: '25%', width:'2px', height:'2px', background:'#fff',    opacity:0.45, animation:'floatUp 7.6s ease-in infinite 3.4s'  },
  { left: '31%', width:'2px', height:'2px', background:'#FF2D78', opacity:0.55, animation:'floatUp 10.3s ease-in infinite 1.9s' },
  { left: '37%', width:'3px', height:'3px', background:'#fff',    opacity:0.50, animation:'floatUp 13.7s ease-in infinite 0.4s' },
  { left: '43%', width:'2px', height:'2px', background:'#C9A84C', opacity:0.45, animation:'floatUp 8.9s ease-in infinite 2.2s'  },
  { left: '49%', width:'2px', height:'2px', background:'#fff',    opacity:0.40, animation:'floatUp 11.2s ease-in infinite 4.1s' },
  { left: '55%', width:'3px', height:'3px', background:'#FF2D78', opacity:0.55, animation:'floatUp 9.4s ease-in infinite 1.1s'  },
  { left: '61%', width:'2px', height:'2px', background:'#fff',    opacity:0.40, animation:'floatUp 14.0s ease-in infinite 3.8s' },
  { left: '67%', width:'2px', height:'2px', background:'#C9A84C', opacity:0.50, animation:'floatUp 7.8s ease-in infinite 0.9s'  },
  { left: '72%', width:'3px', height:'3px', background:'#fff',    opacity:0.45, animation:'floatUp 10.6s ease-in infinite 2.5s' },
  { left: '78%', width:'2px', height:'2px', background:'#FF2D78', opacity:0.55, animation:'floatUp 12.3s ease-in infinite 5.2s' },
  { left: '83%', width:'2px', height:'2px', background:'#fff',    opacity:0.50, animation:'floatUp 8.7s ease-in infinite 1.7s'  },
  { left: '88%', width:'3px', height:'3px', background:'#C9A84C', opacity:0.45, animation:'floatUp 11.9s ease-in infinite 3.1s' },
  { left: '93%', width:'2px', height:'2px', background:'#fff',    opacity:0.50, animation:'floatUp 9.1s ease-in infinite 4.6s'  },
  { left: '97%', width:'2px', height:'2px', background:'#FF2D78', opacity:0.40, animation:'floatUp 13.4s ease-in infinite 0.2s' },
  { left: '11%', width:'2px', height:'2px', background:'#FFF8E0', opacity:0.35, animation:'floatUp 10.0s ease-in infinite 2.9s' },
  { left: '28%', width:'3px', height:'3px', background:'#FF2D78', opacity:0.45, animation:'floatUp 8.5s ease-in infinite 6.0s'  },
  { left: '46%', width:'2px', height:'2px', background:'#fff',    opacity:0.40, animation:'floatUp 15.2s ease-in infinite 1.4s' },
  { left: '59%', width:'2px', height:'2px', background:'#C9A84C', opacity:0.50, animation:'floatUp 9.8s ease-in infinite 4.8s'  },
  { left: '74%', width:'3px', height:'3px', background:'#FF2D78', opacity:0.55, animation:'floatUp 11.5s ease-in infinite 2.3s' },
  { left: '90%', width:'2px', height:'2px', background:'#FFF8E0', opacity:0.40, animation:'floatUp 8.3s ease-in infinite 3.7s'  },
];

/* ─── Lens flares (at light source positions) ─── */
const FLARES = [
  { top: '1%', left: '6%',  size: 5,  color: '#FF2D78', anim: 'lensFlare 3.8s ease-in-out infinite 0.0s' },
  { top: '2%', left: '18%', size: 7,  color: '#FFF8E0', anim: 'lensFlare2 5.1s ease-in-out infinite 1.2s' },
  { top: '1%', left: '33%', size: 8,  color: '#FF2D78', anim: 'lensFlare 4.5s ease-in-out infinite 0.5s' },
  { top: '1%', left: '50%', size: 9,  color: '#FFF8E0', anim: 'lensFlare2 6.2s ease-in-out infinite 1.8s' },
  { top: '2%', left: '65%', size: 7,  color: '#C9A84C', anim: 'lensFlare 3.5s ease-in-out infinite 2.5s' },
  { top: '1%', left: '80%', size: 6,  color: '#FF2D78', anim: 'lensFlare2 4.8s ease-in-out infinite 0.8s' },
  { top: '2%', left: '93%', size: 4,  color: '#FFF8E0', anim: 'lensFlare 5.5s ease-in-out infinite 3.1s' },
];

const VIDEO_CARDS = [
  {
    id: 'bBKoIXeZuXc',
    label: 'LIVE — WEDDING RECEPTION',
    title: 'See Us Perform',
  },
  {
    id: 'CAY7mx2UUVU',
    label: 'LIVE — CLUB NIGHT',
    title: 'Full Energy Set',
  },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: '100svh', backgroundColor: '#0A0A0F' }}
    >

      {/* ══════════════════════════════════════════════
          LAYER 1 — Sweeping Stage Spotlights
          Each beam pivots from the TOP (light source)
          and sweeps dramatic arcs across the stage.
      ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {SPOTS.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: `calc(${s.pivot}% - ${s.w / 2}px)`,
              width: `${s.w}px`,
              height: '108%',
              background: `linear-gradient(to bottom, ${s.color}${Math.round(s.alpha * 255).toString(16).padStart(2,'0')} 0%, ${s.color}40 40%, ${s.color}18 70%, transparent 100%)`,
              clipPath: 'polygon(46% 0%, 54% 0%, 88% 100%, 12% 100%)',
              filter: `blur(${s.blur}px)`,
              transformOrigin: 'top center',
              animation: `${s.anim} ${s.dur}s ease-in-out ${s.delay}s infinite`,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 2 — Haze / Atmospheric Glow
      ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Warm center haze */}
        <div style={{
          position: 'absolute', top: '5%', left: '25%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(255,248,224,0.14) 0%, transparent 65%)',
          filter: 'blur(70px)',
          animation: 'hazePulse 7s ease-in-out infinite',
        }} />
        {/* Pink left wash */}
        <div style={{
          position: 'absolute', top: '0%', left: '-15%', width: '65%', height: '75%',
          background: 'radial-gradient(ellipse, rgba(255,45,120,0.12) 0%, transparent 65%)',
          filter: 'blur(90px)',
          animation: 'hazeShift 11s ease-in-out infinite',
        }} />
        {/* Gold right wash */}
        <div style={{
          position: 'absolute', top: '0%', right: '-15%', width: '60%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'hazeShift 9s ease-in-out infinite 2.2s',
        }} />
        {/* Deep stage floor bloom */}
        <div style={{
          position: 'absolute', bottom: '0%', left: '15%', right: '15%', height: '45%',
          background: 'radial-gradient(ellipse, rgba(255,45,120,0.08) 0%, transparent 60%)',
          filter: 'blur(60px)',
          animation: 'hazeBreath 8s ease-in-out infinite 1s',
        }} />
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 3 — Floating Particles
      ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div key={i} className="particle" style={{ bottom: '-5%', ...p }} />
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 4 — Lens Flares (at each light source)
      ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {FLARES.map((f, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: f.top, left: f.left,
            width: `${f.size}px`, height: `${f.size}px`,
            borderRadius: '50%',
            backgroundColor: f.color,
            boxShadow: `0 0 ${f.size * 5}px ${f.size * 3}px ${f.color}90`,
            animation: f.anim,
          }} />
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 5 — Cinematic Vignette
      ══════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 90% 80% at 50% 42%, transparent 28%, rgba(8,8,15,0.55) 100%)',
            'linear-gradient(to bottom, rgba(8,8,15,0.50) 0%, transparent 15%, transparent 75%, rgba(8,8,15,0.80) 100%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════
          LAYER 6 — Main Content
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-10 w-full">

        {/* Logo */}
        <motion.div
          className="mb-5 md:mb-7"
          initial={{ opacity: 0, scale: 0.82, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, delay: 1.2 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="The Cliffs — New Jersey's Most Versatile 8-Piece Cover Band"
              style={{
                width: 'min(460px, 88vw)',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
                animation: 'logoGlow 4s ease-in-out infinite',
              }}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.hero-logo-fallback')) {
                  const fb = document.createElement('div');
                  fb.className = 'hero-logo-fallback';
                  fb.innerHTML = `<div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(3.5rem,10vw,7rem);color:white;letter-spacing:6px;line-height:1;text-shadow:0 0 50px rgba(255,45,120,0.7)">THE CLIFFS</div>`;
                  parent.appendChild(fb);
                }
              }}
            />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="font-display text-cliffs-pink tracking-[0.28em] text-sm md:text-base mb-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          NEW JERSEY'S MOST VERSATILE 8-PIECE COVER BAND
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-display text-white leading-none tracking-wide mb-3"
          style={{ fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)' }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.70, duration: 0.8 }}
        >
          New Jersey's Most{' '}
          <span
            className="text-cliffs-pink"
            style={{ textShadow: '0 0 45px rgba(255,45,120,0.55)' }}
          >
            Wanted Band.
          </span>
        </motion.h1>

        {/* Live indicator */}
        <motion.div
          className="flex items-center gap-2.5 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
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

        {/* Sub-tagline */}
        <motion.p
          className="text-white/55 font-body text-base md:text-lg mb-9 tracking-wider max-w-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
        >
          Weddings · Private Parties · Corporate Events
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center mb-14"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.10, duration: 0.6 }}
        >
          <motion.button
            onClick={() => handleScroll('#booking')}
            className="px-8 py-4 bg-cliffs-pink text-white font-semibold text-base rounded-full cursor-pointer"
            style={{ boxShadow: '0 0 24px rgba(255,45,120,0.35)' }}
            whileHover={{ scale: 1.06, boxShadow: '0 0 48px rgba(255,45,120,0.65)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Book Your Event
          </motion.button>
          <motion.button
            onClick={() => handleScroll('#videos')}
            className="px-8 py-4 border border-white/30 text-white font-semibold text-base rounded-full cursor-pointer hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Watch Us Live
          </motion.button>
        </motion.div>

        {/* ── Live Footage Preview Cards ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {VIDEO_CARDS.map((v) => (
            <motion.button
              key={v.id}
              onClick={() => handleScroll('#videos')}
              className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer text-left w-full"
              style={{ aspectRatio: '16/9' }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,45,120,0.50)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                alt={v.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transform: 'scale(1.0)', transition: 'transform 0.7s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.07)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.0)'; }}
              />
              {/* Cinematic overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255,45,120,0.85)',
                    boxShadow: '0 0 30px rgba(255,45,120,0.45)',
                    backdropFilter: 'blur(4px)',
                  }}
                  whileHover={{ scale: 1.12, boxShadow: '0 0 50px rgba(255,45,120,0.70)' }}
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
              {/* Card label */}
              <div className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
              >
                <p className="text-cliffs-pink font-display tracking-widest text-xs mb-0.5">{v.label}</p>
                <p className="text-white font-body font-semibold text-sm">{v.title}</p>
              </div>
              {/* Top-left corner accent */}
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cliffs-pink" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                  <span className="text-white/80 font-body text-xs tracking-wide">LIVE FOOTAGE</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          LAYER 7 — Stage Floor Reflection
      ══════════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <div style={{
          height: '120px',
          background: 'linear-gradient(to top, rgba(255,45,120,0.055) 0%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
          background: 'linear-gradient(to top, #0A0A0F 0%, transparent 100%)',
        }} />
      </div>

      {/* ══════════════════════════════════════════════
          Scroll Indicator
      ══════════════════════════════════════════════ */}
      <motion.button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/35 hover:text-white/70 transition-colors cursor-pointer"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
