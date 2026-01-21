
import React, { useState } from 'react';
import { RefreshCw, Sparkles, ArrowUpRight } from 'lucide-react';
import { generateDesignInsights } from '../services/geminiService';
import { useContent } from '../contexts/ContentContext';

const Blog: React.FC = () => {
  const { blogPosts, setAllBlogPosts } = useContent();
  const [loading, setLoading] = useState(false);

  const fetchInsights = async () => {
    setLoading(true);
    const newPosts = await generateDesignInsights();
    if (newPosts.length > 0) {
      setAllBlogPosts(newPosts);
    }
    setLoading(false);
  };

  return (
    <section id="blog" className="py-48 bg-paper-card border-t border-border-beige">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div>
            <p className="text-brand-gold text-[10px] mb-3 font-bold tracking-[0.2em] uppercase">Industry Insights</p>
            <h2 className="text-[40px] md:text-[64px] font-serif text-brand-black tracking-tighter leading-[1.1]">
              Design<br/>
              <span className="italic font-light text-brand-black/50">Perspective</span>
            </h2>
          </div>
          <button 
            onClick={fetchInsights}
            disabled={loading}
            className="flex items-center gap-6 px-8 py-4 border border-border-beige bg-white hover:border-brand-gold transition-all disabled:opacity-50 group shadow-sm hover:shadow-md"
          >
            <div className="text-left">
              <p className="text-[11px] text-brand-black mb-1 font-bold tracking-wider">트렌드 분석 갱신</p>
              <p className="text-[9px] text-text-muted tracking-[0.2em] uppercase font-light">Powered by Gemini</p>
            </div>
            {loading ? <RefreshCw size={16} className="animate-spin text-brand-gold" /> : <Sparkles size={16} className="text-brand-gold group-hover:scale-125 transition-transform" />}
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full bg-paper border border-border-beige hover:border-brand-gold/50 transition-colors p-6 md:p-8">
              <div className="mb-8 aspect-[16/10] overflow-hidden bg-brand-gray/10">
                <img 
                  src={post.image || `https://picsum.photos/seed/${post.id}/800/600`} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] ease-out" 
                  alt={post.title} 
                />
              </div>
              <div className="flex items-center text-brand-gold text-[10px] tracking-[0.2em] mb-4 gap-3 font-bold uppercase">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-brand-black/20"></span>
                <span className="text-brand-black/40">{post.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-brand-black group-hover:text-brand-gold transition-colors mb-4 leading-snug tracking-tight break-keep">
                {post.title}
              </h3>
              <p className="text-text-muted text-sm font-light leading-relaxed line-clamp-3 mb-8 break-keep flex-grow">
                {post.summary}
              </p>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.1em] text-brand-black font-bold uppercase border-b border-transparent group-hover:border-brand-black pb-0.5 self-start transition-all">
                Read Article <ArrowUpRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
