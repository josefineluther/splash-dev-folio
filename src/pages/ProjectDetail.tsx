import { useParams, useLocation, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoRed from '@/assets/logo-red.webp'
import { projects, findProject } from '@/data/projects'
import PageTransition from '@/components/PageTransition'
import ImageFrame from '@/components/ImageFrame'
import { contentContainer, contentItem, getDirection } from '@/lib/motion'

const ProjectDetail = () => {
  const { slug } = useParams()
  const location = useLocation()
  const { project, index } = findProject(slug)
  const direction = getDirection(location.state)

  if (!project) return <Navigate to='/' replace />

  // Pilarna stegar i arrayordning, som är nyast först — så "nästa" pekar bakåt i tiden.
  const prev = projects[index === 0 ? projects.length - 1 : index - 1]
  const next = projects[index === projects.length - 1 ? 0 : index + 1]

  return (
    <PageTransition className='flex min-h-screen flex-col'>
      <div className='flex items-center justify-between px-6 py-6 md:px-10'>
        <Link to='/' aria-label='Josefine Luther, back to start'>
          <img src={logoRed} alt='' className='h-8 w-8 brightness-0' />
        </Link>
        <Link to='/' className='link-underline label'>
          All works
        </Link>
      </div>

      {/* Egna initial/animate bryter variantärvningen från PageTransition, så att
          sidan och innehållet kan röra sig oberoende. Just därför måste `exit`
          sättas explicit här — utan den ärvs ingen exit-label alls och den gamla
          sidan skulle försvinna direkt istället för att svepa ut. Barnen sätter
          ingen egen animate och ärver därför exit-labeln härifrån. */}
      <motion.div custom={direction} variants={contentContainer} initial='hidden' animate='show' exit='exit' className='flex-1'>
        {/* Verket stort men inneslutet, i samma 4:3 som plåtarna på startsidan. */}
        <motion.div custom={direction} variants={contentItem} className='grid grid-cols-12 gap-6 px-6 md:px-10'>
          <div className='col-span-12 md:col-span-9'>
            <ImageFrame
              src={project.image}
              alt={`${project.title} interface`}
              priority
              className='aspect-[4/3] rounded-plate'
            />
          </div>
        </motion.div>

        <div className='grid grid-cols-12 gap-6 px-6 pt-12 md:px-10 md:pt-20'>
          <motion.div custom={direction} variants={contentItem} className='col-span-12 md:col-span-5'>
            <h1 className='font-display text-work font-bold'>{project.title}</h1>
            <p className='label mt-4 text-ink-soft'>
              {project.kind}, {project.date}
            </p>
            <div className='label mt-8 space-y-1'>
              <p>{project.medium}</p>
              <p className='text-ink-soft'>{project.context}</p>
            </div>
            {project.github && (
              <a href={project.github} target='_blank' rel='noreferrer' className='link-underline label mt-8 inline-block'>
                View on GitHub
              </a>
            )}
          </motion.div>

          <motion.div custom={direction} variants={contentItem} className='col-span-12 md:col-start-7 md:col-span-6'>
            <p className='max-w-measure text-body text-ink-soft'>{project.description}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Pilarna ligger UTANFÖR de svepande blocken — de är navigering, inte
          innehåll, och ska stå still medan verket sveper förbi. */}
      <nav className='mt-24 flex items-stretch justify-between gap-6 border-t border-hairline md:mt-32' aria-label='Works'>
        <Link to={`/project/${prev.slug}`} state={{ dir: -1 }} className='group flex-1 px-6 py-8 md:px-10'>
          <span className='label text-ink-soft'>Previous</span>
          <span className='mt-2 block font-display text-section font-semibold group-hover:opacity-60'>{prev.title}</span>
        </Link>
        <Link
          to={`/project/${next.slug}`}
          state={{ dir: 1 }}
          className='group flex-1 border-l border-hairline px-6 py-8 text-right md:px-10'
        >
          <span className='label text-ink-soft'>Next</span>
          <span className='mt-2 block font-display text-section font-semibold group-hover:opacity-60'>{next.title}</span>
        </Link>
      </nav>
    </PageTransition>
  )
}

export default ProjectDetail
