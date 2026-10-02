import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../i18n'

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage

  return (
    <div role="group" aria-label={t('nav.language')} className="flex overflow-hidden rounded-full border border-ink">
      {LANGUAGES.map((lng) => {
        const active = current === lng
        return (
          <button
            key={lng}
            type="button"
            aria-pressed={active}
            onClick={() => i18n.changeLanguage(lng)}
            className={`min-h-9 min-w-11 cursor-pointer px-3 font-mono text-xs uppercase transition-colors ${
              active ? 'bg-ink text-paper' : 'bg-transparent text-ink hover:bg-sand'
            }`}
          >
            {lng}
          </button>
        )
      })}
    </div>
  )
}
