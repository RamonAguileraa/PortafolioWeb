'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

const HeroSVGPatterns = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradiente para las líneas */}
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
          </linearGradient>

          {/* Patrón de código/terminal */}
          <pattern
            id="codePattern"
            x="0"
            y="0"
            width="300"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Líneas de código simuladas */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <motion.path
                d="M20,30 L280,30"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1 }}
              />
              <motion.path
                d="M20,60 L250,60"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1.5 }}
              />
              <motion.path
                d="M20,90 L200,90"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 2 }}
              />
              <motion.path
                d="M20,120 L280,120"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 2.5 }}
              />
              <motion.path
                d="M20,150 L180,150"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 3 }}
              />
            </motion.g>
          </pattern>

          {/* Patrón de conexiones de red */}
          <pattern
            id="networkPattern"
            x="0"
            y="0"
            width="400"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 1 }}
            >
              {/* Nodos de red */}
              <motion.circle
                cx="50"
                cy="50"
                r="3"
                fill="url(#heroGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
              <motion.circle
                cx="200"
                cy="80"
                r="3"
                fill="url(#heroGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
              <motion.circle
                cx="350"
                cy="120"
                r="3"
                fill="url(#heroGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
              />
              <motion.circle
                cx="100"
                cy="200"
                r="3"
                fill="url(#heroGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
              />
              <motion.circle
                cx="300"
                cy="250"
                r="3"
                fill="url(#heroGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 3.5 }}
              />

              {/* Conexiones con efecto de pulso */}
              <motion.path
                d="M50,50 Q125,65 200,80"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 }}
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin="2s"
                />
              </motion.path>
              
              <motion.path
                d="M200,80 Q275,100 350,120"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2.5 }}
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin="2.5s"
                />
              </motion.path>

              <motion.path
                d="M50,50 Q75,125 100,200"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 3 }}
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin="3s"
                />
              </motion.path>

              <motion.path
                d="M200,80 Q250,165 300,250"
                stroke="url(#heroGradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin="3.5s"
                />
              </motion.path>
            </motion.g>
          </pattern>

          {/* Patrón de datos/partículas */}
          <pattern
            id="dataPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 2 }}
            >
              {/* Partículas de datos flotantes - optimizadas */}
              {[...Array(4)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={20 + (i * 40)}
                  cy={30 + (i * 30)}
                  r="1.5"
                  fill="url(#heroGradient)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: 2 + (i * 0.5),
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              ))}
            </motion.g>
          </pattern>
        </defs>

        {/* Aplicar patrones al fondo */}
        <rect width="100%" height="100%" fill="url(#codePattern)" />
        <rect width="100%" height="100%" fill="url(#networkPattern)" />
        <rect width="100%" height="100%" fill="url(#dataPattern)" />

        {/* Líneas de conexión principales con pulso */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.path
            d="M0,400 Q300,350 600,400 T1200,400"
            stroke="url(#heroGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 2 }}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
            />
          </motion.path>
          
          <motion.path
            d="M0,600 Q400,550 800,600 T1200,600"
            stroke="url(#heroGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="15,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 2.5 }}
          >
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur="4s"
              repeatCount="indefinite"
              begin="2.5s"
            />
          </motion.path>
        </motion.g>
      </svg>
    </div>
  )
})

HeroSVGPatterns.displayName = 'HeroSVGPatterns'

export default HeroSVGPatterns
