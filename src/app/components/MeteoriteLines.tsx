'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const MeteoriteLines = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradiente para las líneas */}
          <linearGradient id="meteoriteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>

          {/* Gradiente para el efecto meteorito */}
          <radialGradient id="meteoriteGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>

          {/* Filtro para el efecto de resplandor */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Líneas horizontales estratégicamente posicionadas */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Línea 1 - Arriba del título principal */}
          <motion.path
            d="M0,200 Q300,180 600,200 T1200,200"
            stroke="url(#meteoriteGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur="5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </motion.path>


          {/* Línea 3 - Debajo del contenido principal */}
          <motion.path
            d="M0,500 Q200,480 400,500 T800,500 T1200,500"
            stroke="url(#meteoriteGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 2 }}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur="5s"
              repeatCount="indefinite"
              begin="2s"
            />
          </motion.path>

          {/* Línea 4 - Cerca del final del hero */}
          <motion.path
            d="M0,650 Q300,630 600,650 T1200,650"
            stroke="url(#meteoriteGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 2.5 }}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur="5s"
              repeatCount="indefinite"
              begin="2.5s"
            />
          </motion.path>
        </motion.g>

        {/* Meteoritos que viajan dentro de las líneas horizontales */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >

          {/* Meteoritos para línea 3 (y=500) */}
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={`meteor3-${i}`}
              cx={0}
              cy={500}
              r="1.5"
              fill="url(#meteoriteGlow)"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                cx: [0, 1200],
                cy: [500, 500]
              }}
              transition={{
                duration: 6,
                delay: 2.5 + (i * 1.8),
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}

          {/* Meteoritos para línea 4 (y=650) */}
          {[...Array(2)].map((_, i) => (
            <motion.circle
              key={`meteor4-${i}`}
              cx={0}
              cy={650}
              r="1.5"
              fill="url(#meteoriteGlow)"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                cx: [0, 1200],
                cy: [650, 650]
              }}
              transition={{
                duration: 6,
                delay: 3 + (i * 2),
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  )
})

MeteoriteLines.displayName = 'MeteoriteLines'

export default MeteoriteLines
