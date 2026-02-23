"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sujith",
    title: "Software Engineer (Post-Blessing)",
    rating: 5,
    text: "I sat on the bed for 5 minutes. Got 3 offer letters before I stood up. One was from a company I didn't even apply to.",
    verified: true,
    avatar: "S",
  },
  {
    name: "Gopi",
    title: "Professional Believer",
    rating: 5,
    text: "Was failing in life. Sat on the bed. Now I fail with confidence. 10/10 would sit again.",
    verified: true,
    avatar: "G",
  },
  {
    name: "Hemm",
    title: "Former Skeptic, Current Devotee",
    rating: 5,
    text: "I didn't believe it at first. Now I have a job, a car, and somehow a girlfriend. The bed works in mysterious ways.",
    verified: true,
    avatar: "H",
  },
  {
    name: "Anonymous",
    title: "IIT Topper (Allegedly)",
    rating: 5,
    text: "I just walked past the bed and got a promotion. Didn't even have to sit. The proximity effect is REAL.",
    verified: false,
    avatar: "?",
  },
  {
    name: "Rahul M.",
    title: "Startup CEO (ex-Unemployed)",
    rating: 5,
    text: "Before the bed: rejected from 47 companies. After the bed: founded my own. Now I reject people. Circle of life.",
    verified: true,
    avatar: "R",
  },
  {
    name: "Priya K.",
    title: "CA Finalist",
    rating: 5,
    text: "Sat on the bed before my CA finals. Passed all subjects. My parents think I studied. Little do they know.",
    verified: true,
    avatar: "P",
  },
  {
    name: "Vikram",
    title: "Lucky By Association",
    rating: 5,
    text: "I couldn't get a slot so I just touched the bedsheet. Still got an interview call. This thing has range.",
    verified: false,
    avatar: "V",
  },
  {
    name: "Deepika S.",
    title: "Placement Season Survivor",
    rating: 5,
    text: "My roommate sat on the bed and I got placed. The luck doesn't even need direct contact. It's airborne at this point.",
    verified: true,
    avatar: "D",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-muted/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 sm:mb-20"
      >
        <p className="text-gold text-sm font-mono uppercase tracking-[0.3em] mb-4">
          Real stories. Real luck.*
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gold-gradient mb-6">
          Wall of Blessed Souls
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Don&apos;t take our word for it. Take theirs. (They were skeptics too. Look at them now.)
        </p>
        <p className="text-muted/40 text-xs mt-2">*luck not guaranteed but also not not guaranteed</p>
      </motion.div>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="break-inside-avoid"
          >
            <div className="p-6 rounded-2xl bg-navy-light/80 border border-gold/10 card-glow backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-amber flex items-center justify-center text-navy font-bold text-lg shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    {t.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] font-bold uppercase tracking-wider">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified Lucky
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-sm">{t.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={t.rating} />
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
