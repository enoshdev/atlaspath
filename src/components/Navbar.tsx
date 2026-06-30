import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare, Calendar, ClipboardCheck, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.classList.add('mobile-menu-open');
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Universities', href: '/universities' },
    { name: 'Countries', href: '/countries' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Resources', href: '/resources' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Team', href: '/team' },
    { name: 'About Us', href: '/#about' },
  ];

  // Desktop-only nav (no Home)
  const desktopNavLinks = navLinks.filter(l => l.name !== 'Home');

  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && href !== '/#about' && currentPath.startsWith(href)) return true;
    return false;
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-[1280px] w-full h-full mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <a href="/" aria-label="AtlasPath Homepage" className="focus-visible:ring-2 focus-visible:ring-primary rounded-lg shrink-0">
              <Logo />
            </a>
          </div>

          {/* Center: Desktop Nav links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 h-full relative">
            {desktopNavLinks.map((link, idx) => {
              const active = isActive(link.href);
              const isHovered = hoveredIdx === idx;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative h-full flex items-center px-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    active ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {/* Subtle Background Pill on Hover */}
                  {isHovered && (
                    <motion.span
                      layoutId="hoverNavPill"
                      className="absolute inset-y-4 inset-x-0.5 rounded-lg bg-slate-100/60 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>

                  {active && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-3 h-full">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500 shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="/book-consultation"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-secondary/20 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full text-text hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── FULL-SCREEN MOBILE MENU ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
              <a href="/" onClick={closeMobileMenu} aria-label="AtlasPath Homepage">
                <Logo />
              </a>
              <button
                onClick={closeMobileMenu}
                className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close mobile navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, type: 'spring', stiffness: 260, damping: 26 }}
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-200 ${
                      active
                        ? 'text-primary bg-primary/6 border border-primary/10'
                        : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <ArrowRight className="w-4 h-4 text-primary" />}
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom CTA area */}
            <div className="shrink-0 px-5 pb-8 pt-4 border-t border-slate-100 flex flex-col gap-3"
              style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 2rem))' }}
            >
              {/* Primary CTA */}
              <a
                href="/assessment"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-sm font-bold text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <ClipboardCheck className="w-4 h-4" />
                <span>Start Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/book-consultation"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-1.5 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consultation</span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-1.5 py-3.5 rounded-2xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
