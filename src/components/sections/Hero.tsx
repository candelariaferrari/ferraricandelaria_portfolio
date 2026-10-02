import { useTranslation } from 'react-i18next'
import photo from '../../assets/cande.webp'
import { contact } from '../../data/contact'
import { ApiCard } from '../ui/ApiCard'
import { ButtonLink } from '../ui/ButtonLink'
import { Icon } from '../ui/Icon'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="container-site grid grid-cols-1 items-end gap-10 pt-8 pb-10 md:pt-16 lg:grid-cols-12 lg:gap-6 lg:pt-[88px] lg:pb-[72px]">
      <div className="flex flex-col gap-6 md:gap-8 lg:col-span-7">
        <p className="m-0 font-mono text-xs text-muted md:text-sm">{t('hero.eyebrow')}</p>
        <h1 className="m-0 font-serif text-5xl leading-[0.98] font-normal tracking-[-0.035em] md:text-7xl xl:text-[5.75rem]">
          {t('hero.titleStart')} <em className="text-forest">{t('hero.titleEm')}</em>
        </h1>
        <p className="m-0 max-w-[600px] text-base leading-relaxed text-ink-soft md:text-xl">{t('hero.intro')}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proyectos">
            {t('hero.ctaProjects')} <Icon name="arrowDown" />
          </ButtonLink>
          <ButtonLink href={contact.cv} variant="outline" download>
            {t('hero.ctaCv')} <Icon name="download" />
          </ButtonLink>
        </div>
      </div>

      {/* Foto + tarjeta de API */}
      <div className="relative mx-auto h-[420px] w-full max-w-[360px] sm:max-w-[460px] md:h-[620px] lg:col-span-5 lg:max-w-none">
        <div className="absolute top-0 right-0 flex h-[360px] w-[80%] items-end justify-center overflow-hidden rounded-[10px] bg-forest md:h-[540px] md:w-[420px] md:max-w-[90%]">
          <img
            src={photo}
            alt={t('hero.photoAlt')}
            width={800}
            height={1132}
            className="h-[96%] w-auto object-contain object-bottom"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[280px] md:hidden">
          <ApiCard compact />
        </div>
        <div className="absolute bottom-0 left-0 hidden w-[400px] max-w-[95%] md:block">
          <ApiCard />
        </div>
      </div>
    </section>
  )
}
