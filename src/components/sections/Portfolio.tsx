
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured online store built with Next.js and a headless CMS, featuring product filtering, search, and secure checkout.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Healthcare Patient Portal",
    description: "A secure portal allowing patients to schedule appointments, view records, and communicate with healthcare providers.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "HIPAA Compliance", "Authentication"],
  },
  {
    title: "Real Estate Listing App",
    description: "A mobile-first application for browsing property listings with advanced search, filtering, and integrated mapping.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Maps API", "Firebase"],
  },
  {
    title: "Financial Analytics Dashboard",
    description: "A comprehensive data visualization platform for financial analysts featuring real-time data updates and interactive charts.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "D3.js", "Real-time Data"],
  }
];

const Portfolio = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-sidify-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sidify-primary mb-4">Our Portfolio</h2>
          <p className="text-lg text-sidify-secondary max-w-2xl mx-auto">
            Showcasing our recent projects and digital success stories.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentItem * 100}%)` }}
            >
              {portfolioItems.map((item, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-6 bg-white">
                    <div className="h-64 md:h-auto overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-sidify-primary mb-3">{item.title}</h3>
                      <p className="text-sidify-secondary mb-6">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-sidify-accent/10 text-sidify-accent rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button className="bg-sidify-accent hover:bg-sidify-accent/90 w-full md:w-auto">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sidify-accent/20 text-sidify-accent hover:bg-sidify-accent/10"
              onClick={prevItem}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentItem ? 'bg-sidify-accent scale-125' : 'bg-sidify-accent/20'
                  }`}
                  onClick={() => setCurrentItem(index)}
                ></button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sidify-accent/20 text-sidify-accent hover:bg-sidify-accent/10"
              onClick={nextItem}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
