import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import banner from "../assets/banner.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 px-4 bg-storm-dark text-white"
    >
      {/* Animated storm glow orbs in the background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brics-gold/20 blur-3xl animate-drift" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent-orange/10 blur-3xl animate-drift" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-brics-gold/10 blur-3xl animate-drift" style={{ animationDelay: '9s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brics-gold/30 bg-brics-gold/10 px-4 py-1.5 text-sm font-medium text-brics-gold"
        >
          <TrendingUp size={16} />
          Resistência Multipolar · BSC & Solana
        </motion.div>

        <motion.img
          src={banner}
          alt="BRIC$TORM Banner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 w-full max-w-md rounded-xl shadow-2xl shadow-brics-gold/10 animate-float"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4"
        >
          O VELHO SISTEMA <span className="gradient-text">ESTÁ TREMENDO</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl mb-6 text-white font-semibold"
        >
          A TEMPESTADE <span className="text-brics-gold">BRIC$TORM</span> CHEGOU
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Resistência multipolar. A revolução financeira que quebra as barreiras
          do sistema tradicional. Junte-se à tempestade que está transformando o
          mundo das criptomoedas meme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            COMPRAR AGORA <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="https://www.geckoterminal.com/bsc/pools/0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            VER GRÁFICO
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
