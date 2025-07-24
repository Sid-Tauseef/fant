"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiX, FiExternalLink } from "react-icons/fi";

const portfolioItems = [
  {
    "title": "Mozzam Arts - Interior Design Showcase",
    "description": "A sleek and modern portfolio website built to showcase interior design projects and creative work for clients.",
    "image": "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746124736/sidify-solutions/mozzam-arts_ewjr8t.png",
    "tags": ["Next.js", "Tailwind CSS", "Responsive Design"],
    "details": {
      "features": [
        "Clean and aesthetic UI for design portfolio",
        "Responsive layout optimized for all devices",
        "Gallery of completed interior design projects",
        "Client-centric service descriptions"
      ],
      "techStack": ["Next.js", "Tailwind CSS", "Firebase Hosting"],
      "link": "https://mozzam-art.web.app/"
    }
  }
  ,
  {
    title: "OffStream Meeting Scheduler",
    description: "Streamlined platform for booking professional meetings and virtual consultations.",
    image: "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746171374/sidify-solutions/bookoffstream_asyn4j.png",
    tags: ["React", "Calendar Integration", "Video Conferencing", "SaaS"],
    details: {
      features: [
        "Multi-timezone scheduling",
        "Calendar synchronization",
        "Meeting room booking",
        "Automated reminders"
      ],
      techStack: ["React 18", "Node.js", "AWS Amplify", "MUI Design"],
      link: "https://book.offstream.co.in/"
    }
  },
  {
    title: "Oil & Gas Skills Certification Platform",
    description: "Industry-specific training and certification management system for energy professionals.",
    image: "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746171373/sidify-solutions/dev.skilltraining_doiax5.png",
    tags: ["LMS", "Energy Sector", "Certification Tracking", "React"],
    details: {
      features: [
        "Course management",
        "Skills assessment",
        "Certification tracking",
        "Industry compliance"
      ],
      techStack: ["React", "Firebase", "SCORM", "Ant Design"],
      link: "https://dev.skillstraining.in/"
    }
  },
  {
    title: "Masters Academy Education Portal",
    description: "Modern learning management system for professional development courses.",
    image: "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746171373/sidify-solutions/mastersacademy_n6fhhb.png",
    tags: ["Next.js", "EdTech", "Course Platform", "CMS"],
    details: {
      features: [
        "Course catalog",
        "Progress tracking",
        "Interactive learning",
        "Student dashboard"
      ],
      techStack: ["Next.js 14", "Tailwind CSS", "Sanity CMS", "Vercel"],
      link: "https://mastersacademy.vercel.app/"
    }
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedProject]);

  const categories = ["All", ...new Set(portfolioItems.flatMap((item) => item.tags))];
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(filter));

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

      {/* Filter Section */}
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
                onClick={() => setSelectedProject(index)}
                className="bg-sidify-accent/90 hover:bg-sidify-accent text-white backdrop-blur-sm"
              >
                Explore Project
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 50 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              {portfolioItems[selectedProject] && (
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src={portfolioItems[selectedProject].image}
                      alt={portfolioItems[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white">
                      {portfolioItems[selectedProject].title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-sidify-accent mb-2">FEATURES</h4>
                        <ul className="space-y-2">
                          {portfolioItems[selectedProject].details.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-300">
                              <span className="text-sidify-accent mr-2">▹</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-sidify-accent mb-2">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                          {portfolioItems[selectedProject].details.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-sidify-accent/10 text-sidify-accent rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-sidify-accent to-purple-500 hover:from-sidify-accent/90 hover:to-purple-600"
                      >
                        <a
                          href={portfolioItems[selectedProject].details.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <FiExternalLink />
                          View Live Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio; 