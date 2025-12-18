import { Link } from 'react-router-dom'
import heroImg from '@/assets/hero.jpg'
import { projects } from '@/data/projects'

const Projects = () => {
  return (
    <section id='projects' className='py-32 px-4 bg-muted/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-light mb-4 tracking-tight'>PROJECTS</h2>
        <p className='text-muted-foreground mb-16 font-light'>Click on project to read more.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects
            .slice()
            .reverse()
            .map((project, index) => (
              <Link key={index} to={`/project/${project.id}`} className='group cursor-pointer'>
                <img
                  src={project.firstImage ? project.firstImage : heroImg}
                  className={`aspect-[3/4] mb-4 transition-opacity duration-300 group-hover:opacity-80 object-cover`}
                />

                <h3 className='text-lg font-light mb-2 group-hover:opacity-60 transition-opacity'>{project.title}</h3>

                <div className='flex flex-wrap gap-2 text-xs text-muted-foreground'>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>
                      {tag}
                      {tagIndex < project.tags.length - 1 ? ' /' : ''}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
