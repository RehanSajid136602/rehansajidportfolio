"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function StickyWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
    >
      <motion.a
        href={`https://wa.me/${CONTACT.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
        aria-label="Contact on WhatsApp"
        style={{ width: '48px', height: '48px' }}
      >
        <MessageCircle size={16} className="md:hidden" />
        <MessageCircle size={20} className="hidden md:block" />
      </motion.a>
    </motion.div>
  );
}