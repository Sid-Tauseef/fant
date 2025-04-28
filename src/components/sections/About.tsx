
import { motion } from "framer-motion";


const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "10+ years of experience in web development and software architecture",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Jessica Wong",
    role: "Lead Designer",
    bio: "Award-winning UI/UX designer with expertise in digital products",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "David Miller",
    role: "Technical Director",
    bio: "Full-stack developer specializing in React and Node.js ecosystems",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sophia Chen",
    role: "Mobile Developer",
    bio: "Expert in native and cross-platform mobile application development",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80"
  }
];


const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Crafting Digital Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            Where technical mastery meets human-centered design to create transformative digital experiences
          </motion.p>
        </div>

        {/* Story & Values Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Our Story Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Our Journey
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2018, Sidify Solutions began with a simple mission: to help businesses unlock their digital potential through thoughtfully crafted technology solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that great software is born at the intersection of technical excellence and human-centered design. Our approach combines cutting-edge development practices with a deep understanding of user needs.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="text-gray-400 text-sm">EST. 2018</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>
          </motion.div>

          {/* Core Values Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
              Core Principles
            </h3>
            
            <div className="space-y-6">
              {['Quality First', 'User-Centric', 'Continuous Innovation'].map((value, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-sidify-accent/20 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-sidify-accent/30">
                    <span className="text-xl font-bold text-sidify-accent">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{value}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {[
                        "We never compromise on code quality or user experience",
                        "Every decision starts and ends with the end-user",
                        "Constant learning drives our technical evolution"
                      ][index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            The Minds Behind the Magic
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:border-white/20"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                  <p className="text-sm text-sidify-accent font-medium mb-2">{member.role}</p>
                  <div className="h-px bg-gray-700 mb-3"></div>
                  <p className="text-gray-300 text-sm leading-relaxed transition-all opacity-80 group-hover:opacity-100">
                    {member.bio}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-32 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default About;