"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function CursorStardust() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setParticles((prev) => [...prev.slice(-12), newParticle]);
    };

    if (!isTouch && !shouldReduceMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouch, shouldReduceMotion]);

  if (isTouch || shouldReduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: p.x - 2, y: p.y - 2 }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              x: p.x + (Math.random() - 0.5) * 30,
              y: p.y + (Math.random() - 0.5) * 30 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_white]"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
