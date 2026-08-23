import decthingsImg from '@/assets/decthings.webp'
import skiathosCatsImg from '@/assets/skiathos_cats.webp'
import bokhyllanImg from '@/assets/bokhyllan.webp'
import unityFitnessImg from '@/assets/unity_fitness.webp'
import bronteImg from '@/assets/bronte.webp'

export interface Project {
  /** Stabil identitet. Följer *inte* arrayindex — se kommentaren vid `projects`. */
  id: number
  /** Används i URL:en: /project/bronte */
  slug: string
  title: string
  /** Etikettens andra rad: vad slags arbete, och årtalet. */
  kind: string
  date: string
  /** En mening om vad verket gör. */
  caption: string
  /**
   * Materialet. Står där en museietikett skriver medium — "brons och stål".
   * Därför utan fältnamn: raden ska läsas som en etikett, inte ett formulär.
   */
  medium: string
  /** Etikettens sista rad: sammanhang eller proveniens. */
  context: string
  image: string
  /** Den långa texten, på verkets egen sida. */
  description: string
  github: string
}

/**
 * Nyast först — samma ordning som väggen visar och som pilarna stegar i,
 * så att "nästa" betyder samma sak på båda ställena.
 *
 * `id` är *inte* arrayindex, utan de ursprungliga numren från när sidan
 * länkade på index. De behålls så att gamla /project/2-länkar fortfarande
 * pekar på rätt verk; uppslagning sker på slug eller id, aldrig på position.
 */
export const projects: Project[] = [
  {
    id: 4,
    slug: 'bronte',
    title: 'Bronte',
    kind: 'Degree project',
    date: '2026',
    caption:
      'Generates product descriptions for a wholesaler’s catalogue, then lets an editor approve or rewrite each one.',
    medium: 'SvelteKit, TypeScript, PostgreSQL, Vercel AI SDK',
    context: 'In production at outofhome',
    image: bronteImg,
    description:
      "Bronte is a tool that uses AI to generate product descriptions for the e-commerce wholesaler outofhome, built as my degree project. Products are imported and sent to a language model that either builds on data from the food database Dabas or searches external sources when that data is missing, returning a long description, a short one and the sources it used. The user can edit the prompts, and then edit, approve or ignore each generated text. I built it with SvelteKit and TypeScript, with a PostgreSQL database and the Vercel AI SDK for the model integration. It is published on Vercel and has since been integrated into outofhome's admin site, where it made writing around 100 product descriptions roughly ten times faster than before.",
    github: 'https://github.com/josefineluther/bronte'
  },
  {
    id: 3,
    slug: 'unity-fitness',
    title: 'Unity Fitness',
    kind: 'Group project',
    date: '2025',
    caption: 'Books gym classes from a schedule the staff edit themselves.',
    medium: 'React, TypeScript, Strapi, GraphQL',
    context: 'IT-Högskolan',
    image: unityFitnessImg,
    description:
      'A group project in school where we built a website for booking gym classes. We connected it to the headless CMS Strapi, so classes can be uploaded and edited there without touching the code. The site is built with React and TypeScript.',
    github: 'https://github.com/josefineluther/unity-fitness'
  },
  {
    id: 2,
    slug: 'bokhyllan',
    title: 'Bokhyllan',
    kind: 'School project',
    date: '2025',
    caption: 'A bookshop that filters by genre and takes card payment at the checkout.',
    medium: 'React, TypeScript, Express, PostgreSQL, Stripe',
    context: 'IT-Högskolan',
    image: bokhyllanImg,
    description:
      "This website features a homepage with recommended books, a full catalog with genre filters, individual book pages, and a shopping cart that calculates discounts such as '3 for 2.' The frontend handles cart functionality, including adding, removing, and grouping books, while the backend manages database requests and filtering. I generated all book covers using ChatGPT to avoid using real books and implemented a mobile-friendly design with a hamburger menu. This project gave me valuable experience in connecting frontend and backend systems, debugging, and structuring a full-stack application.",
    github: 'https://github.com/josefineluther/bokhyllan'
  },
  {
    id: 1,
    slug: 'skiathos-cat-shelter',
    title: 'Skiathos Cat Shelter',
    kind: 'School project',
    date: '2024',
    caption: 'Searches cat breeds through an open API and charts what it finds.',
    medium: 'JavaScript, REST API, Chart.js',
    context: 'IT-Högskolan',
    image: skiathosCatsImg,
    description:
      'I built an interactive website for a Greek cat shelter. Users can search for cat breeds through an external API, view results with images, and access detailed breed pages where the page title updates dynamically. I added logic to prevent outdated search results caused by API response delays. The site also includes a statistics page using Chart.js, where I visualized intelligence levels across selected breeds fetched via the API. The project combines structured HTML with JavaScript for API handling, dynamic rendering, and data visualization.',
    github: 'https://github.com/josefineluther/Skiathoscats'
  },
  {
    id: 0,
    slug: 'decthings',
    title: 'Decthings',
    kind: 'Identity and web design',
    date: '2024',
    caption: 'Website, logo and graphic identity for an AI platform startup.',
    /* Det enda verket vars material faktiskt är ett annat — vilket är precis
       vad som får medium-raden att landa. */
    medium: 'Figma, Illustrator',
    context: 'Decthings',
    image: decthingsImg,
    description:
      'I designed the website for the startup company Decthings, along with their logo and graphical profile. I worked in Adobe Illustrator and Figma.',
    github: ''
  }
]

/**
 * Slår upp ett verk på slug, med siffra som reserv så att gamla
 * /project/2-länkar fortfarande fungerar. Returnerar även positionen,
 * eftersom pilarna på verkets sida stegar i arrayordning.
 */
export const findProject = (param: string | undefined) => {
  if (!param) return { project: undefined, index: -1 }

  let index = projects.findIndex(p => p.slug === param)

  if (index === -1 && /^\d+$/.test(param)) {
    index = projects.findIndex(p => p.id === Number(param))
  }

  return { project: index === -1 ? undefined : projects[index], index }
}
