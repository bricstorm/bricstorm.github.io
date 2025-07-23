import React from 'react'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'
import heroImage from '../assets/hero-lion.jpg'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden storm-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-storm-dark via-storm-gray to-storm-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brics-gold/10 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl animate-pulse-custom"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img 
              src={heroImage} 
              alt="BRICSTORM - A Tempestade BRICSTORM Chegou" 
              className="w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] object-contain rounded-2xl shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
          <span className="gradient-text">O VELHO SISTEMA ESTÁ TREMENDO...</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
          A TEMPESTADE <span className="gradient-text">BRIC$TORM</span> CHEGOU
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Resistência Multipolar. A revolução financeira que quebra as barreiras do
          sistema tradicional. Junte-se à tempestade que está transformando o mundo das
          criptomoedas memes.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="card-bg p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Zap className="text-brics-gold" size={32} />
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-2">1%</h3>
            <p className="text-gray-300">Taxa para projetos sociais</p>
          </div>
          <div className="card-bg p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Shield className="text-brics-gold" size={32} />
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-2">100%</h3>
            <p className="text-gray-300">Transparência blockchain</p>
          </div>
          <div className="card-bg p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Globe className="text-brics-gold" size={32} />
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-2">5+</h3>
            <p className="text-gray-300">Países BRICS unidos</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            ⚡ COMPRAR AGORA
            <ArrowRight size={20} />
          </a>
          <button
            onClick={() => document.querySelector('#token').scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2 text-lg px-8 py-4 rounded-lg transition-colors"
          >
            📈 VER GRÁFICO
          </button>
        </div>

        {/* Contract Info */}
        <div className="mt-8 p-4 bg-card/50 rounded-lg border border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Contrato:</p>
          <p className="text-primary font-mono text-sm break-all">
            0x29c20ac9027B27f8Ee6237DC878C642821463ef9
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}