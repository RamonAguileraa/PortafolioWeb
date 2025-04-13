"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function AboutPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const eventosDestacados = [
    {
      image: "/tim.jpg",
      title: "Ganador - Ludic Jam",
      description:
        "Creamos un videojuego 3D cultural llamado Tibucami, desarrollado con mi equipo Bosozoku. Fuimos uno de los 10 equipos ganadores de entre 29 participantes, reconocidos por el departamento de emprendimiento del Tec de Monterrey.",
    },
    {
      image: "/mentor.png",
      title: "Mentor - NASA Space Apps Challenge",
      description:
        "Guié a equipos en diseño UI/UX, comunicación efectiva y estructuración de ideas. Participé como mentor oficial en la edición local de este evento internacional.",
    },
    {
      image: "/tim2.png",
      title: "Trabajo con mi equipo Bosozoku",
      description:
        "Junto con mi equipo Bosozoku presentamos el mvp jugable de Tibucami, basado en la cultura rarámuri y el estado de Chihuahua.",
    },
  ];

  const documentosOficiales = [
    { image: "/reconocimiento.png", title: "Reconocimiento - Ludic Jam" },
    { image: "/beca.png", title: "Beca 100% - Ludic Jam" },
    { image: "/recospace.png", title: "Mentor - NASA Space Apps" },
    { image: "/recospace2.png", title: "Mentor - Space Apps" },
  ];

  return (
    <>
      {/* Intro personal */}
      <section id="about" className="relative w-full min-h-screen bg-black text-white py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500 blur-[180px] opacity-20 z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600 blur-[160px] opacity-20 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow"
          >
            Sobre mí
          </motion.h1>

          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-500 shadow-md">
            <Image
              src="/yo2.png"
              alt="Ramón Aguilera"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            Soy Ramón Aguilera, un desarrollador web fullstack y creativo digital de Chihuahua, México. Me apasiona construir ideas que trascienden la pantalla: desde interfaces visuales impactantes hasta videojuegos con alma cultural.
            <br /><br />
            Mi formación en ingeniería y mi gusto por el arte visual me han llevado a combinar código con diseño, lógica con emociones. Disfruto crear experiencias que conectan personas con tecnología de forma intuitiva y estética.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
            {[
              { icon: "🎮", label: "Videojuegos" },
              { icon: "🎨", label: "Diseño digital" },
              { icon: "📚", label: "Aprendizaje continuo" },
              { icon: "🧠", label: "Creatividad" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="text-sm text-gray-300 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-pink-400 mt-16 text-xl font-semibold"
          >
            “Crear es mi forma de conectar con el mundo.”
          </motion.p>
        </div>
      </section>

      {/* Eventos destacados */}
      <section className="relative w-full px-6 md:px-12 py-24 bg-black text-white overflow-hidden">
        <Particles
          id="eventosParticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30 },
              color: { value: "#f472b6" },
              size: { value: { min: 0.5, max: 2 } },
              opacity: { value: 0.15 },
              move: { enable: true, speed: 0.5 },
              links: { enable: false },
            },
          }}
          className="absolute inset-0 w-full h-full z-0"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 relative z-10"
        >
          <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">
            Eventos destacados
          </span>
        </motion.h2>

        <div className="relative z-10 space-y-20 max-w-6xl mx-auto">
          {eventosDestacados.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="relative w-full md:w-1/2 h-64 rounded-xl overflow-hidden shadow-xl border border-white/10">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>

              <div className="relative w-full md:w-1/2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-lg">
                <div className="absolute inset-0 bg-pink-500/10 blur-[100px] opacity-20 pointer-events-none rounded-xl" />
                <h3 className="text-xl font-semibold text-pink-400 relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mt-3 relative z-10">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Documentos oficiales */}
      <section className="relative w-full px-6 md:px-12 py-24 bg-black text-white overflow-hidden">
        <Particles
          id="docsParticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 25 },
              color: { value: "#d946ef" },
              size: { value: { min: 0.5, max: 2.2 } },
              opacity: { value: 0.1 },
              move: { enable: true, speed: 0.4 },
              links: { enable: false },
            },
          }}
          className="absolute inset-0 w-full h-full z-0"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 relative z-10"
        >
          <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">
            Documentos oficiales
          </span>
        </motion.h2>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {documentosOficiales.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all w-full max-w-xs cursor-pointer"
                onClick={() => setSelected(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-pink-400">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal de imagen */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-3xl w-full"
              >
                <Image
                  src={selected}
                  alt="Reconocimiento ampliado"
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-2xl border border-white/10"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
