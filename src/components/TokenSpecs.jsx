import React from 'react'
import { motion } from 'framer-motion'
import { Coins, Users, TrendingUp, Shield } from 'lucide-react'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function TokenSpecs() {
  const { t } = useLanguage()

  const tokenSpecs = [
    {
      icon: <Coins className="text-brics-gold" size={32} />,
      title: t.tokenSpecs.supplyTitle,
      value: "1,000,000,000",
      description: t.tokenSpecs.supplyDesc
    },
    {
      icon: <TrendingUp className="text-brics-gold" size={32} />,
      title: t.tokenSpecs.taxTitle,
      value: "1%",
      description: t.tokenSpecs.taxDesc
    },
    {
      icon: <Shield className="text-brics-gold" size={32} />,
      title: t.tokenSpecs.chainTitle,
      value: "BSC",
      description: t.tokenSpecs.chainDesc
    },
    {
      icon: <Users className="text-brics-gold" size={32} />,
      title: t.tokenSpecs.communityTitle,
      value: "Global",
      description: t.tokenSpecs.communityDesc
    }
  ]

  return (
    <section id="token" className="py-20 bg-storm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="gradient-text">{t.tokenSpecs.title}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.tokenSpecs.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenSpecs.map((spec, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-bg p-6 rounded-lg h-full"
              >
                <div className="flex items-center justify-center mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 text-center">
                  {spec.title}
                </h3>
                <p className="text-2xl font-bold text-brics-gold mb-2 text-center">
                  {spec.value}
                </p>
                <p className="text-gray-400 text-center">
                  {spec.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <div className="card-bg p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-4">
                {t.tokenSpecs.contractTitle}
              </h3>
              <p className="text-gray-300 mb-6">
                {t.tokenSpecs.contractDesc}
              </p>
              <div className="bg-storm-dark p-4 rounded-lg border border-brics-gold/20">
                <p className="text-brics-gold font-mono text-sm break-all">
                  0x29c20ac9027B27f8Ee6237DC878C642821463ef9
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {t.tokenSpecs.buyPancake}
                </a>
                <a
                  href="https://bscscan.com/token/0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t.tokenSpecs.viewBscscan}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
