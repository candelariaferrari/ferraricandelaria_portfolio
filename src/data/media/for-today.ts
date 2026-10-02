import crudPoster from '../../assets/projects/for-today/crud-poster.webp'
import crudVideo from '../../assets/projects/for-today/crud.mp4'
import email from '../../assets/projects/for-today/email.webp'
import loginDesktop from '../../assets/projects/for-today/login-desktop.webp'
import newTaskDesktop from '../../assets/projects/for-today/new-task-desktop.webp'
import summaryDesktop from '../../assets/projects/for-today/summary-desktop.webp'
import summaryMobile from '../../assets/projects/for-today/summary-mobile.webp'
import type { CaseStudyMedia } from './types'

/** Capturas del caso de estudio. El orden coincide con caseStudy.items['for-today'].screens */
export const forTodayMedia: CaseStudyMedia = {
  heroDesktop: summaryDesktop,
  heroMobile: summaryMobile,
  url: 'proyecto-m4-candelaria-ferrari.vercel.app',
  screens: [{ image: crudPoster, video: crudVideo }, { image: newTaskDesktop }, { image: loginDesktop }, { image: email }],
}
