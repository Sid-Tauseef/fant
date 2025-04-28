"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter } from "react-icons/fi";

// Portfolio items
const portfolioItems = [
  {
    title: "Modern E-commerce Platform",
    description:
      "A full-featured online store built with Next.js and a headless CMS, featuring product filtering, search, and secure checkout.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Healthcare Patient Portal",
    description:
      "A secure portal allowing patients to schedule appointments, view records, and communicate with healthcare providers.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "HIPAA Compliance", "Authentication"],
  },
  {
    title: "Real Estate Listing App",
    description:
      "A mobile-first application for browsing property listings with advanced search, filtering, and integrated mapping.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Maps API", "Firebase"],
  },
  {
    title: "Financial Analytics Dashboard",
    description:
      "A comprehensive data visualization platform for financial analysts featuring real-time data updates and interactive charts.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "D3.js", "Real-time Data"],
  },
  {
    title: "Modern E-commerce Platform",
    description:
      "A full-featured online store built with Next.js and a headless CMS, featuring product filtering, search, and secure checkout.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
];

const Portfolio = () => {
  const categories = [
    "All",
    ...new Set(portfolioItems.flatMap((item) => item.tags)),
  ];
  const [filter, setFilter] = useState<string>("All");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(filter));

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
    <div className="relative z-10 container mx-auto px-6 text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
      >
        Our Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-2xl mx-auto text-lg"
      >
        Digital solutions that create lasting impact
      </motion.p>
    </div>

      {/* Filter Icon and Dropdown */}
      <motion.div
        className="container mx-auto px-6 mb-12 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition"
          >
            <FiFilter className="text-xl" />
            <span className="text-sm">Filter</span>
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-4 z-50"
            >
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      filter === cat
                        ? "bg-sidify-accent text-white"
                        : "text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-sidify-accent/10 text-sidify-accent rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <Button
                variant="ghost"
                className="bg-sidify-accent/90 hover:bg-sidify-accent text-white backdrop-blur-sm"
              >
                Explore Project
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
