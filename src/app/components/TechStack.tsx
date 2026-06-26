'use client'

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDotnet,
  SiOracle,
  SiJquery,
  SiBootstrap,
  SiMongodb,
} from 'react-icons/si'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

const technologies = [
  { icon: SiReact,       name: 'React' },
  { icon: SiNextdotjs,   name: 'Next.js' },
  { icon: SiTypescript,  name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiNodedotjs,   name: 'Node.js' },
  { icon: SiDotnet,      name: 'C# / .NET' },
  { icon: SiOracle,      name: 'Oracle' },
  { icon: SiJquery,      name: 'jQuery' },
  { icon: SiBootstrap,   name: 'Bootstrap' },
  { icon: SiMongodb,     name: 'MongoDB' },
]

export default function TechStack() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const iconClass = `w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${
    theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-neutral-900'
  }`
  const labelClass = `text-[9px] sm:text-[10px] tracking-wider uppercase transition-colors duration-300 text-center leading-tight ${
    theme === 'dark' ? 'text-neutral-700 group-hover:text-neutral-400' : 'text-neutral-500 group-hover:text-neutral-700'
  }`

  return (
    <section className={`relative py-10 sm:py-12 lg:py-16 border-y overflow-hidden ${
      theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-100 border-neutral-200'
    }`}>
      {/* Label */}
      <p className={`text-center text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-8 sm:mb-10 ${
        theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'
      }`}>
        {t.techStack.title}
      </p>

      {/* Marquee wrapper — fade edges */}
      <div className="relative">
        {/* Fade izquierda */}
        <div className={`pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-24 z-10 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-neutral-950 to-transparent'
            : 'bg-gradient-to-r from-neutral-100 to-transparent'
        }`} />
        {/* Fade derecha */}
        <div className={`pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-24 z-10 ${
          theme === 'dark'
            ? 'bg-gradient-to-l from-neutral-950 to-transparent'
            : 'bg-gradient-to-l from-neutral-100 to-transparent'
        }`} />

        {/* Track */}
        <div className="flex animate-marquee">
          {/* Dos copias para el loop sin corte */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2 mx-8 sm:mx-10 lg:mx-14 flex-shrink-0"
            >
              <tech.icon className={iconClass} />
              <span className={labelClass}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
