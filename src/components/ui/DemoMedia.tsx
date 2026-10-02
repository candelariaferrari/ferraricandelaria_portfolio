import { useReducedMotion } from 'motion/react'

interface DemoMediaProps {
  alt: string
  /** Imagen estática (o poster del video) */
  image: string
  /** Video corto en loop (opcional) */
  video?: string
  className?: string
}

/**
 * Muestra una captura o un video en loop sin sonido.
 * Si la persona pidió reducir el movimiento, se muestra solo la imagen.
 */
export function DemoMedia({ alt, image, video, className = '' }: DemoMediaProps) {
  const reduceMotion = useReducedMotion()

  if (video && !reduceMotion) {
    return (
      <video
        className={`block ${className || 'w-full'}`}
        src={video}
        poster={image}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    )
  }

  return <img src={image} alt={alt} loading="lazy" decoding="async" className={`block ${className || 'w-full'}`} />
}
