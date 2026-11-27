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
      body: 'Experiencia reciente con React, Next.js, TypeScript, Node.js, PostgreSQL y Firebase.',
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
      client: 'Cliente',
      clientTech: 'React 19 · MapLibre GL · Tailwind v4 · localStorage',
      clientTag: 'Next.js',
      mine: 'mi parte',
      transport: 'fetch · caché de pedidos en el navegador',
      server: 'Servidor Next.js',
      serverTech: 'Server Components · Route Handlers · "use cache"',
      serverTag: 'Vercel',
      external: 'API externa',
      externals: [
        { title: 'PokéAPI', tech: '151 Pokémon · fichas en español' },
        { title: 'Open-Meteo', tech: 'Clima en tiempo real por región' },
      ],
    },
    featured: {
      subtitle: 'Radar de expedición Pokémon sobre el mapa de Argentina',
      contributionsTitle: 'Qué hice',
      contributions: [
        { area: 'Producto y UX', items: 'Concepto · design system · desktop y mobile' },
        { area: 'Frontend', items: 'Mapa interactivo · Server Components · caché en dos niveles' },
        { area: 'Calidad', items: '30 tests con Vitest · Lighthouse 100 en accesibilidad' },
      ],
      techTitle: 'Tecnologías',
    },
    items: {
      pokeradar: {
        meta: 'Desafío técnico · 72 horas',
        title: 'PokéradAR',
        description:
          'Cada región argentina es un bioma con su clima real y sus propios Pokémon. Explorás el mapa, escaneás zonas, armás tu equipo de hasta seis y lo compartís con un link. Mi primer proyecto con Next.js App Router y MapLibre.',
      },
      nomapay: {
        meta: 'Proyecto final grupal · equipo de 4',
        title: 'NomaPay',
        description:
          'Permite gestionar saldo, convertir monedas, transferir y depositar desde una misma plataforma. En un equipo de cuatro personas, coordiné el frontend: identidad visual, design system, arquitectura de componentes e integración con la API.',
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
          'SPA en JavaScript puro, sin frameworks: un chat donde cada emoción responde con su propia personalidad usando Gemini, con la API key protegida en una función serverless.',
      },
      'api-swagger': {
        meta: 'Módulo 2',
        title: 'API MiniBlog',
        description:
          'API REST para gestionar autores y publicaciones, con una relación 1:N en PostgreSQL, validaciones, códigos HTTP correctos, documentación OpenAPI y tests de integración.',
      },
      palettes: {
        meta: 'Módulo 1',
        title: 'Generador de paletas',
        description:
          'Paletas aleatorias generadas en HSL con rangos controlados, vista en HEX, RGB y HSL, bloqueo de colores, copia al portapapeles y paletas guardadas en localStorage.',
      },
    },
  },

  stack: {
    eyebrow: '03 — Stack',
    titleStart: 'Mi stack,',
    titleEm: 'por capa',
    comment: [
      'Angular es donde tengo más horas de vuelo.',
      'React + TypeScript, donde construí todo lo reciente.',
      'Backend: Node, SQL y NoSQL.',
    ],
    groups: {
      frontend: '/frontend · frameworks y librerías',
      backend: '/backend',
      data: '/bases de datos',
      cloud: '/cloud y deploy',
      quality: '/diseño y calidad',
    },
  },

  process: {
    eyebrow: '02 — Cómo trabajo',
    titleStart: 'Del Figma',
    titleEm: 'al deploy',
    comment: [
      'Mi rol es construir.',
      'Leo el Figma con ojo de diseño:',
      'detecto estados que faltan, propongo mejoras',
      'y lo llevo a código cuidando cada detalle.',
    ],
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
    titleStart: 'Trayectoria,',
    titleEm: 'entre diseño y código',
    jobsTitle: 'Experiencia laboral',
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
    educationEyebrow: 'Formación',
    education: [
      { title: 'Full Stack Developer · Henry', detail: '2026 · React, Node, SQL' },
      { title: 'Angular: de cero a experto · Udemy', detail: '2025 · Signals, SSR, testing, i18n' },
      { title: 'Full Stack · Digital House', detail: '2021 — 2022' },
      { title: 'JavaScript + Desarrollo web · Coderhouse', detail: '2019 — 2020' },
      { title: 'Diseño Gráfico · Universidad Blas Pascal', detail: '2011 — 2014' },
    ],
  },

  contact: {
    eyebrow: '05 — Contacto',
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
    lightbox: {
      open: 'Ampliar captura: {{title}}',
      close: 'Cerrar',
      prev: 'Captura anterior',
      next: 'Captura siguiente',
      counter: '{{current}} de {{total}}',
    },
    items: {
      pokeradar: {
        title: 'PokéradAR',
        label: 'Caso de estudio · Desafío técnico',
        intro:
          'Un radar de expedición Pokémon sobre el mapa de Argentina: cada región es un bioma con su clima real y sus propios Pokémon. Lo diseñé y desarrollé sola en 72 horas, como desafío técnico para un rol Frontend.',
        roleValue: 'Diseño y desarrollo',
        teamValue: 'Proyecto individual',
        yearValue: '2026',
        heroAlt: 'PokéradAR en desktop: el radar escaneando las Sierras Cordobesas con la ficha de Sandshrew abierta',
        whatEyebrow: '01 — Qué hice',
        whatTitleStart: 'Del concepto',
        whatTitleEm: 'al deploy en 72 horas',
        whatIntro:
          'La PokéAPI no dice dónde vive cada Pokémon, así que lo imaginé con una regla: cada región argentina es un bioma, y cada bioma atrae ciertos tipos.',
        what: [
          {
            title: 'Concepto y design system',
            body: 'Narrativa, paleta, tokens y layouts de desktop y mobile antes de escribir código. En mobile, los controles van en la zona del pulgar.',
          },
          {
            title: 'El mapa como navegación',
            body: 'MapLibre GL con regiones coloreadas por bioma. Al escanear aparecen 8 Pokémon escalonados y la cámara viaja entre regiones.',
          },
          {
            title: 'Clima real como regla de juego',
            body: 'Open-Meteo trae el clima de cada región: con lluvia aparecen más Agua y Bicho, con calor más Fuego. La regla se muestra en pantalla.',
          },
          {
            title: 'Equipo para compartir',
            body: 'Equipo de hasta 6 guardado en el navegador y una URL propia con imagen de vista previa generada para cada equipo.',
          },
        ],
        archEyebrow: '02 — Arquitectura',
        archTitle: 'Cómo viaja un pedido',
        archNote: 'el navegador nunca habla con las APIs externas',
        archIntro:
          'Next.js con App Router: páginas y Route Handlers en el servidor, y el mapa como isla de cliente.',
        archNodes: [
          {
            host: 'NAVEGADOR · MI PARTE',
            title: 'Cliente',
            tech: 'React 19 · MapLibre GL · Tailwind CSS v4',
            detail: 'Mapa interactivo, estado del radar y equipo persistido en localStorage.',
          },
          {
            host: 'VERCEL · MI PARTE',
            title: 'Servidor Next.js',
            tech: 'Server Components · Route Handlers · "use cache"',
            detail: 'Valida, traduce y recorta las respuestas, y las cachea para todos los usuarios.',
          },
          {
            host: 'APIS EXTERNAS',
            title: 'PokéAPI + Open-Meteo',
            tech: 'Pokémon · clima en tiempo real',
            detail: 'Datos públicos, sin API key.',
          },
        ],
        archEdges: [
          { label: 'fetch · JSON', dir: 'right' },
          { label: 'HTTPS · cacheado', dir: 'right' },
        ],
        archExtraLabel: '+ IA COMO PAIR PROGRAMMER',
        archExtra:
          'Trabajé con Claude como pair programmer, pero escribí y probé cada línea yo misma. Registré las decisiones clave en una bitácora del proyecto.',
        decisionsEyebrow: '03 — Decisiones',
        decisionsTitleStart: 'Lo que elegí',
        decisionsTitleEm: 'y por qué',
        decisions: [
          {
            title: 'Route Handlers como intermediarios',
            body: 'El servidor valida, traduce y cachea las respuestas de la PokéAPI y del clima. Si cambia un proveedor, se toca un solo archivo.',
          },
          {
            title: 'Datos precalculados',
            body: 'Un script reparte los 151 Pokémon por región según sus tipos y guarda el resultado en un JSON: la app no consulta 151 endpoints por visita.',
          },
          {
            title: 'Animaciones CSS, no una librería',
            body: 'Entradas, salidas y pulsos de radar que CSS resuelve sin sumar peso. Todas respetan prefers-reduced-motion.',
          },
          {
            title: 'Tests sobre las reglas del juego',
            body: '30 tests con Vitest sobre la lógica pura: escaneo, filtros, clima y URLs de equipo inválidas.',
          },
        ],
        screensEyebrow: '04 — Pantallas',
        screens: [
          { title: 'Escanear y descubrir', caption: 'Elegís una región, escaneás la zona y abrís la ficha de cada Pokémon con datos reales.' },
          { title: 'Regiones de Argentina', caption: 'Al alejar el zoom se ven todas las regiones con su color; tocar una viaja hacia ella.' },
          { title: 'Tu equipo', caption: 'Hasta seis Pokémon, listos para compartir con un link.' },
        ],
      },
      nomapay: {
        title: 'NomaPay',
        label: 'Caso de estudio · Proyecto final Henry',
        intro:
          'Billetera digital para personas que trabajan y se mueven entre distintos países: saldo, conversión de monedas, transferencias y depósitos en una misma plataforma. Proyecto grupal donde coordiné el frontend.',
        roleValue: 'Coordinación de frontend',
        teamValue: '4 personas · 2 front, 2 back',
        yearValue: '2026',
        heroAlt: 'Dashboard de NomaPay en desktop y en mobile',
        whatEyebrow: '01 — Qué hice',
        whatTitleStart: 'Del nombre al último',
        whatTitleEm: 'pull request',
        whatIntro:
          'Diseñé y desarrollé la experiencia frontend de la aplicación, desde la definición visual hasta la implementación de las principales interfaces.',
        what: [
          {
            title: 'Identidad y design system',
            body: 'Identidad visual, más de 30 wireframes en Figma y un sistema de diseño con tokens en Tailwind v4. Interfaces responsive para desktop y mobile.',
          },
          {
            title: 'Arquitectura frontend',
            body: 'Componentes reutilizables y los flujos principales de la billetera: saldo, conversión y transferencias.',
          },
          {
            title: 'Autenticación e integración',
            body: 'Manejo del estado de sesión, integración con la API REST e interceptores de Axios que renuevan el token automáticamente.',
          },
          {
            title: 'Trabajo en equipo',
            body: 'Git con ramas protegidas, Pull Requests y organización por sprints junto al equipo de backend.',
          },
        ],
        archEyebrow: '02 — Arquitectura',
        archTitle: 'Cómo viaja un pedido',
        archNote: 'front y back desacoplados',
        archIntro: 'Una SPA conectada a una API REST, con autenticación JWT y persistencia de datos en PostgreSQL.',
        archNodes: [
          {
            host: 'VERCEL · MI PARTE',
            title: 'Cliente · Frontend',
            tech: 'React · TypeScript · Vite · Tailwind CSS v4',
            detail: 'Rutas protegidas, manejo de sesión e interceptores de Axios.',
          },
          {
            host: 'RAILWAY · EQUIPO BACKEND',
            title: 'API REST',
            tech: 'Express · TypeScript · JWT · Swagger',
            detail: 'Endpoints para autenticación, usuarios, cuentas, movimientos y operaciones de la billetera, documentados con Swagger.',
          },
          {
            host: 'RAILWAY · EQUIPO BACKEND',
            title: 'PostgreSQL',
            tech: 'Sequelize · usuarios · cuentas · movimientos',
            detail: 'Persistencia de los datos de la billetera.',
          },
        ],
        archEdges: [
          { label: 'HTTPS · JSON · access + refresh', dir: 'right' },
          { label: 'SQL', dir: 'right' },
        ],
        archExtraLabel: '+ SERVERLESS',
        archExtra:
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
        screens: [
          { title: 'Landing', caption: 'Página pública con la propuesta de valor y el acceso a la cuenta.' },
          { title: 'Convertir monedas', caption: 'Conversión entre ARS, USD y BRL con la tasa y la comisión a la vista.' },
          { title: 'Transferir', caption: 'Flujo en tres pasos: destinatario, monto y confirmación.' },
          { title: 'Resumen semanal', caption: 'Entradas, salidas y cambios por día, filtrados por moneda.' },
        ],
      },
      ecommerce: {
        title: 'MUNDO',
        label: 'Caso de estudio · Proyecto integrador M5',
        intro:
          'MUNDO es una juguetería ficticia: un e-commerce con dos experiencias, la de quien compra y la de quien administra el catálogo y las órdenes, con autenticación, base de datos e imágenes en la nube.',
        roleValue: 'Desarrollo full stack',
        teamValue: 'Proyecto individual',
        yearValue: '2026',
        heroAlt: 'Home de MUNDO en desktop y en mobile',
        whatEyebrow: '01 — Qué hice',
        whatTitleStart: 'Un e-commerce completo,',
        whatTitleEm: 'de punta a punta',
        whatIntro:
          'Diseñé y desarrollé tanto la tienda como el panel de administración, con autenticación, base de datos y almacenamiento de imágenes reales.',
        what: [
          {
            title: 'Experiencia de compra',
            body: 'Catálogo con filtros por categoría y precio sincronizados en la URL, búsqueda con debounce, carrito de invitado que se fusiona al iniciar sesión y checkout con confirmación.',
          },
          {
            title: 'Panel de administración',
            body: 'Dashboard con métricas reales, CRUD de productos con subida de imágenes y gestión de órdenes con una máquina de estados simple.',
          },
          {
            title: 'Seguridad y roles',
            body: 'Rutas protegidas por sesión y por rol, y reglas de Firestore que impiden que alguien se asigne el rol de admin desde la app.',
          },
          {
            title: 'Testing',
            body: 'Alrededor de 100 tests con Vitest y React Testing Library: reducer del carrito, hooks, servicios, ruteo por rol y un checkout que no genera órdenes duplicadas.',
          },
        ],
        archEyebrow: '02 — Arquitectura',
        archTitle: 'Serverless y sin credenciales expuestas',
        archNote: 'sin backend propio',
        archIntro:
          'Una SPA que habla directo con Firebase para la autenticación y los datos, y con una Vercel Function solo para firmar la subida de imágenes a S3.',
        archNodes: [
          {
            host: 'FIREBASE',
            title: 'Auth + Firestore',
            tech: 'Email · Google · reglas de seguridad',
            detail: 'Productos, órdenes y perfiles con rol customer o admin.',
          },
          {
            host: 'VERCEL',
            title: 'Cliente SPA',
            tech: 'React 18 · TypeScript · Tailwind CSS v4',
            detail: 'Context API por dominio y useReducer para el carrito.',
          },
          {
            host: 'VERCEL FUNCTION → AWS',
            title: 'Imágenes en S3',
            tech: 'api/presign.ts · URL firmada de 60 s',
            detail: 'El archivo viaja directo del navegador a S3.',
          },
        ],
        archEdges: [
          { label: 'SDK · auth y datos', dir: 'both' },
          { label: 'presigned URL', dir: 'right' },
        ],
        archExtraLabel: '+ SEGURIDAD',
        archExtra:
          'Las credenciales de AWS nunca llegan al navegador, y nadie puede autoasignarse el rol de admin: Firestore bloquea cualquier cambio de rol desde la app.',
        decisionsEyebrow: '03 — Decisiones',
        decisionsTitleStart: 'Lo que elegí',
        decisionsTitleEm: 'y por qué',
        decisions: [
          {
            title: 'useReducer para el carrito',
            body: 'Toda la lógica del carrito vive en un reducer puro: una sola fuente de verdad, fácil de testear sin renderizar nada.',
          },
          {
            title: 'Presigned URLs para S3',
            body: 'Una Vercel Function firma una subida única que vence en 60 segundos, y el archivo va directo del navegador a S3.',
          },
          {
            title: 'Carrito de invitado',
            body: 'Se puede armar el carrito sin cuenta y se fusiona con el del usuario al iniciar sesión, como en un e-commerce real.',
          },
          {
            title: 'Paginación por cursor genérica',
            body: 'Un hook que no conoce el dominio y se reutiliza en el catálogo y en el panel de administración.',
          },
        ],
        screensEyebrow: '04 — Pantallas',
        screens: [
          { title: 'Catálogo', caption: 'Filtros por tipo de juego y precio, con paginación.' },
          { title: 'Carrito', caption: 'Resumen del pedido y cuánto falta para el envío gratis.' },
          { title: 'Inicio de sesión', caption: 'Ingreso con email o con Google, sin salir de la página.' },
        ],
      },
      'for-today': {
        title: 'For Today',
        label: 'Caso de estudio · Proyecto integrador M4',
        intro:
          'Un gestor de tareas semanal: cada persona organiza sus tareas por prioridad y fecha, ve su progreso de la semana y recibe un resumen por email.',
        roleValue: 'Desarrollo full stack',
        teamValue: 'Proyecto individual',
        yearValue: '2026',
        heroAlt: 'Resumen semanal de For Today en desktop y en mobile',
        whatEyebrow: '01 — Qué hice',
        whatTitleStart: 'Del login al email,',
        whatTitleEm: 'en tiempo real',
        whatIntro:
          'Diseñé y desarrollé la app completa: interfaz mobile-first, autenticación, datos por usuario y envío de emails desde una función serverless.',
        what: [
          {
            title: 'Tareas en tiempo real',
            body: 'CRUD completo con Firestore y onSnapshot: la lista se actualiza sola después de cada cambio, sin recargar la página.',
          },
          {
            title: 'Resumen semanal',
            body: 'Progreso de la semana, tareas por día y distribución por prioridad, con un gráfico de dona hecho a medida.',
          },
          {
            title: 'Email con diseño',
            body: 'Un botón arma el resumen en texto plano y en HTML, y una función serverless lo envía con AWS SES.',
          },
          {
            title: 'Calidad',
            body: '37 tests con Vitest y React Testing Library, validaciones con casos borde y TypeScript sin any.',
          },
        ],
        archEyebrow: '02 — Arquitectura',
        archTitle: 'Un resumen que llega a tu correo',
        archNote: 'Firebase + serverless',
        archIntro:
          'La app lee y escribe las tareas directo en Firestore, y delega el envío de emails a una función serverless, la única que conoce las credenciales de AWS.',
        archNodes: [
          {
            host: 'FIREBASE',
            title: 'Auth + Firestore',
            tech: 'Email · Google · onSnapshot',
            detail: 'Cada tarea solo la puede leer o editar su dueño.',
          },
          {
            host: 'VERCEL',
            title: 'Cliente SPA',
            tech: 'React 19 · TypeScript · CSS mobile-first',
            detail: 'Hooks useTasks y useTaskActions, y toasts centralizados.',
          },
          {
            host: 'VERCEL FUNCTION → AWS',
            title: 'Email con SES',
            tech: 'api/send-email.ts · texto + HTML',
            detail: 'Valida el pedido y recién ahí llama a SES.',
          },
        ],
        archEdges: [
          { label: 'tiempo real', dir: 'both' },
          { label: 'POST /api/send-email', dir: 'right' },
        ],
        archExtraLabel: '+ SEGURIDAD',
        archExtra:
          'Las credenciales de AWS solo existen en el servidor, y las reglas de Firestore garantizan que cada persona acceda únicamente a sus propias tareas.',
        decisionsEyebrow: '03 — Decisiones',
        decisionsTitleStart: 'Lo que elegí',
        decisionsTitleEm: 'y por qué',
        decisions: [
          {
            title: 'onSnapshot en vez de getDocs',
            body: 'Una suscripción en tiempo real mantiene la interfaz sincronizada sin volver a pedir datos, y se cancela al desmontar para evitar memory leaks.',
          },
          {
            title: 'Ordenar en el cliente',
            body: 'Sacar el orderBy de la query evitó mantener un índice compuesto en Firestore para una colección chica.',
          },
          {
            title: 'Acciones centralizadas',
            body: 'Crear, editar, eliminar y completar comparten un único hook, con estado de carga y feedback por toast.',
          },
          {
            title: 'Sesión sin parpadeos',
            body: 'La ruta protegida espera a saber si hay sesión antes de redirigir, así no rebota al login al recargar.',
          },
        ],
        screensEyebrow: '04 — Pantallas',
        screens: [
          { title: 'Mis tareas', caption: 'Crear, editar, completar y eliminar tareas, con filtros por estado.' },
          { title: 'Nueva tarea', caption: 'Formulario con prioridad, fecha límite y validaciones.' },
          { title: 'Inicio de sesión', caption: 'Ingreso con email o con Google.' },
          { title: 'Email de resumen', caption: 'El resumen semanal, tal como llega al correo.' },
        ],
      },
    },
  },

  notFound: {
    title: 'Esta página no existe',
    back: 'Volver al inicio',
  },
}

export default es
export type Translation = typeof es
