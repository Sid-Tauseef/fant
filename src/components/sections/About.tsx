
const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "10+ years of experience in web development and software architecture",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=400&q=80"
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
    <section id="about" className="py-20 bg-sidify-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Sidify Solutions</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're a team of passionate technologists dedicated to building exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-sidify-accent">Our Story</h3>
            <p className="text-white/80 mb-4">
              Founded in 2018, Sidify Solutions began with a simple mission: to help businesses unlock their digital potential through thoughtfully crafted technology solutions.
            </p>
            <p className="text-white/80 mb-4">
              We believe that great software is born at the intersection of technical excellence and human-centered design. Our approach combines cutting-edge development practices with a deep understanding of user needs.
            </p>
            <p className="text-white/80">
              Today, we're proud to partner with clients ranging from ambitious startups to established enterprises, helping them achieve their goals through custom software development.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-sidify-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-sidify-accent">Our Values</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sidify-accent/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Over Quantity</h4>
                    <p className="text-white/80">We prioritize crafting excellent solutions rather than rushing through projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sidify-accent/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">User-Centered Approach</h4>
                    <p className="text-white/80">Every decision we make is guided by understanding the needs of end-users.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sidify-accent/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Innovation</h4>
                    <p className="text-white/80">We stay at the forefront of technology to deliver forward-thinking solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-sidify-accent rounded-lg opacity-20"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Meet Our Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-sidify-primary/50 transition-all"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-sidify-primary via-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sidify-accent font-medium">{member.role}</p>
                  
                  <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-20 opacity-0 group-hover:opacity-100 pt-0 group-hover:pt-2">
                    <p className="text-sm text-white/80">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
