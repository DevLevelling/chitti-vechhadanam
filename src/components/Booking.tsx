"use client";

import { useState, useCallback, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const luckOptions = [
  "Interview / Job",
  "Exam / Academics",
  "Love Life 💕",
  "Startup / Business",
  "Visa / Immigration",
  "Everything (I need ALL the luck)",
];

export default function Booking() {
  const [name, setName] = useState("");
  const [luckType, setLuckType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#FFD700", "#FF9F1C", "#10B981", "#ffffff"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#FFD700", "#FF9F1C", "#10B981", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !luckType) return;
    setSubmitted(true);
    fireConfetti();
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 px-4" suppressHydrationWarning>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 sm:mb-20"
      >
        <p className="text-gold text-sm font-mono uppercase tracking-[0.3em] mb-4">Your turn</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gold-gradient mb-6">
          Reserve Your Luck
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Join the waitlist. The bed awaits. So does your destiny.
        </p>
      </motion.div>

      <div className="max-w-lg mx-auto">
        {/* Waitlist indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8 p-4 rounded-xl bg-amber/10 border border-amber/20"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber" />
          </span>
          <span className="text-amber font-medium">
            Current Wait Time: <span className="font-bold">47 days</span>
          </span>
          <span className="text-muted text-sm">(worth it)</span>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl bg-navy-light/80 border border-gold/10 backdrop-blur-sm"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Your Name (so the bed knows who to bless)
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-gold/20 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  required
                  suppressHydrationWarning
                />
              </div>

              {/* Luck Type */}
              <div>
                <label htmlFor="luckType" className="block text-sm font-medium text-foreground/80 mb-2">
                  What do you need luck for?
                </label>
                <select
                  id="luckType"
                  value={luckType}
                  onChange={(e) => setLuckType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-gold/20 text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all appearance-none cursor-pointer"
                  required
                  suppressHydrationWarning
                >
                  <option value="" disabled>
                    Select your luck category
                  </option>
                  {luckOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground/80 mb-2">
                  Preferred Date (just a formality, we&apos;re fully booked)
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-gold/20 text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-gold text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                suppressHydrationWarning
              >
                🍀 Submit & Pray
              </button>

              <p className="text-center text-muted/40 text-xs">
                By submitting, you agree that luck is a social construct but also very real.
              </p>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-center p-10 rounded-2xl bg-navy-light/80 border border-emerald/20 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="text-7xl mb-6"
              >
                🛏️✨
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-black text-gold-gradient mb-4">
                You&apos;re In, {name}!
              </h3>
              <p className="text-foreground/80 text-lg mb-2">
                Your luck has been queued.
              </p>
              <p className="text-muted mb-6">
                Chitti will bless you in spirit. The bed remembers all who believe.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Blessing Confirmed
              </div>
              <p className="text-muted/30 text-xs mt-6">
                Estimated delivery: whenever the universe decides
              </p>

              <button
                type="button"
                onClick={() => { setSubmitted(false); setName(""); setLuckType(""); }}
                className="mt-6 text-gold/60 hover:text-gold text-sm underline underline-offset-4 transition-colors cursor-pointer"
              >
                Book another session (greedy, but respectable)
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
