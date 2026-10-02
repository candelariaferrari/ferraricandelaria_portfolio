import cartDesktop from '../../assets/projects/ecommerce/cart-desktop.webp'
import catalogDesktop from '../../assets/projects/ecommerce/catalog-desktop.webp'
import homeDesktop from '../../assets/projects/ecommerce/home-desktop.webp'
import homeMobile from '../../assets/projects/ecommerce/home-mobile.webp'
import loginDesktop from '../../assets/projects/ecommerce/login-desktop.webp'
import type { CaseStudyMedia } from './types'

/** Capturas del caso de estudio. El orden coincide con caseStudy.items.ecommerce.screens */
export const ecommerceMedia: CaseStudyMedia = {
  heroDesktop: homeDesktop,
  heroMobile: homeMobile,
  url: 'proyecto-m5-candelaria-ferrari.vercel.app',
  screens: [{ image: catalogDesktop }, { image: cartDesktop }, { image: loginDesktop }],
}
