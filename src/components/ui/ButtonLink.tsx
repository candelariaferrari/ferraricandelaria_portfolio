import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'light' | 'outlineLight'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-forest',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  light: 'bg-white text-ink hover:bg-mint',
  outlineLight: 'border border-white text-white hover:bg-white hover:text-ink',
}

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  /** Para links de descarga (CV) */
  download?: boolean
}

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)

export function ButtonLink({ href, children, variant = 'primary', className = '', download }: ButtonLinkProps) {
  const classes = `inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-6 text-base font-medium transition-colors ${variants[variant]} ${className}`

  if (isExternal(href) || download || href.startsWith('#')) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  )
}
