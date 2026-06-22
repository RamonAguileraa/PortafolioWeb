'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, Heart, ArrowLeft } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function SuccessPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className={`min-h-screen flex items-center justify-center px-5 ${isDark ? 'bg-neutral-950' : 'bg-white'}`}>
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <CheckCircle2 className="w-20 h-20 text-pink-500" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute -top-1 -right-1"
            >
              <Heart className="w-7 h-7 text-pink-400 fill-pink-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-3xl sm:text-4xl font-light mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}
        >
          ¡Muchas{' '}
          <span className="font-serif italic text-pink-500">gracias!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className={`text-base sm:text-lg leading-relaxed mb-3 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}
        >
          Tu apoyo significa muchísimo para mí. Gracias a personas como tú este sueño de ir a China se vuelve realidad.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className={`text-sm mb-10 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}
        >
          Recibirás actualizaciones de mi aventura. Nos vemos desde el otro lado del mundo. 🌏
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center gap-2 px-6 py-3 border text-sm tracking-wide transition-all duration-300 hover:border-pink-500 hover:text-pink-400 ${
              isDark ? 'border-neutral-700 text-neutral-300' : 'border-neutral-300 text-neutral-600'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portafolio
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
