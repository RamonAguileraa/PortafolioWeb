'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Coffee, Heart, Users, ArrowLeft, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '3+', label: 'Años de experiencia', icon: Code },
    { number: '50+', label: 'Proyectos completados', icon: Coffee },
    { number: '100%', label: 'Satisfacción del cliente', icon: Heart },
    { number: '24/7', label: 'Disponibilidad', icon: Users },
  ]

  const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Tailwind CSS', 'Figma']
  const learning = ['Web3', 'Machine Learning', 'Rust', 'Go', 'Kubernetes']

  return (
    <div className="min-h-screen bg-neutral-950 pt-20">
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
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12"
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
            <h1 className="text-4xl lg:text-6xl font-light text-white mb-6">
              Ramón <span className="font-serif italic text-neutral-400">Aguilera</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
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
              <div className="space-y-6 text-neutral-400 leading-relaxed">
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
                <h3 className="text-white text-sm tracking-wider uppercase mb-4">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm text-neutral-400 border border-neutral-800 hover:border-neutral-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning */}
              <div>
                <h3 className="text-white text-sm tracking-wider uppercase mb-4">Aprendiendo</h3>
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
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
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
                <div className="absolute -inset-4 border border-neutral-800 opacity-50" />
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                  <Image
                    src="/yo.png"
                    alt="Ramón Aguilera"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
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
                    className="p-6 bg-neutral-900/50 border border-neutral-800"
                  >
                    <stat.icon className="w-5 h-5 text-neutral-600 mb-3" />
                    <div className="text-2xl font-light text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-neutral-500 tracking-wider uppercase">{stat.label}</div>
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
