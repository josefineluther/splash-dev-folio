import { useParams, useNavigate, Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import bokhyllanImg from '@/assets/bokhyllan.png'
import galleriGoghImg from '@/assets/galleri_gogh.png'
import wordbondImg from '@/assets/wordbond.png'
import skiathosCatsImg from '@/assets/skiathos_cats.png'
import decthingsImg from '@/assets/decthings.png'
import apoceusImg from '@/assets/apoceus.jpeg'

const projects = [
  {
    id: 0,
    title: 'Solving Pyssels',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-accent to-primary/60',
    projectImage: '',
    description:
      'Ongoing project. Me and a friend from school are building a platform where creative people can share their creations such as crocheting, drawings and DIY projects. More info coming soon!',
    date: '2025-'
  },
  {
    id: 1,
    title: 'Bokhyllan webshop',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Render', 'School project'],
    gradient: 'from-primary to-primary/60',
    projectImage: bokhyllanImg,
    description:
      'This website features a homepage with recommended books, a full catalog with genre filters, individual book pages, and a shopping cart that calculates discounts such as “3 for 2.” The frontend handles cart functionality, including adding, removing, and grouping books, while the backend manages database requests and filtering. I generated all book covers using ChatGPT to avoid using real books and implemented a mobile-friendly design with a hamburger menu. This project gave me valuable experience in connecting frontend and backend systems, debugging, and structuring a full-stack application.',
    date: '2025'
  },
  {
    id: 2,
    title: 'Galleri Gogh',
    tags: ['React', 'REST API', 'School project'],
    gradient: 'from-accent to-accent/60',
    projectImage: galleriGoghImg,
    description:
      'Galleri Gogh is an art gallery website that showcases various artworks fetched from the Met Museum REST API. The site features a clean and modern design, allowing users to browse through different art pieces and view detailed information about each artwork. This project helped me enhance my skills in working with APIs, managing state in React, and creating visually appealing layouts.',
    date: '2025'
  },
  {
    id: 3,
    title: 'WordBond',
    tags: ['Vue', 'School project'],
    gradient: 'from-primary to-accent',
    projectImage: wordbondImg,
    description: '',
    date: '2025'
  },
  {
    id: 4,
    title: 'Skiathos Cat Shelter',
    tags: ['JavaScript', 'REST API', 'School project'],
    gradient: 'from-accent to-primary',
    projectImage: skiathosCatsImg,
    description: '',
    date: '2024'
  },
  {
    id: 5,
    title: 'Decthings',
    tags: ['Web design', 'Figma'],
    gradient: 'from-accent to-accent/60',
    projectImage: decthingsImg,
    description: '',
    date: '2024'
  },
  {
    id: 6,
    title: 'Apoceus',
    tags: ['Web design', 'Figma'],
    gradient: 'from-accent to-accent/60',
    projectImage: apoceusImg,
    description: '',
    date: '2024'
  }
]

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const projectId = parseInt(id || '0')
  const project = projects[projectId]

  if (!project) {
    navigate('/')
    return null
  }

  const prevId = projectId > 0 ? projectId - 1 : projects.length - 1
  const nextId = projectId < projects.length - 1 ? projectId + 1 : 0

  return (
    <div className='min-h-screen bg-background relative'>
      <div className='absolute top-8 right-8 z-50 flex gap-6'>
        <Link to={`/project/${prevId}`} className='text-primary hover:opacity-60 transition-opacity'>
          <ChevronLeft size={32} strokeWidth={1.5} />
        </Link>
        <Link to={`/project/${nextId}`} className='text-primary hover:opacity-60 transition-opacity'>
          <ChevronRight size={32} strokeWidth={1.5} />
        </Link>
        <Link to='/' className='text-primary hover:opacity-60 transition-opacity'>
          <X size={32} strokeWidth={1.5} />
        </Link>
      </div>

      <div className='container mx-auto max-w-3xl px-4 py-16'>
        <div className='grid md:grid-cols-1 gap-8 md:gap-12 items-center min-h-[80vh]'>
          <div className='flex flex-col justify-center space-y-6'>
            <h1 className='text-3xl md:text-3xl font-light tracking-tight uppercase'>{project.title}</h1>

            <p className='text-sm text-muted-foreground uppercase tracking-wider'>{project.date}</p>

            <p className='text-foreground/80 leading-relaxed text-sm'>{project.description}</p>

            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground pt-4 border-t-2 border-secondary'>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
                  {tag}
                  {tagIndex < project.tags.length - 1 ? ' /' : ''}
                </span>
              ))}
            </div>
          </div>
          <img src={project.projectImage} className={`bg-gradient-to-br ${project.gradient} rounded-lg object-cover`} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
