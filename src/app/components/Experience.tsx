'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Rocket, X, ImageIcon } from 'lucide-react'
import Image from 'next/image'

const workExperience = [
  {
    role: 'Full Stack Developer',
    company: 'Vendex.mx',
    location: 'Chihuahua, México',
    period: 'Oct 2024 - Presente',
    current: true,
    description: [
      'Desarrollo e integración de módulos internos del CRM',
      'Optimización de algoritmos de IA para scoring de leads',
      'Integración de APIs dentro de la plataforma',
      'Diseño de dashboard e interfaces internas',
      'Documentación técnica y pruebas funcionales',
      'Metodología Scrum con Jira'
    ],
    technologies: ['React', 'Node.js', 'AI/ML', 'APIs', 'Scrum']
  },
  {
    role: 'Fundador & Director Creativo',
    company: 'Studioko',
    location: 'Chihuahua, México',
    period: '2024 - Presente',
    current: true,
    link: 'https://studioko.dev',
    description: [
      'Estudio creativo especializado en desarrollo web y diseño',
      'Desarrollo de proyectos para clientes locales e internacionales',
      'Dirección creativa y estrategia digital'
    ],
    technologies: ['Next.js', 'React', 'UI/UX', 'Branding']
  },
  {
    role: 'Full Stack Developer',
    company: 'Canal 28 Chihuahua',
    location: 'Chihuahua, México',
    period: 'Ene 2023 - May 2023',
    description: [
      'Desarrollo del portal informativo de la televisora',
      'Implementación de CMS personalizado',
      'Gestión de base de datos y backend'
    ],
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'CMS']
  },
  {
    role: 'Frontend Developer - Web3',
    company: 'Aplicaciones Descentralizadas',
    location: 'Remoto',
    period: 'Ene 2023 - May 2023',
    description: [
      'Desarrollo de interfaces para aplicaciones móviles descentralizadas',
      'Integración con smart contracts y blockchain'
    ],
    technologies: ['React Native', 'Web3', 'Blockchain', 'Smart Contracts']
  }
]

const leadership = [
  {
    role: 'Líder del Club de Programación',
    organization: 'Universidad Tecnológica de Chihuahua',
    period: '2024 - Presente',
    highlights: [
      'Colaboramos en la organización de Chihuahua Tech Week 2025',
      'Organizamos eventos de Blockchain junto a Ethereum México',
      'Trabajamos de la mano con la comunidad AWS',
      'Viajamos con 8 compañeros a Ethereum México Monterrey, donde obtuvimos el 2do lugar en el Hackathon',
      'Representamos al Machaca Valley en Monterrey Tech Week',
      'Lideré al equipo BosoZoku Studio hasta ganar la beca del 100% en emprendimiento en Ludic Jam'
    ]
  }
]

const mentorship = [
  {
    event: 'NASA Space Apps Challenge',
    location: 'Chihuahua',
    years: ['2023', '2024'],
    role: 'Mentor',
    images: ['/recospace.png', '/recospace2.png']
  },
  {
    event: 'MIT Workshop Challenge',
    location: 'Tec de Monterrey',
    years: ['2024'],
    role: 'Mentor',
    images: ['/mentor.png']
  },
  {
    event: 'AIM 2025 - Artificial Intelligence Mexico',
    location: 'Chihuahua',
    years: ['2025'],
    role: 'Invitado por Startup Chihuahua',
    description: 'Primer evento internacional de IA en Chihuahua',
    images: ['/reconocimiento.png']
  }
]

const startups = [
  {
    name: 'Serena',
    type: 'PWA - Salud Reproductiva',
    description: 'App para el cuidado de la salud reproductiva femenina. Proyecto integrador reconocido por empresarios con múltiples propuestas.',
    status: 'En desarrollo'
  },
  {
    name: 'PetKeeper',
    type: 'Startup - Mascotas',
    description: 'Aplicación para gestión de mascotas iniciada en la Escuelita Maker de Chihuahua.',
    status: 'En desarrollo'
  },
  {
    name: 'BosoZoku Studio',
    type: 'Videojuegos Indie',
    description: 'Empresa de videojuegos indie. Ganadores de beca 100% en emprendimiento en Ludic Jam (Tec de Monterrey).',
    status: 'Activo',
    highlight: 'Ganadores Ludic Jam'
  }
]

