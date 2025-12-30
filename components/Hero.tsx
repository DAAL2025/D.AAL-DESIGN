import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2564&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale opacity-5 animate-ken-burns" 
          alt="Work Desk" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 w-full text-center">
        <div className="mb-10 md:mb-16">
          <p className="text-gold/70 tracking-[0.25em] text-[10px] md:text-[11px] font-medium mb-3 animate-fade-in-up">
            생각의 결이 담긴 정돈된 디자인
          </p>
          <div className="w-8 h-px bg-gold/20 mx-auto mb-3"></div>
          <p className="text-white/10 tracking-[0.4em] text-[8px] md:text-[9px] uppercase font-light animate-fade-in-up">
            Plain but powerful communication
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 px-4">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.4] md:leading-[1.3] animate-fade-in-up stagger-1">
            멋부리는 기술보다 <span className="text-gold-gradient font-light px-2">잘 읽히는 구조</span>가<br className="hidden md:block" /> 
            먼저라고 생각합니다
          </h1>
        </div>
        
        <div className="max-w-2xl mx-auto mb-20 opacity-0 animate-fade-in-up stagger-2 px-4">
          <p className="text-grayText/50 text-xs md:text-base font-light leading-[1.8] md:leading-[2] tracking-wide">
            D.AAL DESIGN은 화려한 수식어로 본질을 가리지 않습니다.<br className="hidden md:block" />
            당신의 진심이 고객에게 가장 정직하게 닿는 길을 찾습니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center opacity-0 animate-fade-in-up stagger-3">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-12 py-4 bg-transparent border border-white/10 text-white/80 font-light transition-all duration-700 hover:border-gold/40 hover:text-gold"
          >
            <span className="flex flex-col items-center">
              <span className="text-[10px] mb-1 font-sans tracking-widest">대화 시작하기</span>
              <span className="tracking-[0.4em] text-[7px] uppercase opacity-30 group-hover:opacity-100 transition-opacity">Contact Us</span>
            </span>
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group text-muted/50 hover:text-white/80 transition-all duration-500 font-light tracking-widest text-[11px] flex flex-col items-center py-2"
          >
            <span className="mb-1 font-sans tracking-widest group-hover:text-white transition-colors">작업의 기록들</span>
            <span className="tracking-[0.4em] text-[7px] uppercase opacity-20 group-hover:opacity-100 transition-opacity">Archive</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-gold via-gold/50 to-transparent animate-pulse"></div>
      </div>
    </header>
  );
};

export default Hero;