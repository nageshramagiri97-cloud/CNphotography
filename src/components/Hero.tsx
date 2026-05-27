import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Cinematic Wedding"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-bg-primary/80 transition-opacity duration-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-6 font-medium"
        >
          Premium Photography & Videography
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-text-main leading-[1.1] font-light mb-8 italic text-balance"
        >
          <span className="not-italic">Capturing Your</span> <br className="hidden md:block"/>
          Most Beautiful <span className="not-italic">Moments</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-text-muted text-sm md:text-base font-light mb-12 max-w-lg text-balance"
        >
          Wedding, Birthday, Pre-Wedding & Post-Wedding <br className="hidden md:block"/> Cinematic Storytelling
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-text-main text-bg-primary uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand transition-colors rounded-none"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 bg-transparent border border-text-main text-text-main uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-text-main hover:text-bg-primary transition-colors rounded-none"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[9px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-border-main relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-brand absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
