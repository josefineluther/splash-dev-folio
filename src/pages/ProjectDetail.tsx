import { useParams, useNavigate, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import bokhyllanImg from '@/assets/bokhyllan.png'
import galleriGoghImg from '@/assets/galleri_gogh.png'
import wordbondImg from '@/assets/wordbond.png'
import skiathosCatsImg from '@/assets/skiathos_cats.png'
import decthingsImg from '@/assets/decthings.png'
import apoceusImg from '@/assets/apoceus.jpeg'
import logoRed from '@/assets/logo-red.png'
import { useEffect } from 'react'
import heroImg from '@/assets/hero.jpg'

const projects = [
  {
    id: 0,
    title: 'Solving Pyssels',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    projectImage: '',
    description:
      'Ongoing project. Me and a friend from school are building a platform where creative people can share their creations such as crocheting, drawings and DIY projects. More info coming soon!',
    date: '2025-',
    github: 'https://github.com/josefineluther/solvingpyssels'
  },
  {
    id: 1,
    title: 'Bokhyllan webshop',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Render', 'School project'],
    projectImage: bokhyllanImg,
    description:
      'This website features a homepage with recommended books, a full catalog with genre filters, individual book pages, and a shopping cart that calculates discounts such as “3 for 2.” The frontend handles cart functionality, including adding, removing, and grouping books, while the backend manages database requests and filtering. I generated all book covers using ChatGPT to avoid using real books and implemented a mobile-friendly design with a hamburger menu. This project gave me valuable experience in connecting frontend and backend systems, debugging, and structuring a full-stack application.',
    date: '2025',
    github: 'https://github.com/josefineluther/bokhyllan'
  },
  {
    id: 2,
    title: 'WordBond',
    tags: ['Vue', 'School project'],
    projectImage: wordbondImg,
    description: 'This was a group project where we created a website that connects people who want to learn and teach languages with users from other countries. We built a start page with a search function, user account creation, profile editing, and an integrated chat feature.',
    date: '2025',
    github: 'https://github.com/josefineluther/wordbond'
  },
  {
    id: 3,
    title: 'Galleri Gogh',
    tags: ['React', 'REST API', 'School project'],
    projectImage: galleriGoghImg,
    description:
      'Galleri Gogh is an art gallery website that showcases various artworks fetched from the Met Museum REST API. The site features a clean and modern design, allowing users to browse through different art pieces and view detailed information about each artwork. This project helped me enhance my skills in working with APIs, managing state in React, and creating visually appealing layouts.',
    date: '2025',
    github: ''
  },
  {
    id: 4,
    title: 'Skiathos Cat Shelter',
    tags: ['JavaScript', 'REST API', 'School project'],
    projectImage: skiathosCatsImg,
    description: 'I built an interactive website for a Greek cat shelter. Users can search for cat breeds through an external API, view results with images, and access detailed breed pages where the page title updates dynamically. I added logic to prevent outdated search results caused by API response delays. The site also includes a statistics page using Chart.js, where I visualized intelligence levels across selected breeds fetched via the API. The project combines structured HTML with JavaScript for API handling, dynamic rendering, and data visualization.',
    date: '2024',
    github: 'https://github.com/josefineluther/Skiathoscats'
  },
  {
    id: 5,
    title: 'Decthings',
    tags: ['Web design', 'Figma'],
    projectImage: decthingsImg,
    description: 'I designed the website for the startup company Decthings, along with their logo and graphical profile. I worked in Adobe Illustrator and Figma.',
    date: '2024',
    github: ''
  },
  {
    id: 6,
    title: 'Apoceus',
    tags: ['Web design', 'Figma'],
    projectImage: apoceusImg,
    description: 'I worked in a project where I, together with a team, designed the website to the upcoming game Apoceus by Landell Games. We created a mockup in Figma and collaborated with the developers, who implemented the final product.',
    date: '2024',
    github: ''
  }
]

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

  const prevId = projectId > 0 ? projectId - 1 : projects.length - 1
  const nextId = projectId < projects.length - 1 ? projectId + 1 : 0

  return (
    <div className='min-h-screen bg-background relative'>
      <div className='absolute top-10 left-10 z-50 flex gap-6'>
        <Link to='/' className='text-primary hover:opacity-60 transition-opacity'>
          <img src={logoRed} alt='Logo' className='w-16 h-16 mx-auto' />
        </Link>
      </div>

      <div className='container mx-auto max-w-4xl px-4 py-16'>
        <div className='flex justify-between m-10'>
          <Link to={`/project/${prevId}`} className='text-primary hover:opacity-60 transition-opacity'>
            <ChevronLeft size={40} strokeWidth={1.5} />
          </Link>
          <div>
            <h1 className='text-3xl md:text-3xl font-light tracking-tight uppercase text-center mb-3'>{project.title}</h1>
            <p className='text-sm text-muted-foreground uppercase tracking-wider text-center'>{project.date}</p>
          </div>
          <Link to={`/project/${nextId}`} className='text-primary hover:opacity-60 transition-opacity'>
            <ChevronRight size={40} strokeWidth={1.5} />
          </Link>
        </div>
        <div className='grid md:grid-cols-1 gap-8 md:gap-12 items-center min-h-[80vh]'>
          <div className='flex flex-col justify-center space-y-6'>

            <p className='text-foreground/80 leading-relaxed text-sm leading-7'>{project.description}</p>

            { project.github && <a className='text-xs text-muted-foreground hover:opacity-60' href={project.github} target="_blank">View on GitHub</a> }

            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground pt-4 border-t-2 border-secondary'>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
                  {tag}
                  {tagIndex < project.tags.length - 1 ? ' /' : ''}
                </span>
              ))}
            </div>
          </div>
          <img src={project.projectImage ? project.projectImage : heroImg} className={'rounded-lg object-cover'} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
