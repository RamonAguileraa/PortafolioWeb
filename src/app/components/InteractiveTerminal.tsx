'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, memo, useMemo } from 'react'

const InteractiveTerminal = memo(() => {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const terminalLines = useMemo(() => [
    { text: '$ npm create next-app@latest portfolio', type: 'command' },
    { text: '✓ Creating a new Next.js app in portfolio', type: 'success' },
    { text: '✓ Installing dependencies...', type: 'info' },
    { text: '✓ Initializing git repository...', type: 'info' },
    { text: '', type: 'empty' },
    { text: '$ cd portfolio && npm run dev', type: 'command' },
    { text: '✓ Ready on http://localhost:3000', type: 'success' },
    { text: '', type: 'empty' },
    { text: '$ git add . && git commit -m "feat: add advanced animations"', type: 'command' },
    { text: '✓ 47 files changed, 1,234 insertions(+)', type: 'success' },
    { text: '', type: 'empty' },
    { text: '$ npm run build', type: 'command' },
    { text: '✓ Compiled successfully', type: 'success' },
    { text: '✓ Static generation complete', type: 'success' },
  ], [])

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine]
      if (line.type === 'empty') {
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
        }, 500)
        return
      }

      let charIndex = 0
      const typeInterval = setInterval(() => {
        if (charIndex <= line.text.length) {
          setDisplayedText(line.text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
            setDisplayedText('')
            setIsTyping(true)
          }, 1000)
        }
        }, 60) // Reducir velocidad para mejor rendimiento

      return () => clearInterval(typeInterval)
    } else {
      // Restart the animation
      setTimeout(() => {
        setCurrentLine(0)
        setDisplayedText('')
        setIsTyping(true)
      }, 4000) // Aumentar tiempo de pausa
    }
  }, [currentLine, terminalLines])

  // const getTextColor = () => {
  //   if (currentLine >= terminalLines.length) return 'text-gray-400'
  //   const line = terminalLines[currentLine]
  //   switch (line.type) {
  //     case 'command': return 'text-green-400'
  //     case 'success': return 'text-green-300'
  //     case 'info': return 'text-blue-300'
  //     default: return 'text-gray-400'
  //   }
  // }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 font-mono text-sm max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2">Terminal</span>
      </div>
      <div className="text-gray-300">
        {displayedText}
        {isTyping && <span className="animate-pulse">|</span>}
      </div>
    </motion.div>
  )
})

InteractiveTerminal.displayName = 'InteractiveTerminal'

export default InteractiveTerminal
