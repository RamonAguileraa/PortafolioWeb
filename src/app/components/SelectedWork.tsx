'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6)

  return (
    <section id="selected-work" className="relative py-24 lg:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4"
            >
              Portafolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-light text-white"
            >
              Selected <span className="font-serif italic text-neutral-400">Work</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mt-6 lg:mt-0"
            >
              <span className="text-sm tracking-wide">Ver todos</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Contenedor de imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Botón de ver */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Categoría */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] tracking-wider uppercase bg-black/50 backdrop-blur-sm text-white border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="space-y-3">
                <h3 className="text-xl font-light text-white group-hover:text-pink-50 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-neutral-600 tracking-wider uppercase"
                    >
                      {tech}
                      {i < 2 && project.technologies.length > 1 && <span className="ml-2">•</span>}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors duration-300"
          >
            Explorar todos los proyectos
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
