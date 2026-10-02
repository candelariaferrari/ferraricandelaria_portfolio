import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Logo } from '../components/layout/Navbar'
import { Contact } from '../components/sections/Contact'
import { BrowserFrame } from '../components/ui/BrowserFrame'
import { DemoMedia } from '../components/ui/DemoMedia'
import { Icon } from '../components/ui/Icon'
import { PhoneFrame } from '../components/ui/PhoneFrame'
import { caseStudyMedia } from '../data/media'
import { getProject, projects } from '../data/projects'
import type { Translation } from '../i18n/locales/es'

type CaseStudySlug = keyof Translation['caseStudy']['items']

const caseStudies = projects.filter((p) => p.caseStudy)

/** Página de caso de estudio. Los proyectos sin caso redirigen a la home. */
export default function CaseStudy() {
  const { slug = '' } = useParams()
  const { t } = useTranslation()
  const project = getProject(slug)

  const media = project ? caseStudyMedia[project.slug] : undefined
  if (!project?.caseStudy || !media) return <Navigate to="/" replace />

  const c = t(`caseStudy.items.${project.slug as CaseStudySlug}`, { returnObjects: true })
  const index = caseStudies.indexOf(project)
  const next = caseStudies[(index + 1) % caseStudies.length]
  const nextTitle = t(`projects.items.${next.slug}.title`)

  const meta = [
    { term: t('caseStudy.role'), value: c.roleValue },
    { term: t('caseStudy.team'), value: c.teamValue },
    { term: t('caseStudy.year'), value: c.yearValue },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="container-site flex h-16 items-center justify-between md:h-[88px]">
          <Link
            to={{ pathname: '/', hash: 'proyectos' }}
            className="inline-flex min-h-11 items-center gap-2.5 text-[15px] text-ink hover:text-forest"
          >
            <Icon name="arrowLeft" /> {t('caseStudy.back')}
          </Link>
          <Link to="/" aria-label={t('nav.home')} className="text-ink">
            <Logo />
          </Link>
          <span className="hidden font-mono text-[13px] text-muted sm:inline">
            {t('caseStudy.counter', { current: project.number, total: String(projects.length).padStart(2, '0') })}
          </span>
        </div>
      </header>

      <main>
        {/* Título */}
        <section className="container-site grid grid-cols-1 items-end gap-10 pt-14 pb-12 md:pt-24 md:pb-16 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <span className="font-mono text-sm text-forest">{c.label}</span>
            <h1 className="m-0 font-serif text-7xl leading-[0.92] font-normal tracking-[-0.045em] md:text-[7.5rem]">
              {c.title}
            </h1>
            <p className="m-0 max-w-[680px] text-lg leading-normal text-ink-soft md:text-[22px]">{c.intro}</p>
          </div>
          <dl className="m-0 grid grid-cols-2 gap-6 lg:col-span-4">
            {meta.map((m) => (
              <div key={m.term} className="flex flex-col gap-1.5">
                <dt className="font-mono text-xs text-muted">{m.term}</dt>
                <dd className="m-0 text-base">{m.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <dt className="font-mono text-xs text-muted">{t('caseStudy.links')}</dt>
              <dd className="m-0 flex gap-4 text-base">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="text-forest">
                    {t('projects.links.live')} ↗
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noreferrer" className="text-forest">
                    {t('projects.links.repo')} ↗
                  </a>
                )}
                {!project.links.live && !project.links.repo && <span className="text-muted">—</span>}
              </dd>
            </div>
          </dl>
        </section>

        {/* Captura principal: desktop + mobile */}
        <div className="container-site">
          <figure className="relative m-0 overflow-hidden rounded-[14px] bg-night px-4 pt-6 pb-0 md:px-14 md:pt-14">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(ellipse_at_top,rgba(155,216,181,0.12),transparent_70%)]"
              aria-hidden="true"
            />
            <BrowserFrame url={media.url} className="relative w-full rounded-b-none border-b-0 md:w-[88%]">
              <img src={media.heroDesktop} alt={c.heroAlt} className="block w-full" />
            </BrowserFrame>
            <div className="absolute right-4 bottom-4 w-[28%] max-w-[230px] md:right-14 md:bottom-10 md:w-[22%]">
              <PhoneFrame>
                <img src={media.heroMobile} alt="" className="block w-full" />
              </PhoneFrame>
            </div>
          </figure>
        </div>

        {/* Qué hice */}
        <section className="container-site grid grid-cols-1 gap-10 pt-20 pb-16 md:pt-[110px] md:pb-20 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-3 lg:col-span-4">
            <span className="font-mono text-[13px] text-forest">{c.whatEyebrow}</span>
            <h2 className="m-0 font-serif text-4xl leading-[1.05] font-normal tracking-[-0.02em] md:text-[2.75rem]">
              {c.whatTitleStart} <em>{c.whatTitleEm}</em>
            </h2>
            <p className="m-0 mt-2 text-base leading-relaxed text-ink-soft">{c.whatIntro}</p>
          </div>
          <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-8 p-0 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {c.what.map((w) => (
              <li key={w.title} className="flex flex-col gap-2 border-t border-ink pt-4.5">
                <h3 className="m-0 text-[19px] font-medium">{w.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-muted">{w.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Arquitectura */}
        <div className="container-site">
          <section className="flex flex-col gap-10 rounded-[14px] bg-night p-6 text-paper md:p-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[13px] text-mint">{c.archEyebrow}</span>
                <h2 className="m-0 font-serif text-4xl font-normal tracking-[-0.02em] md:text-[2.75rem]">{c.archTitle}</h2>
                <p className="m-0 max-w-[560px] text-base leading-relaxed text-night-text">{c.archIntro}</p>
              </div>
              <span className="font-mono text-[13px] text-night-muted">{c.archNote}</span>
            </div>
            <div className="flex flex-col items-stretch lg:flex-row">
              {c.archNodes.map((node, i) => (
                <Fragment key={node.title}>
                  <div className="flex flex-1 flex-col gap-2.5 rounded-[10px] border border-night-line p-6">
                    <span className="font-mono text-[11px] text-mint">{node.host}</span>
                    <span className="text-xl font-medium">{node.title}</span>
                    <span className="font-mono text-xs leading-relaxed text-night-muted">{node.tech}</span>
                    <span className="mt-1 text-sm leading-relaxed text-night-text">{node.detail}</span>
                  </div>
                  {i < c.archEdges.length && (
                    <div className="flex items-center justify-center gap-2 px-2 py-3 font-mono text-[11px] text-night-muted lg:w-[150px] lg:flex-col">
                      <Icon
                        name={c.archEdges[i].dir === 'both' ? 'arrowBoth' : 'arrowRight'}
                        className="rotate-90 lg:rotate-0"
                      />
                      <span className="text-center">{c.archEdges[i].label}</span>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="flex flex-col gap-2 border-t border-dashed border-night-line pt-6 md:flex-row md:items-center md:gap-4">
              <span className="font-mono text-[11px] text-mint">{c.archExtraLabel}</span>
              <span className="text-[15px] text-night-text">{c.archExtra}</span>
            </div>
          </section>
        </div>

        {/* Decisiones */}
        <section className="container-site grid grid-cols-1 gap-10 pt-20 pb-16 md:pt-[110px] md:pb-20 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-3 lg:col-span-4">
            <span className="font-mono text-[13px] text-forest">{c.decisionsEyebrow}</span>
            <h2 className="m-0 font-serif text-4xl leading-[1.05] font-normal tracking-[-0.02em] md:text-[2.75rem]">
              {c.decisionsTitleStart} <em>{c.decisionsTitleEm}</em>
            </h2>
          </div>
          <ol className="m-0 flex list-none flex-col border-b border-line p-0 lg:col-span-7 lg:col-start-6">
            {c.decisions.map((d, i) => (
              <li
                key={d.title}
                className={`grid grid-cols-[48px_1fr] border-t py-6 md:grid-cols-[56px_1fr] ${i === 0 ? 'border-ink' : 'border-line'}`}
              >
                <span className="font-mono text-[13px] text-forest">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="m-0 text-[19px] font-medium">{d.title}</h3>
                  <p className="m-0 text-[15px] leading-relaxed text-muted">{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Pantallas */}
        <section className="container-site flex flex-col gap-6 pb-20">
          <h2 className="m-0 font-mono text-[13px] font-normal text-forest">{c.screensEyebrow}</h2>
          <ul
            className={`m-0 grid list-none grid-cols-1 gap-x-6 gap-y-10 p-0 md:grid-cols-2 ${c.screens.length % 2 ? 'lg:grid-cols-3' : ''}`}
          >
            {c.screens.map((screen, i) => (
              <li key={screen.title}>
                <figure className="m-0 flex flex-col gap-4">
                  <BrowserFrame>
                    <DemoMedia
                      alt={screen.title}
                      image={media.screens[i].image}
                      video={media.screens[i].video}
                      className="aspect-[16/9] object-cover object-top"
                    />
                  </BrowserFrame>
                  <figcaption className="flex flex-col gap-1">
                    <span className="text-[17px] font-medium">{screen.title}</span>
                    <span className="text-[15px] leading-relaxed text-muted">{screen.caption}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        {/* Siguiente caso de estudio */}
        <Link
          to={`/proyectos/${next.slug}`}
          className="block bg-night text-paper transition-colors hover:bg-forest-dark"
        >
          <div className="container-site flex items-center justify-between gap-6 py-12 md:py-16">
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[13px] text-mint">{t('caseStudy.next')}</span>
              <span className="font-serif text-4xl tracking-[-0.03em] md:text-[4rem]">{nextTitle}</span>
            </div>
            <Icon name="arrowRight" size={48} strokeWidth={1.5} />
          </div>
        </Link>
      </main>

      <Contact />
    </>
  )
}
