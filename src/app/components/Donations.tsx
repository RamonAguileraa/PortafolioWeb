'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Target, Loader2, GraduationCap, Plane } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'

const GOAL = 115000
const RAISED = 0

export default function Donations() {
  const { t } = useLanguage()
  const [custom, setCustom] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const progress = Math.min((RAISED / GOAL) * 100, 100)

  const getAmount = (): number | null => {
    const val = parseFloat(custom)
    return isNaN(val) || val < 10 ? null : Math.round(val * 100)
  }

  const handleDonate = async () => {
    const amount = getAmount()
    if (!amount) { setError(t.donate.errorMin); return }
    if (amount > 5000000) { setError(t.donate.errorMax); return }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error')
      window.location.href = data.url
    } catch {
      setError(t.donate.errorGeneric)
      setLoading(false)
    }
  }

  return (
    /* h-screen - navbar (h-20 = 5rem), mt-20 para no quedar bajo la navbar */
    <section
      id="donate"
      className="relative overflow-hidden"
      style={{ height: 'calc(100vh - 5rem)', marginTop: '5rem' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/huazhong.jpg"
          alt="Huazhong University of Science and Technology, Wuhan"
          fill
          className="object-cover object-top"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/72 to-black/88" />
      </div>

      {/* Content — fills the whole section */}
      <div className="relative z-10 h-full flex flex-col px-5 sm:px-6 lg:px-12 py-6 sm:py-8 max-w-5xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6 flex-shrink-0"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-xs tracking-[0.25em] uppercase font-medium">
              {t.donate.label}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light text-white leading-tight mb-2">
            {t.donate.title}{' '}
            <span className="font-serif italic">{t.donate.titleItalic}</span>
          </h1>
          <p className="text-white/75 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            {t.donate.description1}{' '}
            <span className="text-pink-400 font-semibold">{t.donate.program}</span>{' '}
            — {t.donate.university}. {t.donate.description1b}
          </p>
        </motion.div>

        {/* Two-column grid — ocupa el espacio restante */}
        <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 flex-1 min-h-0">

          {/* Left — story + stats + progress */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/8 backdrop-blur-md border border-white/15 p-4 sm:p-6 flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Plane className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                <span className="text-white text-xs font-medium">{t.donate.destination}</span>
              </div>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                {t.donate.description2}
              </p>
              <p className="text-neutral-200 text-xs leading-relaxed">
                {t.donate.description3}{' '}
                <a
                  href="https://studioko.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors underline underline-offset-2"
                >
                  Studioko.dev
                </a>
                {t.donate.description3b}
              </p>
              <p className="text-white/55 text-xs font-medium">{t.donate.thanks}</p>
            </div>

            {/* Stats + progress */}
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <div>
                  <p className="text-xl font-light text-white">${RAISED.toLocaleString()}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/45 mt-0.5">{t.donate.raised}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-light text-white">$115k</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/45 mt-0.5">{t.donate.goalLabel}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <Target className="w-3 h-3 text-pink-400" />
                    <span className="text-[10px] uppercase tracking-wider text-white/45">{t.donate.progress}</span>
                  </div>
                  <span className="text-pink-400 text-xs font-medium">{progress.toFixed(0)}%</span>
                </div>
                <div className="relative h-1 rounded-full overflow-hidden bg-white/15">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full"
                  />
                </div>
                <p className="text-[10px] mt-1 text-white/35">
                  ${(GOAL - RAISED).toLocaleString()} {t.donate.remaining}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/8 backdrop-blur-md border border-white/15 p-4 sm:p-6 flex flex-col justify-center gap-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              {t.donate.chooseAmount}
            </p>

            {/* Amount input */}
            <div className={`relative border-2 transition-colors ${
              custom ? 'border-pink-500' : 'border-white/20 focus-within:border-white/50'
            }`}>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-white/55">$</span>
              <input
                type="number"
                min="10"
                placeholder={t.donate.customPlaceholder}
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setError('') }}
                className="w-full bg-transparent pl-9 pr-16 py-4 text-2xl outline-none text-white placeholder-white/25 font-light"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-white/45 font-medium">
                MXN
              </span>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* CTA */}
            <button
              onClick={handleDonate}
              disabled={loading}
              className="group w-full flex items-center justify-center gap-3 py-4 sm:py-5 bg-pink-500 hover:bg-pink-400 disabled:bg-pink-500/40 text-white text-base sm:text-lg font-semibold tracking-wide transition-all duration-200"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform fill-white" />
                  {t.donate.donateBtn}
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-white/35">
              {t.donate.secure}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
