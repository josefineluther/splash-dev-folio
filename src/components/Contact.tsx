import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    icon: <Github size={20} strokeWidth={1.5} />,
    url: 'https://github.com/josefineluther',
    label: 'GitHub'
  },
  {
    icon: <Linkedin size={20} strokeWidth={1.5} />,
    url: 'https://www.linkedin.com/in/josefineluther',
    label: 'LinkedIn'
  }
]

const Contact = () => {
  return (
    <section id='contact' className='py-32 px-4 bg-muted/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-light mb-16 tracking-tight'>CONTACT</h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-6 font-light'>
            <p className='text-muted-foreground'>I'm available for freelance work and full-time opportunities.</p>
            <div className='space-y-3'>
              <a href='mailto:josefineluther@hotmail.se' className='inline-block hover:opacity-60 transition-opacity border-b-2 border-secondary pb-1'>
                josefineluther@hotmail.se
              </a>
              <div className='flex gap-6 pt-4'>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className='hover:opacity-60 transition-opacity inline-flex items-center gap-2 border-b-2 border-secondary pb-1'
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span className='text-sm'>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className='mt-32 pt-8 border-t border-border'>
          <p className='text-sm text-muted-foreground font-light'>Dev & design by Josefine Luther</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
