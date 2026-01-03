'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

const EnhancedHero = () => {
  return (
    <section className="relative min-h-screen bg-neutral-950 text-white overflow-hidden flex items-center">
      {/* Gradient overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

      {/* Líneas decorativas sutiles */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Nombre y título */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-neutral-500 text-sm tracking-[0.3em] uppercase"
              >
                Full Stack Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight"
              >
                Ramón
                <br />
                <span className="font-serif italic text-neutral-400">Aguilera</span>
              </motion.h1>
            </div>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-md"
            >
              Creando experiencias digitales excepcionales a través del código y el diseño.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => {
                  const projectsSection = document.querySelector('#selected-work')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors duration-300"
              >
                Ver proyectos
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-neutral-700 text-neutral-300 text-sm font-medium tracking-wide hover:border-neutral-500 hover:text-white transition-all duration-300"
              >
                Contacto
              </a>
            </motion.div>

            {/* Stats minimalistas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-12 pt-8 border-t border-neutral-800"
            >
              {[
                { number: '3+', label: 'Años experiencia' },
                { number: '50+', label: 'Proyectos' },
                { number: '100%', label: 'Dedicación' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-light text-white">{stat.number}</div>
                  <div className="text-xs text-neutral-500 tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border border-neutral-800 opacity-50" />
              <div className="absolute -inset-8 border border-neutral-800/30" />

              {/* Imagen */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <Image
                  src="/yo.png"
                  alt="Ramón Aguilera"
                  fill
                  className="object-cover object-top transition-all duration-700"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 400px, 600px"
                  unoptimized
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Acento rosa sutil */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-20 h-20 bg-pink-500/20 blur-2xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-neutral-600 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EnhancedHero
