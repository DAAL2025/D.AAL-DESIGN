
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px 이상 스크롤되면 네비게이션 스타일 변경
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'ABOUT', kr: '철학', id: 'about' },
    { name: 'SERVICES', kr: '서비스', id: 'services' },
    { name: 'PORTFOLIO', kr: '작업', id: 'portfolio' },
    { name: 'INSIGHTS', kr: '칼럼', id: 'blog' },
    { name: 'CONTACT', kr: '문의', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo: Always Gold accent, white text on dark header */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-serif font-bold tracking-widest text-brand-gold cursor-pointer flex items-center gap-1"
        >
          D.AAL
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light mt-2"></span>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-[11px] font-light tracking-widest">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.id)}
              className="group flex flex-col items-center hover:text-brand-gold transition-colors text-white/80 cursor-pointer"
            >
              <span className="text-[9px] opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-sans text-brand-gold-light">{link.kr}</span>
              <span className="tracking-[0.2em]">{link.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-2 hover:text-brand-gold transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="py-8 px-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-light tracking-widest text-center text-white/80 hover:text-brand-gold transition-colors flex flex-col items-center"
            >
              <span className="text-[10px] text-brand-gold/60 mb-1">{link.kr}</span>
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
