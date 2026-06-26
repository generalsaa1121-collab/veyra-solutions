import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SONGS } from '../data/content';

export default function Songs() {
  const categories = Object.keys(SONGS);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');

  const allCategories = ['All', ...categories];

  const filteredSongs = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (activeCategory === 'All') {
      const all: Array<{ song: string; category: string }> = [];
      for (const [cat, songs] of Object.entries(SONGS)) {
        for (const song of songs) {
          if (!query || song.toLowerCase().includes(query)) {
            all.push({ song, category: cat });
          }
        }
      }
      return all;
    } else {
      const songs = SONGS[activeCategory] || [];
      return songs
        .filter((s) => !query || s.toLowerCase().includes(query))
        .map((song) => ({ song, category: activeCategory }));
    }
  }, [activeCategory, search]);

  const totalSongs = Object.values(SONGS).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <section id="songs" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cliffs-pink font-display tracking-widest text-sm md:text-base mb-3">
            FIVE DECADES OF MUSIC
          </p>
          <h2 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Our Setlist
          </h2>
          <p className="text-white/50 font-body text-base md:text-lg max-w-xl mx-auto mb-2">
            {totalSongs}+ songs across every genre and era — curated to keep your dance floor packed all night.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search songs or artists..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-white/10 bg-white/5 text-white placeholder-white/30 text-sm font-body focus:outline-none focus:border-cliffs-pink transition-colors duration-200"
              aria-label="Search songs"
            />
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold font-body cursor-pointer transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cliffs-pink text-white'
                  : 'border border-white/15 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Songs grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + search}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredSongs.length === 0 ? (
              <div className="col-span-full text-center text-white/40 py-16 font-body">
                No songs match your search.
              </div>
            ) : (
              filteredSongs.map(({ song, category }, i) => (
                <motion.div
                  key={`${song}-${i}`}
                  className="group flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-default transition-colors duration-150 hover:bg-white/5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.4) }}
                >
                  <div className="w-1 h-1 rounded-full bg-cliffs-pink flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-white/80 text-sm font-body group-hover:text-white transition-colors truncate">
                      {song}
                    </p>
                    {activeCategory === 'All' && (
                      <p className="text-white/30 text-xs mt-0.5">{category}</p>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/35 text-sm font-body italic">
            Full setlist available upon request · Custom songs considered · New releases added regularly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
