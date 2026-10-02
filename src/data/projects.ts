import ecommerceThumb from '../assets/projects/ecommerce/home-desktop.webp'
import forTodayThumb from '../assets/projects/for-today/summary-desktop.webp'
import intensamenteThumb from '../assets/projects/intensamente/mockup.webp'
import type { Project } from './types'

// TODO: completar los links que faltan (live = deploy, repo = GitHub)
// y sumar `image` cuando tengas las capturas en src/assets/projects/.
export const projects: Project[] = [
  {
    slug: 'nomapay',
    number: '01',
    featured: true,
    caseStudy: true,
    size: 'featured',
    layers: { ui: 'me', api: 'team', db: 'team', cloud: 'team' },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Express', 'Sequelize', 'Swagger', 'PostgreSQL', 'Railway', 'Vercel', 'AWS SES'],
    links: { live: 'https://noma-pay-frontend.vercel.app/' },
  },
  {
    slug: 'ecommerce',
    number: '02',
    size: 'wide',
    caseStudy: true,
    image: ecommerceThumb,
    layers: { ui: 'me', api: 'me', db: 'me', cloud: 'me' },
    stack: ['React 18', 'TypeScript', 'Firebase Auth', 'Firestore', 'AWS S3', 'Vercel Functions', 'Vitest + RTL'],
    links: {
      live: 'https://proyecto-m5-candelaria-ferrari.vercel.app/',
      repo: 'https://github.com/candelariaferrari/proyectoM5_CandelariaFerrari',
    },
  },
  {
    slug: 'for-today',
    number: '03',
    size: 'wide',
    caseStudy: true,
    image: forTodayThumb,
    layers: { ui: 'me', api: 'me', db: 'me', cloud: 'me' },
    stack: ['React', 'TypeScript', 'Firebase Auth', 'Firestore', 'AWS SES', 'Vercel Functions'],
    links: {
      live: 'https://proyecto-m4-candelaria-ferrari.vercel.app/',
      repo: 'https://github.com/candelariaferrari/proyectoM4_CandelariaFerrari',
    },
  },
  {
    slug: 'intensamente',
    number: '04',
    size: 'compact',
    image: intensamenteThumb,
    layers: { ui: 'me', api: 'me', db: 'none', cloud: 'me' },
    stack: ['Vanilla JS', 'Gemini API', 'Vercel Functions', 'Vitest'],
    links: {
      live: 'https://proyecto-m3-candelaria-ferrari.vercel.app/',
      repo: 'https://github.com/candelariaferrari/ProyectoM3_CandelariaFerrari',
    },
  },
  {
    slug: 'api-swagger',
    number: '05',
    size: 'compact',
    thumb: 'endpoints',
    layers: { ui: 'none', api: 'me', db: 'me', cloud: 'me' },
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Swagger', 'Jest + Supertest', 'Railway'],
    // TODO: cuando Swagger vuelva a funcionar, sumar
    // docs: 'https://proyectom2candelariaferrari-production.up.railway.app/api-docs'
    links: { repo: 'https://github.com/candelariaferrari/ProyectoM2_CandelariaFerrari' },
  },
  {
    slug: 'palettes',
    number: '06',
    size: 'compact',
    thumb: 'palette',
    layers: { ui: 'me', api: 'none', db: 'none', cloud: 'none' },
    // TODO: confirmar stack
    stack: ['JavaScript'],
    links: {},
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
