"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Image from "next/image";
import dynamic from "next/dynamic";

const AdvancedBackground = dynamic(() => import("./AdvancedBackground"), { ssr: false })
const CodeParticles = dynamic(() => import("./CodeParticles"), { ssr: false })

const timeline = [
  {
    year: "2022",
    title: "Desarrollador Web - Aroma Café",
    description:
      "Desarrollo del sitio web para Aroma Café. Se trabajó con HTML, CSS y JS puros, brindando una interfaz limpia y funcional para el negocio.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/cafearoma.png",
  },
  {
    year: "2024",
    title: "Mentor - NASA Space Apps Challenge",
    description:
      "Participé como mentor oficial, brindando asesoría en UI/UX, comunicación efectiva y estructuración de ideas a equipos multidisciplinarios.",
    tech: ["Mentoría", "UI/UX", "Comunicación"],
    image: "/recospace.png",
  },
  {
    year: "2024",
    title: "Game Developer - Camp Hollow",
    description:
      "Diseño completo de un videojuego 3D centrado en exploración y narrativa ambiental. Se aplicaron técnicas de diseño de niveles y ambientación visual.",
    tech: ["Unity", "C#", "Level Design", "Narrativa"],
    image: "/camphollow.jpg",
  },
  {
    year: "Actualmente",
    title: "Líder de Proyecto - Tibucami",
    description:
      "Ganador de la dinamica de emprendimiento por parte del Tec de Monterrey en el Ludic Jam con un videojuego basado en la cultura rarámuri. Actualmente en desarrollo activo con mi equipo Bosozoku.",
    tech: ["Unity", "Game Design", "Cultura", "Gestión de equipo"],
    image: "/reconocimiento.png",
  },
];

export default function EnhancedExperience() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="experiencia"
      className="relative w-full bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden transition-colors duration-300"
    >
      {/* Fondo avanzado con blobs completos */}
      <AdvancedBackground variant="section" />
      
      {/* Partículas de código */}
      <CodeParticles />
      
      {/* Partículas */}
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
            color: { value: "#B76DF0" },
            shape: { type: "circle" },
            size: {
              value: { min: 0.8, max: 2 },
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
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 relative z-10"
      >
        <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_4px_#000]">
          Mi trayectoria profesional
        </span>
      </motion.h2>

      {/* Timeline vertical */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="border-l-2 border-pink-500/40 pl-4 sm:pl-6 md:pl-10 space-y-12 sm:space-y-16 lg:space-y-20">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Punto */}
              <span className="absolute -left-[0.75rem] top-2 w-4 h-4 bg-pink-500 rounded-full border-2 border-white shadow-md"></span>

              {/* Contenido */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:items-start">
                <div className="w-full md:w-64 h-32 sm:h-40 relative rounded-lg overflow-hidden shadow-md border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-pink-400 mb-2">{item.year}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs border border-pink-500 text-pink-500 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
