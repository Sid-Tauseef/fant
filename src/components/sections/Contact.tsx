"use client";

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  // Replace with your Formspree form ID
  const [state, handleSubmit] = useForm("xgvkaaea");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded && !showSuccess) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [state.succeeded, showSuccess]);

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Let's Create Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your vision, our expertise - let's build something extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl"
          >
            {showSuccess ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-green-500/20 to-cyan-500/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                  <svg 
                    className="h-8 w-8 text-green-400 animate-check"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Message Received!</h3>
                <p className="text-gray-300">
                  We'll get back to you within 24 hours
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border-white/10 focus:ring-2 focus:ring-cyan-400"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="hello@example.com"
                      className="w-full bg-white/5 border-white/10 focus:ring-2 focus:ring-purple-400"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your project..."
                      className="w-full bg-white/5 border-white/10 focus:ring-2 focus:ring-cyan-400"
                      rows={5}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white transition-all"
                >
                  {state.submitting ? 'Sending...' : 'Launch Project'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Rest of the contact information remains unchanged */}
          {/* ... */}

            {/* Contact Information */}
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:pl-12"
          >
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
                Connect With Us
              </h3>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', content: 'contact.sidifysolutions@gmail.com' },
                  { icon: Phone, title: 'Phone', content: '+91 81699 77647' },
                  { 
                    icon: MapPin, 
                    title: 'Office', 
                    content: 'Plot No 43/U/1-Road No4,\n Near Geeta Vikas School, Shivaji Nagar,\n Govandi, Mumbai 400043.' 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                      <item.icon className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.title}</p>
                      <p className="text-gray-200 font-medium whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="text-sm text-gray-400 mb-4">Follow our journey</h4>
                <div className="flex gap-4">
                  {['twitter', 'linkedin', 'github', 'dribbble'].map((network, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <svg className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors">
                        {/* Add your social icons here */}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                Collaboration Hours
              </h3>
              <p className="text-gray-300">
                Mon-Sun: 9AM - 6PM PST<br />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
          

      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;