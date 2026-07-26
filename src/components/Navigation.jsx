import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, toggleLanguage, t } = useLanguage()

  const navItems = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.token, href: '#token' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.roadmap, href: '#roadmap' },
    { name: t.nav.community, href: '#community' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const LangToggle = () => (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 rounded-full border border-brics-gold/30 px-3 py-1 text-xs font-bold text-brics-gold hover:bg-brics-gold/10 transition-colors"
      aria-label="Toggle language"
    >
      <span className={lang === 'pt' ? 'opacity-100' : 'opacity-40'}>PT</span>
      <span className="opacity-40">/</span>
      <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
    </button>
  )

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="font-orbitron font-bold text-xl text-primary">BRIC$TORM</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <LangToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LangToggle />
            <button
              className="text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
