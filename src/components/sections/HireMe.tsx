"use client";

import { motion } from "framer-motion";
import { hirePackages, siteEmail } from "@/data/site";
import { variants } from "@/lib/animations";

export function HireMe() {
  return (
    <section id="hire-me" className="w-full py-28 px-6 bg-[#030303]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variants.staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={variants.fadeInUp} className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold sm:text-5xl">Hire Me</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Clear, focused packages to launch fast and keep momentum.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {hirePackages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={variants.fadeInUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl flex flex-col"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-secondary">{pkg.timeline}</span>
              </div>
              <p className="mt-4 text-sm text-secondary">{pkg.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-secondary/90">
                {pkg.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${siteEmail}`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
