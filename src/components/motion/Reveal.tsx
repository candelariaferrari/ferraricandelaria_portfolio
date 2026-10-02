import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { fadeUp, viewport } from './variants'

interface RevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
}

/** Envuelve un bloque para que aparezca al hacer scroll. */
export function Reveal({ children, className, variants = fadeUp }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}
