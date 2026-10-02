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
    links: {},
  },
  {
    slug: 'ecommerce',
    number: '02',
    size: 'wide',
    layers: { ui: 'me', api: 'me', db: 'me', cloud: 'me' },
    stack: ['React 18', 'TypeScript', 'Firebase Auth', 'Firestore', 'AWS S3', 'Vercel Functions', 'Vitest + RTL'],
    links: { live: 'https://proyecto-m5-candelaria-ferrari.vercel.app/' },
  },
  {
    slug: 'for-today',
    number: '03',
    size: 'wide',
    layers: { ui: 'me', api: 'me', db: 'me', cloud: 'me' },
    stack: ['React', 'TypeScript', 'Firebase Auth', 'Firestore', 'AWS SES', 'Vercel Functions'],
    links: { repo: 'https://github.com/candelariaferrari/proyectoM4_CandelariaFerrari' },
  },
  {
    slug: 'intensamente',
    number: '04',
    size: 'compact',
    layers: { ui: 'me', api: 'me', db: 'none', cloud: 'me' },
    stack: ['Vanilla JS', 'Gemini API', 'Vercel'],
    links: {},
  },
  {
    slug: 'api-swagger',
    number: '05',
    size: 'compact',
    thumb: 'endpoints',
    layers: { ui: 'none', api: 'me', db: 'me', cloud: 'none' },
    // TODO: confirmar stack y base de datos
    stack: ['Node.js', 'Express', 'Swagger'],
    links: {},
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
