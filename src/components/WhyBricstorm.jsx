import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import heroBrics from "../assets/meme_dos_brics.png";

export default function WhyBricstorm() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-background text-white text-center"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">POR QUE BRIC$TORM?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Porque não é apenas um token meme — é o símbolo da resistência
            multipolar. Um rugido contra o sistema financeiro controlado. Uma
            revolução dos BRICS rumo à descentralização.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.img
            src={heroBrics}
            alt="BRICS Storm Mascot"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="mx-auto rounded-xl shadow-xl shadow-brics-gold/10 w-full max-w-3xl border border-brics-gold/10"
          />
        </Reveal>
      </div>
    </section>
  );
}
