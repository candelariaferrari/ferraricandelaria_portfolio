import { useTranslation } from 'react-i18next'
import { projects } from '../../data/projects'
import { FeaturedProject } from '../projects/FeaturedProject'
import { ProjectCard } from '../projects/ProjectCard'
import { LayersLegend } from '../ui/LayerBadges'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const { t } = useTranslation()
  const featured = projects.filter((p) => p.size === 'featured')
  const wide = projects.filter((p) => p.size === 'wide')
  const compact = projects.filter((p) => p.size === 'compact')

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="container-site flex flex-col gap-10 pt-20 pb-10 md:pt-[120px]">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          id="proyectos-title"
          eyebrow={t('projects.eyebrow')}
          titleStart={t('projects.titleStart')}
          titleEm={t('projects.titleEm')}
        />
        <LayersLegend />
      </div>

      {featured.map((p) => (
        <FeaturedProject key={p.slug} project={p} />
      ))}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {wide.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {compact.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
