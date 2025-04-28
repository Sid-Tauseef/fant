import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  // 1) Toggle glassmorphism on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2) Click-outside to close mobile menu
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const tgt = e.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(tgt) &&
        toggleRef.current &&
        !toggleRef.current.contains(tgt)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // 3) Smooth scroll + close
  const scrollTo = (id: string) => {
    setIsOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 4) Dynamic colors
  const textColor = scrolled ? "text-sidify-primary" : "text-white";
  const iconColor = scrolled ? "#0D9488" : "#FFFFFF";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg
            className={`w-8 h-8 ${
              scrolled ? "text-sidify-accent" : "text-white"
            }`}
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M16 2L2 16l14 14 14-14L16 2zm0 5.5l9.5 9.5L16 26.5 6.5 17 16 7.5z"
            />
          </svg>
          <span className={`text-xl font-bold ${textColor}`}>
            Sidify
            <span className="text-sidify-accent">Solutions</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative group px-3 py-2 overflow-hidden"
            >
              <span className={`relative z-10 font-medium ${textColor}`}>
                {item.label}
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-sidify-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </button>
          ))}
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-to-r from-sidify-accent to-blue-500 text-white shadow-lg hover:shadow-sidify-accent/30 transition-all"
          >
            Free Consultation
          </Button>
        </nav>

        {/* Mobile Toggle (no nested <button>) */}
        <div ref={toggleRef} className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color={iconColor}
            label="Show menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="
      md:hidden 
      absolute top-full inset-x-4 mt-2 
      bg-white/90 backdrop-blur-lg 
      shadow-xl 
      rounded-b-xl overflow-hidden 
      border-2 border-sidify-accent/20 
      animate-fade-in-up
    "
        >
          <nav className="flex flex-col gap-2 px-4 py-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="
            w-full 
            text-lg font-semibold text-sidify-primary 
            uppercase tracking-wide text-center 
            py-3 px-4 rounded-lg 
            hover:bg-sidify-accent/10 
            transition-colors
          "
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4">
              <Button
                onClick={() => scrollTo("contact")}
                className="
            w-full 
            py-3 
            bg-sidify-accent hover:bg-sidify-accent/90 
            text-white font-semibold 
            rounded-lg 
            transition-colors
          "
              >
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
