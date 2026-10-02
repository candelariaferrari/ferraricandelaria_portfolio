import convertPoster from '../../assets/projects/nomapay/convert-poster.webp'
import convertVideo from '../../assets/projects/nomapay/convert.mp4'
import dashboardDesktop from '../../assets/projects/nomapay/dashboard-desktop.webp'
import dashboardMobile from '../../assets/projects/nomapay/dashboard-mobile.webp'
import landingDesktop from '../../assets/projects/nomapay/landing-desktop.webp'
import summaryDesktop from '../../assets/projects/nomapay/summary-desktop.webp'
import transferPoster from '../../assets/projects/nomapay/transfer-poster.webp'
import transferVideo from '../../assets/projects/nomapay/transfer.mp4'

/** Capturas del caso de estudio. El orden coincide con caseStudy.nomapay.screens */
export const nomapayMedia = {
  heroDesktop: dashboardDesktop,
  heroMobile: dashboardMobile,
  screens: [
    { image: landingDesktop },
    { image: convertPoster, video: convertVideo },
    { image: transferPoster, video: transferVideo },
    { image: summaryDesktop },
  ],
}
