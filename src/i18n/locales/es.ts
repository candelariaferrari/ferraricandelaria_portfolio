const es = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    stack: 'Stack',
    experience: 'Experiencia',
    contact: 'Contacto',
    available: 'Disponible para trabajar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },

  hero: {
    eyebrow: '// Full Stack Developer · Frontend first · Córdoba, AR',
    titleStart: 'Del diseño al código,',
    titleMid: 'y del código',
    titleEm: 'a producción.',
    intro:
      'Soy Cande, Full Stack Developer con foco en frontend. Construyo interfaces cuidadas y entiendo lo que pasa detrás de cada pantalla.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    photoAlt: 'Foto de Candelaria Ferrari',
  },

  apiCard: {
    label: 'Respuesta de ejemplo de una API con mis datos',
    keyRole: 'rol',
    keyBase: 'base',
    keyStack: 'stack',
    keyLooking: 'busca',
    keyAvailable: 'disponible',
    role: 'Full Stack Developer',
    base: 'Jesús María, Córdoba',
  },

  metrics: [
    {
      title: 'Frontend en producción',
      body: 'Casi 5 años construyendo productos digitales, principalmente con Angular.',
    },
    {
      title: 'Diseño + desarrollo',
      body: 'Mi formación en Diseño Gráfico influye en cómo pienso interfaces, componentes y experiencias.',
    },
    {
      title: 'Full Stack moderno',
      body: 'Experiencia reciente con React, TypeScript, Node.js, PostgreSQL y Firebase.',
    },
    {
      title: 'De la idea a producción',
      body: 'Me interesa entender el producto completo, no solo implementar una pantalla.',
    },
  ],

  projects: {
    eyebrow: '01 — Proyectos',
    titleStart: 'Proyectos,',
    titleEm: 'de punta a punta',
    layersLabel: 'Capas',
    legend: { me: 'lo hice yo', team: 'en equipo', none: 'no aplica' },
    layerNames: { ui: 'UI', api: 'API', db: 'DB', cloud: 'CLOUD' },
    statusNames: { me: 'hecho por mí', team: 'hecho en equipo', none: 'no aplica' },
    links: { live: 'En vivo', repo: 'GitHub', docs: 'Docs', caseStudy: 'Leer caso de estudio' },
    featuredBadge: 'Destacado',
    screenshotPending: 'captura pendiente',
    architecture: 'arquitectura · quién hizo qué',
    arch: {
      client: 'Cliente · SPA',
      clientTech: 'React + TS + Tailwind v4',
      mine: 'mi parte',
      api: 'API REST',
      apiTech: 'Express + TypeScript',
      backendTeam: 'equipo backend',
      transport: 'REST · JWT + refresh token (interceptor axios)',
      db: 'PostgreSQL',
      dbTech: 'usuarios · cuentas · movimientos',
      mailing: 'Mailing',
      mailingTech: 'Serverless → AWS SES',
    },
    items: {
      nomapay: {
        meta: 'Proyecto final grupal · equipo de 4',
        title: 'NomaPay',
        description:
          'Billetera virtual para viajeros y nómadas digitales: transferencias, cambio de moneda y depósitos. La construimos entre cuatro; yo coordiné el frontend: identidad de marca, design system, arquitectura de componentes, integración con la API, flujo de Git y sprints.',
      },
      ecommerce: {
        meta: 'Módulo 5',
        title: 'E-commerce con panel admin',
        description:
          'Tienda con dos roles: cliente (catálogo, carrito, checkout) y admin (panel protegido de productos y órdenes). Subida de imágenes a S3 con URLs prefirmadas desde funciones serverless.',
      },
      'for-today': {
        meta: 'Módulo 4',
        title: 'For Today',
        description:
          'Gestor de tareas con autenticación, rutas protegidas y datos en tiempo real. Envía emails transaccionales con AWS SES a través de Vercel Functions.',
      },
      intensamente: {
        meta: 'Módulo 3',
        title: 'Intensamente Chat',
        description:
          'SPA en JavaScript puro: un chat donde cada emoción responde con su personalidad, usando la API de Gemini.',
      },
      'api-swagger': {
        meta: 'Módulo 2',
        title: 'API documentada con Swagger',
        description: 'API REST con documentación interactiva OpenAPI.',
      },
      palettes: {
        meta: 'Módulo 1',
        title: 'Generador de paletas',
        description: 'Genera paletas de color automáticas para usar en proyectos.',
      },
    },
  },

  stack: {
    eyebrow: '02 — Stack',
    titleStart: 'Mi stack,',
    titleEm: 'por capa',
    intro:
      'Angular es donde tengo más horas de vuelo; React + TypeScript es donde construí todo lo reciente. En el backend, APIs REST con Node y bases SQL y NoSQL.',
    groups: {
      frontend: '/frontend · frameworks y librerías',
      backend: '/backend',
      data: '/bases de datos',
      cloud: '/cloud y deploy',
      quality: '/diseño y calidad',
    },
  },

  process: {
    eyebrow: '03 — Cómo trabajo',
    titleStart: 'Del Figma',
    titleEm: 'al deploy',
    intro:
      'Mi rol es construir. Cuando recibo un Figma lo leo con ojo de diseño: detecto estados que faltan, propongo mejoras y lo llevo a código cuidando cada detalle.',
    steps: [
      {
        title: 'Leo el diseño',
        body: 'Tomo el Figma, reviso estados vacíos, errores y responsive, y lo paso a design tokens. Si no hay diseñador, también puedo diseñarlo.',
      },
      {
        title: 'Modelo datos y API',
        body: 'Entidades, endpoints y contratos claros entre front y back.',
      },
      {
        title: 'Construyo la interfaz',
        body: 'Componentes reutilizables, accesibilidad y tests de lo que importa.',
      },
      {
        title: 'Deploy e iteración',
        body: 'Ramas protegidas, PRs revisados, sprints y deploy continuo.',
      },
    ],
  },

  experience: {
    eyebrow: '04 — Experiencia',
    jobs: [
      {
        period: '2020 — 2025',
        role: 'Frontend Developer',
        company: 'Agrohub',
        description:
          'Interfaces en Angular e Ionic para una startup agro. Participación en UX/UI, performance y soluciones alineadas al negocio.',
      },
      {
        period: '2022',
        role: 'Frontend Developer',
        company: 'Pagos360',
        description: 'Fintech. Interfaces en Angular, maquetación de flujos, landings SEO-friendly y accesibilidad.',
      },
      {
        period: '2020',
        role: 'Tutora',
        company: 'Coderhouse',
        description: 'Corrección de proyectos y feedback técnico en HTML, CSS y JavaScript.',
      },
      {
        period: '2019 — 2020',
        role: 'Co-fundadora',
        company: 'Combo Marketing y Diseño',
        description: 'Estudio de diseño: branding, identidad visual y piezas digitales.',
      },
    ],
    educationEyebrow: '05 — Formación',
    education: [
      { title: 'Full Stack Developer · Henry', detail: '2026 · React, Node, SQL' },
      { title: 'Angular: de cero a experto · Udemy', detail: '2025 · Signals, SSR, testing, i18n' },
      { title: 'Full Stack · Digital House', detail: '2021 — 2022' },
      { title: 'JavaScript + Desarrollo web · Coderhouse', detail: '2019 — 2020' },
      { title: 'Diseño Gráfico · Universidad Blas Pascal', detail: '2011 — 2015' },
    ],
  },

  contact: {
    eyebrow: '06 — Contacto',
    titleStart: '¿Construimos',
    titleEm: 'algo juntos?',
    body: 'Busco un equipo donde sumar como Frontend (React o Angular) o Full Stack. Remoto o híbrido desde Córdoba.',
    madeWith: 'Diseñado en Figma · construido con React + TypeScript',
    rights: '© {{year}} Candelaria Ferrari',
  },

  caseStudy: {
    back: 'Volver a proyectos',
    counter: 'caso {{current}} / {{total}}',
    role: 'Rol',
    team: 'Equipo',
    year: 'Año',
    links: 'Links',
    next: 'Siguiente proyecto',
    screenshotPending: 'captura pendiente',
    nomapay: {
      label: 'Caso de estudio · Proyecto final Henry',
      intro:
        'Una billetera virtual para quienes viven viajando: transferir, cambiar moneda y depositar desde un mismo lugar. Proyecto grupal donde coordiné el frontend.',
      roleValue: 'Líder de frontend',
      teamValue: '4 personas · 2 front, 2 back',
      yearValue: '2026',
      heroShot: 'dashboard de NomaPay en desktop + mobile',
      whatEyebrow: '01 — Qué hice',
      whatTitleStart: 'Del nombre al último',
      whatTitleEm: 'pull request',
      what: [
        {
          title: 'Marca y design system',
          body: 'Naming, identidad, paleta y tipografía. Más de 30 wireframes en Figma y tokens de diseño en Tailwind v4 con @theme.',
        },
        {
          title: 'Arquitectura frontend',
          body: 'Estructura de componentes, convenciones BEM-lite y pantallas clave: dashboard, historial, transferencias y ajustes.',
        },
        {
          title: 'Integración con la API',
          body: 'Capa de servicios con axios y renovación automática del token para que la sesión no se corte en silencio.',
        },
        {
          title: 'Proceso de equipo',
          body: 'Ramas protegidas, PRs revisados y planificación de sprints en Trello.',
        },
      ],
      archEyebrow: '02 — Arquitectura',
      archTitle: 'Cómo viaja un pedido',
      archNote: 'front y back desacoplados',
      archNodes: [
        { host: 'VERCEL · MI PARTE', title: 'Cliente SPA', tech: 'React · TypeScript · Vite · Tailwind v4 · AuthContext' },
        { host: 'RAILWAY · EQUIPO BACKEND', title: 'API REST', tech: 'Express · TypeScript · auth · cuentas · transferencias' },
        { host: 'RAILWAY · EQUIPO BACKEND', title: 'PostgreSQL', tech: 'usuarios · cuentas · movimientos' },
      ],
      archEdges: ['HTTPS · JSON · access + refresh', 'SQL'],
      archServerless:
        'Emails transaccionales (recuperar contraseña, comprobantes de transferencia) por un endpoint en Vercel que envía con AWS SES.',
      decisionsEyebrow: '03 — Decisiones',
      decisionsTitleStart: 'Lo que elegí',
      decisionsTitleEm: 'y por qué',
      decisions: [
        {
          title: 'Refresh token con interceptor',
          body: 'Un interceptor de axios renueva el access token y avisa al AuthContext por un bus de eventos: la sesión no muere a mitad de una transferencia.',
        },
        {
          title: 'Tokens de diseño en CSS, no en JS',
          body: 'Tailwind v4 con configuración CSS-first: los colores y tipos de la marca viven en un solo lugar.',
        },
        {
          title: 'Recortar alcance a tiempo',
          body: 'Sacamos compra/venta y nos quedamos con transferencia, cambio y depósito, para entregar pocas cosas bien hechas.',
        },
        {
          title: 'Git flow con ramas protegidas',
          body: 'main → develop → ramas por persona, con PRs obligatorios para integrar.',
        },
      ],
      screensEyebrow: '04 — Pantallas',
      screens: ['Dashboard', 'Transferir', 'Historial de movimientos', 'Ajustes'],
    },
  },

  notFound: {
    title: 'Esta página no existe',
    back: 'Volver al inicio',
  },
}

export default es
export type Translation = typeof es
