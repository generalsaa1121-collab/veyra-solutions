import { useState, useMemo, useCallback, useRef } from 'react';
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

const PREVIEW_COUNT = 10;
const FEATURED_TAG_SET = new Set<TagKey>([
  'crowd-favorite', 'first-dance', 'father-daughter', 'mother-son', 'last-song',
]);

// ─────────────────────────────────────────────────────────────────────────────
// MedleyCard
// ─────────────────────────────────────────────────────────────────────────────
function MedleyCard({ medley }: { medley: typeof MEDLEYS[number] }) {
  const [open, setOpen] = useState(false);
  const meta = GENRE_META[medley.genre];

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
            {medley.songs.length} songs{medley.adjustable && ' · adjustable upon request'}
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
            key="content"
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
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold font-body flex-shrink-0"
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

// ─────────────────────────────────────────────────────────────────────────────
// SongRow
// ─────────────────────────────────────────────────────────────────────────────
function SongRow({ song }: { song: typeof SONGS[number] }) {
  const meta = GENRE_META[song.genre];
  return (
    <div className="group flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-150 cursor-default">
      <div className="flex-1 min-w-0">
        <p className="text-white/85 text-sm font-body leading-snug group-hover:text-white transition-colors truncate">
          {song.title}
          {song.note === 'partial' && <span className="ml-1.5 text-white/30 text-[10px]">partial</span>}
          {song.note === 'acoustic' && <span className="ml-1.5 text-white/30 text-[10px]">acoustic avail.</span>}
        </p>
        <p className="text-white/35 text-xs mt-0.5 font-body truncate">{song.artist}</p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-1.5 mt-0.5">
        {song.tags?.map((tag) => {
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

// ─────────────────────────────────────────────────────────────────────────────
// GenreSection — collapsed by default, preview + show-all within
// ─────────────────────────────────────────────────────────────────────────────
function GenreSection({
  genre,
  songs,
  isOpen,
  onToggle,
}: {
  genre: GenreKey;
  songs: typeof SONGS;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const meta = GENRE_META[genre];
  const displayed = showAll ? songs : songs.slice(0, PREVIEW_COUNT);
  const hasMore = songs.length > PREVIEW_COUNT;

  return (
    <div id={`genre-${genre}`} className="border-b border-white/6 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-4 hover:bg-white/[0.025] transition-colors duration-150 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: meta.color }}
        />
        <span className="font-display text-white text-base md:text-lg tracking-wide flex-1 text-left">
          {meta.label}
        </span>
        <span className="text-white/25 text-xs font-body tabular-nums mr-2">
          {songs.length} songs
        </span>
        <svg
          className={`w-4 h-4 text-white/35 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="songs"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
                {displayed.map((song, i) => (
                  <SongRow key={`${song.title}-${song.artist}-${i}`} song={song} />
                ))}
              </div>

              {hasMore && (
                <div className="mt-3 px-3">
                  {!showAll ? (
                    <button
                      onClick={() => setShowAll(true)}
                      className="flex items-center gap-1.5 text-xs font-body text-white/40 hover:text-cliffs-pink transition-colors duration-150 cursor-pointer"
                    >
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Show all {songs.length} songs in {meta.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowAll(false)}
                      className="flex items-center gap-1.5 text-xs font-body text-white/40 hover:text-white/70 transition-colors duration-150 cursor-pointer"
                    >
                      <svg className="w-3 h-3 rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Show fewer
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Songs — main component
// ─────────────────────────────────────────────────────────────────────────────
export default function Songs() {
  const [mode, setMode] = useState<'featured' | 'catalog'>('featured');
  const [activeTag, setActiveTag] = useState<TagKey | null>(null);
  const [search, setSearch] = useState('');
  const [expandedGenres, setExpandedGenres] = useState<Set<GenreKey>>(new Set());
  const jumpSelectRef = useRef<HTMLSelectElement>(null);

  const medleySongsTotal = MEDLEYS.reduce((s, m) => s + m.songs.length, 0);
  const MEDLEY_CROSSOVER = 5;
  const totalUnique = SONGS.length + medleySongsTotal - MEDLEY_CROSSOVER;

  const songsByGenre = useMemo(() => {
    const map = new Map<GenreKey, typeof SONGS>();
    for (const g of GENRE_ORDER) map.set(g, []);
    for (const s of SONGS) map.get(s.genre)?.push(s);
    return map;
  }, []);

  const featuredSongs = useMemo(
    () => SONGS.filter((s) => s.tags?.some((t) => FEATURED_TAG_SET.has(t))),
    []
  );

  const filteredFeatured = useMemo(() => {
    if (!activeTag) return featuredSongs;
    return featuredSongs.filter((s) => s.tags?.includes(activeTag));
  }, [featuredSongs, activeTag]);

  // Search runs across the entire catalog regardless of mode
  const searchResults = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return null;
    const songs = SONGS.filter(
      (s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
    );
    const medleys = MEDLEYS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.songs.some(
          (s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
        )
    );
    return { songs, medleys };
  }, [search]);

  const isSearching = searchResults !== null;
  const totalSearchHits = isSearching
    ? (searchResults?.songs.length ?? 0) + (searchResults?.medleys.length ?? 0)
    : 0;

  const toggleGenre = useCallback((g: GenreKey) => {
    setExpandedGenres((prev) => {
      const next = new Set(prev);
      if (next.has(g)) next.delete(g);
      else next.add(g);
      return next;
    });
  }, []);

  const jumpToGenre = useCallback((g: GenreKey) => {
    setExpandedGenres((prev) => new Set([...prev, g]));
    setTimeout(() => {
      document.getElementById(`genre-${g}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }, []);

  const switchMode = (m: 'featured' | 'catalog') => {
    setMode(m);
    setSearch('');
    setActiveTag(null);
    setExpandedGenres(new Set());
  };

  const handleTagClick = (tag: TagKey) => setActiveTag(activeTag === tag ? null : tag);

  return (
    <section id="songs" className="py-24 md:py-32 px-4 sm:px-6" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Static header ─────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-10"
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
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
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

          {/* Featured / Full Catalog toggle */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1">
            <button
              onClick={() => switchMode('featured')}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 cursor-pointer ${
                mode === 'featured'
                  ? 'bg-cliffs-pink text-white shadow-sm'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              ★ Featured
            </button>
            <button
              onClick={() => switchMode('catalog')}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 cursor-pointer ${
                mode === 'catalog'
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              Full Catalog
            </button>
          </div>
        </motion.div>

        {/* ── Sticky filter bar ─────────────────────────────────────────────── */}
        <div
          className="sticky z-20 py-3 mb-8 border-b border-white/6"
          style={{ top: '72px', backgroundColor: 'rgba(5,5,5,0.97)' }}
        >
          {/* Search row */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/35 pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search all songs or artists…"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/25 text-sm font-body focus:outline-none focus:border-cliffs-pink/50 transition-colors duration-200"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {isSearching && (
              <span className="text-white/30 text-xs font-body flex-shrink-0 whitespace-nowrap">
                {totalSearchHits} result{totalSearchHits !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {/* Catalog navigation (hidden during search) */}
          {mode === 'catalog' && !isSearching && (
            <>
              {/* Mobile: jump-to dropdown */}
              <div className="sm:hidden">
                <select
                  ref={jumpSelectRef}
                  defaultValue=""
                  onChange={(e) => {
                    const val = e.target.value as GenreKey;
                    if (val) {
                      jumpToGenre(val);
                      if (jumpSelectRef.current) jumpSelectRef.current.value = '';
                    }
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm font-body focus:outline-none focus:border-cliffs-pink/40 cursor-pointer"
                  style={{ backgroundColor: '#111111' }}
                >
                  <option value="" disabled>Jump to genre…</option>
                  {GENRE_ORDER.map((g) => (
                    <option key={g} value={g}>
                      {GENRE_META[g].label} — {songsByGenre.get(g)?.length ?? 0} songs
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop: genre jump chips */}
              <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                <span className="text-white/25 text-xs font-body mr-0.5 flex-shrink-0">Jump to</span>
                {GENRE_ORDER.map((g) => {
                  const meta = GENRE_META[g];
                  const isExpanded = expandedGenres.has(g);
                  return (
                    <button
                      key={g}
                      onClick={() => jumpToGenre(g)}
                      className="px-3 py-1 rounded-full text-xs font-semibold font-body cursor-pointer border flex-shrink-0"
                      style={{
                        borderColor: isExpanded ? meta.color : 'rgba(255,255,255,0.12)',
                        color: isExpanded ? meta.color : 'rgba(255,255,255,0.50)',
                        transition: 'border-color 0.2s ease, color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = meta.color;
                        e.currentTarget.style.color = meta.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isExpanded ? meta.color : 'rgba(255,255,255,0.12)';
                        e.currentTarget.style.color = isExpanded ? meta.color : 'rgba(255,255,255,0.50)';
                      }}
                    >
                      {meta.short}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Featured occasion filters (hidden during search) */}
          {mode === 'featured' && !isSearching && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-1 rounded-full text-xs font-semibold font-body cursor-pointer transition-all duration-200 flex-shrink-0 ${
                  !activeTag
                    ? 'bg-white text-black'
                    : 'border border-white/12 text-white/50 hover:border-white/30 hover:text-white/80'
                }`}
              >
                All
              </button>
              {TAG_ORDER.map((tag) => {
                const meta = TAG_META[tag];
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="px-3 py-1 rounded-full text-xs font-semibold font-body cursor-pointer flex-shrink-0 border"
                    style={
                      isActive
                        ? { backgroundColor: meta.color, borderColor: meta.color, color: '#000', transition: 'all 0.2s ease' }
                        : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.50)', transition: 'all 0.2s ease' }
                    }
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = meta.color; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                  >
                    {meta.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Content ───────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">

          {/* SEARCH RESULTS — overrides both modes */}
          {isSearching ? (
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {totalSearchHits === 0 ? (
                <p className="text-center py-16 text-white/30 font-body">
                  No songs match your search.
                </p>
              ) : (
                <>
                  {searchResults!.medleys.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-5">
                        <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                          Medleys
                        </h3>
                        <div className="flex-1 h-px bg-white/6" />
                        <span className="text-white/25 text-xs font-body">
                          {searchResults!.medleys.length}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {searchResults!.medleys.map((m) => (
                          <MedleyCard key={m.id} medley={m} />
                        ))}
                      </div>
                    </div>
                  )}
                  {searchResults!.songs.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                          Songs
                        </h3>
                        <div className="flex-1 h-px bg-white/6" />
                        <span className="text-white/25 text-xs font-body">
                          {searchResults!.songs.length}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
                        {searchResults!.songs.map((song, i) => (
                          <SongRow key={`${song.title}-${song.artist}-${i}`} song={song} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>

          ) : mode === 'featured' ? (

            /* ── FEATURED MODE ─────────────────────────────────────────────── */
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* All medleys */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                    Live Medleys
                  </h3>
                  <div className="flex-1 h-px bg-white/6" />
                  <span className="text-white/25 text-xs font-body">{MEDLEYS.length}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {MEDLEYS.map((m) => (
                    <MedleyCard key={m.id} medley={m} />
                  ))}
                </div>
              </div>

              {/* Popular requests */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                    Popular Requests
                  </h3>
                  <div className="flex-1 h-px bg-white/6" />
                  <span className="text-white/25 text-xs font-body">{filteredFeatured.length}</span>
                </div>

                {/* Dot legend */}
                {!activeTag && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
                    {TAG_ORDER.map((tag) => {
                      const t = TAG_META[tag];
                      return (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className="flex items-center gap-1.5 text-[11px] font-body text-white/30 hover:text-white/55 transition-colors cursor-pointer"
                        >
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: t.color }}
                          />
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {filteredFeatured.length === 0 ? (
                  <p className="text-white/30 font-body text-sm text-center py-8">
                    No songs match this filter.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
                    {filteredFeatured.map((song, i) => (
                      <SongRow key={`${song.title}-${song.artist}-${i}`} song={song} />
                    ))}
                  </div>
                )}

                <div className="mt-8 text-center">
                  <button
                    onClick={() => switchMode('catalog')}
                    className="text-sm font-body text-white/40 hover:text-cliffs-pink transition-colors duration-200 cursor-pointer"
                  >
                    Browse the full catalog →
                  </button>
                </div>
              </div>
            </motion.div>

          ) : (

            /* ── CATALOG MODE ──────────────────────────────────────────────── */
            <motion.div
              key="catalog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Genre sections */}
              <div className="rounded-2xl border border-white/8 overflow-hidden mb-10">
                {GENRE_ORDER.map((g) => {
                  const songs = songsByGenre.get(g) ?? [];
                  if (songs.length === 0) return null;
                  return (
                    <GenreSection
                      key={g}
                      genre={g}
                      songs={songs}
                      isOpen={expandedGenres.has(g)}
                      onToggle={() => toggleGenre(g)}
                    />
                  );
                })}
              </div>

              {/* Medleys */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-white/60 text-xs font-body tracking-widest uppercase">
                    Live Medleys
                  </h3>
                  <div className="flex-1 h-px bg-white/6" />
                  <span className="text-white/25 text-xs font-body">{MEDLEYS.length}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {MEDLEYS.map((m) => (
                    <MedleyCard key={m.id} medley={m} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer note */}
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
