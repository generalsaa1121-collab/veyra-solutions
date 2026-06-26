import { motion } from 'framer-motion';
import { SHOWS } from '../data/content';

const TYPE_COLORS: Record<string, string> = {
  Public: 'text-cliffs-pink border-cliffs-pink/30 bg-cliffs-pink/10',
  'Members Only': 'text-cliffs-gold border-cliffs-gold/30 bg-cliffs-gold/10',
  Concert: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  Private: 'text-white/70 border-white/20 bg-white/5',
};

export default function Shows() {
  return (
    <section id="shows" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-3">
            ON THE CALENDAR
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Upcoming Performances
          </h2>
          <p className="text-white/50 font-body text-base max-w-lg mx-auto">
            20+ shows across New Jersey this summer. Find us near you.
          </p>
        </motion.div>

        {/* Shows list */}
        <div className="flex flex-col gap-3">
          {SHOWS.map((show, i) => (
            <motion.div
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 rounded-xl border border-white/8 hover:border-white/16 transition-all duration-300 cursor-default"
              style={{ backgroundColor: '#111111' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.5 }}
              whileHover={{ backgroundColor: '#161616' } as Record<string, string>}
            >
              {/* Date + Time */}
              <div className="flex-shrink-0 sm:w-40">
                <p className="font-display text-cliffs-pink text-lg md:text-xl leading-none">
                  {show.date}
                </p>
                <p className="text-white/40 text-sm font-body mt-0.5 tabular-nums">
                  {show.time}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/10 flex-shrink-0" aria-hidden="true" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-white text-base md:text-lg leading-tight mb-0.5 truncate">
                  {show.venue}
                </h3>
                <div className="flex items-center gap-2 text-white/45 text-sm font-body">
                  <svg className="w-3.5 h-3.5 text-white/25 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="truncate">{show.location}</span>
                </div>
              </div>

              {/* Type badge */}
              <span
                className={`self-start sm:self-center flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border font-body whitespace-nowrap ${TYPE_COLORS[show.type] ?? TYPE_COLORS.Private}`}
              >
                {show.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Note + CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/40 font-body text-sm mb-2 max-w-lg mx-auto">
            Many performances are private or members-only events. To follow The Cliffs live,
            follow us on social media.
          </p>
          <p className="text-white/30 font-body text-sm mb-8">
            Don't see your date? Reach out — we book quickly.
          </p>
          <motion.button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-cliffs-pink text-white font-semibold text-base rounded-full cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,45,120,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Date
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
