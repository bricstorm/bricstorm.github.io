import React from "react";

export default function CertificateSection() {
  return (
    <section
      id="certificados"
      className="py-20 px-4 bg-black text-white text-center border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12 drop-shadow">
          CERTIFICADOS DE TRANSPARÊNCIA
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Garantimos total segurança e compromisso com a comunidade. A liquidez da BRIC$TORM foi travada publicamente.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 text-left">

          {/* Liquidez Bloqueada */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex-1">
            <h3 className="text-xl font-bold text-green-400 mb-4">🔒 Liquidez Bloqueada</h3>
            <p className="text-sm text-gray-300 mb-4">
              Travada via Mudra até 10/07/2025.
            </p>
            <a
              href="https://mudra.website/?certificate=yes&type=0&lp=0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all"
            >
              Ver Certificado
            </a>
          </div>

          {/* Token Renunciado */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex-1">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">🔓 Token Renunciado</h3>
            <p className="text-sm text-gray-300 mb-2">
              Contrato sem dono:
              <code className="block mt-1 text-sm text-gray-400">0x0000000000000000000000000000000000000000</code>
            </p>
            <img
              src="/src/assets/owner-renounced.png"
              alt="Owner Renounced"
              className="mt-4 w-full rounded-lg"
            />
          </div>

          {/* Supply Bloqueado */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex-1">
            <h3 className="text-xl font-bold text-blue-400 mb-4">🌐 Supply Bloqueado</h3>
            <p className="text-sm text-gray-300 mb-2">
              297.950.400 BRICS até 16/07/2026
            </p>
            <a
              href="https://mudra.website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
            >
              Ver no Mudra
            </a>
            <img
              src="/src/assets/supply-bloqueado.png"
              alt="Supply Bloqueado"
              className="mt-4 w-full rounded-lg"
            />
          </div>
        </div>

        {/* README opcional */}
        <div className="mt-12">
          <a
            href="https://github.com/BRICSTORM/bricstorm.github.io#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline text-sm hover:text-yellow-400"
          >
            📘 Ver README do Projeto
          </a>
        </div>
      </div>
    </section>
  );
}
