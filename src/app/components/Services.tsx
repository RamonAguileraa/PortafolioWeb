'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Palette, TrendingUp, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Development',
    description: 'Desarrollo de aplicaciones web modernas con React, Next.js y TypeScript. Enfocado en rendimiento, escalabilidad y mejores prácticas.',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile Apps',
    description: 'Aplicaciones móviles nativas y multiplataforma con React Native. Experiencias fluidas para iOS y Android.',
  },
  {
    icon: Palette,
    number: '03',
    title: 'UI/UX Design',
    description: 'Diseño de interfaces intuitivas y atractivas. Prototipado en Figma con enfoque en la experiencia del usuario.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Marketing Digital',
    description: 'Estrategias de marketing digital, SEO, gestión de redes sociales y creación de contenido para impulsar tu marca.',
  },
]

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4"
          >
            Servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-light text-white"
          >
            Lo que puedo hacer
            <br />
            <span className="text-neutral-500">por ti</span>
          </motion.h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 gap-px bg-neutral-800">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-neutral-950 p-8 lg:p-12 hover:bg-neutral-900/50 transition-all duration-500"
            >
              {/* Número */}
              <span className="absolute top-8 right-8 text-neutral-800 text-6xl font-light group-hover:text-neutral-700 transition-colors">
                {service.number}
              </span>

              {/* Contenido */}
              <div className="relative z-10">
                <service.icon className="w-8 h-8 text-neutral-500 group-hover:text-pink-500 transition-colors duration-300 mb-6" />

                <h3 className="text-xl lg:text-2xl font-light text-white mb-4 group-hover:text-pink-50 transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-500 leading-relaxed mb-6 max-w-md">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-neutral-600 group-hover:text-pink-500 transition-colors">
                  <span className="text-sm tracking-wide">Más información</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-pink-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
