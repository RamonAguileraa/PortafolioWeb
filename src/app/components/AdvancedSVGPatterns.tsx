'use client'

import { motion } from 'framer-motion'

interface AdvancedSVGPatternsProps {
  variant?: 'hero' | 'section' | 'contact'
}

const AdvancedSVGPatterns = ({ variant = 'section' }: AdvancedSVGPatternsProps) => {
  const getPatternConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          opacity: 0.08,
          strokeWidth: 1.5,
          animationDuration: 8,
          patternDensity: 'high'
        }
      case 'contact':
        return {
          opacity: 0.06,
          strokeWidth: 1,
          animationDuration: 12,
          patternDensity: 'medium'
        }
      default:
        return {
          opacity: 0.05,
          strokeWidth: 1,
          animationDuration: 10,
          patternDensity: 'medium'
        }
    }
  }

  const config = getPatternConfig()

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradientes para las líneas */}
          <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="fuchsiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>

          {/* Patrones de líneas */}
          <pattern
            id="circuitPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M20,20 L180,20 L180,180 L20,180 Z M50,50 L150,50 M50,150 L150,150 M50,50 L50,150 M150,50 L150,150 M100,20 L100,50 M100,150 L100,180 M20,100 L50,100 M150,100 L180,100"
              stroke="url(#pinkGradient)"
              strokeWidth={config.strokeWidth}
              fill="none"
              opacity={config.opacity}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: config.opacity }}
              transition={{ duration: config.animationDuration, ease: "easeInOut" }}
            />
          </pattern>

          <pattern
            id="neuralPattern"
            x="0"
            y="0"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: config.opacity }}
              transition={{ duration: config.animationDuration, delay: 1 }}
            >
              {/* Nodos neurales */}
              <circle cx="50" cy="50" r="3" fill="url(#pinkGradient)" />
              <circle cx="150" cy="80" r="3" fill="url(#fuchsiaGradient)" />
              <circle cx="250" cy="120" r="3" fill="url(#pinkGradient)" />
              <circle cx="80" cy="200" r="3" fill="url(#fuchsiaGradient)" />
              <circle cx="200" cy="250" r="3" fill="url(#pinkGradient)" />
              
              {/* Conexiones */}
              <motion.path
                d="M50,50 Q100,65 150,80"
                stroke="url(#pinkGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 0.5 }}
              />
              <motion.path
                d="M150,80 Q200,100 250,120"
                stroke="url(#fuchsiaGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 1.5 }}
              />
              <motion.path
                d="M50,50 Q65,125 80,200"
                stroke="url(#pinkGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 2 }}
              />
              <motion.path
                d="M150,80 Q175,165 200,250"
                stroke="url(#fuchsiaGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 2.5 }}
              />
            </motion.g>
          </pattern>

          <pattern
            id="dataFlowPattern"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: config.opacity }}
              transition={{ duration: config.animationDuration, delay: 2 }}
            >
              {/* Líneas de flujo de datos */}
              <motion.path
                d="M0,100 Q100,50 200,100 T400,100"
                stroke="url(#pinkGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 3 }}
              />
              <motion.path
                d="M0,200 Q100,150 200,200 T400,200"
                stroke="url(#fuchsiaGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                strokeDasharray="15,10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 3.5 }}
              />
              <motion.path
                d="M0,300 Q100,250 200,300 T400,300"
                stroke="url(#pinkGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                strokeDasharray="8,12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 4 }}
              />
              
              {/* Puntos de datos */}
              <motion.circle
                cx="50"
                cy="100"
                r="2"
                fill="url(#pinkGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 3.2 }}
              />
              <motion.circle
                cx="150"
                cy="200"
                r="2"
                fill="url(#fuchsiaGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 3.7 }}
              />
              <motion.circle
                cx="250"
                cy="300"
                r="2"
                fill="url(#pinkGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 4.2 }}
              />
            </motion.g>
          </pattern>

          <pattern
            id="hexagonPattern"
            x="0"
            y="0"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: config.opacity }}
              transition={{ duration: config.animationDuration, delay: 1.5 }}
            >
              <motion.path
                d="M75,10 L135,40 L135,100 L75,130 L15,100 L15,40 Z"
                stroke="url(#fuchsiaGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 2 }}
              />
              <motion.path
                d="M75,40 L105,55 L105,85 L75,100 L45,85 L45,55 Z"
                stroke="url(#pinkGradient)"
                strokeWidth={config.strokeWidth}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: config.animationDuration, delay: 2.5 }}
              />
            </motion.g>
          </pattern>
        </defs>

        {/* Aplicar patrones al fondo */}
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        <rect width="100%" height="100%" fill="url(#neuralPattern)" />
        <rect width="100%" height="100%" fill="url(#dataFlowPattern)" />
        <rect width="100%" height="100%" fill="url(#hexagonPattern)" />

        {/* Líneas de conexión adicionales */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: config.opacity * 0.7 }}
          transition={{ duration: config.animationDuration, delay: 3 }}
        >
          <motion.path
            d="M0,400 Q300,350 600,400 T1200,400"
            stroke="url(#pinkGradient)"
            strokeWidth={config.strokeWidth}
            fill="none"
            strokeDasharray="20,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: config.animationDuration * 1.5, delay: 4 }}
          />
          <motion.path
            d="M0,600 Q400,550 800,600 T1200,600"
            stroke="url(#fuchsiaGradient)"
            strokeWidth={config.strokeWidth}
            fill="none"
            strokeDasharray="15,15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: config.animationDuration * 1.5, delay: 4.5 }}
          />
        </motion.g>
      </svg>
    </div>
  )
}

export default AdvancedSVGPatterns

