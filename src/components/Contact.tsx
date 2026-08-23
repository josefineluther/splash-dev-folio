import Reveal from '@/components/Reveal'

const links = [
  { href: 'https://github.com/josefineluther', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/josefineluther', label: 'LinkedIn' }
]

/**
 * Kolofonen. En katalog slutar med sina uppgifter, inte med en uppmaning —
 * så adressen står stort och resten som etiketter.
 */
const Contact = () => (
  <section id='contact' className='scroll-mt-20 border-t border-hairline px-6 py-24 md:px-10 md:py-32'>
    <Reveal>
      <p className='label text-ink-soft'>Contact</p>
      <a
        href='mailto:josefineluther@hotmail.se'
        className='link-underline mt-6 inline-block break-words font-display text-contact font-bold'
      >
        josefineluther@hotmail.se
      </a>
    </Reveal>

    <Reveal delay={0.1} className='mt-16 flex flex-col gap-8 md:mt-24 md:flex-row md:justify-between'>
      <ul className='flex gap-8'>
        {links.map(link => (
          <li key={link.label}>
            <a href={link.href} target='_blank' rel='noreferrer' className='link-underline label'>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='label space-y-1 text-ink-soft md:text-right'>
        <p>Dev &amp; design by Josefine Luther</p>
      </div>
    </Reveal>
  </section>
)

export default Contact
