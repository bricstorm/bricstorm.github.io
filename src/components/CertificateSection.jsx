import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function CertificateSection() {
  const { t } = useLanguage();

  const certificates = [
    {
      label: t.certificates.liquidityLabel,
      icon: "🔗",
      href: "https://mudra.website/?certificate=yes&type=0&lp=0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7",
      text: t.certificates.liquidityText,
      color: "text-blue-300 hover:text-blue-500",
    },
    {
      label: t.certificates.txLabel,
      icon: "💠",
      href: "https://bscscan.com/tx/0x8a84ebfe1e1be628e3b8f4544e0b6db8f6849cd5794b52ef21c117bdb7a67dd7",
      text: "0x8a84...b82c",
      color: "text-green-300 hover:text-green-500",
    },
    {
      label: t.certificates.tokenContractLabel,
      icon: "📝",
      href: "https://bscscan.com/token/0x29c20ac9027B27f8Ee6237DC878C642821463ef9",
      text: "0x29c2...3ef9",
      color: "text-brics-gold hover:text-white",
    },
    {
      label: t.certificates.liquidityContractLabel,
      icon: "💧",
      href: "https://bscscan.com/address/0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7",
      text: "0xe1f9...4cb7",
      color: "text-purple-300 hover:text-purple-500",
    },
    {
      label: t.certificates.whitepaperLabel,
      icon: "📄",
      href: "/assets/README.pdf",
      text: t.certificates.whitepaperText,
      color: "text-purple-300 hover:text-purple-500",
    },
  ];

  return (
    <section className="bg-storm-dark text-white py-20 px-4 md:px-16 text-center">
      <Reveal>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brics-gold/10 text-brics-gold">
          <ShieldCheck size={28} />
        </div>
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
          <span className="gradient-text">{t.certificates.title}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          {t.certificates.descPre}{" "}
          <strong className="text-brics-gold">{t.certificates.descBold1}</strong>{" "}
          {t.certificates.descMid}{" "}
          <strong className="text-accent-orange">{t.certificates.descBold2}</strong>.{" "}
          {t.certificates.descPost}
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
