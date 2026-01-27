"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/animations";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
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
          <h2 className="text-4xl font-bold sm:text-6xl">Client Testimonials</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            What clients say about working with me on their web development projects.
          </p>
        </motion.div>

        <motion.div
          variants={variants.fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={variants.fadeInUp}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative glass-card backdrop-blur-xl border border-[var(--card-border)] rounded-2xl p-8 h-full hover:border-[var(--border-hover)]/20 transition-all duration-300 glass-specular-overlay">
                <div className="flex items-center mb-4">
                  <Quote className="text-accent/30" size={16} />
                </div>

                <blockquote className="text-[var(--foreground)] mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="font-semibold text-[var(--text-primary)]">{testimonial.name}</div>
                    <div className="text-sm text-secondary">{testimonial.role}</div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[var(--accent)] fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
}