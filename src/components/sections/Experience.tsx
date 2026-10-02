import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../ui/SectionHeading'
import { fadeUp, stagger, viewport } from '../motion/variants'

export function Experience() {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true })
  const education = t('experience.education', { returnObjects: true })

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="container-site flex flex-col gap-12 py-20 md:gap-14 md:py-[120px]"
    >
      <SectionHeading
        id="experiencia-title"
        eyebrow={t('experience.eyebrow')}
        titleStart={t('experience.titleStart')}
        titleEm={t('experience.titleEm')}
      />

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col lg:col-span-7">
          <h3 className="m-0 pb-3.5 font-mono text-sm font-normal text-forest">{t('experience.jobsTitle')}</h3>
          <motion.ol
            className="m-0 list-none border-b border-line p-0"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {jobs.map((job, i) => (
              <motion.li
                variants={fadeUp}
                key={job.company}
                className={`grid grid-cols-1 gap-2 border-t py-6 sm:grid-cols-[160px_1fr] sm:gap-6 ${i === 0 ? 'border-ink' : 'border-line'}`}
              >
                <span className="font-mono text-[13px] text-muted sm:pt-1.5">{job.period}</span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="m-0 text-xl font-medium md:text-[22px]">
                    {job.role} · {job.company}
                  </h4>
                  <p className="m-0 text-[15px] leading-relaxed text-muted">{job.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="flex flex-col lg:col-span-4 lg:col-start-9">
          <h3 className="m-0 pb-3.5 font-mono text-sm font-normal text-forest">{t('experience.educationEyebrow')}</h3>
          <motion.ul
            className="m-0 list-none border-b border-line p-0"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {education.map((item, i) => (
              <motion.li variants={fadeUp} key={item.title} className={`flex flex-col gap-1 border-t py-5 ${i === 0 ? 'border-ink' : 'border-line'}`}>
                <span className="text-lg font-medium">{item.title}</span>
                <span className="font-mono text-xs text-muted">{item.detail}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
