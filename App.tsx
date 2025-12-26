
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
    <div className="min-h-screen bg-black font-sans selection:bg-gold/30 selection:text-gold selection:opacity-100">
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} onSuccess={onLoginSuccess} />}
      {isAdminOpen && <AdminPanel onClose={() => setIsAdminOpen(false)} />}
      
      <Navbar />
      <Hero />
      <main>
        {/* About Section: Modern Clarity Approach */}
        <section id="about" className="py-32 md:py-60 bg-black relative overflow-hidden spotlight-bg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/10 to-transparent"></div>
          
          <div className="max-w-5xl mx-auto px-8 text-center flex flex-col items-center">
            <div className="mb-16 md:mb-24 flex flex-col items-center">
               <span className="text-[10px] text-gold/60 mb-2 font-medium tracking-[0.1em]">디자인에 담는 가치</span>
               <span className="text-white/10 tracking-[0.5em] text-[9px] uppercase font-light">The Depth of Understanding</span>
            </div>

            <div className="max-w-4xl">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-serif text-white/90 mb-16 md:mb-24 leading-[1.8] md:leading-[2] tracking-tight">
                "단순히 예쁜 것을 만드는 것보다<br className="md:hidden" />
                <span className="font-light text-gold-gradient px-1">복잡함을 덜어내고 본질을 남기는 것</span>이<br className="md:hidden" /> 저희가 가장 잘하는 일입니다."
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-grayText text-sm md:text-base font-light leading-[2] tracking-wide opacity-40">
                좋은 디자인은 사용자에게 말을 거는 대신, 편안하게 스며듭니다.<br className="hidden md:block" /> 
                우리는 화려한 수식어를 걷어낸 자리에 브랜드의 진심이<br className="hidden md:block" /> 
                명확히 보일 수 있도록 끈질기게 고민하고 다듬습니다.
              </p>
              
              <div className="pt-12">
                 <div className="inline-flex flex-col items-center opacity-20">
                    <div className="w-12 h-px bg-gold/50 mb-4"></div>
                    <span className="text-[8px] tracking-[0.4em] uppercase text-white font-light">Minimalism with Maximum impact</span>
                 </div>
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

function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}

export default App;
