import type { ProjectSlug } from '../types'
import { ecommerceMedia } from './ecommerce'
import { forTodayMedia } from './for-today'
import { nomapayMedia } from './nomapay'
import type { CaseStudyMedia } from './types'

/** Capturas de cada proyecto que tiene caso de estudio */
export const caseStudyMedia: Partial<Record<ProjectSlug, CaseStudyMedia>> = {
  nomapay: nomapayMedia,
  ecommerce: ecommerceMedia,
  'for-today': forTodayMedia,
}
