import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: 'Universities', href: '/universities' },
    { name: 'Countries', href: '/countries' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Resources', href: '/resources' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Team', href: '/team' },
    { name: 'About Us', href: '/#about' },
  ];

  const isActive = (href: string) => {
    if (href === '/countries' && currentPath.startsWith('/countries')) return true;
    if (href === '/universities' && currentPath.startsWith('/universities')) return true;
    if (href === '/scholarships' && currentPath.startsWith('/scholarships')) return true;
    if (href === '/success-stories' && currentPath.startsWith('/success-stories')) return true;
    if (href === '/resources' && currentPath.startsWith('/resources')) return true;
    if (href === '/team' && currentPath.startsWith('/team')) return true;
    if (href === '/' && currentPath === '/') return true;
    return false;
  };

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
            {navLinks.map((link, idx) => {
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
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <Logo />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full text-text hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Close mobile navigation menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => {
                    const active = isActive(link.href);
                    return (
                      <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-semibold transition-all duration-300 ${
                          active ? 'text-primary' : 'text-text hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect via WhatsApp</span>
                </a>
                <a
                  href="/book-consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
