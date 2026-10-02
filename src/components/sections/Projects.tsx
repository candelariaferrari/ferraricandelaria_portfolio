import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '../../data/projects'
import { FeaturedProject } from '../projects/FeaturedProject'
import { ProjectCard } from '../projects/ProjectCard'
import { LayersLegend } from '../ui/LayerBadges'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'
import { fadeUp, stagger, viewport } from '../motion/variants'

export function Projects() {
  const { t } = useTranslation()
  const featured = projects.filter((p) => p.size === 'featured')
  const wide = projects.filter((p) => p.size === 'wide')
  const compact = projects.filter((p) => p.size === 'compact')

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="container-site flex flex-col gap-10 pt-20 pb-10 md:pt-[120px]">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          id="proyectos-title"
          eyebrow={t('projects.eyebrow')}
          titleStart={t('projects.titleStart')}
          titleEm={t('projects.titleEm')}
        />
        <Reveal>
          <LayersLegend />
        </Reveal>
      </div>

      {featured.map((p) => (
        <Reveal key={p.slug}>
          <FeaturedProject project={p} />
        </Reveal>
      ))}

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {wide.map((p) => (
          <motion.div key={p.slug} variants={fadeUp} className="flex">
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {compact.map((p) => (
          <motion.div key={p.slug} variants={fadeUp} className="flex">
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
