import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-secondary text-text-main border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="aspect-[4/5] relative z-10 overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Indian_wedding_couple.jpg" 
                alt="Photographer behind the scenes" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Decorative Outline/Offset */}
            <div className="absolute -inset-4 border border-border-main z-0 translate-x-4 translate-y-4"></div>
            
            {/* Small floating image */}
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square z-20 border-8 border-bg-secondary hidden md:block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Local_Indian_bride_and_groom.jpg" 
                alt="Couple intimate moment"
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-brand text-[10px] uppercase tracking-[0.3em] font-semibold mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
              Timeless Memories, <br className="hidden md:block"/> 
              <span className="italic font-light">Real Emotions.</span>
            </h2>
            
            <div className="space-y-6 text-text-muted font-light leading-relaxed text-sm">
              <p>
                Welcome to our luxury studio. We believe that photography is more than just taking pictures; it's about capturing the authentic essence of a moment, the fleeting glances, and the genuine joy that makes your story unique.
              </p>
              <p>
                Specializing in weddings, pre-wedding shoots, and milestone birthdays, our approach blends editorial elegance with raw photojournalism. We create cinematic videos and timeless photographs that transport you back to the magic of your special day.
              </p>
              <p>
                Every smile, every tear, every subtle detail is preserved with utmost care, ensuring that your memories remain as vivid tomorrow as they are today.
              </p>
            </div>
            
            <div className="mt-12 flex items-center">
              <div>
                <p className="font-serif text-xl italic">Neeraj</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand mt-1">Founder & Director</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
