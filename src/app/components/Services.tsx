'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Palette, TrendingUp, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

export default function Services() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const services = [
    {
      icon: Code2,
      number: '01',
      title: t.services.webDev.title,
      description: t.services.webDev.description,
    },
    {
      icon: Smartphone,
      number: '02',
      title: t.services.mobile.title,
      description: t.services.mobile.description,
    },
    {
      icon: Palette,
      number: '03',
      title: t.services.uiux.title,
      description: t.services.uiux.description,
    },
    {
      icon: TrendingUp,
      number: '04',
      title: t.services.marketing.title,
      description: t.services.marketing.description,
    },
  ]

  return (
    <section id="services" className={`relative py-16 sm:py-20 lg:py-32 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-16 lg:mb-24 text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            className="text-pink-500 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            {t.services.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: 0.1 }}
            className={`text-2xl sm:text-3xl lg:text-5xl font-light ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
          >
            {t.services.title}
            <br />
            <span className={theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}>{t.services.subtitle}</span>
          </motion.h2>
        </div>

        {/* Grid de servicios */}
        <div className={`grid sm:grid-cols-2 gap-4 sm:gap-px ${theme === 'dark' ? 'sm:bg-neutral-800' : 'sm:bg-neutral-200'}`}>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative p-6 sm:p-8 lg:p-12 transition-all duration-500 sm:border-0 ${theme === 'dark' ? 'bg-neutral-950 hover:bg-neutral-900/50 border border-neutral-800' : 'bg-white hover:bg-neutral-50 border border-neutral-200'}`}
            >
              {/* Número */}
              <span className={`absolute top-4 right-4 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-light transition-colors ${theme === 'dark' ? 'text-neutral-800/50 sm:text-neutral-800 group-hover:text-neutral-700' : 'text-neutral-200 sm:text-neutral-200 group-hover:text-neutral-300'}`}>
                {service.number}
              </span>

              {/* Contenido */}
              <div className="relative z-10">
                <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 group-hover:text-pink-500 transition-colors duration-300 mb-4 sm:mb-6 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}`} />

                <h3 className={`text-lg sm:text-xl lg:text-2xl font-light mb-2 sm:mb-4 group-hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                  {service.title}
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                  {service.description}
                </p>

                <div className={`flex items-center gap-2 group-hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>
                  <span className="text-xs sm:text-sm tracking-wide">{t.services.moreInfo}</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
