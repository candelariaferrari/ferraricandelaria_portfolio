import type { Transition, Variants } from 'motion/react'

/** Curva suave de salida, la misma en todo el sitio */
export const ease = [0.22, 1, 0.36, 1] as const

const base: Transition = { duration: 0.6, ease }

/** Aparece subiendo un poco */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: base },
}

/** Solo aparece, sin moverse */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: base },
}

/** Línea que se dibuja de izquierda a derecha */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease } },
}

/** Contenedor que anima a sus hijos de a uno */
export const stagger = (each = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: each, delayChildren: delay } },
})

/** Se anima una sola vez, cuando entra un 20% en pantalla */
export const viewport = { once: true, amount: 0.2 } as const
