
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

      <div className="relative z-10 flex flex-col items-center px-8 w-full text-center">
        <div className="mb-14">
          <p className="text-gold/60 tracking-[0.2em] text-[10px] font-medium mb-3 animate-fade-in-up">
            의미 있는 결과물을 위한 정제된 생각
          </p>
          <p className="text-white/10 tracking-[0.4em] text-[8px] md:text-[9px] uppercase font-light animate-fade-in-up">
            Focus on the core essence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-14 px-2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.6] animate-fade-in-up stagger-1">
            보여지는 것보다, <span className="text-gold-gradient font-light px-1">전해지는 것</span>에<br className="hidden md:block" /> 깊이 몰입하는 디자인 스튜디오
          </h1>
        </div>
        
        <div className="max-w-lg mx-auto mb-20 opacity-0 animate-fade-in-up stagger-2 px-4">
          <p className="text-grayText text-xs md:text-base font-light leading-[1.8] tracking-wider opacity-40">
            D.AAL DESIGN은 과장된 포장보다는<br className="hidden md:block" />
            당신의 비즈니스가 가져야 할 가장 솔직한 형태를 설계합니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center opacity-0 animate-fade-in-up stagger-3">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-4 bg-transparent border border-white/10 text-white/80 font-light transition-all duration-700 hover:border-gold/40 hover:text-gold"
          >
            <span className="flex flex-col items-center">
              <span className="text-[10px] mb-1 font-sans tracking-widest">상담 신청하기</span>
              <span className="tracking-[0.4em] text-[7px] uppercase opacity-30 group-hover:opacity-100 transition-opacity">Inquiry</span>
            </span>
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group text-muted/50 hover:text-white/80 transition-all duration-500 font-light tracking-widest text-[10px] flex flex-col items-center"
          >
            <span className="mb-1 font-sans tracking-widest group-hover:text-white transition-colors">포트폴리오 보기</span>
            <span className="tracking-[0.4em] text-[7px] uppercase opacity-20 group-hover:opacity-100 transition-opacity">Portfolio</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-10">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;
