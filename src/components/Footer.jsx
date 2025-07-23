import React from 'react'
import { Twitter, Send, MessageCircle, Users, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://x.com/BBricstorm"
    },
    {
      name: "Telegram",
      icon: <Send size={20} />,
      url: "https://t.me/BRICSTORM_OFFICIAL"
    },
    {
      name: "Youtube",
      icon: <MessageCircle size={20} />,
      url: "https://www.youtube.com/@BRICSTORM"
    },
    {
      name: "Tiktok",
      icon: <Users size={20} />,
      url: "https://www.tiktok.com/@bricstorm"
    }
  ]

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Token", href: "#token" },
    { name: "Sobre", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Comunidade", href: "#community" }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-storm-gray border-t border-brics-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-orbitron font-bold text-brics-gold mb-4">
              BRIC$TORM
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A revolução financeira multipolar que está transformando o sistema 
              econômico global através da união dos países BRICS.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brics-gold transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-bold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-brics-gold transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contract Info */}
          <div>
            <h4 className="text-lg font-orbitron font-bold text-white mb-4">
              Contrato
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Endereço:</p>
                <p className="text-brics-gold font-mono text-xs break-all">
                  0x29c20ac9027B27f8Ee6237DC878C642821463ef9
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Blockchain:</p>
                <p className="text-white">Binance Smart Chain</p>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brics-gold hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
                >
                  PancakeSwap <ExternalLink size={12} />
                </a>
                <a
                  href="https://bscscan.com/token/0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brics-gold hover:text-white transition-colors duration-200 text-sm flex items-center gap-1"
                >
                  BSCScan <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brics-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} BRIC$TORM. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Feito com ❤️ para a revolução multipolar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}