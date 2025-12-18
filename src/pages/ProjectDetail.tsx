import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import logoRed from '@/assets/logo-red.png'
import { useEffect } from 'react'
import heroImg from '@/assets/hero.jpg'
import { projects } from '@/data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const projectId = parseInt(id || '0')
  const project = projects[projectId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    navigate('/')
    return null
  }

  const nextId = projectId > 0 ? projectId - 1 : projects.length - 1
  const prevId = projectId < projects.length - 1 ? projectId + 1 : 0

  return (
    <div className='min-h-screen bg-background relative'>
      <div className='flex justify-start mt-5 ml-5 md:mt-10 md:ml-10'>
        <Link to='/' className='text-primary hover:opacity-60 transition-opacity'>
          <img src={logoRed} alt='Logo' className='w-11 h-11 md:w-16 md:h-16 mx-auto' />
        </Link>
      </div>

      <div className='container mx-auto max-w-4xl px-4 mt-5'>
        <div className='flex justify-between items-center m-2'>
          <Link to={`/project/${prevId}`} className='text-primary hover:opacity-60 transition-opacity'>
            <ChevronLeft size={40} strokeWidth={1.5} />
          </Link>
          <div>
            <h1 className='text-xl md:text-3xl font-light tracking-tight uppercase text-center'>{project.title}</h1>
          </div>
          <Link to={`/project/${nextId}`} className='text-primary hover:opacity-60 transition-opacity'>
            <ChevronRight size={40} strokeWidth={1.5} />
          </Link>
        </div>
        <p className='text-sm text-muted-foreground uppercase tracking-wider text-center mb-5'>{project.date}</p>
        <div className='grid md:grid-cols-1 gap-8 md:gap-12 items-center'>
          <div className='flex flex-col justify-center space-y-6'>
            <p className='text-foreground/80 leading-relaxed text-sm leading-7'>{project.description}</p>

            {project.github && (
              <a className='text-xs text-muted-foreground hover:opacity-60' href={project.github} target='_blank'>
                View on GitHub
              </a>
            )}

            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground pt-4 border-t-2 border-secondary'>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
                  {tag}
                  {tagIndex < project.tags.length - 1 ? ' /' : ''}
                </span>
              ))}
            </div>
          </div>
          <img src={project.projectImage ? project.projectImage : heroImg} className={'rounded-lg object-cover mb-10'} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
