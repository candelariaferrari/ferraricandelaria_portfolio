export interface CaseStudyMedia {
  heroDesktop: string
  /** Captura mobile (opcional: sin ella, el hero muestra solo desktop) */
  heroMobile?: string
  /** Texto de la barra de direcciones del marco de navegador */
  url: string
  screens: { image: string; video?: string }[]
}
