import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { ease } from '../motion/variants'
import { DemoMedia } from './DemoMedia'
import { Icon } from './Icon'

export interface LightboxItem {
  image: string
  video?: string
  title: string
  caption?: string
}

interface LightboxProps {
  items: LightboxItem[]
  /** Índice abierto, o null si está cerrado */
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

/**
 * Vista ampliada de una captura.
 * Se cierra con Escape, con el botón o tocando el fondo; las flechas del teclado
 * pasan a la captura anterior o siguiente. Bloquea el scroll mientras está abierta.
 */
export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const { t } = useTranslation()
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null
  const item = open ? items[index] : null
  const hasMany = items.length > 1

  // Al abrir: bloquear el scroll y mover el foco; al cerrar, devolverlo donde estaba
  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [open])

  // Teclado: Escape cierra, las flechas navegan
  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasMany) onChange((index + 1) % items.length)
      if (e.key === 'ArrowLeft' && hasMany) onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, items.length, hasMany, onClose, onChange])

  const navButton =
    'flex size-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'

  return createPortal(
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="fixed inset-0 z-[100] flex flex-col bg-night/95 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 text-white" onClick={(e) => e.stopPropagation()}>
            <span className="font-mono text-xs text-night-muted">
              {hasMany && t('caseStudy.lightbox.counter', { current: index + 1, total: items.length })}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t('caseStudy.lightbox.close')}
              className={navButton}
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center gap-4 py-4">
            {hasMany && (
              <button
                type="button"
                aria-label={t('caseStudy.lightbox.prev')}
                className={`${navButton} hidden shrink-0 md:flex`}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index - 1 + items.length) % items.length)
                }}
              >
                <Icon name="arrowLeft" size={20} />
              </button>
            )}

            <motion.figure
              key={item.image}
              className="m-0 flex max-h-full min-h-0 flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <DemoMedia
                alt={item.title}
                image={item.image}
                video={item.video}
                className="max-h-[calc(100vh-12rem)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              <figcaption className="max-w-2xl text-center text-white">
                <span className="block text-base font-medium">{item.title}</span>
                {item.caption && <span className="block text-sm text-night-muted">{item.caption}</span>}
              </figcaption>
            </motion.figure>

            {hasMany && (
              <button
                type="button"
                aria-label={t('caseStudy.lightbox.next')}
                className={`${navButton} hidden shrink-0 md:flex`}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index + 1) % items.length)
                }}
              >
                <Icon name="arrowRight" size={20} />
              </button>
            )}
          </div>

          {/* En mobile las flechas van abajo */}
          {hasMany && (
            <div className="flex justify-center gap-3 md:hidden" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                aria-label={t('caseStudy.lightbox.prev')}
                className={navButton}
                onClick={() => onChange((index - 1 + items.length) % items.length)}
              >
                <Icon name="arrowLeft" size={20} />
              </button>
              <button
                type="button"
                aria-label={t('caseStudy.lightbox.next')}
                className={navButton}
                onClick={() => onChange((index + 1) % items.length)}
              >
                <Icon name="arrowRight" size={20} />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
