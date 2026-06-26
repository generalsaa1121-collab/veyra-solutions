import { motion } from 'framer-motion';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: '100svh', backgroundColor: '#050505' }}
    >
      {/* ── Layer 1: Stage Lighting Beams ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="light-beam beam-1" />
        <div className="light-beam beam-2" />
        <div className="light-beam beam-3" />
        <div className="light-beam beam-4" />
        <div className="light-beam beam-5" />
      </div>

      {/* ── Layer 2: Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* ── Layer 4: Vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(5,5,5,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Layer 3: Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Logo with glow */}
        <motion.div
          className="relative mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glow behind logo */}
          <div
            className="absolute inset-0 -m-8 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,45,120,0.18) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
            aria-hidden="true"
          />
          {/* NOTE: Place your logo.png in /public/logo.png */}
          <img
            src="/logo.png"
            alt="The Cliffs — Elite Live Entertainment"
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto object-contain drop-shadow-2xl"
            style={{ maxWidth: '400px' }}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.hero-logo-fallback')) {
                const fallback = document.createElement('div');
                fallback.className = 'hero-logo-fallback';
                fallback.innerHTML = `<div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,8vw,6rem);color:white;letter-spacing:4px;line-height:1;">THE CLIFFS</div>`;
                parent.appendChild(fallback);
              }
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-display text-cliffs-pink tracking-[0.3em] text-sm md:text-base mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ELITE LIVE ENTERTAINMENT
        </motion.p>

        {/* Hero headline */}
        <motion.h1
          className="font-display text-white leading-none tracking-wide mb-6"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 7rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          We Don't Just Play.{' '}
          <span className="text-cliffs-pink">We Electrify.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/60 font-body text-base md:text-lg mb-10 tracking-wider"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Available for Weddings · Corporate Events · Private Celebrations
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <motion.button
            onClick={() => handleScroll('#booking')}
            className="px-8 py-4 bg-cliffs-pink text-white font-semibold text-base rounded-full cursor-pointer transition-all duration-200"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,45,120,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Event
          </motion.button>
          <motion.button
            onClick={() => handleScroll('#videos')}
            className="px-8 py-4 border border-white/30 text-white font-semibold text-base rounded-full cursor-pointer hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Watch Us Live
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest font-body">SCROLL</span>
        <svg
          className="w-5 h-5"
          style={{ animation: 'bounce 1.6s ease-in-out infinite' }}
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
