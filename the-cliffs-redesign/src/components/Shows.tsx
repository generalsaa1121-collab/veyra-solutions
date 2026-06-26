import { motion } from 'framer-motion';
import { SHOWS } from '../data/content';

const TYPE_COLORS: Record<string, string> = {
  Wedding: 'text-cliffs-pink border-cliffs-pink/30 bg-cliffs-pink/10',
  Corporate: 'text-cliffs-gold border-cliffs-gold/30 bg-cliffs-gold/10',
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
            Dates fill quickly. Reach out early to secure your event.
          </p>
        </motion.div>

        {/* Shows list */}
        <div className="flex flex-col gap-4">
          {SHOWS.map((show, i) => (
            <motion.div
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl border border-white/8 hover:border-white/16 transition-all duration-300 cursor-default"
              style={{ backgroundColor: '#1A1A1A' }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              whileHover={{ backgroundColor: '#1f1f1f' } as Record<string, string>}
            >
              {/* Date */}
              <div className="flex-shrink-0 sm:w-36">
                <p className="font-display text-cliffs-pink text-xl md:text-2xl leading-none">
                  {show.date.split(',')[0]}
                </p>
                <p className="text-white/40 text-sm font-body mt-0.5">
                  {show.date.split(',')[1]?.trim()}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-white/10 flex-shrink-0" aria-hidden="true" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-white text-lg md:text-xl mb-1">{show.venue}</h3>
                <div className="flex items-center gap-2 text-white/50 text-sm font-body">
                  <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {show.location}
                </div>
              </div>

              {/* Type badge */}
              <span
                className={`self-start sm:self-center flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border font-body ${TYPE_COLORS[show.type] ?? TYPE_COLORS.Private}`}
              >
                {show.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/50 font-body text-sm mb-5">
            Most performances are private events. Don't see your date?
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
