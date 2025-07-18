import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Token', href: '#token' },
    { name: 'Sobre', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Comunidade', href: '#community' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-storm-dark/90 backdrop-blur-md border-b border-brics-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-orbitron font-bold text-brics-gold">
              BRIC$TORM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-brics-gold transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* PancakeSwap Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Comprar BRICS
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brics-gold p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-storm-gray/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-white hover:text-brics-gold transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center"
              >
                Comprar BRICS
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}