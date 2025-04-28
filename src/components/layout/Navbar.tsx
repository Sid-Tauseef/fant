
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-sidify-primary font-bold text-xl md:text-2xl">
            Sidify<span className="text-sidify-accent">Solutions</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('services')} className="text-sidify-primary hover:text-sidify-accent font-medium text-sm cursor-pointer transition-colors">Services</a>
          <a onClick={() => scrollToSection('portfolio')} className="text-sidify-primary hover:text-sidify-accent font-medium text-sm cursor-pointer transition-colors">Portfolio</a>
          <a onClick={() => scrollToSection('testimonials')} className="text-sidify-primary hover:text-sidify-accent font-medium text-sm cursor-pointer transition-colors">Testimonials</a>
          <a onClick={() => scrollToSection('about')} className="text-sidify-primary hover:text-sidify-accent font-medium text-sm cursor-pointer transition-colors">About</a>
          <a onClick={() => scrollToSection('contact')} className="text-sidify-primary hover:text-sidify-accent font-medium text-sm cursor-pointer transition-colors">Contact</a>
          <Button variant="default" className="bg-sidify-accent hover:bg-sidify-accent/90" onClick={() => scrollToSection('contact')}>
            Get a Free Consultation
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-sidify-primary hover:text-sidify-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection('services')} className="text-sidify-primary hover:text-sidify-accent font-medium py-2 cursor-pointer">Services</a>
            <a onClick={() => scrollToSection('portfolio')} className="text-sidify-primary hover:text-sidify-accent font-medium py-2 cursor-pointer">Portfolio</a>
            <a onClick={() => scrollToSection('testimonials')} className="text-sidify-primary hover:text-sidify-accent font-medium py-2 cursor-pointer">Testimonials</a>
            <a onClick={() => scrollToSection('about')} className="text-sidify-primary hover:text-sidify-accent font-medium py-2 cursor-pointer">About</a>
            <a onClick={() => scrollToSection('contact')} className="text-sidify-primary hover:text-sidify-accent font-medium py-2 cursor-pointer">Contact</a>
            <Button variant="default" className="bg-sidify-accent hover:bg-sidify-accent/90 w-full" onClick={() => scrollToSection('contact')}>
              Get a Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
