'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, memo, useMemo } from 'react'

const CodeParticles = memo(() => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  const codeSnippets = useMemo(() => [
    'const', 'function', 'return', 'import', 'export', 'class', 'interface',
    '<div>', '</div>', '{ }', '=>', 'async', 'await', 'try', 'catch',
    'useState', 'useEffect', 'props', 'state', 'component', 'render',
    'API', 'fetch', 'JSON', 'Promise', 'TypeScript', 'React', 'Next.js'
  ], [])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (dimensions.width === 0) return null

  // Reducir el número de partículas para mejor rendimiento
  const visibleSnippets = codeSnippets.slice(0, 12)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {visibleSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height
          }}
          animate={{ 
            opacity: [0, 0.12, 0],
            y: [0, -80, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 25 + index * 3,
            repeat: Infinity,
            delay: index * 4,
            ease: "linear"
          }}
          className="absolute text-pink-400/12 font-mono text-sm select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 4 + 10}px`,
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  )
})

CodeParticles.displayName = 'CodeParticles'

export default CodeParticles
