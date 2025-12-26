
import React from 'react';
import { PenTool, Layout, Monitor, Sparkles, ChevronRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Brand Identity',
    krTitle: '기억에 남는 브랜드의 얼굴',
    description: '브랜드의 핵심 가치를 가장 직관적인 형태로 시각화합니다. 단순히 보기 좋은 로고를 넘어, 브랜드의 철학이 고객에게 단번에 전달되는 디자인을 연구합니다.',
    icon: 'pen-tool'
  },
  {
    id: 2,
    title: 'Information Design',
    krTitle: '설득력 있는 상세페이지',
    description: '사용자의 시선이 머무는 곳과 흐름을 설계합니다. 넘치는 정보 속에서도 가장 중요한 가치가 돋보이도록 논리적이고 깔끔한 구조를 제안합니다.',
    icon: 'layout'
  },
  {
    id: 3,
    title: 'Visual Maintenance',
    krTitle: '지속 가능한 디자인 지원',
    description: '작은 수정부터 정기적인 콘텐츠 제작까지, 브랜드의 일관성을 유지하기 위한 든든한 파트너가 되어 드립니다. 언제든 편하게 요청하세요.',
    icon: 'monitor'
  }
];

const IconWrapper = ({ name }: { name: string }) => {
  const strokeWidth = 0.5;
  const size = 26;
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
    <section id="services" className="py-40 md:py-60 bg-dark spotlight-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-32 md:mb-48 text-center">
          <p className="text-[10px] text-gold/60 mb-2 font-medium tracking-[0.1em]">함께하는 과정</p>
          <p className="text-white/10 text-[9px] tracking-[0.5em] font-light uppercase mb-8">Service Values</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white/90 tracking-tight">Design <span className="italic font-light">Expertise</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-12 border border-white/5 bg-black/10 transition-all duration-1000 hover:border-white/10 flex flex-col"
            >
              <div className="mb-12 opacity-30 group-hover:opacity-100 transition-opacity">
                <IconWrapper name={service.icon} />
              </div>
              
              <div className="mb-8">
                <p className="text-[10px] text-gold/50 font-sans mb-2 tracking-wider">{service.krTitle}</p>
                <h3 className="text-xl font-light text-white group-hover:text-gold-gradient transition-all tracking-wide">
                  {service.title}
                </h3>
              </div>
              <p className="text-grayText/50 text-sm font-light leading-relaxed group-hover:text-grayText/80 transition-all flex-grow">
                {service.description}
              </p>
              
              <button 
                onClick={scrollToContact}
                className="mt-14 flex items-center gap-2 text-[9px] text-muted/50 font-medium tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0"
              >
                자세히 문의하기 <ChevronRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
