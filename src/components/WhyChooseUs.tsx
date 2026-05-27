import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../constants';
import { Star } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen py-24 md:py-32 bg-bg-secondary text-text-main relative overflow-hidden border-b border-border-main flex items-center">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-brand fill-current">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand text-[10px] uppercase tracking-[0.3em] font-semibold mb-6 block">The Difference</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8">
              Why <span className="italic">Choose Us</span>
            </h2>
            <p className="text-text-muted text-sm font-light leading-relaxed mb-10 max-w-lg">
              We don't just take photos; we craft visual legacies. Our team is dedicated to providing a seamless, luxurious experience from the first consultation to the final delivery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {WHY_CHOOSE_US.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <Star size={14} className="text-brand mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[11px] text-text-muted font-light">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Images */}
          <div className="relative h-[600px] hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-10 w-2/3 aspect-[3/4] z-10 overflow-hidden"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Indian_Wedding_Couple_%28Unsplash%29.jpg" 
                alt="Cinematic Videography" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-10 left-0 w-1/2 aspect-square z-20 overflow-hidden border-8 border-bg-secondary"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/70/Fortnite%2Bfun%2Bkids%2Bparty.jpg" 
                alt="Birthday Party Celebration" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
