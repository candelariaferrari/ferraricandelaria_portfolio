import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AvailabilityPill } from '../ui/AvailabilityPill'
import { Icon } from '../ui/Icon'
import { LanguageToggle } from '../ui/LanguageToggle'

const sections = [
  { id: 'proyectos', key: 'nav.projects' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'experiencia', key: 'nav.experience' },
  { id: 'contacto', key: 'nav.contact' },
] as const

export function Logo() {
  return (
    <span className="font-serif text-[28px] font-medium tracking-[-0.02em] italic md:text-[30px]">
      cf<span className="text-forest">.</span>
    </span>
  )
}

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Cerrar el menú mobile con Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between md:h-[88px]">
        <Link to="/" aria-label={t('nav.home')} className="flex items-center gap-3 text-ink">
          <Logo />
          <span className="hidden font-mono text-[13px] text-muted sm:inline">candelaria ferrari</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="m-0 flex list-none items-center gap-9 p-0">
            {sections.map((s) => (
              <li key={s.id}>
                <Link to={{ pathname: '/', hash: s.id }} className="text-[15px] text-ink hover:text-forest">
                  {t(s.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <AvailabilityPill className="hidden md:inline-flex" />
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <button
            type="button"
            className="flex size-11 cursor-pointer items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Principal" className="border-t border-line bg-paper lg:hidden">
          <ul className="container-site m-0 flex list-none flex-col py-4">
            {sections.map((s) => (
              <li key={s.id}>
                <Link
                  to={{ pathname: '/', hash: s.id }}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center font-serif text-2xl text-ink"
                >
                  {t(s.key)}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-between gap-4 pt-4">
              <AvailabilityPill />
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
