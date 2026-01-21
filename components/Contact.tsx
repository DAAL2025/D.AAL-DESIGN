
import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulate API call or real fetch
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      alert('문의 전송에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-40 bg-brand-black flex items-center justify-center border-t border-white/5">
        <div className="text-center animate-fade-in-up px-6">
          <CheckCircle className="w-12 h-12 text-brand-gold mx-auto mb-8 stroke-[1]" />
          <h2 className="text-3xl font-serif text-white mb-4 tracking-tight">문의가 접수되었습니다</h2>
          <p className="text-white/60 text-sm font-light tracking-wide">내용 확인 후 24시간 이내에 회신 드리겠습니다.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-12 text-brand-gold text-[11px] tracking-widest border-b border-brand-gold/30 pb-1 hover:text-white hover:border-white transition-all uppercase"
          >
            새로운 문의하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-40 md:py-60 bg-brand-black relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <p className="text-brand-gold text-[10px] mb-3 font-bold tracking-[0.2em] uppercase">Inquiry</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">
            Start Your <span className="italic font-light text-brand-gold-light">Project</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
            프로젝트의 규모와 관계없이 성심껏 답변 드립니다.<br />
            현재 고민하고 계신 부분을 편하게 남겨주세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="relative group">
              <input 
                name="name"
                type="text" 
                required
                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-brand-gold focus:outline-none transition-colors text-white font-light text-lg placeholder:text-white/20" 
                placeholder="Name / Company" 
              />
            </div>
            <div className="relative group">
              <input 
                name="email"
                type="email" 
                required
                className="w-full bg-transparent border-b border-white/10 py-4 focus:border-brand-gold focus:outline-none transition-colors text-white font-light text-lg placeholder:text-white/20" 
                placeholder="Email Address" 
              />
            </div>
          </div>

          <div className="relative group">
            <textarea 
              name="message"
              rows={3} 
              required
              className="w-full bg-transparent border-b border-white/10 py-4 focus:border-brand-gold focus:outline-none transition-colors text-white font-light text-lg placeholder:text-white/20 resize-none" 
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="text-center pt-8">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group relative px-20 py-5 bg-brand-gold text-brand-black font-bold tracking-widest hover:bg-[#B8923F] transition-all duration-300 uppercase disabled:opacity-50"
            >
              <span className="flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
