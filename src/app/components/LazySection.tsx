'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

const LazySection = ({ children, className = '', delay = 0 }: LazySectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {isInView ? children : <div className="h-96" />}
    </motion.div>
  )
}

export default LazySection

