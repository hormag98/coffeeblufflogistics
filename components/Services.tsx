"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "⚓",
    title: "Port Drayage",
    desc: "Seamless container moves to and from the Port of Savannah. We know the terminals, the timelines, and the details that keep cargo flowing.",
    coming: false,
  },
  {
    icon: "🚛",
    title: "Over-the-Road Freight",
    desc: "Regional and long-haul trucking across the Southeast and beyond. Reliable drivers, real-time updates, on-time delivery.",
    coming: false,
  },
  {
    icon: "🏭",
    title: "Warehousing & Distribution",
    desc: "Secure storage and distribution solutions engineered for your supply chain. Strategic facilities in the Savannah corridor.",
    coming: true,
  },
  {
    icon: "📅",
    title: "Scheduled Runs",
    desc: "Consistent, recurring freight lanes you can set your watch by. We build reliable routes so your operation never misses a beat.",
    coming: false,
  },
  {
    icon: "🤝",
    title: "Freight Brokerage",
    desc: "Tap our carrier network for competitive rates and capacity on demand. We match your freight to the right asset every time.",
    coming: true,
  },
  {
    icon: "⚡",
    title: "Expedited Shipping",
    desc: "When it has to move now, we move it. Dedicated expedited solutions for time-critical freight with zero compromises.",
    coming: false,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{
        boxShadow:
          "0 0 30px rgba(59,31,94,0.7), 0 0 60px rgba(59,31,94,0.3), inset 0 0 0 1px rgba(207,181,59,0.8)",
      }}
      className="relative flex flex-col gap-4 p-7 bg-site-black border border-old-gold/40 rounded-lg transition-all duration-300 group cursor-default"
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-old-gold rounded-t-lg group-hover:shadow-[0_0_12px_rgba(207,181,59,0.8)] transition-all duration-300" />

      {service.coming && (
        <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest bg-old-gold text-site-black px-2 py-1 rounded">
          Coming Soon
        </span>
      )}

      <span className="text-4xl">{service.icon}</span>
      <h3 className="font-poppins font-bold text-white text-xl uppercase tracking-wide">
        {service.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-site-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-old-gold text-xs font-bold uppercase tracking-[0.4em] text-center mb-3"
        >
          What We Do
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-poppins font-black text-white uppercase text-center mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.05em" }}
        >
          Our Services
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-old-gold w-24 mx-auto mb-16 origin-center"
          style={{ boxShadow: "0 0 8px rgba(207,181,59,0.6)" }}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
