import { projects } from '@/data/projects'
import WorkPlate from '@/components/WorkPlate'
import Reveal from '@/components/Reveal'

const Projects = () => (
  <section className='py-24 md:py-40'>
    <Reveal className='px-6 md:px-10'>
      {/* Ankaret sitter på rubriken, inte på sektionen: sektionens 160 px
          toppadding hade annars lagt rubriken 240 px ned i vyn vid hopp hit. */}
      <h2 id='works' className='scroll-mt-24 font-display text-section font-semibold'>Works</h2>
    </Reveal>

    <div className='mt-16 space-y-24 md:mt-24 md:space-y-32'>
      {projects.map((project, index) => (
        <WorkPlate key={project.slug} project={project} flipped={index % 2 === 1} />
      ))}
    </div>
  </section>
)

export default Projects
