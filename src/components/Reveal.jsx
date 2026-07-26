import React from 'react'
import { motion } from 'framer-motion'

/**
 * Reveal - wraps children with a fade + slide-up animation that
 * triggers once when the element scrolls into view.
 *
 * Props:
 *  - delay: seconds before the animation starts (for staggering)
 *  - y: initial vertical offset in px
 *  - as: motion element tag (defaults to 'div')
 */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
