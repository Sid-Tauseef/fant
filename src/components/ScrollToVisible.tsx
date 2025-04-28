
import { useEffect, useRef } from 'react';

interface ScrollToVisibleProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

const ScrollToVisible = ({ children, threshold = 0.1, delay = 0 }: ScrollToVisibleProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            
            // Once visible, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const element = elementRef.current;
    
    if (element) {
      observer.observe(element);
      
      // Add the animation class
      element.classList.add('animate-on-scroll');
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay]);
  
  return <div ref={elementRef}>{children}</div>;
};

export default ScrollToVisible;