export default function Experience() {
  const [selectedEvent, setSelectedEvent] = useState<{ event: string; images: string[] } | null>(null)

  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-32 bg-neutral-900">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20 text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-pink-500 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            Trayectoria
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-light text-white"
          >
            Experiencia <span className="font-serif italic text-neutral-400">& Logros</span>
          </motion.h2>
        </div>

        {/* Work Experience */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg sm:text-xl text-white mb-8 sm:mb-10"
          >
            <Briefcase className="w-5 h-5 text-pink-500" />
            Experiencia Laboral
          </motion.h3>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 border-l border-neutral-800"
              >
                {/* Dot */}
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${job.current ? 'bg-pink-500' : 'bg-neutral-700'}`} />

                <div className="bg-neutral-950 p-5 sm:p-6 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-light text-white">{job.role}</h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        {job.link ? (
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1"
                          >
                            {job.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-neutral-400">{job.company}</span>
                        )}
                        <span className="text-neutral-600 text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                      {job.current && (
                        <span className="px-2 py-0.5 text-[10px] bg-pink-500/20 text-pink-400 rounded">Actual</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-sm text-neutral-400 mb-4">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-600 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-[10px] sm:text-xs text-neutral-500 border border-neutral-800 tracking-wider uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership & Community */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg sm:text-xl text-white mb-8 sm:mb-10"
          >
            <Users className="w-5 h-5 text-pink-500" />
            Liderazgo & Comunidad
          </motion.h3>

          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-950 p-5 sm:p-6 border border-neutral-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-light text-white">{item.role}</h4>
                  <p className="text-neutral-400">{item.organization}</p>
                </div>
                <span className="text-sm text-neutral-500">{item.period}</span>
              </div>
              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="text-pink-500 mt-0.5">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mentorship & Events */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg sm:text-xl text-white mb-8 sm:mb-10"
          >
            <Award className="w-5 h-5 text-pink-500" />
            Mentoría & Eventos
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentorship.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => item.images && setSelectedEvent({ event: item.event, images: item.images })}
                className={`bg-neutral-950 p-5 border border-neutral-800 hover:border-neutral-700 transition-colors ${item.images ? 'cursor-pointer group' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-white font-light mb-1">{item.event}</h4>
                  {item.images && (
                    <ImageIcon className="w-4 h-4 text-neutral-600 group-hover:text-pink-400 transition-colors" />
                  )}
                </div>
                <p className="text-neutral-500 text-sm mb-2">{item.location}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {item.years.map((year, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] bg-neutral-800 text-neutral-400 rounded">
                      {year}
                    </span>
                  ))}
                </div>
                <p className="text-pink-400 text-sm">{item.role}</p>
                {item.description && (
                  <p className="text-neutral-600 text-xs mt-1">{item.description}</p>
                )}
                {item.images && (
                  <p className="text-neutral-700 text-[10px] mt-2 group-hover:text-neutral-500 transition-colors">Click para ver reconocimientos</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Startups & Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg sm:text-xl text-white mb-8 sm:mb-10"
          >
            <Rocket className="w-5 h-5 text-pink-500" />
            Startups & Proyectos
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-950 p-5 border border-neutral-800 hover:border-pink-500/30 transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-light group-hover:text-pink-50 transition-colors">{startup.name}</h4>
                  {startup.highlight && (
                    <span className="px-2 py-0.5 text-[9px] bg-pink-500/20 text-pink-400 rounded whitespace-nowrap">
                      {startup.highlight}
                    </span>
                  )}
                </div>
                <p className="text-pink-400/70 text-xs uppercase tracking-wider mb-2">{startup.type}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{startup.description}</p>
                <div className="mt-3 pt-3 border-t border-neutral-800">
                  <span className="text-[10px] text-neutral-600 uppercase tracking-wider">{startup.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal de reconocimientos */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-xl font-light text-white mb-6">{selectedEvent.event}</h3>

              <div className={`grid gap-4 ${selectedEvent.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                {selectedEvent.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                    <Image
                      src={img}
                      alt={`Reconocimiento ${i + 1}`}
                      fill
                      className="object-contain"
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
