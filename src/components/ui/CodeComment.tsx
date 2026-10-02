import { motion } from 'motion/react'
import { fadeIn, stagger, viewport } from '../motion/variants'

interface CodeCommentProps {
  lines: string[]
  tone?: 'light' | 'dark'
  className?: string
}

/** Texto con forma de comentario de código (/** ... *\/), en monoespaciada. */
export function CodeComment({ lines, tone = 'light', className = '' }: CodeCommentProps) {
  const text = tone === 'dark' ? 'text-night-muted' : 'text-ink-soft'
  const marks = tone === 'dark' ? 'text-[#5f6b64]' : 'text-[#8a877f]'

  return (
    <motion.p
      className={`m-0 font-mono text-[13px] leading-[1.8] md:text-sm ${text} ${className}`}
      variants={stagger(0.18, 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.span variants={fadeIn} className={`block ${marks}`} aria-hidden="true">
        /**
      </motion.span>
      {lines.map((line) => (
        <motion.span variants={fadeIn} key={line} className="flex gap-2">
          <span className={`shrink-0 pl-1.5 ${marks}`} aria-hidden="true">
            *
          </span>
          <span>{line}</span>
        </motion.span>
      ))}
      <motion.span variants={fadeIn} className={`block pl-1.5 ${marks}`} aria-hidden="true">
        */
      </motion.span>
    </motion.p>
  )
}
