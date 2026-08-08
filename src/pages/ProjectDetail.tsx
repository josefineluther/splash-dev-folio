import { useParams, useLocation, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import logoRed from '@/assets/logo-red.png'
import heroImg from '@/assets/hero.jpg'
import { projects } from '@/data/projects'
import PageTransition from '@/components/PageTransition'
import { contentContainer, contentItem, getDirection } from '@/lib/motion'

const arrowClasses =
  'text-primary inline-flex shrink-0 transition-[opacity,transform] duration-300 ease-out hover:opacity-60 motion-reduce:transform-none'

const ProjectDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const projectId = parseInt(id || '0')
  const project = projects[projectId]
  const direction = getDirection(location.state)

  const imgRef = useRef<HTMLImageElement>(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  // En cachad bild kan vara färdigladdad innan React hinner koppla onLoad, vilket
  // annars låser den på opacity-0 för alltid. Synka om vid varje projektbyte.
  useEffect(() => {
    setImgLoaded(false)
    if (imgRef.current?.complete) setImgLoaded(true)
  }, [projectId])

  if (!project) return <Navigate to='/' replace />

  const nextId = projectId > 0 ? projectId - 1 : projects.length - 1
  const prevId = projectId < projects.length - 1 ? projectId + 1 : 0

  return (
    <PageTransition className='bg-background relative'>
      <div className='flex justify-start mt-5 ml-5 md:mt-10 md:ml-10'>
        <Link to='/' className='text-primary hover:opacity-60 transition-opacity'>
          <img src={logoRed} alt='Logo' className='w-11 h-11 md:w-16 md:h-16 mx-auto' />
        </Link>
      </div>

      {/* Egna initial/animate bryter variantärvningen från PageTransition, så att
          sidan och innehållet kan röra sig oberoende. Just därför måste `exit`
          sättas explicit här — utan den ärvs ingen exit-label alls och den gamla
          sidan skulle försvinna direkt istället för att svepa ut. Barnen sätter
          ingen egen animate och ärver därför exit-labeln härifrån. */}
      <motion.div
        custom={direction}
        variants={contentContainer}
        initial='hidden'
        animate='show'
        exit='exit'
        className='container mx-auto max-w-4xl px-4 mt-5'
      >
        {/* Pilarna ligger UTANFÖR de svepande blocken — de är navigering, inte
            innehåll, och ska stå still medan projektet sveper förbi. */}
        <div className='flex justify-between items-center m-2 gap-2'>
          <Link to={`/project/${prevId}`} state={{ dir: -1 }} className={`${arrowClasses} hover:-translate-x-1`}>
            <ChevronLeft size={40} strokeWidth={1.5} />
          </Link>
          <motion.div custom={direction} variants={contentItem} className='flex-1 min-w-0'>
            <h1 className='text-xl md:text-3xl font-light tracking-tight uppercase text-center'>{project.title}</h1>
          </motion.div>
          <Link to={`/project/${nextId}`} state={{ dir: 1 }} className={`${arrowClasses} hover:translate-x-1`}>
            <ChevronRight size={40} strokeWidth={1.5} />
          </Link>
        </div>

        <motion.p custom={direction} variants={contentItem} className='text-sm text-muted-foreground uppercase tracking-wider text-center mb-5'>
          {project.date}
        </motion.p>

        <div className='grid md:grid-cols-1 gap-8 md:gap-12 items-center'>
          <motion.div custom={direction} variants={contentItem} className='flex flex-col justify-center space-y-6'>
            <p className='text-foreground/80 leading-relaxed text-sm leading-7'>{project.description}</p>

            {project.github && (
              <a className='text-xs text-muted-foreground hover:opacity-60' href={project.github} target='_blank' rel='noreferrer'>
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
          </motion.div>

          <motion.div custom={direction} variants={contentItem}>
            <img
              ref={imgRef}
              key={project.projectImage}
              src={project.projectImage ? project.projectImage : heroImg}
              alt={project.title}
              decoding='async'
              onLoad={() => setImgLoaded(true)}
              className={`rounded-lg object-cover mb-10 transition-opacity duration-500 ease-out ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>
        </div>
      </motion.div>
    </PageTransition>
  )
}

export default ProjectDetail
