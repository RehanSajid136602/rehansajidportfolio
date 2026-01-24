"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/animations";
import { Check, MessageCircle } from "lucide-react";
import { SERVICES, CONTACT } from "@/lib/constants";

export function Services() {
  return (
    <section className="w-full max-w-6xl py-32 px-6 mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants.staggerContainer}
        className="flex flex-col items-center text-center space-y-16"
      >
        <motion.div variants={variants.fadeInUp} className="space-y-4">
          <h2 className="text-4xl font-bold sm:text-6xl">Services</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Professional web development services tailored for your business needs.
          </p>
          <div className="text-sm text-accent font-medium">
            Best for: tuition centers, clinics, local businesses, startups
          </div>
        </motion.div>

        <motion.div 
          variants={variants.fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={variants.fadeInUp}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-accent">{service.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="text-green-400 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-secondary leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={`https://wa.me/${CONTACT.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(`Hi! I'm interested in the ${service.title} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600 shadow-lg shadow-green-500/25"
                >
                  <MessageCircle size={16} />
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={variants.fadeInUp} className="text-center">
          <p className="text-sm text-secondary/70">
            Final price depends on scope. All projects include basic SEO and mobile responsiveness.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}