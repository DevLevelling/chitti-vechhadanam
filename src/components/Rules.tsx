"use client";

import { motion } from "framer-motion";

const rules = [
  {
    number: "01",
    rule: "Remove shoes. This is sacred ground.",
    subtext: "Socks are acceptable. Crocs are not. Ever.",
  },
  {
    number: "02",
    rule: "Minimum sitting time: 5 minutes.",
    subtext: "Maximum: until Chitti physically removes you.",
  },
  {
    number: "03",
    rule: "No negative energy allowed.",
    subtext: "Leave your LinkedIn rejections at the door.",
  },
  {
    number: "04",
    rule: "One person at a time.",
    subtext: "The bed's luck is concentrated. Don't dilute it.",
  },
  {
    number: "05",
    rule: "Believe in the process.",
    subtext: "Skeptics have reported a 30% reduced luck absorption rate.",
  },
  {
    number: "06",
    rule: "No photography of the bed.",
    subtext: "Its power cannot be captured digitally. We've tried.",
  },
  {
    number: "07",
    rule: "Results may vary.",
    subtext: "(But they won't. You'll be fine. Probably.)",
  },
];

export default function Rules() {
  return (
    <section id="rules" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center mb-16 sm:mb-20"
      >
        <p className="text-gold text-sm font-mono uppercase tracking-[0.3em] mb-4">Read carefully</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gold-gradient mb-6">
          Sacred Rules
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          The Vechhadanam demands respect. Follow these commandments or face mildly bad vibes.
        </p>
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-navy-light/60 border border-gold/10 card-glow"
          >
            <span className="text-3xl sm:text-4xl font-black text-gold/20 group-hover:text-gold/50 transition-colors shrink-0 font-mono">
              {rule.number}
            </span>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">{rule.rule}</h3>
              <p className="text-muted text-sm">{rule.subtext}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
