'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Plane, MapPin, Target, Loader2, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'

const SUGGESTED_AMOUNTS = [100, 200, 500, 1000]
const GOAL = 115000
const RAISED = 0

export default function Donations() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<number | null>(200)
  const [custom, setCustom] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const progress = Math.min((RAISED / GOAL) * 100, 100)

  const getAmount = (): number | null => {
    if (custom) {
      const val = parseFloat(custom)
      return isNaN(val) || val < 10 ? null : Math.round(val * 100)
    }
    return selected ? selected * 100 : null
  }

  const handleDonate = async () => {
    const amount = getAmount()
    if (!amount) {
      setError(t.donate.errorMin)
      return
    }
    if (amount > 5000000) {
      setError(t.donate.errorMax)
      return
    }

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

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value)
    setSelected(null)
    setError('')
  }

  const handleSuggestedClick = (amount: number) => {
    setSelected(amount)
    setCustom('')
    setError('')
  }

  return (
    <section id="donate" className="relative overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/huazhong.jpg"
          alt="Huazhong University of Science and Technology, Wuhan"
          fill
          className="object-cover object-center"
          quality={95}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <GraduationCap className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 text-xs tracking-[0.25em] uppercase">
                  {t.donate.label}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-4 sm:mb-6"
              >
                {t.donate.title}
                <br />
                <span className="font-serif italic text-neutral-300">{t.donate.titleItalic}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              >
                {t.donate.description1}{' '}
                <span className="text-pink-400 font-medium">{t.donate.program}</span>{' '}
                — {t.donate.university}{' '}
                {t.donate.description1b}
              </motion.p>
            </div>

            {/* Story + Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 mb-6"
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{t.donate.destination}</span>
                    <MapPin className="w-3.5 h-3.5 text-white/30" />
                  </div>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {t.donate.description2}
                  </p>

                  <p className="text-neutral-400 text-sm leading-relaxed">
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

                  <p className="text-neutral-500 text-sm">{t.donate.thanks}</p>
                </div>

                {/* Stats */}
                <div className="flex sm:flex-col justify-around sm:justify-start gap-4 sm:gap-6 sm:min-w-[150px]">
                  <div className="text-center sm:text-right">
                    <p className="text-2xl sm:text-3xl font-light text-white">
                      ${RAISED.toLocaleString()}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-white/40 mt-0.5">{t.donate.raised}</p>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-2xl sm:text-3xl font-light text-white">$115k</p>
                    <p className="text-[11px] uppercase tracking-wider text-white/40 mt-0.5">{t.donate.goalLabel}</p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6 sm:mt-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-pink-400" />
                    <span className="text-xs uppercase tracking-wider text-white/40">{t.donate.progress}</span>
                  </div>
                  <span className="text-pink-400 text-sm font-medium">{progress.toFixed(0)}%</span>
                </div>
                <div className="relative h-1.5 rounded-full overflow-hidden bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full"
                  />
                </div>
                <p className="text-xs mt-2 text-white/30">
                  ${(GOAL - RAISED).toLocaleString()} {t.donate.remaining}
                </p>
              </div>
            </motion.div>

            {/* Donation widget */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
                {t.donate.chooseAmount}
              </p>

              {/* Amount buttons */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4">
                {SUGGESTED_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleSuggestedClick(amount)}
                    className={`py-3 sm:py-4 text-base sm:text-lg font-light border transition-all duration-200 ${
                      selected === amount && !custom
                        ? 'border-pink-500 text-pink-400 bg-pink-500/15'
                        : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className={`relative mb-6 border transition-colors ${
                custom ? 'border-pink-500' : 'border-white/10 focus-within:border-white/30'
              }`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-white/40">$</span>
                <input
                  type="number"
                  min="10"
                  max="50000"
                  placeholder={t.donate.customPlaceholder}
                  value={custom}
                  onChange={handleCustomChange}
                  className="w-full bg-transparent pl-8 pr-16 py-3.5 text-base outline-none text-white placeholder-white/20"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-white/30">
                  MXN
                </span>
              </div>

              {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

              {/* CTA */}
              <button
                onClick={handleDonate}
                disabled={loading}
                className="group w-full flex items-center justify-center gap-3 py-4 sm:py-5 bg-pink-500 hover:bg-pink-400 disabled:bg-pink-500/40 text-white text-base font-medium tracking-wide transition-all duration-200"
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

              <p className="text-center text-xs mt-4 text-white/25">
                {t.donate.secure}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
