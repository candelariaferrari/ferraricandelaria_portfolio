import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/layout/Navbar'
import { ButtonLink } from '../components/ui/ButtonLink'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <main className="container-site flex min-h-[70vh] flex-col items-start justify-center gap-6">
        <span className="font-mono text-sm text-forest">404</span>
        <h1 className="m-0 font-serif text-5xl font-normal tracking-[-0.03em] md:text-7xl">{t('notFound.title')}</h1>
        <ButtonLink href="/">{t('notFound.back')}</ButtonLink>
      </main>
    </>
  )
}
