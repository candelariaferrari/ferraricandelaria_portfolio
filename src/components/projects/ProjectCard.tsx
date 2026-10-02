import { useTranslation } from 'react-i18next'
import type { Project } from '../../data/types'
import { LayerBadges } from '../ui/LayerBadges'
import { ProjectLinks } from './ProjectLinks'
import { ProjectThumb } from './ProjectThumb'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const item = t(`projects.items.${project.slug}`, { returnObjects: true })
  const wide = project.size === 'wide'

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-[14px] border border-line bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(17,23,20,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <ProjectThumb project={project} title={item.title} />
      <div className={`flex flex-1 flex-col gap-4 ${wide ? 'p-6 md:p-8' : 'p-6 md:p-7'}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted md:text-[13px]">
            {project.number} · {item.meta}
          </span>
          <LayerBadges layers={project.layers} />
        </div>
        <h3
          className={`m-0 font-serif font-normal tracking-[-0.02em] ${wide ? 'text-[1.75rem] md:text-4xl' : 'text-[1.625rem] md:text-[1.875rem]'}`}
        >
          {item.title}
        </h3>
        <p className={`m-0 leading-relaxed text-ink-soft ${wide ? 'text-base' : 'text-[15px]'}`}>{item.description}</p>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-xs whitespace-nowrap text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}
