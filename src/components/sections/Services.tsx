
import { useState } from 'react';
import { Code, Smartphone, Layout, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Web Development",
    description: "Custom-built responsive websites and web applications using the latest technologies including React, Next.js, and Tailwind CSS.",
    icon: <Layout className="h-6 w-6" />,
    details: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Custom Admin Dashboards"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    icon: <Smartphone className="h-6 w-6" />,
    details: [
      "React Native Applications",
      "iOS & Android Development",
      "App Store Optimization",
      "Push Notifications Integration",
      "Performance Optimization"
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.",
    icon: <Layout className="h-6 w-6" />,
    details: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Interface Design",
      "Usability Testing",
      "Design Systems"
    ]
  },
  {
    title: "API & Backend",
    description: "Robust backend services and APIs that power your applications with secure, scalable, and high-performance infrastructure.",
    icon: <Database className="h-6 w-6" />,
    details: [
      "RESTful API Development",
      "GraphQL APIs",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization"
    ]
  }
];

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sidify-primary mb-4">Our Services</h2>
          <p className="text-lg text-sidify-secondary max-w-2xl mx-auto">
            We deliver end-to-end solutions that transform ideas into powerful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transition-all duration-300 ${
                expandedCard === index 
                  ? 'shadow-lg transform scale-[1.02] bg-gradient-to-br from-white to-sidify-accent/5' 
                  : 'hover:shadow-md cursor-pointer'
              }`}
              onClick={() => toggleCard(index)}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-sidify-accent/10 text-sidify-accent">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </div>
                <p className="text-sidify-secondary">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className={`transition-all overflow-hidden ${
                expandedCard === index ? 'max-h-64' : 'max-h-0 p-0'
              }`}>
                <ul className="space-y-2 mt-2 text-sidify-secondary">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sidify-accent"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
