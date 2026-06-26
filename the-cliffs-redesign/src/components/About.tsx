import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_STORY, BAND_MEMBERS, STATS } from '../data/content';

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
          fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
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

// Split the story into paragraphs
const storyParagraphs = ABOUT_STORY.split('\n\n').filter(Boolean);

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-4">
            ABOUT THE BAND
          </p>
          <h2
            className="font-display text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Every Great Love Story{' '}
            <span className="text-cliffs-pink">Starts Somewhere.</span>
          </h2>

          {/* Pull quote */}
          <blockquote
            className="border-l-2 border-cliffs-pink pl-6 py-2 mb-10"
          >
            <p
              className="font-display text-white/90 italic leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
            >
              "It was here that Matt &amp; Kristin, in their blissful and carefree youth, kissed for the first time. And the love they were inspired..."
            </p>
          </blockquote>

          {/* Story paragraphs */}
          <div className="space-y-5">
            {storyParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-white/70 font-body text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-14" />

        {/* The Ensemble */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-3">
            THE ENSEMBLE
          </p>
          <h3
            className="font-display text-white mb-8"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
          >
            8 Musicians. One Stage. Zero Limits.
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {BAND_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                className="group relative p-5 rounded-xl border border-white/8 transition-all duration-200 cursor-default overflow-hidden"
                style={{ backgroundColor: '#1A1A1A' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ borderColor: 'rgba(255,45,120,0.3)' } as Record<string, string>}
              >
                {/* Pink bottom border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cliffs-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />

                {/* Band leader accent */}
                {member.leader && (
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cliffs-pink flex-shrink-0" aria-hidden="true" />
                    <span className="text-cliffs-pink text-xs font-body tracking-wider uppercase">Band Leader</span>
                  </div>
                )}

                <h4
                  className="font-display text-white leading-tight mb-1"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                >
                  {member.name}
                </h4>
                <p className="text-white/50 font-body text-xs leading-relaxed">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>

        {/* Book CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-cliffs-pink text-cliffs-pink text-sm font-semibold rounded-full cursor-pointer hover:bg-cliffs-pink hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Inquire About Your Event
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
