import { motion } from 'framer-motion';
import { VIDEOS } from '../data/content';

export default function Videos() {
  return (
    <section id="videos" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#050505' }}>
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
            SEE US IN ACTION
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Watch Us Live
          </h2>
          <p className="text-white/50 font-body text-base md:text-lg max-w-xl mx-auto">
            Experience the energy, musicianship, and crowd connection that makes The Cliffs
            the first choice for New Jersey events.
          </p>
        </motion.div>

        {/* Two cinematic video layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              className="group rounded-2xl overflow-hidden border border-white/8 hover:border-cliffs-pink/30 transition-all duration-300"
              style={{ backgroundColor: '#0F0F0F' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ scale: 1.015 }}
            >
              {/* Label above */}
              <div className="px-6 pt-6 pb-3">
                <p className="font-display text-cliffs-pink tracking-widest text-sm">
                  {video.title.toUpperCase()}
                </p>
              </div>

              {/* YouTube embed — full width 16:9 */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description below */}
              <div className="p-6">
                <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/30 font-body text-sm">
            More footage available — follow us on social media for live clips every weekend
          </p>
        </motion.div>
      </div>
    </section>
  );
}
