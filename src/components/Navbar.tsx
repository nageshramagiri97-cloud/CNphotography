import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-bg-secondary/95 backdrop-blur-md border-border-main py-4' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 border rotate-45 flex items-center justify-center ${scrolled ? 'border-brand' : 'border-white/50'}`}>
              <span className={`-rotate-45 font-serif text-sm font-bold ${scrolled ? 'text-text-main' : 'text-white'}`}>
                {BUSINESS_INFO.name === "[Your Business Name]" ? "E" : BUSINESS_INFO.name.charAt(0)}
              </span>
            </div>
            <a
              href="#home"
              className={`font-serif text-lg tracking-widest uppercase ${
                scrolled ? 'text-text-main' : 'text-white drop-shadow-md'
              }`}
            >
              {BUSINESS_INFO.name === "[Your Business Name]" ? "Eternal Moments" : BUSINESS_INFO.name}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${
                  scrolled
                    ? 'text-text-main/60 hover:text-brand'
                    : 'text-white/80 hover:text-white drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors font-bold ${
                scrolled 
                  ? 'bg-text-main text-bg-primary hover:bg-brand hover:text-bg-primary' 
                  : 'bg-bg-primary text-text-main hover:bg-brand hover:text-bg-primary'
              }`}
            >
              Book Session
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-text-main' : 'text-white drop-shadow-md'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-secondary shadow-xl py-6 flex flex-col items-center space-y-6 md:hidden border-b border-border-main"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-text-main/80 text-[11px] tracking-[0.2em] uppercase font-medium hover:text-brand"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#contact"
              onClick={closeMenu}
              className="px-6 py-2 bg-text-main text-bg-primary text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand hover:text-bg-primary transition-colors"
            >
              Book Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
