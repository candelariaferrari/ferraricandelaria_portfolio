import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import photo from '../../assets/cande.webp'
import { contact } from '../../data/contact'
import { ApiCard } from '../ui/ApiCard'
import { ButtonLink } from '../ui/ButtonLink'
import { Icon } from '../ui/Icon'
import { ease, fadeUp, stagger } from '../motion/variants'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="container-site grid grid-cols-1 items-center gap-10 pt-8 pb-10 md:pt-16 lg:grid-cols-12 lg:gap-6 lg:pt-[88px] lg:pb-[72px]">
      <motion.div
        className="flex flex-col gap-6 md:gap-8 lg:col-span-7"
        variants={stagger(0.12, 0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="m-0 font-mono text-xs text-muted md:text-sm">
          {t('hero.eyebrow')}
        </motion.p>
        {/* Dos líneas fijas en desktop: el tamaño escala con el ancho de la pantalla */}
        <h1 className="relative z-10 m-0 font-serif text-[2.75rem] leading-[1.02] font-normal tracking-[-0.035em] md:text-6xl lg:text-[clamp(3rem,5vw,4.875rem)]">
          <motion.span variants={fadeUp} className="block lg:whitespace-nowrap">
            {t('hero.titleStart')}
          </motion.span>{' '}
          <motion.span variants={fadeUp} className="block lg:whitespace-nowrap">
            {t('hero.titleMid')} <em className="text-forest">{t('hero.titleEm')}</em>
          </motion.span>
        </h1>
        <motion.p variants={fadeUp} className="m-0 max-w-[600px] text-base leading-relaxed text-ink-soft md:text-xl">
          {t('hero.intro')}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proyectos">
            {t('hero.ctaProjects')} <Icon name="arrowDown" />
          </ButtonLink>
          <ButtonLink href={contact.cv} variant="outline" download>
            {t('hero.ctaCv')} <Icon name="download" />
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Foto + tarjeta de API */}
      <div className="relative mx-auto h-[420px] w-full max-w-[360px] sm:max-w-[460px] md:h-[620px] lg:col-span-5 lg:max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="absolute top-0 right-0 flex h-[360px] w-[80%] items-end justify-center overflow-hidden rounded-[10px] bg-forest md:h-[540px] md:w-[420px] md:max-w-[90%]"
        >
          <img
            src={photo}
            alt={t('hero.photoAlt')}
            width={800}
            height={1132}
            className="h-[96%] w-auto object-contain object-bottom"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="absolute bottom-0 left-0 w-[280px] max-w-[95%] md:w-[400px]"
        >
          <div className="md:hidden">
            <ApiCard compact />
          </div>
          <div className="hidden md:block">
            <ApiCard />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
