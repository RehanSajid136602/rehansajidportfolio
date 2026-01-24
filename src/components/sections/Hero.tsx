"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { variants } from "@/lib/animations";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";
import { GlitchText } from "@/components/effects/GlitchText";
import { CONTACT } from "@/lib/constants";

function HeroComponent() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background Glow - Using CSS instead of absolute positioning for better performance */}
      <div 
        className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" 
        style={{ transform: "translate(-50%, -50%)" }}
      />
      
      <motion.div
        variants={variants.staggerContainer}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center gap-6"
      >
<motion.span
          variants={variants.fadeInUp}
          className="text-sm font-medium tracking-widest uppercase text-secondary"
        >
          {CONTACT.status}
        </motion.span>

        <motion.h1
          variants={variants.fadeInUp}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          I build fast, modern websites for businesses
        </motion.h1>

        <motion.p
          variants={variants.fadeInUp}
          className="max-w-xl text-lg text-secondary sm:text-xl"
        >
          Delivered in 24–72 hours • Responsive • SEO-ready
        </motion.p>

        <motion.div variants={variants.fadeInUp} className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
          <motion.a
            href={`https://wa.me/${CONTACT.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-green-600 shadow-lg shadow-green-500/25"
          >
            <MessageCircle size={18} />
            WhatsApp Me
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            <Zap size={18} />
            Get a Free 24h Demo
          </motion.a>
        </motion.div>

        <motion.div variants={variants.fadeInUp} className="mt-4">
          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-white/40 hover:text-white"
          >
            View My Work
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2"
        style={{ transform: "translateX(-50%)" }}
      >
        <div className="h-12 w-[2px] bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
