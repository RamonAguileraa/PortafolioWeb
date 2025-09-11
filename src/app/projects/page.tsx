'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { projects } from '../../data/projects'
import ThemeToggle from '../components/ThemeToggle'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import dynamic from 'next/dynamic'

const AdvancedBackground = dynamic(() => import('../components/AdvancedBackground'), { ssr: false })
const CodeParticles = dynamic(() => import('../components/CodeParticles'), { ssr: false })

const categories = [
  { id: "all", label: "Todos", icon: "🎯" },
  { id: "web", label: "Web", icon: "🌐" },
  { id: "videojuegos", label: "Videojuegos", icon: "🎮" },
  { id: "marketing", label: "Marketing", icon: "📈" },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black transition-colors duration-300">
      {/* Header */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <AdvancedBackground variant="section" />
        <CodeParticles />
        
        {/* Toggle de tema */}
        <div className="absolute top-6 right-6 z-20">
          <ThemeToggle />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                Todos mis proyectos
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Una colección completa de mis trabajos, desde desarrollo web hasta videojuegos y estrategias de marketing.
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-pink-500 text-black"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-pink-500 text-black rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs border border-pink-500/30 text-pink-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.technologies.length - 4} más
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black rounded-lg transition-all duration-200"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm bg-pink-500 text-black hover:bg-pink-400 rounded-lg transition-all duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver proyecto
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
