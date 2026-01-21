
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LoginModal from './components/LoginModal';
import { ContentProvider } from './contexts/ContentContext';

function AppContent() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAdminTrigger = () => {
    if (isAuthenticated) {
      setIsAdminOpen(true);
    } else {
      setIsLoginOpen(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'a') {
        handleAdminTrigger();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated]);

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsLoginOpen(false);
    setIsAdminOpen(true);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30 selection:text-brand-black">
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} onSuccess={onLoginSuccess} />}
      {isAdminOpen && <AdminPanel onClose={() => setIsAdminOpen(false)} />}
      
      <Navbar />
      
      {/* Dark Theme Section: Brand Identity */}
      <div className="dark text-paper">
        <Hero />
        
        {/* Philosophy Section (Bridge to Light) */}
        <section id="about" className="py-32 md:py-64 bg-brand-black relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 md:h-64 bg-gradient-to-b from-brand-gold/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
            <div className="mb-24 md:mb-40 flex flex-col items-center">
               <span className="text-[10px] text-brand-gold mb-5 font-semibold tracking-[0.4em] uppercase">Identity Philosophy</span>
               <div className="w-10 h-px bg-brand-gold/20 mb-5"></div>
               <span className="text-white/20 tracking-[0.6em] text-[8px] uppercase font-light">본질을 대하는 자세</span>
            </div>

            <div className="max-w-5xl mx-auto mb-20 md:mb-32">
              <h2 className="heading-luxury font-serif text-white/95 text-balance break-keep">
                "특별해 보이려 애쓰기보다<br className="md:hidden" />
                <span className="font-light text-brand-gold-light px-4 italic">불편함을 해결하는 명확한 답</span>을<br className="md:hidden" /> 
                제시합니다"
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="sub-heading-luxury text-white/50 font-light break-keep px-6">
                디자인은 화려한 예술이 아니라, 가장 친절한 소통이어야 합니다. <br className="hidden md:block" />
                D.AAL은 수많은 아이디어 중 가장 필요한 것 하나를 선명하게 다듬습니다.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Light Theme Section: Content & Conversion (Paper White) */}
      <main className="bg-paper text-brand-black relative z-20">
        <Services />
        <Portfolio />
        <Blog />
      </main>

      {/* Dark Theme Section: Closure */}
      <div className="dark text-paper bg-brand-black relative z-20">
        <Contact />
        <Footer onAdminOpen={handleAdminTrigger} />
      </div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;
