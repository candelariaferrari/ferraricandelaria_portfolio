export interface CaseStudyMedia {
  heroDesktop: string
  heroMobile: string
  /** Texto de la barra de direcciones del marco de navegador */
  url: string
  screens: { image: string; video?: string }[]
}
