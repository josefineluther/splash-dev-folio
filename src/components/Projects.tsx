import { Link } from 'react-router-dom'
import womanReadingImg from '@/assets/woman_reading.jpg'
import vanGoghImg from '@/assets/van_gogh.jpeg'
import languagesImg from '@/assets/languages.jpeg'
import catImg from '@/assets/cat.jpg'
import microcontrollerImg from '@/assets/microcontroller.jpg'

const projects = [
  {
    id: 0,
    title: 'Solving Pyssels',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-accent to-primary/60',
    firstImage: '',
    date: '2025-'
  },
  {
    id: 1,
    title: 'Bokhyllan webshop',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Render', 'School project'],
    gradient: 'from-primary to-primary/60',
    firstImage: womanReadingImg,
    date: '2025'
  },
  {
    id: 2,
    title: 'Galleri Gogh',
    tags: ['React', 'REST API', 'School project'],
    gradient: 'from-accent to-accent/60',
    firstImage: vanGoghImg,
    date: '2025'
  },
  {
    id: 3,
    title: 'WordBond',
    tags: ['Vue', 'School project'],
    gradient: 'from-primary to-accent',
    firstImage: languagesImg,
    date: '2025'
  },
  {
    id: 4,
    title: 'Skiathos Cat Shelter',
    tags: ['JavaScript', 'REST API', 'School project'],
    gradient: 'from-accent to-primary',
    firstImage: catImg,
    date: '2024'
  },
  {
    id: 5,
    title: 'Decthings',
    tags: ['Web design', 'Figma'],
    gradient: 'from-accent to-accent/60',
    firstImage: microcontrollerImg,
    date: '2024'
  },
  {
    id: 6,
    title: 'Apoceus',
    tags: ['Web design', 'Figma'],
    gradient: 'from-accent to-accent/60',
    firstImage: '',
    date: '2024'
  }
]

const Projects = () => {
  return (
    <section id='projects' className='py-32 px-4'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-light mb-4 tracking-tight'>PROJECTS</h2>
        <p className='text-muted-foreground mb-16 font-light'>Click on project to read more.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`} className='group cursor-pointer'>
              <img
                src={project.firstImage}
                className={`aspect-[3/4] bg-gradient-to-br ${project.gradient} mb-4 transition-opacity duration-300 group-hover:opacity-80 object-cover`}
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
