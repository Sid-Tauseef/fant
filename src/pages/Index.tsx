
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
  // Update document title
  useEffect(() => {
    document.title = "Sidify Solutions - Web & Mobile App Development";
    
    // Initialize scroll animation
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
    
    // Run once on mount
    updateScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', updateScroll);
    
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
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
      
      <Footer />
    </div>
  );
};

export default Index;
