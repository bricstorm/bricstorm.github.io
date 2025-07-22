import React from 'react'
import { Twitter, MessageCircle, Send, Users, ExternalLink } from 'lucide-react'

export default function Community() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://x.com/BBricstorm",
      description: "Siga-nos para atualizações em tempo real"
    },
    {
      name: "Telegram",
      icon: <Send size={24} />,
      url: "https://t.me/BRICSTORM_OFFICIAL",
      description: "Junte-se à nossa comunidade global"
    },
    {
      name: "Discord",
      icon: <MessageCircle size={24} />,
      url: "https://discord.gg/bricstorm",
      description: "Participe das discussões da comunidade"
    },
    {
      name: "Tiktok",
      icon: <Users size={24} />,
      url: "https://www.tiktok.com/@bricstorm",
      description: "Compartilhe ideias e novidades"
    },
    {
      name: "Youtube",
      icon: <Users size={24} />,
      url: "https://www.youtube.com/@BRICSTORM",
      description: "Compartilhe ideias e novidades"
    }

  ]

  const stats = [
    {
      value: "10K+",
      label: "Membros da Comunidade",
      description: "Crescendo diariamente"
    },
    {
      value: "5",
      label: "Países BRICS",
      description: "Unidos pela revolução"
    },
    {
      value: "24/7",
      label: "Suporte Ativo",
      description: "Comunidade sempre online"
    },
    {
      value: "100%",
      label: "Transparência",
      description: "Tudo é público"
    }
  ]

  return (
    <section id="community" className="py-20 bg-storm-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">Comunidade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Junte-se à nossa comunidade global e faça parte da revolução financeira 
            que está transformando o mundo
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-bg p-6 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-brics-gold/20 group"
            >
              <div className="flex items-center justify-center mb-4 text-brics-gold group-hover:text-white transition-colors">
                {social.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-2 text-center">
                {social.name}
              </h3>
              <p className="text-gray-400 text-center text-sm mb-4">
                {social.description}
              </p>
              <div className="flex items-center justify-center text-brics-gold group-hover:text-white transition-colors">
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-bg p-6 rounded-lg text-center">
              <h3 className="text-3xl font-orbitron font-bold text-brics-gold mb-2">
                {stat.value}
              </h3>
              <p className="text-white font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="card-bg p-8 rounded-lg text-center">
          <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-4">
            Faça Parte da Revolução
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            A revolução meme financeira multipolar precisa de você. Junte-se à nossa 
            comunidade e ajude a construir o futuro do sistema financeiro global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/BRICSTORM_OFFICIAL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Entrar no Telegram
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Comprar BRICS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
