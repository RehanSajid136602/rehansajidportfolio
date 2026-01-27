"use client";

import { useState, useEffect } from "react";
import { Palette, Sun, Moon, Sparkles } from "lucide-react";

type Theme = "default" | "cartoon" | "glass-aurora";

const THEMES: { id: Theme; name: string; icon: React.ReactNode }[] = [
  { id: "default", name: "Dark Pro", icon: <Moon size={18} /> },
  { id: "cartoon", name: "Cartoon", icon: <Palette size={18} /> },
  { id: "glass-aurora", name: "Glass Aurora", icon: <Sparkles size={18} /> },
];

const THEME_IDS = new Set<Theme>(THEMES.map((themeItem) => themeItem.id));

const resolveInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "default";

  const saved = localStorage.getItem("portfolio-theme");
  if (!saved) return "default";
  if (saved === "neo-brutal") return "cartoon";
  if (THEME_IDS.has(saved as Theme)) return saved as Theme;

  return "default";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    localStorage.setItem("portfolio-theme", theme);

    // Clean up old cartoonic-mode localStorage entry if it exists
    if (typeof window !== 'undefined') {
      localStorage.removeItem("cartoonic-mode");
    }
  }, [theme]);

  const cycleTheme = () => {
    const currentIndex = THEMES.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex].id);
  };

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[var(--card-bg)]/20 backdrop-blur-md border border-[var(--card-border)]/10 px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-all hover:bg-[var(--card-bg)]/30 hover:scale-105 focus:outline-none"
      aria-label={`Current theme: ${THEMES.find((t) => t.id === theme)?.name}. Click to cycle themes.`}
    >
      <span className="hidden sm:inline">{THEMES.find((t) => t.id === theme)?.name}</span>
      <span className="sm:hidden">{THEMES.find((t) => t.id === theme)?.icon}</span>
      <span className="text-xs text-secondary/70">({THEMES.findIndex((t) => t.id === theme) + 1}/{THEMES.length})</span>
    </button>
  );
}
