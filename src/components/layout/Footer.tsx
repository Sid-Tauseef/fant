"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

export default function Footer() {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xgvkaaea");
  const [subscribed, setSubscribed] = useState(false);

  // When form succeeds, show a thank you message briefly
  if (state.succeeded && !subscribed) {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  }

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-tr from-gray-900 to-gray-800 border-t border-white/10">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Sidify
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses through custom web and mobile applications
              that drive growth and enhance user experiences.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-400 group"
            >
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-cyan-400/20 transition-colors">
                <ArrowUp
                  size={16}
                  className="group-hover:text-cyan-400 transition-colors"
                />
              </div>
              <span className="group-hover:text-cyan-400 transition-colors">
                Back to Top
              </span>
            </motion.button>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Portfolio", "Contact"].map(
                (link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="flex items-center gap-2"
                    >
                      <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      {link}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Policies
            </h4>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <a href="#" className="flex items-center gap-2">
                    <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Stay Updated
            </h4>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-400/30"
              >
                <p className="text-green-400 text-center">
                  Thanks for subscribing! 🎉
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 mt-1 text-sm"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all disabled:opacity-50"
                >
                  Subscribe
                </motion.button>
              </form>
            )}

            <div className="flex items-center gap-4 pt-6">
              {[Facebook, Twitter, Instagram, Github].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all text-white"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 mt-12 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Sidify Solutions. All rights
              reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Crafted with ❤️ by{" "}
              <a
                href="https://github.com/Sid-Tauseef"
                className="text-cyan-400 hover:text-purple-400 transition-colors"
              >
                Sid-Tauseef
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
