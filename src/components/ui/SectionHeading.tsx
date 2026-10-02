import { motion } from 'motion/react'
import { fadeUp, stagger, viewport } from '../motion/variants'

interface SectionHeadingProps {
  eyebrow: string
  titleStart: string
  titleEm: string
  tone?: 'light' | 'dark'
  as?: 'h1' | 'h2'
  size?: 'md' | 'lg'
  id?: string
}

/** Eyebrow en mono + título serif con la parte final en itálica. */
export function SectionHeading({
  eyebrow,
  titleStart,
  titleEm,
  tone = 'light',
  as: Tag = 'h2',
  size = 'lg',
  id,
}: SectionHeadingProps) {
  const sizes = size === 'lg' ? 'text-[2.5rem] md:text-6xl lg:text-[4rem]' : 'text-4xl md:text-[2.75rem]'
  return (
    <motion.div
      className="flex flex-col gap-3.5"
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.span variants={fadeUp} className={`font-mono text-sm ${tone === 'dark' ? 'text-mint' : 'text-forest'}`}>
        {eyebrow}
      </motion.span>
      <motion.div variants={fadeUp}>
        <Tag id={id} className={`m-0 font-serif leading-[1.02] font-normal tracking-[-0.03em] ${sizes}`}>
          {titleStart} <em>{titleEm}</em>
        </Tag>
      </motion.div>
    </motion.div>
  )
}
