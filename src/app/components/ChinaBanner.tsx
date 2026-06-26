'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUpRight, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function ChinaBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden h-80 sm:h-96 lg:h-[420px]">
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
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-pink-400" />
                <p className="text-pink-400 text-xs tracking-[0.25em] uppercase font-medium">
                  {t.donate.label}
                </p>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-3 leading-tight">
                {t.donate.title}{' '}
                <span className="font-serif italic text-white">{t.donate.titleItalic}</span>
              </h3>

              <p className="text-white text-sm sm:text-base max-w-lg leading-relaxed">
                {t.donate.description2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="flex-shrink-0 flex flex-col items-center gap-3"
            >
              <Link
                href="/china"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-pink-500 hover:bg-pink-400 text-white text-base font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-pink-900/40"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform fill-white" />
                {t.donate.donateBtn}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <p className="text-white/50 text-xs text-center">
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
