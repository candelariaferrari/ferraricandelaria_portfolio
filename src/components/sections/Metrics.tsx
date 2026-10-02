import { useTranslation } from 'react-i18next'

export function Metrics() {
  const { t } = useTranslation()
  const metrics = t('metrics', { returnObjects: true })

  return (
    <div className="container-site">
      <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-b border-t-ink border-b-line py-6 md:py-7 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col-reverse gap-1.5">
            <dt className="text-[13px] text-muted md:text-sm">{m.label}</dt>
            <dd className="m-0 font-serif text-[2rem] tracking-[-0.02em] md:text-[2.75rem]">{m.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
