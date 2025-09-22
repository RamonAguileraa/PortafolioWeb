'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AnimatedImageProps {
  src: any
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

const AnimatedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  sizes 
}: AnimatedImageProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="object-cover"
        placeholder="blur"
      />
    </motion.div>
  )
}

export default AnimatedImage
