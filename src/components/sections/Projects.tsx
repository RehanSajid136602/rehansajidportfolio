"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CloudSun, Coins, Languages, Mail, Utensils, ExternalLink, Cpu, Sparkles, Github, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Aether Weather",
    description: "Advanced atmospheric data visualization.",
    icon: <CloudSun className="text-blue-400" size={24} />,
    color: "bg-blue-500/10 border-blue-400/40 shadow-blue-500/20",
    link: "https://aether-weather-v2.vercel.app/",
    github: "https://github.com/RehanSajid136602/aether-weather",
    orbit: 240,
    speed: 35,
    caseStudy: {
      problem: "Users needed accurate, real-time weather data with visual insights",
      solution: "Built interactive weather dashboard with advanced visualization",
      result: "Optimized images + code-splitting for faster loads"
    }
  },
  {
    id: 2,
    title: "NeoExchange",
    description: "Modern currency exchange platform.",
    icon: <Coins className="text-emerald-400" size={24} />,
    color: "bg-emerald-500/10 border-emerald-400/40 shadow-emerald-500/20",
    link: "https://neoexchange-v2.vercel.app/",
    github: "https://github.com/RehanSajid136602/neoexchange",
    orbit: 240,
    speed: 35,
    caseStudy: {
      problem: "Complex currency conversion with real-time rates needed",
      solution: "Created streamlined interface with live rate updates",
      result: "Real-time API integration + responsive design"
    }
  },
  {
    id: 3,
    title: "AI Translator",
    description: "Neural network translation engine.",
    icon: <Languages className="text-purple-400" size={24} />,
    color: "bg-purple-500/10 border-purple-400/40 shadow-purple-500/20",
    link: "https://ai-translator-v4.vercel.app/",
    github: "https://github.com/RehanSajid136602/ai-translator",
    orbit: 240,
    speed: 35,
    caseStudy: {
      problem: "Quick, accurate text translation across multiple languages",
      solution: "Integrated AI translation with clean interface",
      result: "Multi-language support + instant translation"
    }
  },
  {
    id: 4,
    title: "Email Rewriter",
    description: "Tone optimization for professionals.",
    icon: <Mail className="text-orange-400" size={24} />,
    color: "bg-orange-500/10 border-orange-400/40 shadow-orange-500/20",
    link: "https://ai-email-rewriter-five.vercel.app/",
    github: "https://github.com/RehanSajid136602/email-rewriter",
    orbit: 240,
    speed: 35,
    caseStudy: {
      problem: "Professional email tone adjustment needed",
      solution: "AI-powered tone analysis and rewriting",
      result: "Context-aware suggestions + multiple tone options"
    }
  },
  {
    id: 5,
    title: "Recipe Gen",
    description: "AI culinary assistant.",
    icon: <Utensils className="text-yellow-400" size={24} />,
    color: "bg-yellow-500/10 border-yellow-400/40 shadow-yellow-500/20",
    link: "https://ai-recipe-generator-v1.vercel.app/",
    github: "https://github.com/RehanSajid136602/recipe-generator",
    orbit: 240,
    speed: 35,
    caseStudy: {
      problem: "Personalized recipe recommendations based on ingredients",
      solution: "AI-powered recipe generation with ingredient analysis",
      result: "Personalized recommendations + detailed cooking instructions"
    }
  },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(null as any);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    const checkPower = () => {
      setIsLowPower(
        'connection' in navigator && 
        (navigator as any).connection?.saveData || 
        'hardwareConcurrency' in navigator && 
        (navigator as any).hardwareConcurrency <= 2
      );
    };
    
    checkMobile();
    checkPower();
    
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isLowPower) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setMousePos({
        x: (e.clientX - centerX) * 0.02, // Reduced movement
        y: (e.clientY - centerY) * 0.02,
      });
    });
  };

  const getProjectPosition = (index: number, orbit: number, currentRotation: number = 0) => {
    const angle = (index / projects.length) * 360 + currentRotation;
    const x = Math.cos((angle * Math.PI) / 180) * orbit;
    const y = Math.sin((angle * Math.PI) / 180) * orbit;
    return { x, y };
  };

  return (
    <section 
      id="projects" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-32 px-6 overflow-hidden min-h-[900px] flex flex-col items-center justify-center bg-[#030303]"
    >
      {/* 1. Deep Space Background - Optimized */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
        {/* Animated Stars - Reduced and optimized */}
        {!isMobile && !isLowPower && (
          <div className="stars-container">
            {[...Array(8)].map((_, i) => ( // Reduced from 20 to 8
              <div
                key={i}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  '--mouse-x': `${mousePos.x * 0.3}px`,
                  '--mouse-y': `${mousePos.y * 0.3}px`
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-10 mb-20 relative"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4 backdrop-blur-md">
          <Sparkles size={14} className="text-accent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Project Universe</span>
        </div>
        <h2 className="text-4xl font-bold sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          The AI Ecosystem
        </h2>
      </motion.div>

      {!isMobile ? (
        <div 
          className="relative h-[700px] w-[700px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setActiveProject(null);
          }}
        >
          {/* 2. Enhanced Orbits */}
          <div className={cn(
            "absolute inset-0 rounded-full border border-white/5 transition-opacity duration-700",
            isPaused ? "opacity-100" : "opacity-40"
          )} />
          <div className="absolute inset-[100px] rounded-full border border-white/5" />
          
          {/* Energy Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[1px] border-dashed border-white/10 opacity-20" 
          />

          {/* 3. Central Core (The Sun) */}
          <motion.div 
            style={{ x: mousePos.x, y: mousePos.y }}
            className="absolute z-20 group cursor-pointer"
          >
            <div className="relative h-28 w-28 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] transition-all duration-500 group-hover:shadow-[0_0_80px_-10px_rgba(37,99,235,0.4)] group-hover:border-accent/50">
               {/* Pulsing Core */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-accent/20 blur-xl"
              />
              <Cpu className="text-white relative z-10" size={42} />
            </div>
          </motion.div>

          {/* 4. Orbiting Ecosystem */}
          <div className={cn(
            "absolute inset-0 w-full h-full transition-all duration-1000 animate-[spin_40s_linear_infinite]",
            isPaused && "[animation-play-state:paused]"
          )}>
            {projects.map((project, i) => {
              const angle = (i / projects.length) * 360;
              return (
                <div
                  key={project.id}
                  className="absolute top-1/2 left-1/2 -ml-10 -mt-10"
                  style={{
                    transform: `rotate(${angle}deg) translate(${project.orbit}px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5, type: "spring" }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, y: -5 }}
                      onClick={() => window.open(project.link, "_blank")}
                      onMouseEnter={() => setActiveProject(project.id)}
                      className={cn(
                        "h-20 w-20 rounded-2xl border backdrop-blur-xl flex items-center justify-center transition-all duration-500 shadow-xl",
                        project.color,
                        activeProject === project.id ? "border-white bg-black z-50 ring-4 ring-white/10" : "bg-black/40 border-white/10"
                      )}
                    >
                      <div className="relative">
                        {activeProject === project.id && (
                          <motion.div
                            layoutId="glow"
                            className="absolute -inset-4 bg-inherit blur-xl opacity-50 -z-10"
                          />
                        )}
                        {project.icon}
                      </div>
                    </motion.button>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* 5. Holographic Detail Overlay */}
          <AnimatePresence>
            {activeProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute z-40 w-96 p-8 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/20 text-center shadow-2xl"
              >
                {(() => {
                  const p = projects.find(p => p.id === activeProject);
                  if (!p) return null;
                  return (
                    <>
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="flex justify-center mb-4"
                      >
                        <div className={cn("p-4 rounded-2xl bg-white/5", p.color)}>
                          {p.icon}
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                      <p className="text-sm text-secondary leading-relaxed mb-6">{p.description}</p>
                      
                      {/* Case Study Section */}
                      <div className="text-left bg-white/5 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-3">
                          <ChevronDown size={14} />
                          <span>Case Study</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-secondary">Problem:</span>
                            <p className="text-white font-medium">{p.caseStudy.problem}</p>
                          </div>
                          <div>
                            <span className="text-secondary">Solution:</span>
                            <p className="text-white font-medium">{p.caseStudy.solution}</p>
                          </div>
                          <div>
                            <span className="text-secondary">Result:</span>
                            <p className="text-white font-medium">{p.caseStudy.result}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 justify-center">
                        <motion.a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </motion.a>
                        {p.github && (
                          <motion.a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40"
                          >
                            <Github size={14} />
                            GitHub
                          </motion.a>
                        )}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Mobile View: Vertical Energy Stack */
        <div className="grid gap-6 w-full max-w-md z-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group p-6 rounded-2xl border bg-black/40 backdrop-blur-md transition-all border-white/10 hover:border-white/30",
                project.color
              )}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="p-4 rounded-xl bg-black/60 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-secondary">{project.description}</p>
                </div>
              </div>

              {/* Mobile Case Study */}
              <div className="bg-white/5 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent mb-2">
                  <ChevronDown size={12} />
                  <span>Case Study</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div>
                    <span className="text-secondary">Problem:</span>
                    <p className="text-white font-medium">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <span className="text-secondary">Solution:</span>
                    <p className="text-white font-medium">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <span className="text-secondary">Result:</span>
                    <p className="text-white font-medium">{project.caseStudy.result}</p>
                  </div>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex gap-2">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-accent text-white text-xs font-medium flex-1 justify-center"
                >
                  <ExternalLink size={12} />
                  Demo
                </motion.a>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white text-xs font-medium flex-1 justify-center"
                  >
                    <Github size={12} />
                    Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}