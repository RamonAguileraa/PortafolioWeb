'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

const TypewriterText = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '',
  onComplete 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayedText('')
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  )
}

export default TypewriterText
