import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/20 to-purple-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Build Beyond Limits
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl"
          >
            High-impact web and mobile experiences to empower your digital journey.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl"
              onClick={() => scrollTo("contact")}
            >
              Start Your Project →
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:border-white/40 hover:bg-white/15 text-lg font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
              onClick={() => scrollTo("services")}
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;