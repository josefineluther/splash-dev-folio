import { useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/data/projects'
import ImageFrame from '@/components/ImageFrame'
import { useWallTint } from '@/lib/wall'
import { cn } from '@/lib/utils'
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

/**
 * Ett verk på väggen. Plåtens bredd och plats kommer ur projektets egen
 * `hang`; rastret är handsatt per verk, och plåtens storlek följer verkets
 * tyngd, så asymmetrin bär information.
 */
const WorkPlate = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLElement>(null)

  // Bred marginal: väggen ska skifta när verket står mitt i vyn, inte i det
  // ögonblick dess kant nuddar den.
  const inView = useInView(ref, { margin: '-35% 0px -35% 0px' })
  useWallTint(project.tint, inView)

  const { hang } = project
  const { image } = hang

  /* Kant-till-kant-plåten beskärs bredare. Bilderna är 4:3, men den tiltade
     skärmen sitter i mitten med gott om gradient runt om — 16:9 skär bort
     gradient, inte innehåll, och en 4:3 i full bredd blir 1080 px hög och
     sväljer hela vyn. */
  const plate = (
    <Link to={`/project/${project.slug}`} aria-label={`${project.title} — open case`} className='group block'>
      <ImageFrame
        src={project.image}
        alt={`${project.title} interface`}
        className={cn(
          'transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0',
          image === 'bleed' ? 'aspect-[16/9]' : 'aspect-[4/3]'
        )}
      />
    </Link>
  )

  return (
    <motion.article
      ref={ref}
      variants={reveal}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {image === 'bleed' ? (
        <>
          {/* Det tyngsta verket spränger rastret helt och går kant till kant. */}
          {plate}
          <div className='grid grid-cols-12 gap-6 px-6 pt-8 md:px-10'>
            <div className='hang' style={hangStyle(hang.label.start, hang.label.span)}>
              <WorkLabel project={project} />
            </div>
          </div>
        </>
      ) : (
        <div className='grid grid-cols-12 items-end gap-6 px-6 md:px-10'>
          <div className='hang' style={hangStyle(image.start, image.span)}>
            {plate}
          </div>
          <div className='hang' style={hangStyle(hang.label.start, hang.label.span)}>
            <WorkLabel project={project} />
          </div>
        </div>
      )}
    </motion.article>
  )
}

export default WorkPlate
