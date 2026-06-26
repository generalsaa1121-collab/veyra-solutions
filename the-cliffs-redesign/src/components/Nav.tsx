import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Videos', href: '#videos' },
  { label: 'Songs', href: '#songs' },
  { label: 'Shows', href: '#shows' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#booking' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/88 backdrop-blur-md border-b border-white/5'
            : 'bg-gradient-to-b from-black/70 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3-col grid: logo left | links centered | cta right */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 md:h-[4.5rem]">

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="cursor-pointer"
              aria-label="The Cliffs - Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="The Cliffs logo"
                className="h-11 md:h-14 w-auto object-contain"
                style={{
                  filter: [
                    'drop-shadow(0 0 16px rgba(255,255,255,0.60))',
                    'drop-shadow(0 2px 8px rgba(0,0,0,0.90))',
                  ].join(' '),
                }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback';
                    fallback.innerHTML = `<span style="font-family:'Bebas Neue',sans-serif;font-size:1.75rem;color:white;letter-spacing:2px;text-shadow:0 0 20px rgba(255,255,255,0.5)">THE CLIFFS</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </a>

            {/* Desktop nav links — centered */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cliffs-pink transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right: Book Now + hamburger */}
            <div className="flex items-center justify-end gap-3">
              <motion.a
                href="#booking"
                onClick={(e) => { e.preventDefault(); handleNavClick('#booking'); }}
                className="hidden lg:block px-5 py-2.5 bg-cliffs-pink text-white text-sm font-semibold rounded-full cursor-pointer hover:bg-pink-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Now
              </motion.a>

              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-4xl text-white hover:text-cliffs-pink transition-colors duration-200 cursor-pointer tracking-widest"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              onClick={(e) => { e.preventDefault(); handleNavClick('#booking'); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07 }}
              className="mt-4 px-8 py-3 bg-cliffs-pink text-white font-semibold text-lg rounded-full cursor-pointer"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
