"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const primaryRegions = ["Savannah, GA", "Port of Savannah"];
const secondaryRegions = [
  // Georgia
  "Brunswick, GA",
  "Macon, GA",
  "Augusta, GA",
  "Atlanta, GA",
  // Florida
  "Jacksonville, FL",
  "Orlando, FL",
  "Tampa, FL",
  "Sarasota, FL",
  "Miami, FL",
  "Pensacola, FL",
  // South Carolina
  "Myrtle Beach, SC",
  "Charleston, SC",
  "Columbia, SC",
  // North Carolina
  "Wilmington, NC",
  "Charlotte, NC",
  "Greensboro, NC",
  "Raleigh, NC",
  // Alabama
  "Birmingham, AL",
  "Montgomery, AL",
  "Orange Beach, AL",
  // Mississippi
  "Biloxi, MS",
  "Jackson, MS",
  // Tennessee
  "Chattanooga, TN",
  "Nashville, TN",
  "And Beyond",
];

export default function Coverage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coverage" className="bg-site-black py-24 px-6">
      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-old-gold text-xs font-bold uppercase tracking-[0.4em] mb-3"
        >
          Where We Operate
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-poppins font-black text-white uppercase mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "0.05em",
          }}
        >
          Service Coverage
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-old-gold w-24 mx-auto mb-8 origin-center"
          style={{ boxShadow: "0 0 8px rgba(207,181,59,0.6)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Headquartered in Savannah, Georgia, Coffee Bluff Logistics operates
          across the I-95 and I-16 corridors — connecting the Port of Savannah
          to destinations throughout the Southeast and Mid-Atlantic. Our network
          reaches where your freight needs to go.
        </motion.p>

        {/* Primary regions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-4"
        >
          <p className="text-old-gold/60 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            Primary Markets
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {primaryRegions.map((r) => (
              <span
                key={r}
                className="px-5 py-2 rounded-full bg-old-gold text-site-black text-sm font-black uppercase tracking-wide"
                style={{ boxShadow: "0 0 16px rgba(207,181,59,0.5)" }}
              >
                {r}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Secondary regions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p className="text-old-gold/60 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            Regional Reach
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {secondaryRegions.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                whileHover={{
                  backgroundColor: "#CFB53B",
                  color: "#0A0A0A",
                  boxShadow: "0 0 16px rgba(207,181,59,0.5)",
                }}
                className="px-5 py-2 rounded-full border border-old-gold text-white text-sm font-semibold uppercase tracking-wide cursor-default transition-colors duration-200"
              >
                {r}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
