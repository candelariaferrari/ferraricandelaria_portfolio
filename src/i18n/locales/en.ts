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
      client: 'Client · Frontend',
      clientTech: 'React + TS + Vite + Tailwind v4',
      mine: 'my part',
      api: 'REST API',
      apiTech: 'Express + TypeScript · Swagger',
      backendTeam: 'backend team',
      team: 'team',
      transport: 'REST · JWT + refresh token · Axios interceptors',
      db: 'PostgreSQL',
      dbTech: 'Sequelize · users · accounts · transactions',
      mailing: 'Emails',
      mailingTech: 'Serverless → AWS SES',
    },
    featured: {
      subtitle: 'A digital wallet for travelers and digital nomads',
      contributionsTitle: 'My contribution',
      contributions: [
        { area: 'UI & Design', items: 'Visual identity · Design System · Responsive' },
        { area: 'Frontend', items: 'Component architecture · authentication · API integration' },
        { area: 'Team', items: 'Git · Pull Requests · sprints' },
      ],
      techTitle: 'Tech stack',
    },
    items: {
      nomapay: {
        meta: 'Final group project · team of 4',
        title: 'NomaPay',
        description:
          'Manage your balance, convert currencies, transfer and deposit from a single platform. In a team of four, I coordinated the frontend: visual identity, design system, component architecture and API integration.',
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
          'A framework-free vanilla JavaScript SPA: a chat where each emotion replies with its own personality using Gemini, with the API key protected in a serverless function.',
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
    comment: [
      'Angular is where I have the most mileage.',
      'React + TypeScript, where I built everything recent.',
      'Backend: Node, SQL and NoSQL.',
    ],
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
    comment: [
      'My role is to build.',
      'I read Figma files with a designer\'s eye:',
      'I spot missing states, suggest improvements',
      'and bring it to code with care for every detail.',
    ],
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
      { title: 'Graphic Design · Universidad Blas Pascal', detail: '2011 — 2014' },
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
    items: {
      nomapay: {
        title: 'NomaPay',
        label: 'Case study · Henry final project',
        intro:
          'A digital wallet for people who work and move between countries: balance, currency conversion, transfers and deposits in a single platform. A group project where I coordinated the frontend.',
        roleValue: 'Frontend coordinator',
        teamValue: '4 people · 2 front, 2 back',
        yearValue: '2026',
        heroAlt: 'NomaPay dashboard on desktop and mobile',
        whatEyebrow: '01 — What I did',
        whatTitleStart: 'From the name to the last',
        whatTitleEm: 'pull request',
        whatIntro:
          'I designed and built the frontend experience of the app, from the visual definition to the implementation of the main interfaces.',
        what: [
          {
            title: 'Identity & design system',
            body: 'Visual identity, 30+ Figma wireframes and a design system with Tailwind v4 tokens. Responsive interfaces for desktop and mobile.',
          },
          {
            title: 'Frontend architecture',
            body: 'Reusable components and the main wallet flows: balance, conversion and transfers.',
          },
          {
            title: 'Authentication & integration',
            body: 'Session state management, REST API integration and Axios interceptors that refresh the token automatically.',
          },
          {
            title: 'Teamwork',
            body: 'Git with protected branches, Pull Requests and sprint planning alongside the backend team.',
          },
        ],
        archEyebrow: '02 — Architecture',
        archTitle: 'How a request travels',
        archNote: 'decoupled front and back',
        archIntro: 'An SPA connected to a REST API, with JWT authentication and data persisted in PostgreSQL.',
        archNodes: [
          {
            host: 'VERCEL · MY PART',
            title: 'Client · Frontend',
            tech: 'React · TypeScript · Vite · Tailwind CSS v4',
            detail: 'Protected routes, session handling and Axios interceptors.',
          },
          {
            host: 'RAILWAY · BACKEND TEAM',
            title: 'REST API',
            tech: 'Express · TypeScript · JWT · Swagger',
            detail: 'Endpoints for authentication, users, accounts, transactions and wallet operations, documented with Swagger.',
          },
          {
            host: 'RAILWAY · BACKEND TEAM',
            title: 'PostgreSQL',
            tech: 'Sequelize · users · accounts · transactions',
            detail: 'Persistence for all wallet data.',
          },
        ],
        archEdges: [
          { label: 'HTTPS · JSON · access + refresh', dir: 'right' },
          { label: 'SQL', dir: 'right' },
        ],
        archExtraLabel: '+ SERVERLESS',
        archExtra:
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
        screens: [
          { title: 'Landing page', caption: 'Public page with the value proposition and account access.' },
          { title: 'Currency exchange', caption: 'Conversion between ARS, USD and BRL with the rate and fee upfront.' },
          { title: 'Transfer', caption: 'A three-step flow: recipient, amount and confirmation.' },
          { title: 'Weekly summary', caption: 'Income, expenses and exchanges per day, filtered by currency.' },
        ],
      },
      ecommerce: {
        title: 'MUNDO',
        label: 'Case study · Module 5 capstone',
        intro:
          'MUNDO is a fictional toy store: an e-commerce with two experiences, one for shoppers and one for whoever manages the catalog and orders, with authentication, a database and cloud-hosted images.',
        roleValue: 'Full stack development',
        teamValue: 'Solo project',
        yearValue: '2026',
        heroAlt: 'MUNDO home page on desktop and mobile',
        whatEyebrow: '01 — What I did',
        whatTitleStart: 'A complete e-commerce,',
        whatTitleEm: 'end to end',
        whatIntro:
          'I designed and built both the store and the admin panel, with real authentication, database and image storage.',
        what: [
          {
            title: 'Shopping experience',
            body: 'Catalog with category and price filters synced to the URL, debounced search, a guest cart that merges on login, and checkout with confirmation.',
          },
          {
            title: 'Admin panel',
            body: 'Dashboard with real metrics, product CRUD with image uploads, and order management with a simple state machine.',
          },
          {
            title: 'Security & roles',
            body: 'Routes protected by session and role, and Firestore rules that prevent anyone from granting themselves the admin role from the app.',
          },
          {
            title: 'Testing',
            body: 'Around 100 tests with Vitest and React Testing Library: cart reducer, hooks, services, role-based routing and a checkout that never creates duplicate orders.',
          },
        ],
        archEyebrow: '02 — Architecture',
        archTitle: 'Serverless, with no exposed credentials',
        archNote: 'no custom backend',
        archIntro:
          'An SPA that talks directly to Firebase for authentication and data, and to a Vercel Function only to sign image uploads to S3.',
        archNodes: [
          {
            host: 'FIREBASE',
            title: 'Auth + Firestore',
            tech: 'Email · Google · security rules',
            detail: 'Products, orders and profiles with a customer or admin role.',
          },
          {
            host: 'VERCEL',
            title: 'Client SPA',
            tech: 'React 18 · TypeScript · Tailwind CSS v4',
            detail: 'Context API per domain and useReducer for the cart.',
          },
          {
            host: 'VERCEL FUNCTION → AWS',
            title: 'Images on S3',
            tech: 'api/presign.ts · 60 s signed URL',
            detail: 'Files go straight from the browser to S3.',
          },
        ],
        archEdges: [
          { label: 'SDK · auth & data', dir: 'both' },
          { label: 'presigned URL', dir: 'right' },
        ],
        archExtraLabel: '+ SECURITY',
        archExtra:
          'AWS credentials never reach the browser, and nobody can grant themselves the admin role: Firestore blocks any role change from the app.',
        decisionsEyebrow: '03 — Decisions',
        decisionsTitleStart: 'What I chose',
        decisionsTitleEm: 'and why',
        decisions: [
          {
            title: 'useReducer for the cart',
            body: 'All cart logic lives in a pure reducer: a single source of truth that is easy to test without rendering anything.',
          },
          {
            title: 'Presigned URLs for S3',
            body: 'A Vercel Function signs a one-time upload that expires in 60 seconds, and the file goes straight from the browser to S3.',
          },
          {
            title: 'Guest cart',
            body: 'You can build a cart without an account and it merges with your own when you log in, like in a real store.',
          },
          {
            title: 'Generic cursor pagination',
            body: 'A domain-agnostic hook reused in both the catalog and the admin panel.',
          },
        ],
        screensEyebrow: '04 — Screens',
        screens: [
          { title: 'Catalog', caption: 'Filters by play type and price, with pagination.' },
          { title: 'Cart', caption: 'Order summary and how much is left for free shipping.' },
          { title: 'Sign in', caption: 'Email or Google sign-in without leaving the page.' },
        ],
      },
      'for-today': {
        title: 'For Today',
        label: 'Case study · Module 4 capstone',
        intro:
          'A weekly task manager: each person organizes their tasks by priority and due date, tracks their weekly progress and gets a summary by email.',
        roleValue: 'Full stack development',
        teamValue: 'Solo project',
        yearValue: '2026',
        heroAlt: 'For Today weekly summary on desktop and mobile',
        whatEyebrow: '01 — What I did',
        whatTitleStart: 'From login to inbox,',
        whatTitleEm: 'in real time',
        whatIntro:
          'I designed and built the whole app: a mobile-first interface, authentication, per-user data and emails sent from a serverless function.',
        what: [
          {
            title: 'Real-time tasks',
            body: 'Full CRUD with Firestore and onSnapshot: the list updates itself after every change, without reloading.',
          },
          {
            title: 'Weekly summary',
            body: 'Weekly progress, tasks per day and priority breakdown, with a custom donut chart.',
          },
          {
            title: 'Designed emails',
            body: 'One button builds the summary as plain text and HTML, and a serverless function sends it through AWS SES.',
          },
          {
            title: 'Quality',
            body: '37 tests with Vitest and React Testing Library, validations with edge cases and TypeScript with no any.',
          },
        ],
        archEyebrow: '02 — Architecture',
        archTitle: 'A summary that lands in your inbox',
        archNote: 'Firebase + serverless',
        archIntro:
          'The app reads and writes tasks directly in Firestore, and hands email delivery to a serverless function, the only piece that knows the AWS credentials.',
        archNodes: [
          {
            host: 'FIREBASE',
            title: 'Auth + Firestore',
            tech: 'Email · Google · onSnapshot',
            detail: 'Each task can only be read or edited by its owner.',
          },
          {
            host: 'VERCEL',
            title: 'Client SPA',
            tech: 'React 19 · TypeScript · mobile-first CSS',
            detail: 'useTasks and useTaskActions hooks, plus centralized toasts.',
          },
          {
            host: 'VERCEL FUNCTION → AWS',
            title: 'Email with SES',
            tech: 'api/send-email.ts · text + HTML',
            detail: 'Validates the request before calling SES.',
          },
        ],
        archEdges: [
          { label: 'real time', dir: 'both' },
          { label: 'POST /api/send-email', dir: 'right' },
        ],
        archExtraLabel: '+ SECURITY',
        archExtra:
          'AWS credentials only exist on the server, and Firestore rules make sure each person can only access their own tasks.',
        decisionsEyebrow: '03 — Decisions',
        decisionsTitleStart: 'What I chose',
        decisionsTitleEm: 'and why',
        decisions: [
          {
            title: 'onSnapshot instead of getDocs',
            body: 'A real-time subscription keeps the UI in sync without refetching, and it is cancelled on unmount to avoid memory leaks.',
          },
          {
            title: 'Sorting on the client',
            body: 'Dropping orderBy from the query avoided maintaining a composite Firestore index for a small collection.',
          },
          {
            title: 'Centralized actions',
            body: 'Create, edit, delete and complete share a single hook, with loading state and toast feedback.',
          },
          {
            title: 'No session flicker',
            body: 'The protected route waits to know whether there is a session before redirecting, so reloading never bounces you to login.',
          },
        ],
        screensEyebrow: '04 — Screens',
        screens: [
          { title: 'My tasks', caption: 'Create, edit, complete and delete tasks, with status filters.' },
          { title: 'New task', caption: 'Form with priority, due date and validations.' },
          { title: 'Sign in', caption: 'Email or Google sign-in.' },
          { title: 'Summary email', caption: 'The weekly summary, exactly as it lands in the inbox.' },
        ],
      },
    },
  },

  notFound: {
    title: "This page doesn't exist",
    back: 'Back to home',
  },
}

export default en
