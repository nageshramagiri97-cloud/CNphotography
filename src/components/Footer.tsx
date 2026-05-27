import { BUSINESS_INFO } from '../constants';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-text-main pt-20 pb-10 border-t border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <a href="#home" className="font-serif text-2xl tracking-wide block mb-6 italic">
              {BUSINESS_INFO.name === "[Your Business Name]" ? "Eternal Moments" : BUSINESS_INFO.name}
            </a>
            <p className="text-text-muted font-light text-sm leading-relaxed mb-6">
              Capturing life's most beautiful moments with timeless elegance and cinematic storytelling.
            </p>
            <div className="flex space-x-4">
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand transition-colors">
                <Instagram size={20} className="stroke-1" />
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-text-muted hover:text-brand transition-colors">
                <Mail size={20} className="stroke-1" />
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-text-muted hover:text-brand transition-colors">
                <Phone size={20} className="stroke-1" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-brand">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-text-muted">
              <li><a href="#home" className="hover:text-text-main transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-text-main transition-colors">Our Story</a></li>
              <li><a href="#portfolio" className="hover:text-text-main transition-colors">Portfolio</a></li>
              <li><a href="#packages" className="hover:text-text-main transition-colors">Investment</a></li>
              <li><a href="#contact" className="hover:text-text-main transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-brand">Services</h4>
            <ul className="space-y-4 text-sm font-light text-text-muted">
              <li>Wedding Photography</li>
              <li>Cinematic Videography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Birthday Celebrations</li>
              <li>Couple Portraits</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-brand">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-text-muted">
              <li>{BUSINESS_INFO.location}</li>
              <li>{BUSINESS_INFO.phone}</li>
              <li>{BUSINESS_INFO.email}</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase text-text-muted font-bold">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name === "[Your Business Name]" ? "Eternal Moments" : BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed elegantly.</p>
        </div>
      </div>
    </footer>
  );
}
