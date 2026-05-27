import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <span className="text-brand text-[10px] uppercase tracking-[0.3em] font-semibold mb-6 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-text-main">
              Let's Create <span className="italic">Magic</span>
            </h2>
            <p className="text-text-muted font-light mb-12 text-sm">
              We would love to hear about your upcoming event. Fill out the form, and we will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-text-main">Email Us</h4>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-text-muted hover:text-brand text-sm transition-colors">{BUSINESS_INFO.email}</a>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-text-main">Call Us</h4>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-text-muted hover:text-brand text-sm transition-colors">{BUSINESS_INFO.phone}</a>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-text-main">Location</h4>
                <p className="text-text-muted text-sm">{BUSINESS_INFO.location}</p>
              </div>
            </div>
            
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-brand text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-text-main hover:text-bg-primary transition-colors self-start"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 bg-bg-primary p-8 md:p-12 border border-border-main"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Name</label>
                  <input type="text" id="name" className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Phone Number</label>
                  <input type="tel" id="phone" className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm" placeholder="+1 (234) 567-890" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Email Address</label>
                <input type="email" id="email" className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm" placeholder="jane@example.com" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Event Type</label>
                  <select id="eventType" className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-text-main text-sm">
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding Shoot</option>
                    <option value="birthday">Birthday</option>
                    <option value="other">Other Event</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Event Date</label>
                  <input type="date" id="date" className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-text-main text-sm" />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Event Location</label>
                <input type="text" id="location" className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent text-sm" placeholder="City or Venue Name" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold">Tell Us About Your Vision</label>
                <textarea id="message" rows={4} className="w-full border-b border-border-main py-2 focus:outline-none focus:border-brand transition-colors bg-transparent resize-none text-sm" placeholder="We would love to know more..."></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 bg-text-main text-bg-primary uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand hover:text-white transition-colors mt-8">
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
