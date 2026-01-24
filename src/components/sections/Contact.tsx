"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { variants } from "@/lib/animations";
import { RocketButton } from "@/components/ui/RocketButton";
import { siteEmail, socialLinks } from "@/data/site";

export function Contact() {
  const activeSocialLinks = socialLinks.filter((link) => link.href.startsWith("http"));
  const iconMap = {
    GitHub: <Github size={20} />,
    LinkedIn: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
  } as const;

  return (
    <section id="contact" className="w-full max-w-5xl py-32 px-6 mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants.staggerContainer}
        className="flex flex-col items-center text-center space-y-12"
      >
        <motion.div variants={variants.fadeInUp} className="space-y-4">
          <h2 className="text-4xl font-bold sm:text-6xl">Let&apos;s build something great.</h2>
          <p className="text-secondary max-w-xl mx-auto text-lg">
            Currently looking for new opportunities and interesting collaborations. 
            My inbox is always open.
          </p>
        </motion.div>

        <motion.div variants={variants.fadeInUp} className="flex flex-col items-center gap-6">
          <RocketButton email={siteEmail} label="Copy email" />

          <div className="flex flex-col items-center gap-3 text-sm text-secondary">
            <a
              href={`mailto:${siteEmail}`}
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-sm"
            >
              {siteEmail}
            </a>
            <a
              href={`mailto:${siteEmail}`}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label="Email Muhammad Rehan"
            >
              Email me
            </a>
          </div>

          {activeSocialLinks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {activeSocialLinks.map((social) => {
                const icon = iconMap[social.label as keyof typeof iconMap];
                if (!icon) return null;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -4 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-secondary transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    aria-label={social.label}
                  >
                    {icon}
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          )}
        </motion.div>

        <motion.footer variants={variants.fadeIn} className="pt-24 text-sm text-secondary/50">
          © 2026 Muhammad Rehan. Built with Next.js & Framer Motion.
        </motion.footer>
      </motion.div>
    </section>
  );
}
