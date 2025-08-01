
import React from "react";
import banner from "../assets/banner.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="text-center py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <img
          src={banner}
          alt="BRIC$TORM Banner"
          className="mx-auto mb-8 w-full max-w-md rounded-xl shadow-2xl"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow-md mb-4">
          O VELHO SISTEMA ESTÁ TREMENDO...
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-white font-semibold">
          A TEMPESTADE <span className="text-yellow-300">BRIC$TORM</span> CHEGOU
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Resistência Multipolar. A revolução financeira que quebra as barreiras do sistema tradicional. Junte-se à tempestade que está transformando o mundo das criptomoedas memes.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
          >
            COMPRAR AGORA
          </a>
          <a
            href="https://www.geckoterminal.com/bsc/pools/0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
          >
            VER GRÁFICO
          </a>
        </div>
      </div>
    </section>
  );
}
