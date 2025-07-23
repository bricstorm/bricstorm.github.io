import React from 'react'
import { Globe, Heart, Zap, Shield, TrendingUp, Users } from 'lucide-react'

export default function WhyBricstorm() {
  const features = [
    {
      icon: <Globe className="text-brics-gold" size={32} />,
      title: "Resistência Multipolar",
      description: "Quebrando a hegemonia do sistema financeiro tradicional com a força dos países BRICS"
    },
    {
      icon: <Heart className="text-brics-gold" size={32} />,
      title: "Impacto Social",
      description: "1% de cada transação é destinada para projetos de impacto social."
    },
    {
      icon: <Zap className="text-brics-gold" size={32} />,
      title: "Tecnologia Avançada",
      description: "Blockchain segura e eficiente na Binance Smart Chain"
    },
    {
      icon: <Shield className="text-brics-gold" size={32} />,
      title: "Transparência Total",
      description: "Todas as transações são públicas e verificáveis na blockchain"
    },
    {
      icon: <TrendingUp className="text-brics-gold" size={32} />,
      title: "Crescimento Sustentável",
      description: "Tokenomics projetada para valorização a longo prazo"
    },
    {
      icon: <Users className="text-brics-gold" size={32} />,
      title: "Comunidade Global",
      description: "Unindo pessoas de Brasil, Rússia, Índia, China e África do Sul"
    }
  ]

  return (
    <section id="about" className="py-20 bg-storm-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Por que BRIC$TORM?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            BRIC$TORM é mais do que apenas uma memecoin-é um movimento.Apoiados por um contrato sólido,liquidez garantida 
            e um roeiro claro, estamos aqui para invadir o mundo das criptomoedas com uma nova visão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-bg p-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-brics-gold/20">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="card-bg p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-orbitron font-bold text-brics-gold mb-4">
                A Revolução Financeira Multipolar
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                BRIC$TORM, a memecoin revolucionária inspirada na força e na unidade dos 
                países BRICS. Construído na Binance Smart Chain(BEP-20), o BRIC$TORM se 
                destaca como um síbolo de resistência à centralização financeira.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <h4 className="text-xl font-orbitron font-bold text-brics-gold mb-4">
                  Missão
                </h4>
                <p className="text-gray-300">
                  Democratizar o acesso ao sistema financeiro global através da tecnologia 
                  blockchain, promovendo inclusão financeira nos países BRICS.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-orbitron font-bold text-brics-gold mb-4">
                  Visão
                </h4>
                <p className="text-gray-300">
                  Tornar-se a principal criptomoeda meme do bloco BRICS, facilitando 
                  transações e investimentos entre Brasil, Rússia, Índia, China e África do Sul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}