import { useTranslation } from 'react-i18next'
import type { Layer, LayerStatus } from '../../data/types'

const LAYERS: Layer[] = ['ui', 'api', 'db', 'cloud']

type Tone = 'light' | 'dark'

const styles: Record<Tone, Record<LayerStatus, string>> = {
  light: {
    me: 'bg-ink text-paper border border-ink',
    team: 'border border-ink text-ink',
    none: 'border border-dashed border-line-strong text-subtle',
  },
  dark: {
    me: 'bg-paper text-ink border border-paper',
    team: 'border border-paper text-paper',
    none: 'border border-dashed border-night-muted text-night-muted',
  },
}

export function LayerBadge({ layer, status, tone = 'light' }: { layer: Layer; status: LayerStatus; tone?: Tone }) {
  const { t } = useTranslation()
  return (
    <span
      className={`rounded px-1.5 py-0.5 font-mono text-[11px] tracking-wide ${styles[tone][status]}`}
      title={t(`projects.statusNames.${status}`)}
    >
      {t(`projects.layerNames.${layer}`)}
      <span className="sr-only">: {t(`projects.statusNames.${status}`)}</span>
    </span>
  )
}

export function LayerBadges({ layers, tone = 'light' }: { layers: Record<Layer, LayerStatus>; tone?: Tone }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-wrap gap-1.5" role="list" aria-label={t('projects.layersLabel')}>
      {LAYERS.map((layer) => (
        <span role="listitem" key={layer}>
          <LayerBadge layer={layer} status={layers[layer]} tone={tone} />
        </span>
      ))}
    </div>
  )
}

/** Leyenda: relleno = yo · contorno = equipo · punteado = no aplica */
export function LayersLegend() {
  const { t } = useTranslation()
  const items: { status: LayerStatus; layer: Layer }[] = [
    { status: 'me', layer: 'ui' },
    { status: 'team', layer: 'api' },
    { status: 'none', layer: 'db' },
  ]
  return (
    <ul className="m-0 flex list-none flex-wrap items-center gap-x-4 gap-y-2 p-0">
      {items.map(({ status, layer }) => (
        <li key={status} className="flex items-center gap-2">
          <LayerBadge layer={layer} status={status} />
          <span className="text-[13px] text-muted">{t(`projects.legend.${status}`)}</span>
        </li>
      ))}
    </ul>
  )
}
