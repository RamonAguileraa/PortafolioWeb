'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  const navLinks = [
    { name: t.nav.home, href: '#inicio' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#selected-work' },
    { name: t.nav.experience, href: '#experience' },
    { name: '🇨🇳 China', href: '#donate' },
    { name: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)

    // If not on home page, navigate to home with hash
    if (pathname !== '/') {
      router.push('/' + id)
      return
    }

    if (id === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/50'
              : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#inicio')}
              className={`text-lg font-light tracking-wide ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
            >
              Ramón <span className="font-serif italic text-neutral-500">A.</span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-neutral-900 transition-colors tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className={`p-2 flex items-center gap-1 text-sm transition-colors ${theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium">{language}</span>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 transition-colors ${theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'}`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                href="/projects"
                className={`ml-2 px-5 py-2 text-sm transition-colors tracking-wide ${theme === 'dark' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
              >
                {t.nav.viewProjects}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={toggleLanguage}
                className={`p-2 flex items-center gap-0.5 text-xs transition-colors ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'} hover:text-pink-500`}
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium">{language}</span>
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'} hover:text-pink-500 transition-colors`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 md:hidden ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'}`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-light hover:text-pink-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className={`mt-4 px-8 py-3 text-sm tracking-wide ${theme === 'dark' ? 'bg-white text-black' : 'bg-neutral-900 text-white'}`}
                >
                  {t.nav.viewProjects}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
