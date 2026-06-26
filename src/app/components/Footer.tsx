'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/ramon_aguileraa', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/526142283958', label: 'WhatsApp' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ramón-aguilera-95a2732a9', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/RamonAguileraa', label: 'GitHub' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <footer className={`border-t ${theme === 'dark' ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-200'}`}>
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Marca */}
          <div>
            <h3 className={`text-xl font-light mb-2 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
              Ramón <span className={`font-serif italic ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}`}>Aguilera</span>
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>
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
                className={`hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'}`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Línea divisoria */}
        <div className={`border-t mt-8 pt-8 ${theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'}`}>
          <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>
            <p>© {currentYear} Ramón Aguilera. {t.footer.rights}</p>
            <a
              href="https://studioko.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-pink-500 transition-colors ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}
            >
              Hecho por <span className="font-medium text-pink-500">Studioko</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
