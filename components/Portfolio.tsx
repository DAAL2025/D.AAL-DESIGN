
import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { projects } = useContent();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const isAllShown = !showAll && projects.length > 4;

  return (
    <section id="portfolio" className="py-40 md:py-60 bg-paper border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 md:mb-32 flex flex-col items-center md:items-start">
          <p className="text-brand-black/50 text-[10px] mb-3 font-bold tracking-[0.2em] uppercase">Selected Works</p>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-black tracking-tight text-center md:text-left">
            Design <span className="italic font-light text-brand-gold">Archive</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group flex flex-col cursor-pointer ${index % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              {/* Image Frame: Using Paper Card color + Border */}
              <div className="relative overflow-hidden bg-paper-card mb-8 aspect-[4/5] border border-border-beige group-hover:border-brand-gold/50 transition-colors duration-500">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-[1.2s] ease-out" 
                  alt={project.title} 
                />
                
                {/* Number Badge */}
                <div className="absolute top-0 left-0 bg-brand-black text-brand-gold px-4 py-3 text-[10px] font-bold tracking-widest z-10">
                   {index < 9 ? `0${index + 1}` : index + 1}
                </div>
              </div>
              
              <div className="flex flex-col items-start px-2">
                <p className="text-brand-gold text-[10px] tracking-[0.2em] font-bold mb-2 uppercase">
                  {project.category}
                </p>
                <h3 className="text-2xl font-serif text-brand-black tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="w-0 group-hover:w-12 h-px bg-brand-black mt-4 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {isAllShown && (
          <div className="mt-40 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="px-10 py-4 border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-gold transition-all duration-300 flex items-center gap-3 text-[11px] tracking-widest uppercase font-medium"
            >
              View More Projects <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
