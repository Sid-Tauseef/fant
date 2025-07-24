const testimonials = [
  {
    content: "Sidify team, our Mozzam Arts gallery looked very flat online. Now visitors keep checking it out and we’re getting enquiries every day!",
    author: "Arsalan Siddiqui",
    position: "Creative Director, Mozzam Interior Studio",
    avatar: "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746175929/sidify-solutions/mozzamicon_u1qxpe.png"
  },
  {
    content: "Scheduling used to give me a real headache with Mumbai and overseas clients. OffStream sorted it—now bookings happen with just one click!",
    author: "Siddharth Mehta",
    position: "Director, Consulting Group",
    avatar: "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746175929/sidify-solutions/booknowicon_w3hesu.png"
  },
  {
    content: "Managing certifications for hundreds of engineers was like juggling plates. Sidify’s dashboard sorted it all—audits are now a total breeze!",
    author: "Nandini Reddy",
    position: "Head of Operations, SkillsTraining India",
    avatar: "https://res.cloudinary.com/dtjgdz8zn/image/upload/v1746175929/sidify-solutions/skillicon_nyzt2j.png"
  }
];


const clientLogos = [
  "MozzamArts", "FreelanceResolve", "DiabeticHealth", "NewsInsights", "MastersAcademy"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-gradient mb-4">Client Testimonials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Don't just take our word for it — see what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-glass p-6 transition-all hover:scale-[1.02] duration-300"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              
              <blockquote className="mb-6 text-gray-100 italic text-lg leading-relaxed">
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
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-center text-lg font-medium text-gray-300 mb-8">
            Trusted by leading companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-xl md:text-2xl font-bold text-gray-400 hover:text-sidify-accent transition-colors"
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
