import microcontrollerImg from '@/assets/microcontroller.webp'
import decthingsImg from '@/assets/decthings.webp'
import catImg from '@/assets/cat.webp'
import skiathosCatsImg from '@/assets/skiathos_cats.webp'
import womanReadingImg from '@/assets/woman_reading.webp'
import bokhyllanImg from '@/assets/bokhyllan.webp'
import gymImg from '@/assets/gym.webp'
import unityFitnessImg from '@/assets/unity_fitness.webp'
import groceriesImg from '@/assets/groceries.webp'
import bronteImg from '@/assets/bronte.webp'

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

/** Taggar som beskriver vad slags projekt eller arbete det är, inte vad det är byggt med. */
const PROJECT_TYPE_TAGS = ['School project', 'Degree project', 'Web design']

/** Bara de tekniska taggarna — används i "Built with" på projektsidan. */
export const techTags = (project: Project) => project.tags.filter(tag => !PROJECT_TYPE_TAGS.includes(tag))

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
    description:
      'A group project in school where we built a website for booking gym classes. We connected it to the headless CMS Strapi, so classes can be uploaded and edited there without touching the code. The site is built with React and TypeScript.',
    github: 'https://github.com/josefineluther/unity-fitness',
    date: '2025'
  },
  {
    id: 4,
    title: 'Bronte',
    tags: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'AI SDK', 'Degree project'],
    firstImage: groceriesImg,
    projectImage: bronteImg,
    description:
      "Bronte is a tool that uses AI to generate product descriptions for the e-commerce wholesaler outofhome, built as my degree project. Products are imported and sent to a language model that either builds on data from the food database Dabas or searches external sources when that data is missing, returning a long description, a short one and the sources it used. The user can edit the prompts, and then edit, approve or ignore each generated text. I built it with SvelteKit and TypeScript, with a PostgreSQL database and the Vercel AI SDK for the model integration. It is published on Vercel and has since been integrated into outofhome's admin site, where it made writing around 100 product descriptions roughly ten times faster than before.",
    github: 'https://github.com/josefineluther/bronte',
    date: '2026'
  }
]
