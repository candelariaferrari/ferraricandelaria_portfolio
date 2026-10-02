import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

function DownArrow() {
  return (
    <svg width="14" height="28" viewBox="0 0 14 28" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 0v26M2 21l5 5 5-5" />
    </svg>
  )
}

function Node({ title, tech, tag, dashed = false }: { title: ReactNode; tech: string; tag?: string; dashed?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-[10px] px-5 py-4 ${
        dashed ? 'border border-dashed border-[#4a5850]' : 'border border-night-line'
      }`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium">{title}</span>
        <span className="font-mono text-xs text-night-muted">{tech}</span>
      </div>
      {tag && <span className="rounded border border-mint px-2 py-0.5 font-mono text-[11px] text-mint">{tag}</span>}
    </div>
  )
}

/** Diagrama de arquitectura de NomaPay, marcando qué parte hice yo. */
export function ArchitectureDiagram() {
  const { t } = useTranslation()
  const a = t('projects.arch', { returnObjects: true })

  return (
    <figure className="m-0 flex flex-col gap-3.5" aria-label={t('projects.architecture')}>
      <figcaption className="font-mono text-xs text-night-muted">{t('projects.architecture')}</figcaption>

      <Node
        title={
          <>
            {a.client}
            <span className="ml-2 rounded bg-mint px-1.5 py-0.5 font-mono text-[11px] text-ink">{a.mine}</span>
          </>
        }
        tech={a.clientTech}
        tag="Vercel"
      />

      <div className="flex items-center gap-2.5 pl-6 font-mono text-xs text-night-muted">
        <DownArrow />
        {a.transport}
      </div>

      <Node
        title={
          <>
            {a.api}
            <span className="ml-2 font-mono text-[11px] text-night-muted">{a.backendTeam}</span>
          </>
        }
        tech={a.apiTech}
        tag="Railway"
      />

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="flex flex-col gap-3.5">
          <div className="pl-6 text-night-muted">
            <DownArrow />
          </div>
          <Node
            title={
              <>
                {a.db}
                <span className="ml-2 font-mono text-[11px] text-night-muted">{a.team}</span>
              </>
            }
            tech={a.dbTech}
          />
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="pl-6 text-night-muted">
            <DownArrow />
          </div>
          <Node
            title={
              <>
                {a.mailing}
                <span className="ml-2 font-mono text-[11px] text-night-muted">{a.team}</span>
              </>
            }
            tech={a.mailingTech}
            dashed
          />
        </div>
      </div>
    </figure>
  )
}
