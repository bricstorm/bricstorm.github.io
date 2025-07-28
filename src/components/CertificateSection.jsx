import React from "react";

export default function CertificateSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">
        🔐 Certificados de Segurança
      </h2>

      <div className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
        <p className="mb-4">
          A liquidez da BRIC$TORM foi oficialmente{" "}
          <strong className="text-blue-400">bloqueada via Mudra</strong> até{" "}
          <strong className="text-red-400">10 de julho de 2025</strong>. A
          transparência é prioridade!
        </p>

        <p className="mb-4">
          🔗 <strong>Certificado de Liquidez:</strong>{" "}
          <a
            href="https://mudra.website/?certificate=yes&type=0&lp=0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-500"
          >
            Ver Certificado
          </a>
        </p>

        <p className="mb-4">
          💠 <strong>Hash da transação (30% público):</strong>{" "}
          <a
            href="https://bscscan.com/tx/0x8a84ebfe1e1e03a73ec678823768bfc4f7bcb29c13f5dd14f7ea7d60ea87b82c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 underline hover:text-green-500"
          >
            0x8a84...b82c ↗
          </a>
        </p>

        <p className="mb-4">
          📝 <strong>Contrato do Token:</strong>{" "}
          <a
            href="https://bscscan.com/token/0x29c20ac9027B27f8Ee6237DC878C642821463ef9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline hover:text-yellow-500"
          >
            0x29c2...3ef9
          </a>
        </p>

        <p>
          💧 <strong>Contrato da Liquidez:</strong>{" "}
          <a
            href="https://bscscan.com/address/0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 underline hover:text-purple-500"
          >
            0xe1f9...4cb7
          </a>
        </p>
      </div>
    </section>
  );
}
