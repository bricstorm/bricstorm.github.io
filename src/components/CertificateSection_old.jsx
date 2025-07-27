import React from "react";

export default function CertificateSection() {
  return (
    <section id="certificados" className="py-20 px-4 bg-black text-white text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow">
          CERTIFICADOS DE TRANSPARÊNCIA
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Garantimos total segurança e compromisso com a comunidade. A liquidez da BRIC$TORM foi travada publicamente.
        </p>
        <a
          href="https://mudra.website/?certificate=yes&type=0&lp=0xe1f955ddc4cb3a932747a074c55cd4a0d6874cb7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
       >  
       🔒 Ver Certificado de Liquidez no Mudra
        
        <p className="text-sm text-gray-500 mt-4 italic">
          Transparência e confiança: a base da tempestade.
        </p>
       </a>
       <a
        <h3>🔓 Token Renunciado</h3>
        <p>Contrato sem dono: <code>0x0000000000000000000000000000000000000000</code></p>
        <img src="src/assets/owner-renounced.png" />
        </a>
        <a
        <h3>🌐 Supply Bloqueado</h3>
        <p>297.950.400 BRICS até 16/07/2026 — 
          <a href="https://mudra.website">Ver Mudra Manager</a>
        </p>
        <img src="src/assets/supply-bloqueado.png" />
        
      </div>
      
    </section>
  );
}
