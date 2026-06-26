'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { ArrowUpRight, Mail } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

export default function Contact() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  const socialLinks = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/526142283958?text=Hola%20Ramón%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.',
      description: t.contact.whatsapp
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ramón-aguilera-95a2732a9',
      description: t.contact.linkedin
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/RamonAguileraa',
      description: t.contact.github
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/ramon_aguileraa',
      description: t.contact.instagram
    },
  ]

  return (
    <section id="contact" className={`relative py-16 sm:py-20 lg:py-32 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              className="text-pink-500 text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
            >
              {t.contact.label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: 0.1 }}
              className={`text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
            >
              {t.contact.title}
              <br />
              <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.contact.titleItalic}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: 0.2 }}
              className={`text-base sm:text-lg max-w-xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}
            >
              {t.contact.description}
            </motion.p>
          </div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: 0.3 }}
            className="text-center mb-10 sm:mb-16"
          >
            <a
              href="mailto:ramonaguileradve@gmail.com"
              className={`group inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-lg sm:text-2xl lg:text-4xl font-light hover:text-pink-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
            >
              <Mail className={`w-6 h-6 sm:w-8 sm:h-8 group-hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'}`} />
              <span className="break-all sm:break-normal">ramonaguileradve@gmail.com</span>
            </a>
          </motion.div>

          {/* Grid de redes sociales */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: 0.3 + index * 0.08 }}
                className={`group p-4 sm:p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700' : 'bg-white border-neutral-200 hover:border-neutral-300'}`}
              >
                <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:text-pink-500 transition-colors mb-3 sm:mb-4 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}`} />
                <h3 className={`font-light text-sm sm:text-base mb-0.5 sm:mb-1 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{link.label}</h3>
                <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>{link.description}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA Descargar CV */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: 0.6 }}
            className="text-center mt-10 sm:mt-16"
          >
            <a
              href="/resume.pdf"
              download="Ramon-Aguilera-CV.pdf"
              className={`group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border text-sm font-medium tracking-wide hover:border-pink-500 hover:text-pink-400 transition-all duration-300 ${theme === 'dark' ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-600'}`}
            >
              {t.contact.downloadCV}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
