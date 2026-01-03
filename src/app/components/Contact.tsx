'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { ArrowUpRight, Mail } from 'lucide-react'

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/526142283958?text=Hola%20Ramón%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.',
    description: 'Mensaje directo'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ramon-aguilera',
    description: 'Conectemos'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/RamonAguileraa',
    description: 'Ver código'
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/ramon_aguileraa',
    description: 'Sígueme'
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-pink-500 text-xs tracking-[0.3em] uppercase mb-4"
            >
              Contacto
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl xl:text-6xl font-light text-white mb-6"
            >
              ¿Tienes un proyecto
              <br />
              <span className="font-serif italic text-neutral-400">en mente?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-lg max-w-xl mx-auto"
            >
              Estoy disponible para colaboraciones, proyectos freelance y oportunidades laborales.
            </motion.p>
          </div>

          {/* Email grande */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <a
              href="mailto:ramon.aguilera.dev@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl lg:text-4xl font-light text-white hover:text-pink-400 transition-colors"
            >
              <Mail className="w-8 h-8 text-neutral-600 group-hover:text-pink-500 transition-colors" />
              ramon.aguilera.dev@gmail.com
              <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </motion.div>

          {/* Grid de redes sociales */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group p-6 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
              >
                <link.icon className="w-6 h-6 text-neutral-500 group-hover:text-pink-500 transition-colors mb-4" />
                <h3 className="text-white font-light mb-1">{link.label}</h3>
                <p className="text-neutral-600 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA Descargar CV */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="/resume.pdf"
              download="Ramon-Aguilera-CV.pdf"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-neutral-700 text-neutral-300 text-sm font-medium tracking-wide hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
            >
              Descargar CV
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
