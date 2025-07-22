import React from 'react'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden storm-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-storm-dark via-storm-gray to-storm-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brics-gold/10 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl animate-pulse-custom"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-brics-gold/20 rounded-full mb-6 animate-float">
            <div className="text-6xl font-orbitron font-bold text-brics-gold animate-glow">
              B$
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
          <span className="gradient-text">BRIC$TORM</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
          A Tempestade da Resistência Multipolar
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          A revolução financeira que quebra as barreiras do sistema tradicional. 
          Junte-se aos países BRICS na construção de um novo paradigma econômico global.
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
            Comprar BRICS
            <ArrowRight size={20} />
          </a>
          <button
            onClick={() => document.querySelector('#token').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
          >
            Saiba Mais
          </button>
        </div>

        {/* Contract Info */}
        <div className="mt-8 p-4 bg-storm-gray/50 rounded-lg border border-brics-gold/20">
          <p className="text-sm text-gray-400 mb-2">Contrato:</p>
          <p className="text-brics-gold font-mono text-sm break-all">
            0x29c20ac9027B27f8Ee6237DC878C642821463ef9
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brics-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brics-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}