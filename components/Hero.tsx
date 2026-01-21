
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center bg-brand-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2564&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale opacity-[0.08] animate-ken-burns" 
          alt="Work Desk" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 w-full text-center">
        <div className="mb-14 md:mb-20">
          <p className="text-brand-gold tracking-[0.4em] text-[10px] md:text-[11px] font-medium mb-4 animate-fade-in-up">
            THOUGHTFUL DESIGN STRATEGY
          </p>
          <div className="w-10 h-px bg-brand-gold/40 mx-auto mb-4"></div>
          <p className="text-white/30 tracking-[0.5em] text-[8px] md:text-[9px] uppercase font-light animate-fade-in-up">
            Plain but powerful communication
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-14 md:mb-20 px-4">
          <h1 className="heading-luxury font-serif font-normal text-paper animate-fade-in-up stagger-1 break-keep text-balance">
            멋부리는 기술보다 <br className="md:hidden" />
            <span className="text-brand-gold-light font-light px-2 italic">잘 읽히는 구조</span>가<br className="md:hidden" /> 
            먼저입니다
          </h1>
        </div>
        
        <div className="max-w-2xl mx-auto mb-16 md:mb-24 opacity-0 animate-fade-in-up stagger-2 px-6">
          <p className="text-white/60 text-[15px] md:text-[18px] font-light leading-[1.8] md:leading-[2] tracking-tight break-keep">
            D.AAL은 화려한 수식어로 본질을 가리지 않습니다.<br className="hidden md:block" />
            브랜드의 진심이 고객에게 정직하게 닿는 길을 디자인합니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-14 justify-center items-center opacity-0 animate-fade-in-up stagger-3">
          {/* Main CTA: Gold Button + Black Text */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-12 py-4 bg-brand-gold text-brand-black font-medium transition-all duration-300 hover:bg-[#B8923F] active:bg-[#A57D33]"
          >
            <span className="flex flex-col items-center">
              <span className="text-[11px] mb-1 font-sans tracking-[0.2em]">무료 상담 시작하기</span>
              <span className="tracking-[0.3em] text-[8px] uppercase opacity-60 font-sans">Start Project</span>
            </span>
          </button>
          
          {/* Secondary CTA: Transparent + White Text (subtle) */}
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group text-white/50 hover:text-white transition-all duration-500 font-light tracking-widest text-[10px] flex flex-col items-center py-2"
          >
            <span className="mb-1 font-sans tracking-[0.2em] group-hover:text-brand-gold-light transition-colors">작업의 기록들</span>
            <span className="tracking-[0.4em] text-[7px] uppercase opacity-30 group-hover:opacity-100 transition-opacity font-sans">View Archive</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 hidden md:block">
        <div className="w-px h-24 bg-gradient-to-b from-brand-gold via-brand-gold/30 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;
