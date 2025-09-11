'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AdvancedBackgroundProps {
  variant?: 'hero' | 'section' | 'contact'
}

const AdvancedBackground = ({ variant = 'section' }: AdvancedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getBackgroundConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          blobs: [
            { size: 600, color: 'pink', x: 20, y: 10, delay: 0 },
            { size: 400, color: 'fuchsia', x: 80, y: 60, delay: 0.5 },
            { size: 300, color: 'purple', x: 10, y: 80, delay: 1 },
          ],
          grid: true,
          particles: true
        }
      case 'contact':
        return {
          blobs: [
            { size: 500, color: 'pink', x: 15, y: 20, delay: 0 },
            { size: 350, color: 'fuchsia', x: 75, y: 70, delay: 0.3 },
          ],
          grid: true,
          particles: false
        }
      default:
        return {
          blobs: [
            { size: 400, color: 'pink', x: 10, y: 15, delay: 0 },
            { size: 300, color: 'fuchsia', x: 85, y: 75, delay: 0.4 },
            { size: 250, color: 'purple', x: 50, y: 5, delay: 0.8 },
          ],
          grid: true,
          particles: true
        }
    }
  }

  const config = getBackgroundConfig()

  // Posiciones fijas para evitar problemas de hidratación
  const codePositions = [
    { left: 15, top: 20, x: 30, y: 40 },
    { left: 85, top: 15, x: -20, y: 25 },
    { left: 10, top: 80, x: 45, y: -30 },
    { left: 90, top: 75, x: -35, y: 20 },
    { left: 50, top: 10, x: 25, y: 50 },
    { left: 25, top: 60, x: -15, y: -25 },
    { left: 75, top: 45, x: 40, y: 15 },
    { left: 40, top: 85, x: -30, y: -40 }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      {config.grid && (
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      )}

      {/* Animated Blobs */}
      {config.blobs.map((blob, index) => (
        <motion.div
          key={index}
          initial={{ 
            scale: 0,
            opacity: 0,
            x: `${blob.x}%`,
            y: `${blob.y}%`
          }}
          animate={{ 
            scale: 1,
            opacity: 0.15,
            x: `${blob.x}%`,
            y: `${blob.y}%`
          }}
          transition={{
            duration: 2,
            delay: blob.delay,
            ease: "easeOut"
          }}
          whileHover={{
            scale: 1.1,
            opacity: 0.2,
            transition: { duration: 0.3 }
          }}
          className={`absolute w-${blob.size} h-${blob.size} rounded-full blur-3xl ${
            blob.color === 'pink' ? 'bg-pink-500' :
            blob.color === 'fuchsia' ? 'bg-fuchsia-500' :
            'bg-purple-500'
          }`}
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            filter: 'blur(120px)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      ))}

      {/* Floating Code Elements */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {codePositions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: pos.x,
                y: pos.y
              }}
              animate={{ 
                opacity: [0, 0.1, 0],
                y: [pos.y, pos.y - 100, pos.y],
                rotate: [0, 360]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              className="absolute text-pink-400/20 font-mono text-sm select-none pointer-events-none"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            >
              {['<div>', '</div>', '{ }', 'const', 'function', 'return', 'import', 'export'][i]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
    </div>
  )
}

export default AdvancedBackground
