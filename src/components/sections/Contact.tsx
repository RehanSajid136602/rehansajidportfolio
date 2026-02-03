"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/animations";
import { Github, Linkedin, Twitter, MessageCircle, Mail, MapPin } from "lucide-react";
import { RocketButton } from "@/components/ui/RocketButton";
import { CONTACT } from "@/lib/constants";

export function Contact() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}`;
  const mailtoUrl = `mailto:${CONTACT.email}`;
  const isMobileDevice =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const emailHref = isMobileDevice ? mailtoUrl : gmailComposeUrl;
  const isGmailCompose = emailHref === gmailComposeUrl;

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
          <div className="flex items-center justify-center gap-4 text-sm text-accent">
            <MapPin size={16} />
            <span>{CONTACT.location}</span>
            <span>•</span>
            <span>{CONTACT.status}</span>
          </div>
        </motion.div>

        <motion.div variants={variants.fadeInUp} className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${CONTACT.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--accent)]/80 shadow-lg shadow-[var(--accent)]/25 glass-button glass-specular-overlay"
            >
              <MessageCircle size={18} />
              WhatsApp Me
            </motion.a>

            {/* Email Button */}
            <motion.a
              href={emailHref}
              target={isGmailCompose ? "_blank" : undefined}
              rel={isGmailCompose ? "noopener noreferrer" : undefined}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--card-bg)] glass-button glass-specular-overlay"
            >
              <Mail size={18} />
              {CONTACT.email}
            </motion.a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com/RehanSajid136602" },
              { icon: <Linkedin size={20} />, href: "#" },
              { icon: <Twitter size={20} />, href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -4 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)]/10 bg-[var(--card-bg)]/5 text-secondary hover:text-[var(--text-primary)] hover:border-[var(--border-color)]/20 transition-colors glass-button"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.footer variants={variants.fadeIn} className="pt-24 text-sm text-secondary/50">
          © 2026 Muhammad Rehan. Built with Next.js & Framer Motion.
        </motion.footer>
      </motion.div>
    </section>
  );
}
