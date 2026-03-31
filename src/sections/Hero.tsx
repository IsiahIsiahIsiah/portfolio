import * as React from "react";
import Navbar from "@/components/Navbar";

export const Hero: React.FC = () => {
  return (
    <section className="hero min-h-dvh text-center py-20">
      <Navbar />
      <div className="text-left px-8 py-50">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 pt-10 leading-tight">
          Web App Design and Development
        </h1>
        <p className="text-lg text-white/60">I make it happen.</p>
      </div>
    </section>
  );
}

export default Hero;
