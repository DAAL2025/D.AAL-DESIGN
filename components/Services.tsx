import React from 'react';
import { PenTool, Layout, Monitor, Sparkles, ChevronRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Identity Design',
    krTitle: '본질이 보이는 브랜드',
    description: '유행하는 스타일을 입히기보다 브랜드가 가진 고유의 색을 찾습니다. 시간이 흘러도 촌스럽지 않은 단단한 이미지를 설계합니다.',
    icon: 'pen-tool'
  },
  {
    id: 2,
    title: 'Content Strategy',
    krTitle: '끝까지 읽히는 상세페이지',
    description: '스크롤을 내리는 이유가 분명해야 합니다. 사용자의 궁금증을 앞서 읽고, 신뢰로 이어지는 논리적인 레이아웃을 구성합니다.',
    icon: 'layout'
  },
  {
    id: 3,
    title: 'Visual Support',
    krTitle: '일상의 디자인 파트너',
    description: '큰 프로젝트가 아니어도 괜찮습니다. 브랜드 운영에 필요한 크고 작은 디자인 고민들을 함께 나누고 정성껏 해결해 드립니다.',
    icon: 'monitor'
  }
];

const IconWrapper = ({ name }: { name: string }) => {
  const strokeWidth = 0.5;
  const size = 32;
  switch (name) {
    case 'pen-tool': return <PenTool strokeWidth={strokeWidth} size={size} className="text-gold/60" />;
    case 'layout': return <Layout strokeWidth={strokeWidth} size={size} className="text-gold/60" />;
    case 'monitor': return <Monitor strokeWidth={strokeWidth} size={size} className="text-gold/60" />;
    default: return <Sparkles strokeWidth={strokeWidth} size={size} className="text-gold/60" />;
  }
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-48 md:py-80 bg-dark spotlight-bg border-y border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-36 md:mb-60 text-center">
          <p className="text-[11px] text-gold/80 mb-4 font-semibold tracking-[0.25em]">협업의 범위</p>
          <p className="text-white/10 text-[9px] tracking-[0.7em] font-light uppercase mb-10">Service Focus</p>
          <h2 className="text-[34px] md:text-6xl font-serif text-white/90 tracking-tight">Plain <span className="italic font-light opacity-50">Support</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-14">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-12 md:p-16 border border-white/5 bg-black/20 transition-all duration-1000 hover:border-white/10 flex flex-col"
            >
              <div className="mb-16 opacity-40 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105 origin-left">
                <IconWrapper name={service.icon} />
              </div>
              
              <div className="mb-10">
                <p className="text-[10px] text-gold/50 font-sans mb-3 tracking-[0.2em] uppercase">{service.krTitle}</p>
                <h3 className="text-2xl md:text-[26px] font-light text-white group-hover:text-gold transition-all duration-700 tracking-wide">
                  {service.title}
                </h3>
              </div>
              
              <div className="h-px w-10 bg-white/10 mb-10 group-hover:w-20 transition-all duration-1000"></div>
              
              <p className="text-grayText/30 text-sm md:text-base font-light leading-[2] group-hover:text-grayText/60 transition-all duration-700 flex-grow break-keep">
                {service.description}
              </p>
              
              <button 
                onClick={scrollToContact}
                className="mt-16 flex items-center gap-4 text-[11px] text-muted/40 font-medium tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-10px] group-hover:translate-x-0"
              >
                상담 문의 <ChevronRight size={14} className="opacity-40" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;