"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const tabs = ["Todos", "Web", "Videojuegos", "Marketing"];

const projects = [
  {
    title: "Marketing - El Zarandeado",
    category: "Marketing",
    link: "#",
    description: "Propuesta de marketing con un conversor de divisas en PHP y React, utilizando la API de Fixer.",
    image: "/zarandeado.png",
  },
  {
    title: "Marketing - Celda27",
    category: "Marketing",
    link: "#",
    description: "Estrategia de redes sociales que incrementó seguidores en un 200%.",
    image: "/celda27.jpg",
  },
  {
    title: "Ibenteu",
    category: "Web",
    link: "https://github.com/RamonAguileraa/aroma_cafe",
    description: "Plataforma de reservación de salones con PHP y vanilla JS.",
    image: "/IBENTEU.png",
  },
  {
    title: "€NLIGNE",
    category: "Web",
    link: "https://github.com/RamonAguileraa/rincondel_grano",
    description: "Conversor de divisas con PHP y React, integración de API Fixer.",
    image: "/enligne.png",
  },
  {
    title: "Aroma Café",
    category: "Web",
    link: "https://github.com/RamonAguileraa/aroma_cafe",
    description: "Sitio web visual para una cafetería ficticia, desarrollado en PHP.",
    image: "/cafearoma.png",
  },
  {
    title: "Rincón del Grano",
    category: "Web",
    link: "https://github.com/RamonAguileraa/rincondel_grano",
    description: "Landing page profesional para cafetería con enfoque UX/UI.",
    image: "/rinconcafe.png",
  },
  {
    title: "Noticias Canal 28",
    category: "Web",
    link: "#",
    description: "Sitio informativo para televisora Canal 28.",
    image: "/canal28.jpg",
  },
  {
    title: "Wall Or Fall (2D)",
    category: "Videojuegos",
    link: "https://github.com/RamonAguileraa/Wall-Or-Fall",
    description: "Juego de plataformas 2D desarrollado en Ingeniería.",
    image: "/wallorfall.jpg",
  },
  {
    title: "Tibucami (3D)",
    category: "Videojuegos",
    link: "#",
    description: "Ganador en Ludic Jam, videojuego sobre Chihuahua con enfoque cultural.",
    image: "/tibucami.jpg",
  },
  {
    title: "Camp Hollow (3D)",
    category: "Videojuegos",
    link: "#",
    description: "Videojuego 3D estilo aventura con exploración narrativa en campamento.",
    image: "/camphollow.jpg",
  },
];

export default function ProjectsAndContact() {
  const [activeTab, setActiveTab] = useState("Todos");
  const filtered = activeTab === "Todos" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section
      id="proyectos"
      className="scroll-mt-28 md:scroll-mt-32 relative w-full bg-gradient-to-b from-black via-[#0d0d0d] to-[#111] text-white pt-32 pb-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Fondo compartido difuminado */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500 blur-[180px] opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500 blur-[160px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-400 blur-[160px] opacity-10 pointer-events-none z-0" />

      {/* Título Proyectos */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 relative z-10"
      >
        <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">
          Proyectos personales
        </span>
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-12 relative z-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
              activeTab === tab
                ? "bg-pink-500 text-black border-pink-500"
                : "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 mb-28">
        {filtered.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.015 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition cursor-pointer"
          >
            <div className="relative w-full h-48 sm:h-52 md:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:blur-sm group-hover:scale-105 transition duration-300 will-change-transform rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Sección Contacto unificada */}
      <motion.div
        id="contacto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">
            ¿Te interesa trabajar conmigo?
          </span>
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Estoy disponible para colaborar en proyectos creativos, startups o agencias. <br />
          <strong>¡Hablemos por WhatsApp!</strong>
        </p>

        <a
          href="https://wa.me/61422833958?text=Hola%20Ramón%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20por%20mensaje."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold bg-pink-500 hover:bg-pink-400 rounded-lg transition shadow-lg"
        >
          <FaWhatsapp className="text-xl" />
          Enviar mensaje por WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
