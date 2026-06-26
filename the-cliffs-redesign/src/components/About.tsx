import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BAND, STATS } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 md:p-8 rounded-2xl border border-white/8"
      style={{ backgroundColor: '#1A1A1A' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div
        className="font-display text-cliffs-pink mb-2 leading-none"
        style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          transitionDelay: `${index * 0.1}s`,
        }}
      >
        {value}
      </div>
      <div className="text-white/60 text-sm md:text-base font-body tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-4">
              ABOUT THE BAND
            </p>
            <blockquote className="font-display text-white leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              "We don't just cover songs — we own the room."
            </blockquote>
            <p className="text-white/70 font-body text-base md:text-lg leading-relaxed mb-6">
              {BAND.description}
            </p>
            <p className="text-white/50 font-body text-base leading-relaxed">
              From intimate cocktail hours to massive ballroom receptions, The Cliffs deliver a
              concert-caliber experience tailored to your event. Our seasoned musicians have
              performed at the city's most prestigious venues, and we bring that same level of
              polish and professionalism to every single show.
            </p>
            <motion.button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-6 py-3 border border-cliffs-pink text-cliffs-pink text-sm font-semibold rounded-full cursor-pointer hover:bg-cliffs-pink hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Inquire About Your Event
            </motion.button>
          </motion.div>

          {/* Right: photo placeholders */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Tall placeholder */}
            <div
              className="shimmer rounded-2xl overflow-hidden relative"
              style={{ height: '280px' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs tracking-widest">BAND PHOTO</span>
              </div>
            </div>
            {/* Two shorter side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="shimmer rounded-2xl overflow-hidden relative" style={{ height: '180px' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white/20">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs tracking-widest">LIVE SHOW</span>
                </div>
              </div>
              <div className="shimmer rounded-2xl overflow-hidden relative" style={{ height: '180px' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white/20">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs tracking-widest">VENUE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
