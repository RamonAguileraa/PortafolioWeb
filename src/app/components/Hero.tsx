"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black text-white overflow-hidden" id="inicio">
      {/* Partículas tipo destellos */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 120,
              density: { enable: true, area: 700 },
            },
            color: { value: "#ff4dcd" },
            shape: { type: "circle" },
            size: {
              value: { min: 0.5, max: 1.5 },
            },
            opacity: {
              value: 0.35,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: "out",
            },
            links: { enable: false },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Contenido principal */}
      <div className="h-full flex items-center justify-center">
        <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ¡Hola! Soy{" "}
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_4px_#00000099]">
                Ramon Aguilera
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl text-justify">
              Desarrollador web fullstack enfocado en construir experiencias visuales modernas usando{" "}
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_3px_#00000099]">
                Next.js
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_3px_#00000099]">
                TypeScript
              </span>{" "}
              y{" "}
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_3px_#00000099]">
                Tailwind CSS
              </span>
              .
            </p>
            <a
              href="/CV-Ramon-Aguilera.pdf"
              download
              className="mt-6 inline-block px-6 py-3 border-2 border-pink-500 text-pink-500 font-semibold rounded-lg hover:bg-pink-500 hover:text-black transition"
            >
              Descargar CV
            </a>
          </motion.div>

          {/* Espacio para mantener el layout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="w-[240px] h-[360px] md:w-[320px] md:h-[520px] xl:w-[380px] xl:h-[580px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl md:text-5xl">👨‍💻</span>
                </div>
                <p className="text-gray-400 text-sm">Desarrollador Web</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0 C600,120 600,0 1200,100 L1200,0 L0,0 Z"
            fill="black"
          />
        </svg>
      </div>
    </main>
  );
}
