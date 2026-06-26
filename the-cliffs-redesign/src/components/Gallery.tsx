import { motion } from 'framer-motion';

// NOTE: Replace these placeholder items with actual image paths once photos are available.
// Each item has: a gradient for the placeholder, and the height for masonry variety.
const GALLERY_ITEMS = [
  { gradient: 'linear-gradient(135deg, #1a0a1a 0%, #2d1a2d 100%)', height: 320, label: 'Wedding Reception' },
  { gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2d 100%)', height: 220, label: 'Corporate Gala' },
  { gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1a1a 100%)', height: 280, label: 'Dance Floor' },
  { gradient: 'linear-gradient(135deg, #0a1a0a 0%, #1a2d1a 100%)', height: 240, label: 'Band On Stage' },
  { gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2d2d1a 100%)', height: 360, label: 'Private Celebration' },
  { gradient: 'linear-gradient(135deg, #180a1a 0%, #2a1a2d 100%)', height: 200, label: 'Cocktail Hour' },
  { gradient: 'linear-gradient(135deg, #0a1818 0%, #1a2828 100%)', height: 300, label: 'Ballroom Event' },
  { gradient: 'linear-gradient(135deg, #180a0a 0%, #2d1818 100%)', height: 260, label: 'Anniversary Party' },
  { gradient: 'linear-gradient(135deg, #0a0a18 0%, #18182d 100%)', height: 340, label: 'Outdoor Performance' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#050505' }}>
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
            MOMENTS CAPTURED
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            The Experience
          </h2>
          <p className="text-white/50 font-body text-base max-w-lg mx-auto">
            Every event is a story. Here's a glimpse into the world The Cliffs creates.
          </p>
        </motion.div>

        {/* Masonry grid via CSS columns */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          style={{ columnGap: '1rem' }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-4"
              style={{ background: item.gradient, height: `${item.height}px` }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            >
              {/* Shimmer base */}
              <div className="absolute inset-0 shimmer opacity-40" aria-hidden="true" />

              {/* Photo icon placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/15">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs tracking-widest">{item.label}</span>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,45,120,0.85) 0%, rgba(5,5,5,0.85) 100%)',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center">
                  <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-white font-display tracking-widest text-sm">VIEW</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-white/25 text-xs font-body mt-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* NOTE: Replace gradient placeholders with actual event photography */}
          Photography placeholders — replace with actual band & event photos
        </motion.p>
      </div>
    </section>
  );
}
