'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

export default function ChinaBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden h-64 sm:h-72">
      {/* Background */}
      <Image
        src="/huazhong.jpg"
        alt="HUST Wuhan"
        fill
        className="object-cover object-center"
        quality={85}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-pink-400 text-xs tracking-[0.25em] uppercase mb-2">
                {t.donate.label}
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                {t.donate.title}{' '}
                <span className="font-serif italic text-neutral-300">{t.donate.titleItalic}</span>
              </h3>
              <p className="text-neutral-400 text-sm max-w-md">
                {t.donate.description2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <Link
                href="/china"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white text-sm font-medium tracking-wide transition-all duration-200"
              >
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform fill-white" />
                {t.donate.donateBtn}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
