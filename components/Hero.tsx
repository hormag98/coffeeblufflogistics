"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      r: number;
      speed: number;
      opacity: number;
      drift: number;
    }[] = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.3,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.7 + 0.2,
        drift: (Math.random() - 0.5) * 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(207, 181, 59, ${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) {
          p.y = H + 4;
          p.x = Math.random() * W;
        }
        if (p.x < 0 || p.x > W) p.x = Math.random() * W;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #1a0d35 0%, #0A0A0A 70%)",
        }}
      />
      {/* Secondary gold shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 60%, rgba(207,181,59,0.06) 0%, transparent 70%)",
        }}
      />

      <GoldParticles />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-old-gold text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6"
        >
          Savannah, Georgia&apos;s Premier Logistics Partner
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-poppins font-black uppercase text-white leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          MOVING FREIGHT
        </motion.h1>
        <motion.div variants={fadeUp} className="relative">
          <h1
            className="font-poppins font-black uppercase text-white leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            THAT{" "}
            <span className="relative inline-block text-old-gold">
              MATTERS
              <span
                className="absolute left-0 bottom-0 h-[4px] w-full bg-old-gold rounded-full"
                style={{
                  boxShadow: "0 0 12px rgba(207,181,59,0.8)",
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {["24/7 Dispatch", "Port of Savannah Partner"].map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 rounded-full border border-old-gold text-old-gold text-sm font-bold uppercase tracking-widest"
              style={{ boxShadow: "0 0 10px rgba(207,181,59,0.2)" }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-10">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-10 py-4 bg-old-gold text-site-black font-poppins font-bold uppercase tracking-[0.2em] text-sm rounded hover:bg-site-black hover:text-old-gold border-2 border-old-gold transition-all duration-300"
            style={{ boxShadow: "0 0 20px rgba(207,181,59,0.4)" }}
          >
            REQUEST A QUOTE
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-1 text-old-gold/70"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="text-old-gold text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
