"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import dynamic from "next/dynamic";

const AdvancedBackground = dynamic(() => import("./AdvancedBackground"), { ssr: false })
const CodeParticles = dynamic(() => import("./CodeParticles"), { ssr: false })

export default function EnhancedProjects() {

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="proyectos"
      className="relative w-full bg-white dark:bg-black text-black dark:text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden transition-colors duration-300"
    >
      {/* Fondo avanzado */}
      <AdvancedBackground variant="section" />
      
      {/* Partículas de código */}
      <CodeParticles />

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 relative z-10"
      >
        <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_4px_#000]">
          Mis proyectos destacados
        </span>
      </motion.h2>

      {/* Proyectos destacados */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl font-semibold text-center mb-8 text-pink-400"
        >
          Proyectos destacados
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300"
              // onMouseEnter={() => setHoveredProject(project.id)}
              // onMouseLeave={() => setHoveredProject(null)}
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
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-pink-500/30 text-pink-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 3} más
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 text-sm border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black rounded-lg transition-all duration-200"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 text-sm bg-pink-500 text-black hover:bg-pink-400 rounded-lg transition-all duration-200"
                    >
                      Ver proyecto
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ver todos los proyectos */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-black font-semibold rounded-lg hover:from-pink-400 hover:to-fuchsia-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Ver todos los proyectos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
