'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Coffee, Heart, Users, ArrowLeft, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useTheme } from '../../context/ThemeContext'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { theme } = useTheme()

  const stats = [
    { number: '3+', label: 'Años de experiencia', icon: Code },
    { number: '50+', label: 'Proyectos completados', icon: Coffee },
    { number: '100%', label: 'Satisfacción del cliente', icon: Heart },
    { number: '24/7', label: 'Disponibilidad', icon: Users },
  ]

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Tailwind CSS', 'Figma']
  const learning = ['Web3', 'Machine Learning', 'Rust', 'Go', 'Kubernetes']

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl" ref={ref}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 transition-colors mb-12 ${theme === 'dark' ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wide">Volver al inicio</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4">
              Sobre mí
            </p>
            <h1 className={`text-4xl lg:text-6xl font-light mb-6 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
              Ramón <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>Aguilera</span>
            </h1>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Full Stack Developer apasionado por crear experiencias digitales excepcionales.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className={`space-y-6 leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <p>
                  Soy un desarrollador web full stack con más de 3 años de experiencia
                  creando aplicaciones web modernas y escalables. Mi pasión por la
                  tecnología me ha llevado a especializarme en el ecosistema de
                  JavaScript, especialmente en React, Next.js y Node.js.
                </p>
                <p>
                  Me encanta resolver problemas complejos y crear experiencias de usuario
                  excepcionales. Siempre estoy aprendiendo nuevas tecnologías y
                  mejorando mis habilidades para mantenerme al día con las últimas
                  tendencias en desarrollo web.
                </p>
                <p>
                  Cuando no estoy programando, disfruto de la fotografía, los viajes y
                  explorar nuevas culturas. Creo que estas experiencias me ayudan a
                  pensar de manera más creativa y a entender mejor las necesidades de
                  los usuarios.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className={`text-sm tracking-wider uppercase mb-4 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 text-sm border transition-colors ${theme === 'dark' ? 'text-neutral-400 border-neutral-800 hover:border-neutral-600' : 'text-neutral-600 border-neutral-300 hover:border-neutral-400'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning */}
              <div>
                <h3 className={`text-sm tracking-wider uppercase mb-4 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Aprendiendo</h3>
                <div className="flex flex-wrap gap-2">
                  {learning.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm text-pink-400/70 border border-pink-500/20 hover:border-pink-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  className={`group inline-flex items-center gap-3 px-6 py-3 text-sm font-medium tracking-wide transition-colors ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
                >
                  Trabajemos juntos
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right - Image and stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Profile image */}
              <div className="relative">
                <div className={`absolute -inset-4 border opacity-50 ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-300'}`} />
                <div className={`relative aspect-[3/4] overflow-hidden ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
                  <Image
                    src="/yo.png"
                    alt="Ramón Aguilera"
                    fill
                    className="object-cover object-top transition-all duration-700"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 400px, 500px"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${theme === 'dark' ? 'from-neutral-950' : 'from-white'}`} />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className={`p-6 border ${theme === 'dark' ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}
                  >
                    <stat.icon className={`w-5 h-5 mb-3 ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'}`} />
                    <div className={`text-2xl font-light mb-1 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{stat.number}</div>
                    <div className={`text-xs tracking-wider uppercase ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
