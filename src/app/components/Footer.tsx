'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/ramon_aguileraa', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/526142283958', label: 'WhatsApp' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ramon-aguilera', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/RamonAguileraa', label: 'GitHub' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Marca */}
          <div>
            <h3 className="text-xl font-light text-white mb-2">
              Ramón <span className="font-serif italic text-neutral-500">Aguilera</span>
            </h3>
            <p className="text-neutral-600 text-sm">
              Full Stack Developer
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-neutral-600 hover:text-pink-500 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-neutral-900 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-neutral-600">
            <p>© {currentYear} Ramón Aguilera. Todos los derechos reservados.</p>
            <p>Diseñado y desarrollado con pasión.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
