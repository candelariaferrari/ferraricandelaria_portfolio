import { useTranslation } from 'react-i18next'
import { stackGroups } from '../../data/stack'
import { CodeComment } from '../ui/CodeComment'
import { SectionHeading } from '../ui/SectionHeading'

export function Stack() {
  const { t } = useTranslation()

  return (
    <section id="stack" aria-labelledby="stack-title" className="mt-16 bg-night py-16 text-paper md:mt-[100px] md:py-[110px]">
      <div className="container-site flex flex-col gap-12 md:gap-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="stack-title"
            tone="dark"
            eyebrow={t('stack.eyebrow')}
            titleStart={t('stack.titleStart')}
            titleEm={t('stack.titleEm')}
          />
          <CodeComment tone="dark" lines={t('stack.comment', { returnObjects: true })} className="lg:max-w-[460px]" />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {stackGroups.map((group) => (
            <div key={group.id} className="flex flex-col">
              <h3 className="m-0 border-b border-paper pb-3.5 font-mono text-xs font-normal text-mint">
                {t(`stack.groups.${group.id}`)}
              </h3>
              <ul className="m-0 list-none p-0">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-night-line-soft py-2 font-mono text-[13px] text-night-code">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
