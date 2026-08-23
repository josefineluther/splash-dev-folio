import logoRed from '@/assets/logo-red.webp'

const links = [
  { href: '#works', label: 'Works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
]

/**
 * Ligger stilla över väggen utan egen bakgrund. En list med platta och
 * suddning skulle bli ett andra lager på en sida vars idé är en enda yta.
 */
const Nav = () => (
  <header className='absolute inset-x-0 top-0 z-50 px-6 py-6 md:px-10'>
    <nav className='flex items-center justify-between' aria-label='Main'>
      {/* Märket i svart. Filen är oxblodsröd, men den har äkta alfakanal, så
          brightness(0) nollar RGB och lämnar genomskinligheten orörd — ingen
          extra fil behövs. Svart är också rätt här: sidans chrome ska vara
          helt utan färg, all kulör kommer från verken. */}
      <a href='#top' aria-label='Josefine Luther, to top'>
        <img src={logoRed} alt='' className='h-8 w-8 brightness-0' />
      </a>

      <ul className='flex items-center gap-6 md:gap-8'>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className='link-underline label'>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Nav
