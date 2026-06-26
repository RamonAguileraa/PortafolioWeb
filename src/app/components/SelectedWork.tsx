'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

export default function SelectedWork() {
  const { theme } = useTheme()
  const { t } = useLanguage()
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6)

  return (
    <section id="selected-work" className={`relative py-16 sm:py-20 lg:py-32 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-50'}`}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-16 lg:mb-20 text-center sm:text-left">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              className="text-pink-500 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
            >
              {t.selectedWork.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: 0.1 }}
              className={`text-2xl sm:text-3xl lg:text-5xl font-light ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
            >
              {t.selectedWork.title} <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.selectedWork.titleItalic}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-0"
          >
            <Link
              href="/projects"
              className={`group inline-flex items-center gap-2 transition-colors ${theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
            >
              <span className="text-sm tracking-wide">{t.selectedWork.viewAll}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="group relative"
            >
              {/* Contenedor de imagen */}
              <div className={`relative aspect-[4/3] overflow-hidden mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-200'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  quality={85}
                  loading={index < 3 ? "eager" : "lazy"}
                  placeholder="empty"
                />
                {/* Overlay en hover - visible en móvil */}
                <div className="absolute inset-0 bg-black/30 sm:bg-black/40 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Botón de ver - solo desktop */}
                <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                </div>

                {/* Categoría */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2.5 py-1 text-[9px] sm:text-[10px] tracking-wider uppercase bg-black/50 backdrop-blur-sm text-white border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className={`text-lg sm:text-xl font-light group-hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed line-clamp-2 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[9px] sm:text-[10px] tracking-wider uppercase ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}
                    >
                      {tech}
                      {i < 2 && project.technologies.length > 1 && <span className="ml-1.5 sm:ml-2">•</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link invisible que cubre todo */}
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`Ver proyecto ${project.title}`}
                />
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "80px" }}
          transition={{ delay: 0.1 }}
          className="text-center mt-10 sm:mt-16 lg:mt-24"
        >
          <Link
            href="/projects"
            className={`group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium tracking-wide transition-colors duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
          >
            {t.selectedWork.exploreAll}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
