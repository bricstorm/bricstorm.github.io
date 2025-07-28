import React from 'react'
import { CheckCircle, Clock, Target } from 'lucide-react'

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: "Fase 1",
      title: "Lançamento",
      status: "completed",
      items: [
        "Criação do token BRICS",
        "Deploy na Binance Smart Chain",
        "Verificação do contrato",
        "Listagem no PancakeSwap"
      ]
    },
    {
      phase: "Fase 2",
      title: "Expansão",
      status: "in-progress",
      items: [
        "Marketing nos países BRICS",
        "Parcerias estratégicas",
        "Auditoria de segurança",
        "Crescimento da comunidade"
      ]
    },
    {
      phase: "Fase 3",
      title: "Consolidação",
      status: "planned",
      items: [
        "Listagem em exchanges maiores",
        "Aplicativo móvel",
        "Staking e recompensas",
        "Governança descentralizada"
      ]
    },
    {
      phase: "Fase 4",
      title: "Revolução",
      status: "planned",
      items: [
        "Ponte entre blockchains",
        "Pagamentos internacionais",
        "Integração com bancos BRICS",
        "Ecossistema DeFi completo"
      ]
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-accent-green" size={24} />
      case 'in-progress':
        return <Clock className="text-brics-gold" size={24} />
      case 'planned':
        return <Target className="text-gray-400" size={24} />
      default:
        return <Target className="text-gray-400" size={24} />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-accent-green'
      case 'in-progress':
        return 'border-brics-gold'
      case 'planned':
        return 'border-gray-600'
      default:
        return 'border-gray-600'
    }
  }

  return (
    <section id="roadmap" className="py-20 bg-storm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nosso plano estratégico para revolucionar o sistema financeiro global 
            através da união dos países BRICS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className={`card-bg p-6 rounded-lg border-l-4 ${getStatusColor(item.status)}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-orbitron font-bold text-brics-gold">
                  {item.phase}
                </h3>
                {getStatusIcon(item.status)}
              </div>
              
              <h4 className="text-xl font-orbitron font-bold text-white mb-4">
                {item.title}
              </h4>
              
              <ul className="space-y-2">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-brics-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{subItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-bg p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-brics-gold mb-4">
              Jornada da Revolução
            </h3>
            <p className="text-gray-300 mb-6">
              Cada fase representa um passo importante na construção do novo sistema 
              financeiro multipolar. Estamos atualmente na Fase 2, expandindo nossa 
              presença no mundo crypto.
            </p>
            <div className="flex justify-center">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Participar da Revolução
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
