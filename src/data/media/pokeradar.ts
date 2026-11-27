import demoPoster from '../../assets/projects/pokeradar/demo-poster.webp'
import demoVideo from '../../assets/projects/pokeradar/demo.mp4'
import radarDesktop from '../../assets/projects/pokeradar/radar-desktop.webp'
import regionsDesktop from '../../assets/projects/pokeradar/regions-desktop.webp'
import teamDesktop from '../../assets/projects/pokeradar/team-desktop.webp'
import type { CaseStudyMedia } from './types'

/** Capturas del caso de estudio. El orden coincide con caseStudy.items.pokeradar.screens */
export const pokeradarMedia: CaseStudyMedia = {
  heroDesktop: radarDesktop,
  url: 'pokeradar-candeferrari.vercel.app',
  screens: [{ image: demoPoster, video: demoVideo }, { image: regionsDesktop }, { image: teamDesktop }],
}
