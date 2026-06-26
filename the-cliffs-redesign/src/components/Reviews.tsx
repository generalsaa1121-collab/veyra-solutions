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

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            Hundreds of five-star events. Here's what the people who've experienced The Cliffs have to say.
          </p>
        </motion.div>

        {/* Reviews grid — horizontal scroll on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-2xl border border-white/8 flex flex-col"
              style={{ backgroundColor: '#1A1A1A' }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
              whileHover={{ borderColor: 'rgba(255,45,120,0.2)' } as Record<string, string>}
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-4 right-6 font-display text-cliffs-pink/20 leading-none pointer-events-none select-none"
                style={{ fontSize: '6rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </div>

              <Stars />

              <blockquote className="text-white/80 font-body text-base italic leading-relaxed flex-1 mb-6">
                "{review.quote}"
              </blockquote>

              <div className="border-t border-white/8 pt-5">
                <p className="text-white font-semibold font-body text-sm">{review.author}</p>
                <p className="text-white/40 text-xs font-body mt-0.5">{review.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust signal */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 text-white/40 text-sm font-body">
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-cliffs-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>5.0 average across 500+ events</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
