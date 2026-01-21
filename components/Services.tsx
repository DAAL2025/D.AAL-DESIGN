
import React from 'react';
import { PenTool, Layout, Monitor, Sparkles, ChevronRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Identity Design',
    krTitle: '본질이 보이는 브랜드',
    description: '유행하는 스타일을 쫓기보다 브랜드 고유의 색을 찾습니다. 블랙 앤 골드의 절제된 미학으로 신뢰감을 설계합니다.',
    icon: 'pen-tool'
  },
  {
    id: 2,
    title: 'Landing Page',
    krTitle: '설득하는 상세페이지',
    description: '스크롤을 내리는 이유가 분명해야 합니다. 가독성 높은 레이아웃과 구매 심리를 자극하는 논리적인 구조를 제안합니다.',
    icon: 'layout'
  },
  {
    id: 3,
    title: 'Visual Strategy',
    krTitle: '비즈니스 디자인 파트너',
    description: '단순한 예쁨을 넘어 비즈니스 목표를 달성하는 디자인을 합니다. 지속 가능한 브랜드 운영을 위한 가이드를 제공합니다.',
    icon: 'monitor'
  }
];

const IconWrapper = ({ name }: { name: string }) => {
  const strokeWidth = 1;
  const size = 32;
  // Icons use Brand Gold for emphasis on light background
  const className = "text-brand-gold";
  
  switch (name) {
    case 'pen-tool': return <PenTool strokeWidth={strokeWidth} size={size} className={className} />;
    case 'layout': return <Layout strokeWidth={strokeWidth} size={size} className={className} />;
    case 'monitor': return <Monitor strokeWidth={strokeWidth} size={size} className={className} />;
    default: return <Sparkles strokeWidth={strokeWidth} size={size} className={className} />;
  }
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-48 md:py-60 bg-paper border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-24 md:mb-40 text-center">
          <p className="text-[11px] text-brand-black/60 mb-4 font-bold tracking-[0.25em] uppercase">Service Focus</p>
          <div className="w-8 h-px bg-brand-gold/50 mb-8"></div>
          <h2 className="text-[34px] md:text-5xl font-serif text-brand-black tracking-tight leading-tight">
            Clear Structure,<br/>
            <span className="italic font-light text-brand-gold text-4xl md:text-6xl">Powerful Impact.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 md:p-14 bg-paper-card border border-border-beige transition-all duration-500 hover:shadow-xl hover:shadow-brand-black/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-12 opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 origin-left">
                <IconWrapper name={service.icon} />
              </div>
              
              <div className="mb-8">
                <p className="text-[10px] text-brand-gold font-bold mb-3 tracking-[0.2em] uppercase">{service.krTitle}</p>
                <h3 className="text-2xl font-serif text-brand-black group-hover:text-brand-gold transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>
              </div>
              
              <div className="h-px w-full bg-border-beige mb-8 group-hover:bg-brand-gold/30 transition-colors"></div>
              
              <p className="text-text-muted text-sm md:text-[15px] font-light leading-[1.8] flex-grow break-keep">
                {service.description}
              </p>
              
              <button 
                onClick={scrollToContact}
                className="mt-12 flex items-center gap-3 text-[11px] text-brand-black font-bold tracking-[0.2em] uppercase group-hover:text-brand-gold transition-colors"
              >
                상담 문의 <ChevronRight size={14} className="opacity-50 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
