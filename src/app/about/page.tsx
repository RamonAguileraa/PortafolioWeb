'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Coffee, Heart, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'
import LiveStats from '../components/LiveStats'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const stats = [
    { number: '3+', label: 'Años de experiencia', icon: Code },
    { number: '50+', label: 'Proyectos completados', icon: Coffee },
    { number: '100%', label: 'Satisfacción del cliente', icon: Heart },
    { number: '24/7', label: 'Disponibilidad', icon: Users },
  ]

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden relative">
      {/* Fondo simple */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500 blur-[180px] opacity-10" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600 blur-[160px] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Conoce más sobre mí
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              Sobre{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">mí</span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              Un apasionado desarrollador web con una visión clara de crear
              soluciones digitales que marquen la diferencia
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  Soy Ramón Aguilera, un desarrollador web full stack con más de 3 años de experiencia
                  creando aplicaciones web modernas y escalables. Mi pasión por la
                  tecnología me ha llevado a especializarme en el ecosistema de
                  JavaScript, especialmente en React, Next.js y Node.js.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Me encanta resolver problemas complejos y crear experiencias de usuario
                  excepcionales. Siempre estoy aprendiendo nuevas tecnologías y
                  mejorando mis habilidades para mantenerme al día con las últimas
                  tendencias en desarrollo web.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Cuando no estoy programando, disfruto de la fotografía, los viajes y
                  explorar nuevas culturas. Creo que estas experiencias me ayudan a
                  pensar de manera más creativa y a entender mejor las necesidades de
                  los usuarios.
                </p>
              </div>

              {/* Skills Preview */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 mt-8"
              >
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-black p-2 rounded-2xl">
                  <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-96">
                    <Image
                      src="/yo.png"
                      alt="Ramón Aguilera"
                      fill
                      className="object-cover"
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-200"
                  >
                    <stat.icon className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Estadísticas en vivo */}
          <motion.div
            variants={itemVariants}
            className="mt-16 mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                Estadísticas en tiempo real
              </span>
            </h3>
            <LiveStats />
          </motion.div>

          {/* Learning Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Siempre aprendiendo
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              La tecnología evoluciona constantemente, y yo también. Actualmente estoy
              explorando nuevas tecnologías y mejorando mis habilidades existentes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Web3', 'Machine Learning', 'Rust', 'Go', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contacto')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Trabajemos juntos
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
