import { useTranslation } from 'react-i18next'

export function AvailabilityPill({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-2 font-mono text-xs ${className}`}
    >
      <span className="size-2 rounded-full bg-success" aria-hidden="true" />
      {t('nav.available')}
    </span>
  )
}
