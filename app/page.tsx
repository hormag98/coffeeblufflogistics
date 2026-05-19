import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function GoldDivider() {
  return (
    <div
      className="h-[1px] bg-old-gold w-full"
      style={{ boxShadow: "0 0 8px rgba(207,181,59,0.35)" }}
    />
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <GoldDivider />
      <Services />
      <GoldDivider />
      <About />
      <GoldDivider />
      <Coverage />
      <Contact />
      <Footer />
    </main>
  );
}
