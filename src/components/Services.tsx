import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-24 md:py-32 bg-bg-primary text-text-main border-b border-border-main flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6"
          >
            Our <span className="italic">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, w: 0 }}
            whileInView={{ opacity: 1, w: "40px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] bg-brand mx-auto w-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Text Content */}
              <div className="flex-grow flex flex-col pt-4">
                <h3 className="font-serif text-xl mb-3 group-hover:text-brand transition-colors text-text-main group-hover:italic">{service.title}</h3>
                <p className="text-text-muted font-light text-xs leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="h-[1px] w-full bg-border-main group-hover:bg-brand transition-colors mt-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
