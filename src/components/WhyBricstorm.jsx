
import React from "react";
import heroBrics from "../assets/storm_35.png";

export default function WhyBricstorm() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-background text-white text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow">
          POR QUE BRIC$TORM?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Porque não é apenas um token meme — é o símbolo da resistência multipolar. Um rugido contra o sistema financeiro controlado. Uma revolução dos BRICS rumo à descentralização.
        </p>
        <img
          src={heroBrics}
          alt="BRICS Storm Mascot"
          className="mx-auto rounded-xl shadow-xl w-full max-w-3xl"
        />
      </div>
    </section>
  );
}
