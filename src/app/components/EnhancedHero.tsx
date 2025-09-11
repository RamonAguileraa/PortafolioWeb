'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'

const MeteoriteLines = dynamic(() => import('./MeteoriteLines'), { ssr: false })
const CodeParticles = dynamic(() => import('./CodeParticles'), { ssr: false })

const EnhancedHero = () => {
  const [currentSkill, setCurrentSkill] = useState(0)
  
  const skills = [
    'React Developer',
    'Next.js Expert', 
    'TypeScript Pro',
    'Full Stack Dev',
    'UI/UX Designer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [skills.length])

  return (
    <section className="relative min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black overflow-hidden flex items-center transition-colors duration-300">
      {/* Líneas meteorito animadas */}
      <MeteoriteLines />
      
      {/* Partículas de código */}
      <CodeParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium"
            >
              <Sparkles className="h-4 w-4" />
              Disponible para proyectos
            </motion.div>

            {/* Título principal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                ¡Hola! Soy{' '}
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Ramón
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              >
                Aguilera
              </motion.div>
            </div>

            {/* Skill rotatorio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-xl lg:text-2xl text-gray-300"
            >
              <span>Desarrollador</span>
              <motion.span
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent font-semibold"
              >
                {skills[currentSkill]}
              </motion.span>
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Especializado en crear experiencias digitales excepcionales usando las 
              tecnologías más modernas. Transformo ideas en realidad a través del código.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/CV-Ramon-Aguilera.pdf"
                download="CV-Ramon-Aguilera.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
              
              <button
                onClick={() => {
                  const projectsSection = document.querySelector('#projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black font-semibold rounded-lg transition-all duration-200"
              >
                Ver Proyectos
                <ChevronDown className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Stats rápidas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: '3+', label: 'Años' },
                { number: '50+', label: 'Proyectos' },
                { number: '100%', label: 'Satisfacción' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-pink-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lado derecho - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Círculo principal */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Círculo de fondo con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 rounded-full blur-2xl opacity-15" />
              
              {/* Círculo principal */}
              <div className="relative w-full h-full bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm flex items-center justify-center">
                {/* Icono central */}
                <div className="text-8xl lg:text-9xl">👨‍💻</div>
                
                {/* Elementos flotantes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-pink-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 60}deg) translateY(-120px) translateX(-50%)`
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Elementos decorativos sutiles */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-pink-500/5 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-fuchsia-500/5 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-pink-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EnhancedHero
