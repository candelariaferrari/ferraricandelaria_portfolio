import { useTranslation } from 'react-i18next'
import { contact } from '../../data/contact'
import { ButtonLink } from '../ui/ButtonLink'

export function Contact() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-forest text-white">
      <div className="container-site flex flex-col gap-16 pt-16 pb-8 md:pt-[110px] md:pb-12">
        <div className="flex flex-col gap-6 md:gap-7">
          <span className="font-mono text-sm">{t('contact.eyebrow')}</span>
          <h2 className="m-0 font-serif text-[3.25rem] leading-[0.95] font-normal tracking-[-0.04em] md:text-8xl xl:text-[7.5rem]">
            {t('contact.titleStart')} <em>{t('contact.titleEm')}</em>
          </h2>
          <p className="m-0 max-w-[620px] text-lg leading-relaxed md:text-xl">{t('contact.body')}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={`mailto:${contact.email}`} variant="light" className="md:text-lg">
              {contact.email}
            </ButtonLink>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <ButtonLink href={contact.linkedin} variant="outlineLight" className="md:text-lg">
                LinkedIn <span aria-hidden="true">↗</span>
              </ButtonLink>
              <ButtonLink href={contact.github} variant="outlineLight" className="md:text-lg">
                GitHub <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-white/40 pt-6 font-mono text-xs md:flex-row md:text-[13px]">
          <span>{t('contact.madeWith')}</span>
          <span>{t('contact.rights', { year })}</span>
        </div>
      </div>
    </footer>
  )
}
