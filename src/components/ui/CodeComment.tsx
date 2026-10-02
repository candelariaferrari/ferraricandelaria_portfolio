import { useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/** Milisegundos por letra: rápido, para que no haya que esperar para leer */
const TYPING_SPEED = 20

interface CodeCommentProps {
  lines: string[]
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Texto con forma de comentario de código, en monoespaciada.
 * Se "tipea" una sola vez cuando entra en pantalla. El texto completo ocupa
 * su lugar desde el principio (no hay saltos de layout) y los lectores de
 * pantalla lo leen entero. Con "reducir movimiento" aparece directo.
 */
export function CodeComment({ lines, tone = 'light', className = '' }: CodeCommentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [typed, setTyped] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = lines.reduce((sum, line) => sum + line.length, 0)
  const done = finished || Boolean(reduceMotion)

  useEffect(() => {
    if (!inView || done) return
    const id = window.setInterval(() => {
      setTyped((count) => {
        if (count + 1 >= total) {
          window.clearInterval(id)
          setFinished(true)
        }
        return count + 1
      })
    }, TYPING_SPEED)
    return () => window.clearInterval(id)
  }, [inView, done, total])

  const text = tone === 'dark' ? 'text-night-muted' : 'text-ink-soft'
  const marks = tone === 'dark' ? 'text-[#5f6b64]' : 'text-[#8a877f]'
  const cursorColor = tone === 'dark' ? 'bg-mint' : 'bg-forest'
  const cursor = <span className={`ml-px inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] animate-blink ${cursorColor}`} />

  // Reparto de las letras ya tipeadas entre las líneas
  const count = done ? total : typed
  const starts = lines.map((_, i) => lines.slice(0, i).join('').length)
  const typingLine = lines.findIndex((line, i) => count < starts[i] + line.length)
  const current = typingLine === -1 ? lines.length - 1 : typingLine

  return (
    <div ref={ref} className={className}>
      <p className="sr-only">{lines.join(' ')}</p>
      <p aria-hidden="true" className={`m-0 font-mono text-[13px] leading-[1.8] md:text-sm ${text}`}>
        <span className={`block ${marks}`}>/**</span>
        {lines.map((line, i) => {
          const shown = Math.max(0, Math.min(line.length, count - starts[i]))
          const visible = done || i <= current
          return (
            <span key={line} className="flex gap-2">
              <span className={`shrink-0 pl-1.5 ${marks} ${visible ? '' : 'invisible'}`}>*</span>
              <span>
                {line.slice(0, shown)}
                {i === current && cursor}
                <span className="invisible">{line.slice(shown)}</span>
              </span>
            </span>
          )
        })}
        <span className={`block pl-1.5 ${marks} ${done ? '' : 'invisible'}`}>*/</span>
      </p>
    </div>
  )
}
