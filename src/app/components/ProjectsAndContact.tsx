'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { projects, Project } from '../../data/projects'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const ProjectsAndContact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack' | 'design' | 'marketing' | 'videojuegos'>('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Móvil' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'design', label: 'Diseño' },
    { key: 'marketing', label: 'Marketing' },
    { key: 'videojuegos', label: 'Videojuegos' },
  ]

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 border border-green-500/30 text-green-400'
      case 'in-progress':
        return 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400'
      case 'planned':
        return 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
      default:
        return 'bg-gray-500/20 border border-gray-500/30 text-gray-400'
    }
  }

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'Completado'
      case 'in-progress':
        return 'En progreso'
      case 'planned':
        return 'Planificado'
      default:
        return 'Desconocido'
    }
  }

  return (
    <section id="projects" className="py-20 bg-black text-white overflow-hidden relative">
      {/* Fondo con efectos similares al diseño existente */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500 blur-[180px] opacity-20 z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600 blur-[160px] opacity-20 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Mis <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow">proyectos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia y pasión por
              crear soluciones digitales innovadoras
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key as any)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === category.key
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'bg-white/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Ver código en GitHub"
                      >
                        <Github className="h-6 w-6 text-gray-800" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Ver proyecto en vivo"
                      >
                        <ExternalLink className="h-6 w-6 text-gray-800" />
                      </motion.a>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(project.startDate).getFullYear()}
                        {project.endDate && ` - ${new Date(project.endDate).getFullYear()}`}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag className="h-4 w-4" />
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              ¿Tienes un proyecto en mente?
            </motion.button>
          </motion.div>
        </motion.div>
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
          href="https://wa.me/526142283958?text=Hola%20Ramón%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20por%20mensaje."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold bg-pink-500 hover:bg-pink-400 rounded-lg transition shadow-lg"
        >
          <FaWhatsapp className="text-xl" />
          Enviar mensaje por WhatsApp
        </a>
      </motion.div>
    </section>
  )
}

export default ProjectsAndContact
