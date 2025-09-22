"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import AdvancedBackground from "./AdvancedBackground";
import CodeParticles from "./CodeParticles";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <main className="relative w-full h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden" id="inicio">
      {/* Fondo avanzado con blobs completos */}
      <AdvancedBackground variant="hero" />
      
      {/* Partículas de código */}
      <CodeParticles />
      
      {/* Partículas tipo destellos */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 700 },
            },
            color: { value: "#ff4dcd" },
            shape: { type: "circle" },
            size: {
              value: { min: 0.5, max: 1.5 },
            },
            opacity: {
              value: 0.25,
            },
            move: {
              enable: true,
              speed: 0.4,
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
              href="/resume.pdf"
              download="Ramon-Aguilera-CV.pdf"
              className="mt-8 inline-flex items-center gap-3 px-6 sm:px-8 py-4 border-2 border-pink-500 text-pink-500 font-semibold rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm sm:text-base">Descargar CV</span>
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
