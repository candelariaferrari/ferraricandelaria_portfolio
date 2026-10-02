import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { CodeComment } from '../ui/CodeComment'
import { drawLine, fadeUp, stagger, viewport } from '../motion/variants'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section aria-labelledby="process-title" className="container-site flex flex-col gap-12 py-20 md:gap-14 md:py-[120px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionHeading
            id="process-title"
            eyebrow={t('process.eyebrow')}
            titleStart={t('process.titleStart')}
            titleEm={t('process.titleEm')}
          />
        </div>
        <CodeComment lines={t('process.comment', { returnObjects: true })} className="lg:max-w-[460px]" />
      </div>

      <motion.ol
        className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-8 p-0 sm:grid-cols-2 lg:grid-cols-4"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {steps.map((step, i) => (
          <motion.li key={step.title} variants={fadeUp} className="relative flex flex-col gap-3 pt-6">
            <motion.span
              variants={drawLine}
              className="absolute top-0 left-0 h-px w-full origin-left bg-ink"
              aria-hidden="true"
            />
            <span className="font-mono text-[13px] text-forest">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="m-0 text-[22px] font-medium">{step.title}</h3>
            <p className="m-0 text-[15px] leading-relaxed text-muted">{step.body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
