import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/types'
import { LayerBadges } from '../ui/LayerBadges'
import { ArchitectureDiagram } from './ArchitectureDiagram'
import { ProjectLinks } from './ProjectLinks'

export function FeaturedProject({ project }: { project: Project }) {
  const { t } = useTranslation()
  const item = t(`projects.items.${project.slug}`, { returnObjects: true })
  const extra = t('projects.featured', { returnObjects: true })

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-[14px] bg-night text-paper lg:grid-cols-2">
      <div className="flex flex-col gap-6 p-6 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-night-muted md:text-[13px]">
            {project.number} · {item.meta}
          </span>
          <span className="rounded-full bg-mint px-2.5 py-1 font-mono text-xs text-ink">{t('projects.featuredBadge')}</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="m-0 font-serif text-4xl leading-none font-normal tracking-[-0.03em] md:text-[3.5rem]">{item.title}</h3>
          <p className="m-0 font-serif text-xl text-mint italic md:text-2xl">{extra.subtitle}</p>
        </div>
        <p className="m-0 text-base leading-relaxed text-night-text md:text-lg">{item.description}</p>
        <LayerBadges layers={project.layers} tone="dark" />

        <div className="flex flex-col gap-3">
          <h4 className="m-0 font-mono text-xs font-normal text-night-muted">{extra.contributionsTitle}</h4>
          <dl className="m-0 flex flex-col">
            {extra.contributions.map((c) => (
              <div
                key={c.area}
                className="grid grid-cols-1 gap-1 border-t border-night-line py-2.5 sm:grid-cols-[120px_1fr] sm:gap-4"
              >
                <dt className="text-sm font-medium">{c.area}</dt>
                <dd className="m-0 text-sm text-night-text">{c.items}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="m-0 font-mono text-xs font-normal text-night-muted">{extra.techTitle}</h4>
          <p className="m-0 font-mono text-xs leading-loose text-night-text md:text-[13px]">{project.stack.join(' · ')}</p>
        </div>
        <div className="mt-2">
          <ProjectLinks project={project} tone="dark" />
        </div>
      </div>
      <div className="flex flex-col justify-center border-t border-night-line px-6 pt-8 pb-6 md:px-12 md:pb-12 lg:border-t-0 lg:pt-12 lg:pl-0">
        <ArchitectureDiagram />
      </div>
    </article>
  )
}
