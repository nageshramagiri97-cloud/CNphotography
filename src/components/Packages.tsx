import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { Check } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-bg-primary border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 block">Investment</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text-main mb-6">
            Curated <span className="italic">Packages</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto font-light text-sm">
            We offer tailored collections to suit your unique celebration. Every package is crafted with the same dedication to storytelling and artistic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 lg:p-12 border ${
                pkg.isPopular 
                  ? 'border-2 border-brand bg-bg-alt shadow-none transform md:-translate-y-4' 
                  : 'border border-border-main bg-transparent hover:border-brand transition-colors'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1">
                  Most Chosen
                </div>
              )}
              
              <h3 className="font-serif text-2xl mb-2 text-text-main">{pkg.name}</h3>
              <p className="text-text-muted text-sm mb-8">{pkg.price}</p>
              
              <div className="h-[1px] w-full bg-border-main mb-8"></div>
              
              <ul className="space-y-4 mb-10 h-auto md:h-64 flex flex-col justify-start">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-[11px] text-text-muted font-light">
                    <Check size={14} className="text-brand mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block w-full text-center py-4 text-[10px] uppercase tracking-[0.2em] transition-colors font-bold ${
                  pkg.isPopular
                    ? 'bg-text-main text-bg-primary hover:bg-brand hover:text-white'
                    : 'border border-text-main text-text-main hover:bg-text-main hover:text-bg-primary'
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
