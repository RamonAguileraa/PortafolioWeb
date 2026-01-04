'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../../data/projects'
import Footer from '../components/Footer'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { theme } = useTheme()
  const { t } = useLanguage()

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'web', label: t.categories.web },
    { id: 'mobile', label: t.categories.mobile },
    { id: 'videojuegos', label: t.categories.videojuegos },
    { id: 'marketing', label: t.categories.marketing },
  ]

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <div className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
      {/* Header */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 transition-colors mb-12 ${theme === 'dark' ? 'text-neutral-500 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wide">{t.projectsPage.backHome}</span>
            </Link>

            <div className="max-w-2xl mb-16">
              <p className="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4">
                {t.projectsPage.label}
              </p>
              <h1 className={`text-4xl lg:text-6xl font-light mb-6 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                {t.projectsPage.title} <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.projectsPage.titleItalic}</span>
              </h1>
              <p className={`text-lg ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {t.projectsPage.description}
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 text-sm tracking-wide transition-all duration-300 ${
                    selectedCategory === category.id
                      ? theme === 'dark' ? 'bg-white text-black' : 'bg-neutral-900 text-white'
                      : theme === 'dark' ? 'bg-transparent text-neutral-500 hover:text-white border border-neutral-800 hover:border-neutral-600' : 'bg-transparent text-neutral-500 hover:text-neutral-900 border border-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid de proyectos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group"
              >
                {/* Imagen */}
                <div className={`relative aspect-[4/3] overflow-hidden mb-5 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-200'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] tracking-wider uppercase bg-black/50 backdrop-blur-sm text-white border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Botones en hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-pink-500 transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Contenido */}
                <div className="space-y-3">
                  <h3 className={`text-xl font-light group-hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-2 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[10px] tracking-wider uppercase ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}
                      >
                        {tech}
                        {i < 2 && project.technologies.length > 1 && <span className="ml-2">•</span>}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`text-[10px] ${theme === 'dark' ? 'text-neutral-700' : 'text-neutral-400'}`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Mensaje si no hay proyectos */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className={theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}>{t.projectsPage.noProjects}</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
