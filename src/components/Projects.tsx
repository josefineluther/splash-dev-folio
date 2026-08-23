import { projects } from '@/data/projects'
import WorkPlate from '@/components/WorkPlate'
import Reveal from '@/components/Reveal'

/**
 * Väggen. Inget yttre max-width och ingen sidopadding på sektionen — det
 * tyngsta verket ska kunna gå kant till kant.
 */
const Projects = () => (
  <section id='works' className='scroll-mt-20 py-24 md:py-40'>
    <Reveal className='px-6 md:px-10'>
      <h2 className='font-display text-section font-semibold'>Works</h2>
    </Reveal>

    <div className='mt-16 space-y-24 md:mt-24 md:space-y-32'>
      {projects.map(project => (
        <WorkPlate key={project.slug} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
