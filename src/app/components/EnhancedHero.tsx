'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Download } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

const EnhancedHero = () => {
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <section className={`relative min-h-screen overflow-hidden ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'}`}>
      {/* Gradient overlay sutil */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-neutral-900 via-neutral-950 to-black' : 'bg-gradient-to-br from-neutral-50 via-white to-neutral-100'}`} />

      {/* Líneas decorativas sutiles - ocultas en móvil */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block">
        <div className={`absolute top-0 left-1/4 w-px h-full ${theme === 'dark' ? 'bg-white' : 'bg-neutral-900'}`} />
        <div className={`absolute top-0 left-1/2 w-px h-full ${theme === 'dark' ? 'bg-white' : 'bg-neutral-900'}`} />
        <div className={`absolute top-0 left-3/4 w-px h-full ${theme === 'dark' ? 'bg-white' : 'bg-neutral-900'}`} />
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
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${theme === 'dark' ? 'to-neutral-950' : 'to-white'}`} />
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
                    className={`text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}
                  >
                    {t.hero.title}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
                  >
                    Ramón
                    <br />
                    <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>Aguilera</span>
                  </motion.h1>
                </div>

                {/* Descripción */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}
                >
                  {t.hero.description}
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
                    className={`group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
                  >
                    {t.hero.viewProjects}
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>

                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 border text-sm font-medium tracking-wide transition-all duration-300 ${theme === 'dark' ? 'border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white' : 'border-neutral-300 text-neutral-600 hover:border-neutral-500 hover:text-neutral-900'}`}
                  >
                    {t.hero.contact}
                  </a>

                  <a
                    href="/resume.pdf"
                    download="Ramon-Aguilera-CV.pdf"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-pink-500/30 text-pink-400 text-sm font-medium tracking-wide hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    {t.hero.downloadCV}
                  </a>
                </motion.div>

                {/* Stats minimalistas */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className={`grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 pt-6 lg:pt-8 border-t ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}
                >
                  {[
                    { number: '3+', label: t.hero.years },
                    { number: '50+', label: t.hero.projects },
                    { number: '100%', label: t.hero.dedication }
                  ].map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className={`text-xl sm:text-2xl font-light ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{stat.number}</div>
                      <div className={`text-[10px] sm:text-xs tracking-wider uppercase mt-1 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>{stat.label}</div>
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
                  <div className={`absolute -inset-4 border opacity-50 ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-300'}`} />
                  <div className={`absolute -inset-8 border ${theme === 'dark' ? 'border-neutral-800/30' : 'border-neutral-200/50'}`} />

                  {/* Imagen */}
                  <div className={`relative aspect-[3/4] overflow-hidden ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
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
                    <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${theme === 'dark' ? 'from-neutral-950/50' : 'from-white/50'}`} />
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
            <span className={`text-[10px] tracking-[0.2em] uppercase ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>{t.hero.scroll}</span>
            <div className={`w-px h-8 bg-gradient-to-b to-transparent ${theme === 'dark' ? 'from-neutral-600' : 'from-neutral-400'}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedHero
