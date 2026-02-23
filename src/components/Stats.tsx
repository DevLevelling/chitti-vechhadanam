"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  footnote?: string;
}

const stats: StatItem[] = [
  { label: "People Blessed", value: "1,342", numericValue: 1342, suffix: "+", footnote: "" },
  { label: "Success Rate", value: "99.7", numericValue: 99.7, suffix: "%", footnote: "* we made this up" },
  { label: "Scientific Evidence", value: "0", numericValue: 0, suffix: "", footnote: "" },
  { label: "Belief Required", value: "∞", footnote: "" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);

      if (Number.isInteger(value)) {
        setCount(Math.floor(current));
      } else {
        setCount(Math.round(current * 10) / 10);
      }

      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? count.toLocaleString() : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32 px-4">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-16"
      >
        <p className="text-gold text-sm font-mono uppercase tracking-[0.3em] mb-4">The numbers don&apos;t lie</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gold-gradient">
          Hard Facts*
        </h2>
        <p className="text-muted text-sm mt-3">*not actually hard facts</p>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-6 sm:p-8 rounded-2xl bg-navy-light/60 border border-gold/10 card-glow"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-gold text-glow mb-3">
              {stat.numericValue !== undefined ? (
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix || ""} />
              ) : (
                <span className="animate-float inline-block">{stat.value}</span>
              )}
            </div>
            <p className="text-muted text-sm sm:text-base font-medium">{stat.label}</p>
            {stat.footnote && (
              <p className="text-muted/50 text-xs mt-2 italic">{stat.footnote}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
