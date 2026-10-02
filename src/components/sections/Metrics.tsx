import { useTranslation } from 'react-i18next'

/** Franja debajo del hero: cuatro rasgos que me definen como dev. */
export function Metrics() {
  const { t } = useTranslation()
  const highlights = t('metrics', { returnObjects: true })

  return (
    <div className="container-site">
      <ul className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-7 border-t border-b border-t-ink border-b-line p-0 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:py-8">
        {highlights.map((item) => (
          <li key={item.title} className="flex flex-col gap-2">
            <h2 className="m-0 font-serif text-2xl leading-tight font-normal tracking-[-0.02em]">
              {item.title}
            </h2>
            <p className="m-0 text-sm leading-relaxed text-muted md:text-[15px]">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
