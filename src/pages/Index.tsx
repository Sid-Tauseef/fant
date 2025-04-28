import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToVisible from '@/components/ScrollToVisible';

const Index = () => {
  useEffect(() => {
    document.title = "Sidify Solutions - Web & Mobile App Development";
    
    const updateScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      
      elements.forEach((el) => {
        const elementPosition = el.getBoundingClientRect();
        const elementTop = elementPosition.top;
        const elementHeight = elementPosition.height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - elementHeight / 3) {
          el.classList.add('visible');
        }
      });
    };
    
    updateScroll();
    window.addEventListener('scroll', updateScroll);
    
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950">
      <div className="fixed blur-pattern top-[20%] left-[10%] opacity-70 -z-10"></div>
      <div className="fixed blur-pattern bottom-[10%] right-[5%] opacity-50 -z-10"></div>
      <div className="fixed blur-pattern bottom-[40%] left-[30%] opacity-20 -z-10"></div>
      
      <div className="fixed top-20 right-10 w-64 h-64 rounded-full border border-sidify-accent/20 animate-pulse -z-10"></div>
      <div className="fixed bottom-20 left-10 w-40 h-40 rounded-full border border-sidify-accent/30 -z-10"></div>
      <div className="fixed top-1/3 left-1/4 w-20 h-20 rounded-full bg-sidify-accent/10 -z-10"></div>
      
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <ScrollToVisible>
          <Services />
        </ScrollToVisible>
        
        <ScrollToVisible>
          <Portfolio />
        </ScrollToVisible>
        
        <ScrollToVisible>
          <Testimonials />
        </ScrollToVisible>
        
        <ScrollToVisible>
          <About />
        </ScrollToVisible>
        
        <ScrollToVisible>
          <Contact />
        </ScrollToVisible>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;