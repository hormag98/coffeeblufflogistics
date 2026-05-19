export default function Footer() {
  return (
    <footer className="bg-site-black">
      <div
        className="h-[1px] bg-old-gold w-full"
        style={{ boxShadow: "0 0 8px rgba(207,181,59,0.4)" }}
      />
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <span className="font-poppins font-bold text-old-gold text-base tracking-wide">
          Coffee Bluff Logistics LLC
        </span>
        <span className="text-white/40 text-xs">
          © 2026 &middot; Savannah, Georgia &middot; All Rights Reserved
        </span>
        <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
          DOT Licensed &middot; Fully Insured
        </span>
      </div>
    </footer>
  );
}
