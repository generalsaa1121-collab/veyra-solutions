import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SONGS,
  MEDLEYS,
  GENRE_META,
  TAG_META,
  type GenreKey,
  type TagKey,
} from '../data/songs';

const GENRE_ORDER: GenreKey[] = [
  'motown', 'big-band', 'soul', '70s-rock', '70s-disco',
  '80s', '90s', 'hip-hop', '2000s', 'traditional',
];

const TAG_ORDER: TagKey[] = [
  'crowd-favorite', 'first-dance', 'father-daughter', 'mother-son', 'last-song', 'traditional',
];

function MedleyCard({ medley, visible }: { medley: typeof MEDLEYS[number]; visible: boolean }) {
  const [open, setOpen] = useState(false);
  const meta = GENRE_META[medley.genre];

  if (!visible) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/8 bg-white/[0.04] overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-start gap-3 cursor-pointer group"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide font-body"
              style={{ backgroundColor: `${meta.color}22`, color: meta.color }}
            >
              {meta.label}
            </span>
            {!medley.adjustable && (
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide font-body bg-white/8 text-white/50">
                FIXED SET
              </span>
            )}
          </div>
          <p className="font-display text-white text-lg leading-snug tracking-wide pr-2">
            {medley.name}
          </p>
          <p className="text-white/35 text-xs mt-1 font-body">
            {medley.songs.length} songs
            {medley.adjustable && ' · adjustable upon request'}
          </p>
        </div>
        <div className={`flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="songs"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 border-t border-white/6">
              <ul className="mt-3 space-y-1.5">
                {medley.songs.map((s, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold font-body flex-shrink-0"
                      style={{ backgroundColor: `${meta.color}30`, color: meta.color }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-white/70 text-sm font-body leading-snug">
                      {s.title}
                      <span className="text-white/30 ml-1.5">· {s.artist}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SongRow({ song }: { song: typeof SONGS[number] }) {
  const meta = GENRE_META[song.genre];
  return (
    <div className="group flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-150 cursor-default">
      <div className="flex-1 min-w-0">
        <p className="text-white/85 text-sm font-body leading-snug group-hover:text-white transition-colors truncate">
          {song.title}
          {song.note === 'partial' && (
            <span className="ml-1.5 text-white/30 text-[10px]">partial</span>
          )}
          {song.note === 'acoustic' && (
            <span className="ml-1.5 text-white/30 text-[10px]">acoustic avail.</span>
          )}
        </p>
        <p className="text-white/35 text-xs mt-0.5 font-body truncate">{song.artist}</p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-1.5 mt-0.5">
        {song.tags && song.tags.map((tag) => {
          const t = TAG_META[tag];
          return (
            <span
              key={tag}
              title={t.label}
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: t.color }}
            />
          );
        })}
        <span
          className="ml-1 text-[9px] font-semibold font-body px-1.5 py-0.5 rounded tracking-wide flex-shrink-0"
          style={{ backgroundColor: `${meta.color}20`, color: meta.color }}
        >
          {meta.short}
        </span>
      </div>
    </div>
  );
}

export default function Songs() {
  const [activeGenre, setActiveGenre] = useState<GenreKey | 'all'>('all');
  const [activeTag, setActiveTag] = useState<TagKey | null>(null);
  const [search, setSearch] = useState('');

  const medleySongsTotal = MEDLEYS.reduce((s, m) => s + m.songs.length, 0);
  // 5 songs appear in both SONGS[] and a medley — subtract to avoid double-counting
  const MEDLEY_CROSSOVER = 5;
  const totalUnique = SONGS.length + medleySongsTotal - MEDLEY_CROSSOVER;

  const filteredSongs = useMemo(() => {
    const q = search.toLowerCase().trim();
    return SONGS.filter((s) => {
      const matchGenre = activeGenre === 'all' || s.genre === activeGenre;
      const matchTag = !activeTag || (s.tags?.includes(activeTag) ?? false);
      const matchSearch =
        !q || s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q);
      return matchGenre && matchTag && matchSearch;
    });
  }, [activeGenre, activeTag, search]);

  const filteredMedleys = useMemo(() => {
    if (activeTag) return [];
    const q = search.toLowerCase().trim();
    return MEDLEYS.filter((m) => {
      const matchGenre = activeGenre === 'all' || m.genre === activeGenre;
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.songs.some((s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q));
      return matchGenre && matchSearch;
    });
  }, [activeGenre, activeTag, search]);

  const handleTagClick = (tag: TagKey) => {
    setActiveTag(activeTag === tag ? null : tag);
    setActiveGenre('all');
  };

  const handleGenreClick = (genre: GenreKey | 'all') => {
    setActiveGenre(genre);
    setActiveTag(null);
  };

  const showMedleys = filteredMedleys.length > 0;
  const hasResults = filteredSongs.length > 0 || showMedleys;

  return (
    <section id="songs" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#050505' }}>
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
            SIX DECADES OF MUSIC
          </p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Song Library
          </h2>
          <p className="text-white/50 font-body text-base md:text-lg max-w-xl mx-auto mb-6">
            Browse our full setlist — search by song, filter by genre, or find the perfect
            wedding dance.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { value: `${totalUnique}+`, label: 'Songs' },
              { value: `${GENRE_ORDER.length}`, label: 'Genres' },
              { value: `${MEDLEYS.length}`, label: 'Live Medleys' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/4"
              >
                <span className="text-cliffs-pink font-display text-lg leading-none">{value}</span>
                <span className="text-white/40 text-xs font-body">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          className="max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search songs or artists…"
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink/50 transition-colors duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Genre chips */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-white/25 text-xs font-body mr-1 flex-shrink-0">Genre</span>
            <button
              onClick={() => handleGenreClick('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-body cursor-pointer transition-all duration-200 flex-shrink-0 ${
                activeGenre === 'all' && !activeTag
                  ? 'bg-white text-black'
                  : 'border border-white/12 text-white/50 hover:border-white/30 hover:text-white/80'
              }`}
            >
              All
            </button>
            {GENRE_ORDER.map((g) => {
              const meta = GENRE_META[g];
              const isActive = activeGenre === g && !activeTag;
              return (
                <button
                  key={g}
                  onClick={() => handleGenreClick(g)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold font-body cursor-pointer transition-all duration-200 flex-shrink-0 border"
                  style={
                    isActive
                      ? { backgroundColor: meta.color, borderColor: meta.color, color: '#000', transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease' }
                      : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.50)', transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease' }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = meta.color;
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                >
                  {meta.label}
                </button>
              );
            })}
          </div>

          {/* Tag chips */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-white/25 text-xs font-body mr-1 flex-shrink-0">Occasion</span>
            {TAG_ORDER.map((tag) => {
              const meta = TAG_META[tag];
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold font-body cursor-pointer transition-all duration-200 flex-shrink-0 border"
                  style={
                    isActive
                      ? { backgroundColor: meta.color, borderColor: meta.color, color: '#000', transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease' }
                      : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.50)', transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease' }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = meta.color;
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                >
                  {meta.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {!hasResults ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-white/30 font-body"
            >
              No songs match your search.
            </motion.div>
          ) : (
            <motion.div
              key={`${activeGenre}-${activeTag ?? 'none'}-${search}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Medleys */}
              {showMedleys && (
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                      Medleys
                    </h3>
                    <div className="flex-1 h-px bg-white/6" />
                    <span className="text-white/25 text-xs font-body">{filteredMedleys.length}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {filteredMedleys.map((m) => (
                      <MedleyCard key={m.id} medley={m} visible />
                    ))}
                  </div>
                </div>
              )}

              {/* Individual songs */}
              {filteredSongs.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                      {showMedleys ? 'Individual Songs' : 'Songs'}
                    </h3>
                    <div className="flex-1 h-px bg-white/6" />
                    <span className="text-white/25 text-xs font-body">{filteredSongs.length}</span>
                  </div>

                  {/* Tag legend (when tag filter is active, show what dots mean) */}
                  {!activeTag && !search && activeGenre === 'all' && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
                      {TAG_ORDER.map((tag) => {
                        const t = TAG_META[tag];
                        return (
                          <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className="flex items-center gap-1.5 text-[11px] font-body text-white/30 hover:text-white/55 transition-colors cursor-pointer"
                          >
                            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                            {t.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
                    {filteredSongs.map((song, i) => (
                      <SongRow key={`${song.title}-${song.artist}-${i}`} song={song} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.p
          className="mt-12 text-center text-white/25 text-sm font-body italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Full setlist available upon request · Custom songs considered · New releases added regularly
        </motion.p>
      </div>
    </section>
  );
}
