import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <Quote size={32} className="text-brand/30 mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-light text-text-main mb-6">
            Words of <span className="italic">Love</span>
          </h2>
          <div className="h-[1px] bg-brand w-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center flex flex-col items-center p-8 border border-border-main bg-transparent hover:border-brand transition-colors"
            >
              <div className="flex text-brand mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted font-serif italic text-lg leading-relaxed mb-8 flex-grow">
                "{testimonial.review}"
              </p>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-main border-t border-border-main pt-6 w-full">
                {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
