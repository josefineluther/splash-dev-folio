import snowImg from '@/assets/snow.jpg'
import apoceusImg from '@/assets/apoceus.jpeg'
import microcontrollerImg from '@/assets/microcontroller.jpg'
import decthingsImg from '@/assets/decthings.png'
import catImg from '@/assets/cat.jpg'
import skiathosCatsImg from '@/assets/skiathos_cats.png'
import galleryImg from '@/assets/gallery.jpg'
import galleriGoghImg from '@/assets/galleri_gogh.png'
import languagesImg from '@/assets/languages.jpg'
import wordbondImg from '@/assets/wordbond.png'
import womanReadingImg from '@/assets/woman_reading.jpg'
import bokhyllanImg from '@/assets/bokhyllan.png'
import craftingImg from '@/assets/crafting.jpg'
import meetingBookingImg from '@/assets/meetingbooking.png'
import gymImg from '@/assets/gym.jpg'

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

export const projects: Project[] = [
  {
    id: 0,
    title: 'Apoceus',
    tags: ['Web design', 'Figma'],
    firstImage: snowImg,
    projectImage: apoceusImg,
    description:
      'I worked in a project where I, together with a team, designed the website to the upcoming game Apoceus by Landell Games. We created a mockup in Figma and collaborated with the developers, who implemented the final product.',
    github: '',
    date: '2024'
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: 'Galleri Gogh',
    tags: ['React', 'REST API', 'School project'],
    firstImage: galleryImg,
    projectImage: galleriGoghImg,
    description:
      'Galleri Gogh is an art gallery website that showcases various artworks fetched from the Met Museum REST API. The site features a clean and modern design, allowing users to browse through different art pieces and view detailed information about each artwork. This project helped me enhance my skills in working with APIs, managing state in React, and creating visually appealing layouts.',
    github: '',
    date: '2025'
  },
  {
    id: 4,
    title: 'WordBond',
    tags: ['Vue', 'School project'],
    firstImage: languagesImg,
    projectImage: wordbondImg,
    description:
      'This was a group project where we created a website that connects people who want to learn and teach languages with users from other countries. We built a start page with a search function, user account creation, profile editing, and an integrated chat feature.',
    github: 'https://github.com/josefineluther/wordbond',
    date: '2025'
  },
  {
    id: 5,
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
    id: 6,
    title: 'Solving Pyssels',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    firstImage: craftingImg,
    projectImage: '',
    description:
      'Ongoing project. Me and a friend from school are building a platform where creative people can share their creations such as crocheting, drawings and DIY projects. More info coming soon!',
    github: 'https://github.com/josefineluther/solvingpyssels',
    date: '2025'
  },
  {
    id: 7,
    title: 'Mötesbokning',
    tags: ['PHP', 'School project'],
    firstImage: '',
    projectImage: meetingBookingImg,
    description: 'Project in school.',
    github: 'https://github.com/josefineluther/meetingbooking',
    date: '2025'
  },
  {
    id: 8,
    title: 'Unity Fitness',
    tags: ['React', 'Strapi', 'School project'],
    firstImage: gymImg,
    projectImage: '',
    description: 'Ongoing group project in school.',
    github: 'https://github.com/josefineluther/unity-fitness',
    date: '2025'
  }
]
