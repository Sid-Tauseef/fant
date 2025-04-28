
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sidify-light leading-tight mb-4 animate-fade-in">
            Empowering Your Digital Vision—
            <span className="text-sidify-accent">From Concept to Code.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sidify-light/90 mb-8 animate-fade-in">
            Custom Web & Mobile Applications Built for Growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-sidify-accent hover:bg-sidify-accent/90 text-white font-medium"
            >
              Get a Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-sidify-light/20 text-sidify-light hover:bg-sidify-light/10"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
