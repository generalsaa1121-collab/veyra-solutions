import { motion } from 'framer-motion';
import { SERVICES } from '../data/content';

const SERVICE_ICONS = [
  // Weddings — rings
  (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  // Private Parties — music note
  (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  ),
  // Corporate Events — building
  (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  // Versatile Customization — sliders
  (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-4 sm:px-6"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-3">
            WHAT WE DO
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            The Right Band for Every Occasion
          </h2>
          <p className="text-white/50 font-body text-base md:text-lg max-w-xl mx-auto">
            From intimate backyard parties to black-tie galas — The Cliffs bring the same
            unstoppable energy to every event.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-white/8 transition-all duration-300 cursor-default overflow-hidden"
              style={{ backgroundColor: '#1A1A1A' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ borderColor: 'rgba(255,45,120,0.25)' } as Record<string, string>}
            >
              {/* Subtle pink glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse 80% 80% at 0% 0%, rgba(255,45,120,0.06) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cliffs-pink/10 border border-cliffs-pink/20 flex items-center justify-center text-cliffs-pink mb-5 group-hover:bg-cliffs-pink/20 transition-colors duration-200">
                {SERVICE_ICONS[i]}
              </div>

              <h3
                className="font-display text-white mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
              >
                {service.title}
              </h3>
              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/40 font-body text-sm mb-4">
            Full song list available upon request
          </p>
          <motion.button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-cliffs-pink text-cliffs-pink text-sm font-semibold rounded-full cursor-pointer hover:bg-cliffs-pink hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us to Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
