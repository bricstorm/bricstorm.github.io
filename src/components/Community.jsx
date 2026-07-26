import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, MessageCircle, Send, Users, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function Community() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://x.com/BBricstorm",
      description: t.community.social.twitter
    },
    {
      name: "Telegram",
      icon: <Send size={24} />,
      url: "https://t.me/BRICSTORM_OFFICIAL",
      description: t.community.social.telegram
    },
    {
      name: "Youtube",
      icon: <MessageCircle size={24} />,
      url: "https://www.youtube.com/@BRICSTORM",
      description: t.community.social.youtube
    },
    {
      name: "Tiktok",
      icon: <Users size={24} />,
      url: "https://www.tiktok.com/@bricstorm",
      description: t.community.social.tiktok
    }
  ]

  const stats = [
    {
      value: "10K+",
      label: t.community.stats.membersLabel,
      description: t.community.stats.membersDesc
    },
    {
      value: "5",
      label: t.community.stats.countriesLabel,
      description: t.community.stats.countriesDesc
    },
    {
      value: "24/7",
      label: t.community.stats.supportLabel,
      description: t.community.stats.supportDesc
    },
    {
      value: "100%",
      label: t.community.stats.transparencyLabel,
      description: t.community.stats.transparencyDesc
    }
  ]

  return (
    <section id="community" className="py-20 bg-storm-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">{t.community.title}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.community.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="card-bg p-6 rounded-lg hover:shadow-lg hover:shadow-brics-gold/20 group block h-full"
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
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="card-bg p-6 rounded-lg text-center h-full">
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
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal delay={0.15}>
          <div className="card-bg p-8 rounded-lg text-center">
            <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-4">
              {t.community.ctaTitle}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t.community.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/BRICSTORM_OFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.community.ctaTelegram}
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t.community.ctaBuyBsc}
              </a>
              <a
                href="https://pump.fun/coin/CKVuMT1Z8PUodKhWuimBpq9RqW9sLQ13Q46wdrAdFeDW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t.community.ctaBuySolana}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
