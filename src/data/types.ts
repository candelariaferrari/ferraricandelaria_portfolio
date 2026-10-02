export type Layer = 'ui' | 'api' | 'db' | 'cloud'

/** me = lo hice yo · team = lo hizo el equipo · none = el proyecto no tiene esa capa */
export type LayerStatus = 'me' | 'team' | 'none'

export type ProjectSlug =
  | 'nomapay'
  | 'ecommerce'
  | 'for-today'
  | 'intensamente'
  | 'api-swagger'
  | 'palettes'

export interface ProjectLinks {
  live?: string
  repo?: string
  docs?: string
}

export interface Project {
  slug: ProjectSlug
  number: string
  layers: Record<Layer, LayerStatus>
  stack: string[]
  links: ProjectLinks
  /** Proyecto destacado (card grande oscura con diagrama) */
  featured?: boolean
  /** Tiene página de caso de estudio en /proyectos/:slug */
  caseStudy?: boolean
  /** Captura del proyecto (import desde src/assets/projects) */
  image?: string
  /** Tamaño de la card en la grilla */
  size: 'featured' | 'wide' | 'compact'
  /** Qué mostrar arriba de la card mientras no haya captura */
  thumb?: 'placeholder' | 'endpoints' | 'palette'
}
