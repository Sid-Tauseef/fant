import { useState } from "react";
import { Layout, Smartphone, Code, Database } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description:
      "Custom responsive websites & web apps built with React, Next.js, and Tailwind CSS.",
    icon: <Layout className="h-6 w-6 text-sidify-accent" />,
    details: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Custom Admin Dashboards",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance iOS & Android apps built with React Native and native SDKs.",
    icon: <Smartphone className="h-6 w-6 text-sidify-accent" />,
    details: [
      "React Native Apps",
      "Native iOS & Android",
      "App Store Optimization",
      "Push Notifications",
      "Performance Tuning",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design: wireframes, prototypes & high-fidelity interfaces.",
    icon: <Code className="h-6 w-6 text-sidify-accent" />,
    details: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Interface Design",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    title: "API & Backend",
    description:
      "Scalable, secure backend services & APIs with Node.js, GraphQL, and microservices.",
    icon: <Database className="h-6 w-6 text-sidify-accent" />,
    details: [
      "RESTful & GraphQL APIs",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "CI/CD Pipelines",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          End-to-end digital solutions that turn ideas into impactful experiences.
        </p>
      </div>

      {/* Mobile Grid */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 gap-8 lg:hidden">
        {services.map((svc, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Card
              key={idx}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className={`
                bg-white/5 backdrop-blur-md
                border border-sidify-accent/10 md:border-sidify-accent/20
                transition-transform duration-300
                ${isOpen ? "scale-105 shadow-2xl" : "hover:scale-[1.02] shadow-lg"}
                cursor-pointer
              `}
            >
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-sidify-accent/10 rounded-full">
                    {svc.icon}
                  </div>
                  <CardTitle className="text-lg text-white font-semibold">
                    {svc.title}
                  </CardTitle>
                </div>
                <p className="text-gray-300 text-sm">{svc.description}</p>
              </CardHeader>

              <CardContent className="px-6 pb-6 pt-4">
                {isOpen ? (
                  <ul className="space-y-2 text-gray-300">
                    {svc.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="block w-2 h-2 bg-sidify-accent rounded-full" />
                        {d}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 italic">Click to explore details →</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Desktop Timeline */}
      <div className="relative hidden lg:block">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-sidify-accent/40 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="container mx-auto px-6 space-y-16">
          {services.map((svc, idx) => {
            const isLeft = idx % 2 === 0;
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`
                  relative flex items-start
                  ${isLeft ? "justify-start" : "justify-end"}
                  lg:pr-8 lg:pl-8
                `}
              >
                {/* Icon Node */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-sidify-accent rounded-full transform -translate-x-1/2" />

                {/* Content Panel */}
                <Card
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`
                    w-1/2 bg-white/5 backdrop-blur-md border border-sidify-accent/20
                    transition-transform duration-300
                    ${isOpen ? "scale-105 shadow-2xl" : "hover:scale-[1.02] shadow-lg"}
                    cursor-pointer
                  `}
                >
                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-sidify-accent/10 rounded-full">
                        {svc.icon}
                      </div>
                      <CardTitle className="text-xl text-white font-semibold">
                        {svc.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-300 mb-4">{svc.description}</p>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    {isOpen ? (
                      <ul className="space-y-2 text-gray-300">
                        {svc.details.map((d, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="block w-2 h-2 bg-sidify-accent rounded-full" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 italic">
                        Click to explore details →
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
