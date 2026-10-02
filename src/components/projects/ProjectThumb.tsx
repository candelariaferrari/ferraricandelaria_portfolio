import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/types'

/** Parte superior de la card: captura real o un placeholder según el proyecto. */
export function ProjectThumb({ project, title }: { project: Project; title: string }) {
  const { t } = useTranslation()
  const height = project.size === 'wide' ? 'h-[200px] md:h-[280px]' : 'h-[180px] md:h-[200px]'

  if (project.image) {
    return <img src={project.image} alt={title} loading="lazy" className={`${height} w-full border-b border-line object-cover`} />
  }

  if (project.thumb === 'endpoints') {
    const rows = [
      ['GET', 'text-[#7fd1a8]', '/api/[recurso]'],
      ['POST', 'text-amber', '/api/[recurso]'],
      ['PUT', 'text-mint', '/api/[recurso]/:id'],
      ['DELETE', 'text-[#f29b8b]', '/api/[recurso]/:id'],
    ]
    return (
      <div className={`${height} flex flex-col justify-center gap-2 border-b border-line bg-night p-6`} aria-hidden="true">
        {rows.map(([method, color, path]) => (
          <span key={method} className="font-mono text-[13px] whitespace-pre text-night-code">
            <span className={color}>{method.padEnd(7)}</span>
            {path}
          </span>
        ))}
      </div>
    )
  }

  if (project.thumb === 'palette') {
    return (
      <div className={`${height} flex border-b border-line`} aria-hidden="true">
        {['bg-night', 'bg-forest', 'bg-mint', 'bg-amber', 'bg-paper'].map((c) => (
          <div key={c} className={`flex-1 ${c}`} />
        ))}
      </div>
    )
  }

  return (
    <div className={`${height} flex items-center justify-center border-b border-line bg-sand`}>
      <span className="font-mono text-xs text-subtle">[{t('projects.screenshotPending')}]</span>
    </div>
  )
}
