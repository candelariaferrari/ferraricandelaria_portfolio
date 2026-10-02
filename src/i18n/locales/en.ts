import type { Translation } from './es'

const en: Translation = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    stack: 'Stack',
    experience: 'Experience',
    contact: 'Contact',
    available: 'Open to work',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  hero: {
    eyebrow: '// Full Stack Developer · Frontend first · Córdoba, AR',
    titleStart: 'From design to code,',
    titleMid: 'from code',
    titleEm: 'to production.',
    intro:
      "I'm Cande, a Full Stack Developer with a frontend focus. I build thoughtful interfaces and understand what happens behind every screen.",
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
    photoAlt: 'Photo of Candelaria Ferrari',
  },

  apiCard: {
    label: 'Sample API response with my details',
    keyRole: 'role',
    keyBase: 'based_in',
    keyStack: 'stack',
    keyLooking: 'looking_for',
    keyAvailable: 'available',
    role: 'Full Stack Developer',
    base: 'Jesús María, Argentina',
  },

  metrics: [
    {
      title: 'Frontend in production',
      body: 'Almost 5 years building digital products, mainly with Angular.',
    },
    {
      title: 'Design + development',
      body: 'My Graphic Design background shapes how I think about interfaces, components and experiences.',
    },
    {
      title: 'Modern Full Stack',
      body: 'Recent experience with React, TypeScript, Node.js, PostgreSQL and Firebase.',
    },
    {
      title: 'From idea to production',
      body: 'I care about understanding the whole product, not just implementing a screen.',
    },
  ],

  projects: {
    eyebrow: '01 — Projects',
    titleStart: 'Projects,',
    titleEm: 'end to end',
    layersLabel: 'Layers',
    legend: { me: 'built by me', team: 'team effort', none: 'not applicable' },
    layerNames: { ui: 'UI', api: 'API', db: 'DB', cloud: 'CLOUD' },
    statusNames: { me: 'built by me', team: 'built as a team', none: 'not applicable' },
    links: { live: 'Live', repo: 'GitHub', docs: 'Docs', caseStudy: 'Read case study' },
    featuredBadge: 'Featured',
    screenshotPending: 'screenshot coming soon',
    architecture: 'architecture · who did what',
    arch: {
      client: 'Client · SPA',
      clientTech: 'React + TS + Tailwind v4',
      mine: 'my part',
      api: 'REST API',
      apiTech: 'Express + TypeScript',
      backendTeam: 'backend team',
      transport: 'REST · JWT + refresh token (axios interceptor)',
      db: 'PostgreSQL',
      dbTech: 'users · accounts · transactions',
      mailing: 'Mailing',
      mailingTech: 'Serverless → AWS SES',
    },
    items: {
      nomapay: {
        meta: 'Final group project · team of 4',
        title: 'NomaPay',
        description:
          'A digital wallet for travelers and digital nomads: transfers, currency exchange and deposits. Four of us built it; I led the frontend: brand identity, design system, component architecture, API integration, Git workflow and sprints.',
      },
      ecommerce: {
        meta: 'Module 5',
        title: 'E-commerce with admin panel',
        description:
          'A store with two roles: customer (catalog, cart, checkout) and admin (protected panel for products and orders). Image uploads to S3 with presigned URLs from serverless functions.',
      },
      'for-today': {
        meta: 'Module 4',
        title: 'For Today',
        description:
          'Task manager with authentication, protected routes and real-time data. Sends transactional emails with AWS SES through Vercel Functions.',
      },
      intensamente: {
        meta: 'Module 3',
        title: 'Inside Out Chat',
        description:
          'A vanilla JavaScript SPA: a chat where each emotion replies with its own personality, powered by the Gemini API.',
      },
      'api-swagger': {
        meta: 'Module 2',
        title: 'API documented with Swagger',
        description: 'REST API with interactive OpenAPI documentation.',
      },
      palettes: {
        meta: 'Module 1',
        title: 'Palette generator',
        description: 'Generates automatic color palettes to use in projects.',
      },
    },
  },

  stack: {
    eyebrow: '02 — Stack',
    titleStart: 'My stack,',
    titleEm: 'by layer',
    intro:
      'Angular is where I have the most mileage; React + TypeScript is where I built everything recent. On the backend, REST APIs with Node plus SQL and NoSQL databases.',
    groups: {
      frontend: '/frontend · frameworks & libraries',
      backend: '/backend',
      data: '/databases',
      cloud: '/cloud & deploy',
      quality: '/design & quality',
    },
  },

  process: {
    eyebrow: '03 — How I work',
    titleStart: 'From Figma',
    titleEm: 'to deploy',
    intro:
      'My role is to build. When I get a Figma file I read it with a designer\'s eye: I spot missing states, suggest improvements and bring it to code with care for every detail.',
    steps: [
      {
        title: 'I read the design',
        body: 'I go through the Figma file, check empty states, errors and responsive behavior, and turn it into design tokens. No designer? I can design it too.',
      },
      {
        title: 'I model data & API',
        body: 'Entities, endpoints and clear contracts between front and back.',
      },
      {
        title: 'I build the interface',
        body: 'Reusable components, accessibility and tests for what matters.',
      },
      {
        title: 'Deploy & iterate',
        body: 'Protected branches, reviewed PRs, sprints and continuous deploys.',
      },
    ],
  },

  experience: {
    eyebrow: '04 — Experience',
    jobs: [
      {
        period: '2020 — 2025',
        role: 'Frontend Developer',
        company: 'Agrohub',
        description:
          'Angular and Ionic interfaces for an agtech startup. Involved in UX/UI, performance and business-driven solutions.',
      },
      {
        period: '2022',
        role: 'Frontend Developer',
        company: 'Pagos360',
        description: 'Fintech. Angular interfaces, flow layouts, SEO-friendly landing pages and accessibility.',
      },
      {
        period: '2020',
        role: 'Tutor',
        company: 'Coderhouse',
        description: 'Project reviews and technical feedback on HTML, CSS and JavaScript.',
      },
      {
        period: '2019 — 2020',
        role: 'Co-founder',
        company: 'Combo Marketing y Diseño',
        description: 'Design studio: branding, visual identity and digital pieces.',
      },
    ],
    educationEyebrow: '05 — Education',
    education: [
      { title: 'Full Stack Developer · Henry', detail: '2026 · React, Node, SQL' },
      { title: 'Angular: zero to expert · Udemy', detail: '2025 · Signals, SSR, testing, i18n' },
      { title: 'Full Stack · Digital House', detail: '2021 — 2022' },
      { title: 'JavaScript + Web Development · Coderhouse', detail: '2019 — 2020' },
      { title: 'Graphic Design · Universidad Blas Pascal', detail: '2011 — 2015' },
    ],
  },

  contact: {
    eyebrow: '06 — Contact',
    titleStart: 'Shall we build',
    titleEm: 'something together?',
    body: "I'm looking for a team to join as a Frontend (React or Angular) or Full Stack developer. Remote or hybrid from Córdoba, Argentina.",
    madeWith: 'Designed in Figma · built with React + TypeScript',
    rights: '© {{year}} Candelaria Ferrari',
  },

  caseStudy: {
    back: 'Back to projects',
    counter: 'case {{current}} / {{total}}',
    role: 'Role',
    team: 'Team',
    year: 'Year',
    links: 'Links',
    next: 'Next project',
    screenshotPending: 'screenshot coming soon',
    nomapay: {
      label: 'Case study · Henry final project',
      intro:
        'A digital wallet for people who live on the move: transfer, exchange currency and deposit from one place. A group project where I led the frontend.',
      roleValue: 'Frontend lead',
      teamValue: '4 people · 2 front, 2 back',
      yearValue: '2026',
      heroShot: 'NomaPay dashboard on desktop + mobile',
      whatEyebrow: '01 — What I did',
      whatTitleStart: 'From the name to the last',
      whatTitleEm: 'pull request',
      what: [
        {
          title: 'Brand & design system',
          body: 'Naming, identity, palette and typography. 30+ Figma wireframes and design tokens in Tailwind v4 with @theme.',
        },
        {
          title: 'Frontend architecture',
          body: 'Component structure, BEM-lite conventions and key screens: dashboard, history, transfers and settings.',
        },
        {
          title: 'API integration',
          body: 'An axios service layer with automatic token refresh so sessions never silently expire.',
        },
        {
          title: 'Team process',
          body: 'Protected branches, reviewed PRs and sprint planning in Trello.',
        },
      ],
      archEyebrow: '02 — Architecture',
      archTitle: 'How a request travels',
      archNote: 'decoupled front and back',
      archNodes: [
        { host: 'VERCEL · MY PART', title: 'Client SPA', tech: 'React · TypeScript · Vite · Tailwind v4 · AuthContext' },
        { host: 'RAILWAY · BACKEND TEAM', title: 'REST API', tech: 'Express · TypeScript · auth · accounts · transfers' },
        { host: 'RAILWAY · BACKEND TEAM', title: 'PostgreSQL', tech: 'users · accounts · transactions' },
      ],
      archEdges: ['HTTPS · JSON · access + refresh', 'SQL'],
      archServerless:
        'Transactional emails (password reset, transfer receipts) through a Vercel endpoint that sends with AWS SES.',
      decisionsEyebrow: '03 — Decisions',
      decisionsTitleStart: 'What I chose',
      decisionsTitleEm: 'and why',
      decisions: [
        {
          title: 'Refresh token via interceptor',
          body: 'An axios interceptor renews the access token and notifies AuthContext through an event bus: the session never dies mid-transfer.',
        },
        {
          title: 'Design tokens in CSS, not JS',
          body: 'Tailwind v4 with CSS-first config: brand colors and type live in a single place.',
        },
        {
          title: 'Cutting scope in time',
          body: 'We dropped buy/sell and kept transfer, exchange and deposit, to ship fewer things done well.',
        },
        {
          title: 'Git flow with protected branches',
          body: 'main → develop → per-person branches, with required PRs to merge.',
        },
      ],
      screensEyebrow: '04 — Screens',
      screens: ['Dashboard', 'Transfer', 'Transaction history', 'Settings'],
    },
  },

  notFound: {
    title: "This page doesn't exist",
    back: 'Back to home',
  },
}

export default en
