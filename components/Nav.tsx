"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Services", "About", "Coverage", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 scale-[0.99]" : "py-5"
      } bg-site-black/80 backdrop-blur-md border-b border-old-gold/60`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="font-poppins font-bold text-base md:text-lg text-white tracking-tight group-hover:text-old-gold transition-colors duration-200">
            Coffee Bluff Logistics
          </span>
          <span className="w-2 h-2 rounded-full bg-old-gold mt-0.5 flex-shrink-0" />
          <span className="font-poppins font-bold text-base md:text-lg text-white tracking-tight group-hover:text-old-gold transition-colors duration-200">
            LLC
          </span>
        </button>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="font-poppins font-semibold text-sm text-white hover:text-old-gold transition-colors duration-200 tracking-wide uppercase"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <button
          onClick={() => handleNav("Contact")}
          className="md:hidden text-xs font-bold uppercase tracking-widest bg-old-gold text-site-black px-4 py-2 rounded hover:bg-white transition-colors duration-200"
        >
          Quote
        </button>
      </div>
    </motion.nav>
  );
}
