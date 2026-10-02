import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/types'

interface ProjectLinksProps {
  project: Project
  tone?: 'light' | 'dark'
}

export function ProjectLinks({ project, tone = 'light' }: ProjectLinksProps) {
  const { t } = useTranslation()
  const { links, caseStudy, slug } = project
  const base = 'inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium transition-colors'
  const color = tone === 'dark' ? 'text-paper hover:text-mint' : 'text-forest hover:text-forest-dark'

  const external = [
    { href: links.live, label: t('projects.links.live') },
    { href: links.repo, label: t('projects.links.repo') },
    { href: links.docs, label: t('projects.links.docs') },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href))

  if (!caseStudy && external.length === 0) return null

  return (
    <div className="flex flex-wrap gap-x-7 gap-y-1">
      {caseStudy && (
        <Link to={`/proyectos/${slug}`} className={`${base} ${tone === 'dark' ? 'text-mint hover:text-paper' : color}`}>
          {t('projects.links.caseStudy')} <span aria-hidden="true">→</span>
        </Link>
      )}
      {external.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={`${base} ${color}`}>
          {l.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}
