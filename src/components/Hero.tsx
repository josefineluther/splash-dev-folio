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
 * Namnet fyller textytans bredd på varje skärmbredd; det är en affisch, inte
 * en rubrik. Namn och bildtext hålls samman som ett block och centreras i
 * vyporten, i stället för att tryckas mot över- och underkant — det lämnade
 * annars ett hål på ett par hundra pixlar mitt i heron.
 */
const Hero = () => (
  /* Asymmetrisk padding med avsikt: navigeringen ligger absolut ovanpå heron,
     så en symmetrisk py hade lämnat 63 px luft över namnet mot 182 px under.
     Den extra toppaddingen skjuter blocket ner så att luften väger jämnt. */
  <section id='top' className='flex min-h-screen flex-col justify-center px-6 pb-20 pt-40 md:px-10 md:pb-24 md:pt-52'>
    <div className='name-fit'>
      {/* aria-label sätter det tillgängliga namnet: raderna ligger i separata
          block för maskavslöjandet, så texten läses annars som "JosefineLuther"
          i ett ord. */}
      <motion.h1
        aria-label='Josefine Luther'
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
      className='mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-baseline md:justify-between md:gap-16'
    >
      {/* Två rader, så att meningen väger jämnt mot etiketten och länkarna som
          också är två. "end to end" hålls samman — ett fast mått bröt efter
          "with a", och text-balance ensamt delade mitt i uttrycket. Med frasen
          bunden faller brytningen vid kommat, där den hör. */}
      <p className='max-w-[38ch] text-balance text-lead'>
        I build applications <span className='whitespace-nowrap'>end to end</span>, with a focus on usability.
      </p>

      <div className='label space-y-2 text-ink-soft md:text-right'>
        <p>Fullstack developer, Gothenburg</p>
        <ul className='flex flex-wrap gap-x-6 gap-y-2 md:justify-end'>
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
    </motion.div>
  </section>
)

export default Hero
