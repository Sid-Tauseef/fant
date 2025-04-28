
const testimonials = [
  {
    content: "Sidify Solutions transformed our outdated website into a modern, responsive platform that our customers love. Their attention to detail and technical expertise exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    content: "Working with the Sidify team was a game-changer for our startup. They built our mobile app from concept to launch in record time, and their ongoing support has been exceptional.",
    author: "Michael Chen",
    position: "CEO, HealthSync",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    content: "The e-commerce platform developed by Sidify doubled our online sales within the first quarter. Their strategic approach to UX design and performance optimization made all the difference.",
    author: "Emma Rodriguez",
    position: "Operations Manager, StyleHub",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const clientLogos = [
  "TechCorp", "HealthSync", "StyleHub", "GreenEnergy", "FinanceFlow"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sidify-primary mb-4">Client Testimonials</h2>
          <p className="text-lg text-sidify-secondary max-w-2xl mx-auto">
            Don't just take our word for it — see what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-sidify-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <blockquote className="mb-6 text-sidify-secondary italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sidify-primary">{testimonial.author}</p>
                  <p className="text-sm text-sidify-secondary">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-center text-lg font-medium text-sidify-secondary mb-8">Trusted by leading companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-xl md:text-2xl font-bold text-sidify-primary/30 hover:text-sidify-accent transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
