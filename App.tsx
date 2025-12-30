
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import Blog from './components/Blog.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AdminPanel from './components/AdminPanel.tsx';
import LoginModal from './components/LoginModal.tsx';
import { ContentProvider } from './contexts/ContentContext.tsx';

// Separate content component to use context if needed
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
      // Secret key combination to open admin panel: Alt + Shift + A
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
    <div className="min-h-screen bg-black font-sans selection:bg-gold/30 selection:text-gold">
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} onSuccess={onLoginSuccess} />}
      {isAdminOpen && <AdminPanel onClose={() => setIsAdminOpen(false)} />}
      
      <Navbar />
      <Hero />
      <main>
        {/* About Section */}
        <section id="about" className="py-24 md:py-48 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 md:h-48 bg-gradient-to-b from-gold/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
            <div className="mb-16 md:mb-24 flex flex-col items-center">
               <span className="text-[10px] text-gold/80 mb-3 font-semibold tracking-[0.3em] uppercase">Identity Philosophy</span>
               <div className="w-8 h-px bg-gold/30 mb-3"></div>
               <span className="text-white/20 tracking-[0.5em] text-[9px] uppercase font-light">우리의 태도</span>
            </div>

            <div className="max-w-4xl mx-auto mb-16 md:mb-24 px-4">
              <h2 className="text-[22px] md:text-[38px] lg:text-[48px] font-serif text-white leading-[1.4] tracking-tighter text-balance break-keep">
                "특별해 보이려 애쓰기보다<br className="md:hidden" />
                <span className="font-light text-gold-gradient px-2 italic">불편함을 해결하는 명확한 답</span>을<br className="md:hidden" /> 
                내놓는 것에 더 큰 가치를 둡니다"
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-grayText/40 text-[14px] md:text-[17px] font-light leading-[2.2] tracking-normal break-keep px-4">
                디자인은 화려한 예술이 아니라, 가장 친절한 소통이어야 합니다. 
                우리는 수많은 아이디어를 늘어놓는 대신, 
                가장 필요한 것 하나를 선명하게 다듬는 과정을 즐깁니다.
              </p>
              
              <div className="pt-16 md:pt-24 flex flex-col items-center">
                <div className="w-12 h-px bg-white/10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer onAdminOpen={handleAdminTrigger} />
    </div>
  );
}

// Wrap AppContent with ContentProvider and export as default to fix index.tsx import error
const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;
