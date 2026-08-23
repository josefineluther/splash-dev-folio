import { motion } from 'framer-motion'
import { EASE_OUT } from '@/lib/motion'

const links = [
  { href: 'mailto:josefineluther@hotmail.se', label: 'Mail' },
  { href: 'https://github.com/josefineluther', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/josefineluther', label: 'LinkedIn' }
]

/** Raderna stiger upp bakom masken, en efter den andra. */
const name = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const line = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE_OUT } }
}

const below = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT, delay: 0.75 } }
}

/**
 * En hel skärm, ingen bild, ingen ram. Utställningen öppnar med väggtext —
 * och färgen kommer först när det första verket rullar in.
 *
 * Namnet sätts i vw så att den längsta raden når högermarginalen på varje
 * skärmbredd. Det är en affisch, inte en rubrik.
 */
const Hero = () => (
  <section id='top' className='flex min-h-screen flex-col justify-between px-6 pb-10 pt-24 md:px-10 md:pb-14'>
    <div className='name-fit'>
      <motion.h1
        variants={name}
        initial='hidden'
        animate='show'
        className='name-line font-display font-bold uppercase leading-none tracking-[-0.02em]'
      >
      {/* Masken: overflow-hidden per rad, och lite luft under så att inte
          versalerna kapas av den snäva radhöjden. */}
        {/* Masken måste vara exakt en radruta hög: med extra padding skulle
            versalerna synas i marginalen innan de stigit upp. Radhöjd 1 rymmer
            hela teckenrutan, och raderna dras ihop optiskt med negativ
            marginal i stället för med snävare radhöjd. */}
        {['Josefine', 'Luther'].map((word, i) => (
          <span key={word} className={`block overflow-hidden ${i > 0 ? '-mt-[0.14em]' : ''}`}>
            <motion.span variants={line} className='block'>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>
    </div>

    <motion.div
      variants={below}
      initial='hidden'
      animate='show'
      className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16'
    >
      <div className='label space-y-1 text-ink-soft'>
        <p>Fullstack developer, Gothenburg</p>
        <ul className='flex flex-wrap gap-x-6 gap-y-2'>
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className='link-underline label'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='max-w-measure space-y-5'>
        <p className='text-lead'>
          Fullstack developer with a background in design and communication. I build applications end to end, with a
          focus on usability.
        </p>
      </div>
    </motion.div>
  </section>
)

export default Hero
