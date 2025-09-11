'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, memo, useCallback, useMemo } from 'react'
import { Code, GitBranch, Zap, Clock } from 'lucide-react'

const LiveStats = memo(() => {
  const [stats, setStats] = useState({
    commits: 0,
    linesOfCode: 0,
    projects: 0,
    hoursCoded: 0
  })

  const updateStats = useCallback(() => {
    setStats(prev => ({
      commits: prev.commits + Math.floor(Math.random() * 2),
      linesOfCode: prev.linesOfCode + Math.floor(Math.random() * 30),
      projects: prev.projects + (Math.random() > 0.97 ? 1 : 0),
      hoursCoded: prev.hoursCoded + (Math.random() > 0.85 ? 1 : 0)
    }))
  }, [])

  useEffect(() => {
    const interval = setInterval(updateStats, 3000) // Reducir frecuencia
    return () => clearInterval(interval)
  }, [updateStats])

  const statItems = useMemo(() => [
    {
      icon: GitBranch,
      label: 'Commits',
      value: stats.commits,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Code,
      label: 'Líneas de código',
      value: stats.linesOfCode.toLocaleString(),
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Zap,
      label: 'Proyectos',
      value: stats.projects,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Clock,
      label: 'Horas programando',
      value: stats.hoursCoded,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ], [stats])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
    >
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className={`${item.bgColor} backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center`}
        >
          <item.icon className={`h-6 w-6 ${item.color} mx-auto mb-2`} />
          <motion.div
            key={item.value}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`text-2xl font-bold ${item.color} mb-1`}
          >
            {item.value}
          </motion.div>
          <div className="text-xs text-gray-400">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
})

LiveStats.displayName = 'LiveStats'

export default LiveStats
