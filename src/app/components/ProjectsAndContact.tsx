'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const ProjectsAndContact = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Fondo simple */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500 blur-[180px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600 blur-[160px] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          id="contacto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">
              ¿Te interesa trabajar conmigo?
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Estoy disponible para colaborar en proyectos creativos, startups o agencias. <br />
            <strong className="text-pink-400">¡Hablemos por WhatsApp!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto">
            <a
              href="https://wa.me/526142283958?text=Hola%20Ramón%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20por%20mensaje."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 text-black font-semibold bg-pink-500 hover:bg-pink-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-sm sm:text-base">Enviar mensaje por WhatsApp</span>
            </a>
            
            <a
              href="/resume.pdf"
              download="Ramon-Aguilera-CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 text-pink-400 font-semibold border-2 border-pink-500 hover:bg-pink-500 hover:text-black rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm sm:text-base">Descargar CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsAndContact
