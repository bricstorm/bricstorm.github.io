import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const certificates = [
  {
    label: "Certificado de Liquidez",
    icon: "🔗",
    href: "https://mudra.website/?certificate=yes&type=0&lp=0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7",
    text: "Ver Certificado",
    color: "text-blue-300 hover:text-blue-500",
  },
  {
    label: "Hash da transação (30% público)",
    icon: "💠",
    href: "https://bscscan.com/tx/0x8a84ebfe1e1be628e3b8f4544e0b6db8f6849cd5794b52ef21c117bdb7a67dd7",
    text: "0x8a84...b82c",
    color: "text-green-300 hover:text-green-500",
  },
  {
    label: "Contrato do Token",
    icon: "📝",
    href: "https://bscscan.com/token/0x29c20ac9027B27f8Ee6237DC878C642821463ef9",
    text: "0x29c2...3ef9",
    color: "text-brics-gold hover:text-white",
  },
  {
    label: "Contrato da Liquidez",
    icon: "💧",
    href: "https://bscscan.com/address/0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7",
    text: "0xe1f9...4cb7",
    color: "text-purple-300 hover:text-purple-500",
  },
  {
    label: "README",
    icon: "📄",
    href: "/assets/README.pdf",
    text: "Baixar PDF",
    color: "text-purple-300 hover:text-purple-500",
  },
];

export default function CertificateSection() {
  return (
    <section className="bg-storm-dark text-white py-20 px-4 md:px-16 text-center">
      <Reveal>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brics-gold/10 text-brics-gold">
          <ShieldCheck size={28} />
        </div>
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
          <span className="gradient-text">Certificados de Segurança</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          A liquidez da BRIC$TORM foi oficialmente{" "}
          <strong className="text-brics-gold">bloqueada via Mudra</strong> até{" "}
          <strong className="text-accent-orange">10 de julho de 2026</strong>.
          A transparência é prioridade.
        </p>
      </Reveal>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        {certificates.map((cert, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <motion.a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="card-bg flex items-center justify-between gap-3 p-5 rounded-lg h-full"
            >
              <div>
                <p className="text-sm text-gray-400 mb-1">{cert.icon} {cert.label}</p>
                <p className={`font-mono text-sm underline ${cert.color}`}>{cert.text}</p>
              </div>
              <ExternalLink size={16} className="text-gray-500 flex-shrink-0" />
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
