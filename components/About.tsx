"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  "Authority & compliance kept current — we stay legal so you stay moving",
  "Deep Port of Savannah relationships and terminal knowledge",
  "24/7 dispatch so your freight never waits for business hours",
  "Owner-operated accountability — you deal with decision makers, not call centers",
  "I-95 & I-16 corridor expertise built through real runs, not theory",
  "Transparent communication from pickup to proof of delivery",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "#3B1F5E" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-old-gold text-xs font-bold uppercase tracking-[0.4em] mb-3"
          >
            Why Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins font-black text-white uppercase leading-tight mb-6"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              letterSpacing: "0.02em",
            }}
          >
            LOCAL ROOTS.
            <br />
            REGIONAL REACH.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[1px] bg-old-gold w-20 mb-6 origin-left"
            style={{ boxShadow: "0 0 8px rgba(207,181,59,0.6)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/75 text-base leading-relaxed mb-8"
          >
            Coffee Bluff Logistics LLC was built in Savannah, Georgia — right
            here in the heart of one of the busiest port cities in America. We
            understand the rhythms of regional freight because we live it every
            day. From port drayage to expedited hauls across the Southeast,
            we&apos;re the partner that shows up, follows through, and delivers.
          </motion.p>

          <ul className="flex flex-col gap-4">
            {differentiators.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 text-white/85 text-sm leading-relaxed"
              >
                <span className="text-old-gold text-lg flex-shrink-0 leading-tight">
                  →
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right column — pull quotes */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-lg"
            style={{
              background: "#0f0a1a",
              border: "1px solid rgba(207,181,59,0.4)",
              boxShadow:
                "0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="text-old-gold text-5xl font-black leading-none mb-4"
              aria-hidden
            >
              &ldquo;
            </div>
            <p className="font-poppins font-bold italic text-white text-xl leading-snug mb-6">
              Building the business and aging the authority, one load at a time.
            </p>
            <p className="text-old-gold text-xs font-bold uppercase tracking-[0.3em]">
              — Coffee Bluff Logistics LLC
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="p-8 rounded-lg"
            style={{
              background: "#0f0a1a",
              border: "1px solid rgba(207,181,59,0.25)",
              boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="text-old-gold/60 text-5xl font-black leading-none mb-4"
              aria-hidden
            >
              &ldquo;
            </div>
            <p className="font-poppins font-bold italic text-white/85 text-lg leading-snug">
              Freight moved right is freight you don&apos;t have to think about
              again.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
