import { motion } from 'framer-motion';
import { REVIEWS } from '../data/content';

function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-cliffs-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Featured review: Sarah & Ryan (index 0) — first paragraph only
const FEATURED = REVIEWS[0];
const featuredFirstPara = FEATURED.quote.split('\n\n')[0];

// Grid cards: next 4 reviews (indices 1-4), truncated
const GRID_REVIEWS = REVIEWS.slice(1, 5);

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            What Our Clients Say
          </h2>
          <p className="text-white/50 font-body text-base max-w-lg mx-auto">
            Every review is five stars. Here's what couples and guests say after a night with The Cliffs.
          </p>
        </motion.div>

        {/* Featured pull quote — movie poster style */}
        <motion.div
          className="relative mb-10 p-10 md:p-14 rounded-2xl border border-cliffs-pink/20 overflow-hidden"
          style={{ backgroundColor: '#0F0F0F' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at top left, rgba(255,45,120,0.12) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          {/* Pull quote headline */}
          <blockquote>
            <p
              className="font-display text-cliffs-pink italic leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)' }}
            >
              "Best. Wedding. Ever. You've ruined all other weddings for us!"
            </p>
            <p className="text-white/70 font-body text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {featuredFirstPara}
            </p>
          </blockquote>

          <div className="flex items-center gap-4">
            <Stars />
            <div className="border-l border-white/20 pl-4">
              <p className="text-white font-semibold font-body text-sm">{FEATURED.author}</p>
              <p className="text-white/40 text-xs font-body mt-0.5">{FEATURED.event} &middot; {FEATURED.date}</p>
            </div>
          </div>
        </motion.div>

        {/* 2×2 grid of shorter reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {GRID_REVIEWS.map((review, i) => {
            const excerpt =
              review.quote.length > 180
                ? review.quote.replace(/\n\n/g, ' ').slice(0, 180).trimEnd() + '...'
                : review.quote;
            return (
              <motion.div
                key={i}
                className="relative p-8 rounded-2xl border border-white/8 flex flex-col transition-all duration-200 cursor-default"
                style={{ backgroundColor: '#1A1A1A' }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                whileHover={{ borderColor: 'rgba(255,45,120,0.2)' } as Record<string, string>}
              >
                {/* Decorative quote mark */}
                <div
                  className="absolute top-4 right-6 font-display text-cliffs-pink/15 leading-none pointer-events-none select-none"
                  style={{ fontSize: '5rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </div>

                <Stars />

                <blockquote className="text-white/75 font-body text-base italic leading-relaxed flex-1 mb-6">
                  "{excerpt}"
                </blockquote>

                <div className="border-t border-white/8 pt-5">
                  <p className="text-white font-semibold font-body text-sm">{review.author}</p>
                  <p className="text-white/40 text-xs font-body mt-0.5">{review.event} &middot; {review.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust counter */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/3">
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-cliffs-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/50 font-body text-sm">All 5-Star Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
