import microcontrollerImg from '@/assets/microcontroller.jpg'
import decthingsImg from '@/assets/decthings.png'
import catImg from '@/assets/cat.jpg'
import skiathosCatsImg from '@/assets/skiathos_cats.png'
import womanReadingImg from '@/assets/woman_reading.jpg'
import bokhyllanImg from '@/assets/bokhyllan.png'
import gymImg from '@/assets/gym.jpg'
import unityFitnessImg from '@/assets/unity_fitness.png'

export interface Project {
  id: number
  title: string
  tags: string[]
  firstImage: string
  projectImage: string
  description: string
  github: string
  date: string
}

// id måste vara sammanhängande och matcha arrayindex — ProjectDetail slår upp
// projekt med projects[id] och pilarna stegar med id ± 1.
export const projects: Project[] = [
  {
    id: 0,
    title: 'Decthings',
    tags: ['Web design', 'Figma'],
    firstImage: microcontrollerImg,
    projectImage: decthingsImg,
    description:
      'I designed the website for the startup company Decthings, along with their logo and graphical profile. I worked in Adobe Illustrator and Figma.',
    github: '',
    date: '2024'
  },
  {
    id: 1,
    title: 'Skiathos Cat Shelter',
    tags: ['JavaScript', 'REST API', 'School project'],
    firstImage: catImg,
    projectImage: skiathosCatsImg,
    description:
      'I built an interactive website for a Greek cat shelter. Users can search for cat breeds through an external API, view results with images, and access detailed breed pages where the page title updates dynamically. I added logic to prevent outdated search results caused by API response delays. The site also includes a statistics page using Chart.js, where I visualized intelligence levels across selected breeds fetched via the API. The project combines structured HTML with JavaScript for API handling, dynamic rendering, and data visualization.',
    github: 'https://github.com/josefineluther/Skiathoscats',
    date: '2024'
  },
  {
    id: 2,
    title: 'Bokhyllan webbshop',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Render', 'School project'],
    firstImage: womanReadingImg,
    projectImage: bokhyllanImg,
    description:
      "This website features a homepage with recommended books, a full catalog with genre filters, individual book pages, and a shopping cart that calculates discounts such as '3 for 2.' The frontend handles cart functionality, including adding, removing, and grouping books, while the backend manages database requests and filtering. I generated all book covers using ChatGPT to avoid using real books and implemented a mobile-friendly design with a hamburger menu. This project gave me valuable experience in connecting frontend and backend systems, debugging, and structuring a full-stack application.",
    github: 'https://github.com/josefineluther/bokhyllan',
    date: '2025'
  },
  {
    id: 3,
    title: 'Unity Fitness',
    tags: ['React', 'Strapi', 'GraphQL', 'School project'],
    firstImage: gymImg,
    projectImage: unityFitnessImg,
    description: 'Ongoing group project in school.',
    github: 'https://github.com/josefineluther/unity-fitness',
    date: '2025'
  }
]
