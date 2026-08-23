import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import ImageFrame from '@/components/ImageFrame'
import { EASE_OUT } from '@/lib/motion'

/** Skickar kolumnerna vidare som CSS-variabel — se .hang i index.css. */
const hangStyle = (start: number, span: number) => ({ '--hang': `${start} / span ${span}` }) as CSSProperties

/**
 * Etiketten sätts som ett galleri sätter en: titel, vad det är och årtal,
 * en mening om verket, och sist materialet — där en museietikett skriver
 * medium. Inga fältnamn, eftersom raderna ska läsas som en etikett och
 * inte som ett formulär.
 */
const WorkLabel = ({ project }: { project: Project }) => (
  <div className='space-y-5'>
    <div>
      <h3 className='font-display text-work font-bold'>
        <Link to={`/project/${project.slug}`} className='link-underline'>
          {project.title}
        </Link>
      </h3>
      <p className='label mt-3 text-ink-soft'>
        {project.kind}, {project.date}
      </p>
    </div>

    <p className='max-w-measure text-body text-ink-soft'>{project.caption}</p>

    <div className='label space-y-1'>
      <p>{project.medium}</p>
      <p className='text-ink-soft'>{project.context}</p>
    </div>
  </div>
)

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } }
}

interface WorkPlateProps {
  project: Project
  /** Varannan rad speglas, så bilderna vandrar i sidled nedför sidan. */
  flipped: boolean
}

/**
 * Ett verk. Alla plåtar är lika stora — halva bredden, 4:3 — så att inget verk
 * väger tyngre än ett annat. Källbilderna är 1920×1440, alltså exakt 4:3, så
 * halva bredden beskär ingenting.
 */
const WorkPlate = ({ project, flipped }: WorkPlateProps) => {
  const image = flipped ? { start: 7, span: 6 } : { start: 1, span: 6 }
  const label = flipped ? { start: 1, span: 5 } : { start: 8, span: 5 }

  return (
    <motion.article
      variants={reveal}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-10% 0px' }}
      className='grid grid-cols-12 items-end gap-6 px-6 md:px-10'
    >
      <div className='hang' style={hangStyle(image.start, image.span)}>
        <Link to={`/project/${project.slug}`} aria-label={`${project.title} — open case`} className='group block'>
          <ImageFrame
            src={project.image}
            alt={`${project.title} interface`}
            className='aspect-[4/3] rounded-plate transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0'
          />
        </Link>
      </div>

      <div className='hang' style={hangStyle(label.start, label.span)}>
        <WorkLabel project={project} />
      </div>
    </motion.article>
  )
}

export default WorkPlate
