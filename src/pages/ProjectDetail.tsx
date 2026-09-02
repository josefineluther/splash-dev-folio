import { useParams, useLocation, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoRed from '@/assets/logo-red.webp'
import { projects, findProject, plainTitle } from '@/data/projects'
import PageTransition from '@/components/PageTransition'
import ImageFrame from '@/components/ImageFrame'
import { contentContainer, contentItem, getDirection } from '@/lib/motion'
import { useDocumentTitle } from '@/lib/title'

/**
 * En katalogpost: rubriken med årtalet överst, verket i full bredd under den,
 * och materialet och texten sist. Samma museietikett som på väggen, bara
 * uppdelad — rubriken säger vad verket är, foten vad det är gjort av.
 */
const ProjectDetail = () => {
  const { slug } = useParams()
  const location = useLocation()
  const { project, index } = findProject(slug)
  const direction = getDirection(location.state)

  useDocumentTitle(project?.title, project?.caption)

  if (!project) return <Navigate to='/' replace />

  // Pilarna stegar i arrayordning, som är nyast först — så "nästa" pekar bakåt i tiden.
  const prev = projects[index === 0 ? projects.length - 1 : index - 1]
  const next = projects[index === projects.length - 1 ? 0 : index + 1]

  return (
    <PageTransition className='flex min-h-screen flex-col'>
      <div className='flex items-center justify-between px-6 py-6 md:px-10'>
        <Link to='/' aria-label='Josefine Luther, back to start'>
          <img src={logoRed} alt='' className='h-10 w-10 brightness-0 md:h-14 md:w-14' />
        </Link>
        <Link to='/' state={{ scrollTo: 'works' }} className='link-underline label'>
          All works
        </Link>
      </div>

      {/* Egna initial/animate bryter variantärvningen från PageTransition, så att
          sidan och innehållet kan röra sig oberoende. Just därför måste `exit`
          sättas explicit här — utan den ärvs ingen exit-label alls och den gamla
          sidan skulle försvinna direkt istället för att svepa ut. Barnen sätter
          ingen egen animate och ärver därför exit-labeln härifrån. */}
      <motion.main custom={direction} variants={contentContainer} initial='hidden' animate='show' exit='exit' className='flex-1'>
        <motion.header
          custom={direction}
          variants={contentItem}
          className='flex flex-col gap-2 px-6 pb-8 pt-4 md:flex-row md:items-baseline md:justify-between md:gap-10 md:px-10 md:pb-12'
        >
          <h1 className='font-display text-work font-bold'>{project.title}</h1>
          <p className='label text-ink-soft md:text-right'>
            {project.kind}, {project.date}
          </p>
        </motion.header>

        {/* Verket i hela innehållsbredden. På skrivbord 16:9 istället för
            plåtarnas 4:3: i full bredd blir en 4:3 över 1000 px hög och svämmar
            långt utanför skärmen, medan 16:9 landar på samma höjd som den gamla
            nio-kolumnsbilden — det är bara gradienten runt den tiltade skärmen
            som beskärs, inte innehållet.

            På mobil är bredden ändå bara ~340 px, så där ger 16:9 en bild på
            under 200 px och plattan blir för liten. Mobilen får därför den
            högre 4:3, precis som plåtarna på startsidan. */}
        <motion.div custom={direction} variants={contentItem} className='px-6 md:px-10'>
          <ImageFrame
            src={project.image}
            src2x={project.image2x}
            alt={`${plainTitle(project)} interface`}
            /* Hela innehållsbredden — bara sidmarginalerna räknas bort. */
            sizes='(min-width: 768px) calc(100vw - 5rem), calc(100vw - 3rem)'
            priority
            className='aspect-[4/3] rounded-plate md:aspect-[16/9]'
          />
        </motion.div>

        <div className='grid grid-cols-12 gap-6 px-6 pt-12 md:px-10 md:pt-16'>
          <motion.div custom={direction} variants={contentItem} className='col-span-12 space-y-8 md:col-span-4'>
            <div className='label space-y-1'>
              <p>{project.medium}</p>
              <p className='text-ink-soft'>{project.context}</p>
            </div>

            {/* Live-sajten först: på ett klientprojekt är den det man faktiskt vill öppna.
                Länkarna delar ett omslag, så att avståndet till etiketten ovanför förblir
                kolumnens space-y-8 medan de två länkarna själva står tätt ihop. */}
            {(project.live || project.github) && (
              <div className='flex flex-col items-start gap-2'>
                {project.live && (
                  <a href={project.live} target='_blank' rel='noreferrer' className='link-underline label'>
                    Visit site
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target='_blank' rel='noreferrer' className='link-underline label'>
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </motion.div>

          <motion.div custom={direction} variants={contentItem} className='col-span-12 md:col-start-6 md:col-span-7'>
            <p className='max-w-measure text-body text-ink-soft'>{project.description}</p>
          </motion.div>
        </div>
      </motion.main>

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
