'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Download } from 'lucide-react'

const EnhancedHero = () => {
  return (
    <section className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Gradient overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

      {/* Líneas decorativas sutiles - ocultas en móvil */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Mobile: Foto arriba grande */}
        <div className="lg:hidden relative w-full h-[50vh] min-h-[350px]">
          <Image
            src="/yo.png"
            alt="Ramón Aguilera"
            fill
            className="object-cover object-top"
            priority
            quality={100}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />
        </div>

        {/* Desktop layout */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-8 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

              {/* Contenido texto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                {/* Nombre y título */}
                <div className="space-y-2 lg:space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-neutral-500 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase"
                  >
                    Full Stack Developer
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight"
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
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0"
                >
                  Creando experiencias digitales excepcionales a través del código y el diseño.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start"
                >
                  <button
                    onClick={() => {
                      const projectsSection = document.querySelector('#selected-work')
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors duration-300"
                  >
                    Ver proyectos
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-neutral-700 text-neutral-300 text-sm font-medium tracking-wide hover:border-neutral-500 hover:text-white transition-all duration-300"
                  >
                    Contacto
                  </a>

                  <a
                    href="/resume.pdf"
                    download="Ramon-Aguilera-CV.pdf"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-pink-500/30 text-pink-400 text-sm font-medium tracking-wide hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Descargar CV
                  </a>
                </motion.div>

                {/* Stats minimalistas */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 pt-6 lg:pt-8 border-t border-neutral-800"
                >
                  {[
                    { number: '3+', label: 'Años' },
                    { number: '50+', label: 'Proyectos' },
                    { number: '100%', label: 'Dedicación' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-xl sm:text-2xl font-light text-white">{stat.number}</div>
                      <div className="text-[10px] sm:text-xs text-neutral-500 tracking-wider uppercase mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Foto Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full">
                  {/* Marco decorativo */}
                  <div className="absolute -inset-4 border border-neutral-800 opacity-50" />
                  <div className="absolute -inset-8 border border-neutral-800/30" />

                  {/* Imagen */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                    <Image
                      src="/yo.png"
                      alt="Ramón Aguilera"
                      fill
                      className="object-cover object-top"
                      priority
                      quality={100}
                      unoptimized
                    />
                    {/* Overlay gradient sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
                  </div>

                  {/* Acento rosa sutil */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-24 h-24 bg-pink-500/20 blur-3xl"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll - solo desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:flex"
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
      </div>
    </section>
  )
}

export default EnhancedHero
