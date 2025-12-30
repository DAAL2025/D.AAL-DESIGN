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
    <section id="blog" className="py-48 bg-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-36 gap-12">
          <div>
            <p className="text-gold text-[10px] mb-3 font-semibold tracking-[0.2em]">디자인 사유</p>
            <p className="text-white/20 text-[9px] tracking-[0.7em] font-light uppercase mb-8">Thoughts</p>
            <h2 className="text-[44px] md:text-[80px] font-serif text-white tracking-tighter leading-[1.1]">
              Design<br/>
              <span className="italic font-light text-gold-gradient">Insights</span>
            </h2>
          </div>
          <button 
            onClick={fetchInsights}
            disabled={loading}
            className="flex items-center gap-8 px-10 py-6 bg-white/[0.03] border border-white/10 hover:border-gold/50 transition-all disabled:opacity-50 group"
          >
            <div className="text-left">
              <p className="text-[11px] text-white/80 mb-1 font-sans tracking-wider">인사이트 갱신</p>
              <p className="text-[8px] text-white/20 tracking-[0.4em] uppercase font-light group-hover:text-gold transition-colors">Refresh Wisdom</p>
            </div>
            {loading ? <RefreshCw size={16} className="animate-spin text-gold" /> : <Sparkles size={16} className="text-gold group-hover:scale-125 transition-transform" />}
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="reveal-container mb-12 aspect-[4/3] bg-black overflow-hidden border border-white/5">
                <img 
                  src={post.image || `https://picsum.photos/seed/${post.id}/800/600`} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
                  alt={post.title} 
                />
              </div>
              <div className="flex items-center text-gold text-[10px] tracking-[0.4em] mb-6 gap-5 font-light uppercase">
                <span>{post.date}</span>
                <div className="w-6 h-px bg-gold/20"></div>
                <span>{post.category}</span>
              </div>
              <h3 className="text-2xl md:text-[26px] font-serif text-white group-hover:text-gold-gradient transition-all mb-6 leading-[1.4] tracking-tight break-keep">
                {post.title}
              </h3>
              <p className="text-grayText/40 text-[15px] font-light leading-relaxed line-clamp-2 mb-10 group-hover:text-grayText/70 transition-colors break-keep">
                {post.summary}
              </p>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-white/20 uppercase group-hover:text-gold transition-all translate-x-0 group-hover:translate-x-2">
                이야기 읽기 <ArrowUpRight size={14} className="opacity-50" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;