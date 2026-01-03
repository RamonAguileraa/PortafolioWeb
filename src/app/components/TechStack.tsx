'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFigma
} from 'react-icons/si'

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPython, name: 'Python' },
  { icon: SiFigma, name: 'Figma' },
]

export default function TechStack() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16 bg-neutral-950 border-y border-neutral-900">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-neutral-600 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-10"
        >
          Tecnologías que domino
        </motion.p>

        <div className="grid grid-cols-4 sm:flex sm:flex-wrap sm:justify-center items-center gap-6 sm:gap-8 lg:gap-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <tech.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" />
              <span className="text-[8px] sm:text-[10px] text-neutral-700 group-hover:text-neutral-400 tracking-wider uppercase transition-colors duration-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
