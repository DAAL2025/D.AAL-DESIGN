
import React from 'react';
import { Instagram, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onAdminOpen: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminOpen }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-4">
            <h4 className="text-2xl font-serif text-brand-gold font-bold tracking-widest mb-8 flex items-center gap-1">
              D.AAL
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light mt-2"></span>
            </h4>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs break-keep">
              보이지 않는 가치를 유형의 미학으로 설계합니다. 
              성장을 위한 가장 든든한 파트너가 되어 드립니다.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h5 className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em]">Sitemap</h5>
              <ul className="text-white/60 text-sm space-y-4 font-light">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-brand-gold transition-colors">Philosophy</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-gold transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-brand-gold transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-brand-gold transition-colors">Insights</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em]">Contact</h5>
              <div className="flex flex-col space-y-4 text-white/60 text-sm font-light">
                <a href="#" className="flex items-center gap-3 hover:text-brand-gold transition-colors"><Instagram size={14} /> Instagram</a>
                <button onClick={() => scrollToSection('contact')} className="flex items-center gap-3 hover:text-brand-gold transition-colors text-left"><Mail size={14} /> biz@daaldesign.com</button>
              </div>
            </div>
            <div className="space-y-8 col-span-2 md:col-span-1 flex flex-col items-end md:items-start">
               <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:border-brand-gold hover:bg-brand-gold transition-all"
              >
                <ArrowUp size={18} className="text-white/40 group-hover:text-brand-black transition-colors" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-white/20 text-[9px] tracking-[0.4em] font-light uppercase">
            <span>&copy; 2025 D.AAL DESIGN.</span>
            <button 
              onClick={onAdminOpen}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors group"
            >
              <ShieldCheck size={10} className="opacity-50 group-hover:opacity-100" /> Admin
            </button>
          </div>
          <div className="flex space-x-8 text-[9px] tracking-[0.2em] text-white/20 uppercase font-light">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
