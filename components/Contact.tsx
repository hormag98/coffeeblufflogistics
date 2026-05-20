"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase";

const contactDetails = [
  { icon: "📍", label: "Savannah, Georgia 31419" },
  { icon: "📞", label: "(912) 774-3755", href: "tel:+19127743755" },
  {
    icon: "✉️",
    label: "horace@coffeeblufflogistics.com",
    href: "mailto:horace@coffeeblufflogistics.com",
  },
  { icon: "🕐", label: "24/7 Dispatch — Always Available" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value || null,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const supabase = createClient();
    const { error: sbError } = await supabase.from("quote_requests").insert([data]);

    if (sbError) {
      setError("Something went wrong. Please try again or call us directly.");
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-0">
      {/* Gold divider */}
      <div
        className="h-[1px] bg-old-gold w-full"
        style={{ boxShadow: "0 0 8px rgba(207,181,59,0.4)" }}
      />

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left panel — purple */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="px-10 py-16 flex flex-col justify-center"
          style={{ background: "#3B1F5E" }}
        >
          <p className="text-old-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">
            Get In Touch
          </p>
          <h2
            className="font-poppins font-black text-white uppercase leading-tight mb-6"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              letterSpacing: "0.02em",
            }}
          >
            READY TO MOVE
            <br />
            YOUR FREIGHT?
          </h2>
          <div
            className="h-[1px] bg-old-gold w-16 mb-8"
            style={{ boxShadow: "0 0 8px rgba(207,181,59,0.6)" }}
          />
          <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-sm">
            Whether you need a single load moved or an ongoing freight partner,
            Coffee Bluff Logistics is ready. Reach out — we respond fast, we
            quote straight, and we deliver.
          </p>
          <ul className="flex flex-col gap-5">
            {contactDetails.map(({ icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="text-xl w-6 text-center flex-shrink-0">
                  {icon}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-white/85 text-sm font-semibold hover:text-old-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-white/85 text-sm font-semibold">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right panel — black */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="px-10 py-16 flex flex-col justify-center bg-site-black"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-6">
              <span className="text-6xl">✅</span>
              <h3 className="font-poppins font-black text-white text-2xl uppercase tracking-wide">
                Message Received
              </h3>
              <p className="text-white/60 text-sm max-w-xs">
                We&apos;ll be in touch shortly. Our team responds fast — usually
                within the hour.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md w-full mx-auto">
              <h3 className="font-poppins font-black text-white text-xl uppercase tracking-widest mb-2">
                Request a Quote
              </h3>
              {[
                { name: "name", label: "Name", type: "text", required: true },
                {
                  name: "company",
                  label: "Company",
                  type: "text",
                  required: false,
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: true,
                },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="bg-white/5 border border-white/20 rounded px-4 py-3 text-white text-sm outline-none focus:border-old-gold transition-colors duration-200 placeholder-white/30"
                    placeholder={field.label}
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="bg-white/5 border border-white/20 rounded px-4 py-3 text-white text-sm outline-none focus:border-old-gold transition-colors duration-200 placeholder-white/30 resize-none"
                  placeholder="Tell us about your freight needs..."
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs font-semibold">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 px-8 py-4 bg-old-gold text-site-black font-poppins font-black uppercase tracking-[0.2em] text-sm rounded hover:bg-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 0 20px rgba(207,181,59,0.3)" }}
              >
                {loading ? "SENDING..." : "REQUEST A QUOTE"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
