import { useTranslation } from 'react-i18next'

export function Experience() {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true })
  const education = t('experience.education', { returnObjects: true })

  return (
    <section
      id="experiencia"
      aria-label={t('nav.experience')}
      className="container-site grid grid-cols-1 gap-16 pt-4 pb-20 md:pb-[120px] lg:grid-cols-12 lg:gap-6"
    >
      <div className="flex flex-col lg:col-span-7">
        <h2 className="m-0 pb-3.5 font-mono text-sm font-normal text-forest">{t('experience.eyebrow')}</h2>
        <ol className="m-0 list-none border-b border-line p-0">
          {jobs.map((job, i) => (
            <li
              key={job.company}
              className={`grid grid-cols-1 gap-2 border-t py-6 sm:grid-cols-[160px_1fr] sm:gap-6 ${i === 0 ? 'border-ink' : 'border-line'}`}
            >
              <span className="font-mono text-[13px] text-muted sm:pt-1.5">{job.period}</span>
              <div className="flex flex-col gap-1.5">
                <h3 className="m-0 text-xl font-medium md:text-[22px]">
                  {job.role} · {job.company}
                </h3>
                <p className="m-0 text-[15px] leading-relaxed text-muted">{job.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col lg:col-span-4 lg:col-start-9">
        <h2 className="m-0 pb-3.5 font-mono text-sm font-normal text-forest">{t('experience.educationEyebrow')}</h2>
        <ul className="m-0 list-none border-b border-line p-0">
          {education.map((item, i) => (
            <li key={item.title} className={`flex flex-col gap-1 border-t py-5 ${i === 0 ? 'border-ink' : 'border-line'}`}>
              <span className="text-lg font-medium">{item.title}</span>
              <span className="font-mono text-xs text-muted">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
