'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUpRight, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function ChinaBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src="/huazhong.jpg"
        alt="HUST Wuhan"
        fill
        className="object-cover object-[50%_70%]"
        quality={90}
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Accent line top */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center py-10 sm:py-14 lg:py-0 lg:h-[400px]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 w-full">

          {/* Mobile: centrado y compacto. Desktop: fila */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-8">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-pink-400" />
                <p className="text-pink-400 text-xs tracking-[0.25em] uppercase font-medium">
                  {t.donate.label}
                </p>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-light text-white mb-2 sm:mb-3 leading-tight">
                {t.donate.title}{' '}
                <span className="font-serif italic">{t.donate.titleItalic}</span>
              </h3>

              {/* Descripción solo en sm+ */}
              <p className="hidden sm:block text-white/80 text-sm sm:text-base max-w-lg leading-relaxed">
                {t.donate.description2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex-shrink-0 flex flex-col items-center gap-2 w-full sm:w-auto"
            >
              <Link
                href="/china"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white text-base font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-pink-900/40"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform fill-white" />
                {t.donate.donateBtn}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <p className="text-white/45 text-xs">
                Stripe · Monto libre · Seguro
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Accent line bottom */}
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </section>
  )
}
