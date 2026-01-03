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
    <section className="relative py-16 bg-neutral-950 border-y border-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-neutral-600 text-xs tracking-[0.3em] uppercase mb-10"
        >
          Tecnologías que domino
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center gap-2"
            >
              <tech.icon className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" />
              <span className="text-[10px] text-neutral-700 group-hover:text-neutral-400 tracking-wider uppercase transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
