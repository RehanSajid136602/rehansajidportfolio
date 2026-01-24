"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { variants } from "@/lib/animations";
import { GlitchText } from "@/components/effects/GlitchText";
import { ctaLinks, heroContent, siteEmail } from "@/data/site";

function HeroComponent() {
  const isPlaceholderLink = (href: string) =>
    href.includes("your-link") || href.includes("XXXXXXXXXXX");
  const callHref = isPlaceholderLink(ctaLinks.callLink) ? "#contact" : ctaLinks.callLink;
  const whatsappHref = isPlaceholderLink(ctaLinks.whatsappLink)
    ? `mailto:${siteEmail}`
    : ctaLinks.whatsappLink;

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
          Available for new projects
        </motion.span>

        <motion.h1
          variants={variants.fadeInUp}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          I am <GlitchText text="Muhammad Rehan" className="text-white" />
        </motion.h1>

        <motion.p
          variants={variants.fadeInUp}
          className="max-w-2xl text-lg font-semibold text-white sm:text-xl"
        >
          {heroContent.headline}
        </motion.p>

        <motion.p
          variants={variants.fadeInUp}
          className="max-w-xl text-base text-secondary sm:text-lg"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div variants={variants.fadeInUp} className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <motion.a
            href={callHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Book a 15-min Call
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href={whatsappHref}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            WhatsApp
          </motion.a>
        </motion.div>

        <motion.a
          variants={variants.fadeInUp}
          href={`mailto:${siteEmail}`}
          className="text-sm font-medium text-secondary transition-colors hover:text-white"
        >
          {siteEmail}
        </motion.a>
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
