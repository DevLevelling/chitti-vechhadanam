"use client";

import { motion } from "framer-motion";

const storyBeats = [
  {
    emoji: "🧒",
    title: "The Beginning",
    text: "It all started with a guy named Chitti (means 'small'). Small in size. MASSIVE in luck.",
  },
  {
    emoji: "💼",
    title: "The Discovery",
    text: "Every interview he sat for — selected. Every exam — topped. Every bet — won. Coincidence? We think not.",
  },
  {
    emoji: "🛏️",
    title: "The Bed Theory",
    text: "Someone noticed the pattern. It wasn't Chitti. It was THE BED. His very own bed radiated an aura of pure, unfiltered success.",
  },
  {
    emoji: "🔬",
    title: "The Evidence",
    text: "Scientists tried to study it. Their lab burned down (in a good way — they got insurance money). Astrologers went unemployed.",
  },
  {
    emoji: "🌍",
    title: "The Movement",
    text: "Word spread. People came from across the city, the state, the country. All to sit on one bed. Chitti's bed. The Vechhadanam.",
  },
  {
    emoji: "⚡",
    title: "The Present",
    text: "Now, the waitlist is longer than a CVS receipt. But hey — the lucky ones who make it? They never look back.",
  },
];

export default function Legend() {
  return (
    <section id="legend" className="relative py-24 sm:py-32 px-4">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 sm:mb-20"
      >
        <p className="text-gold text-sm font-mono uppercase tracking-[0.3em] mb-4">How it all began</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gold-gradient mb-6">
          The Origin Story
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Every legend has an origin. This one involves a bed, a boy, and an unreasonable amount of luck.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Line */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        {storyBeats.map((beat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 mb-12 sm:mb-16 ${
              i % 2 === 0
                ? "sm:flex-row sm:text-right"
                : "sm:flex-row-reverse sm:text-left"
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ml-16 sm:ml-0 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
              <div className="p-6 rounded-2xl bg-navy-light/80 border border-gold/10 card-glow backdrop-blur-sm">
                <span className="text-3xl mb-3 block">{beat.emoji}</span>
                <h3 className="text-xl font-bold text-gold mb-2">{beat.title}</h3>
                <p className="text-muted leading-relaxed">{beat.text}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-navy z-10 mt-8" />

            {/* Spacer for opposite side */}
            <div className="hidden sm:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
