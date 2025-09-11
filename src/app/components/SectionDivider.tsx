'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  className?: string
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`w-full py-8 ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
      />
    </div>
  )
}

export default SectionDivider

