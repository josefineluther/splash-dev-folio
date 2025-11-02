import logoRed from '@/assets/logo-red.png'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4 py-20'>
      <div className='container mx-auto max-w-3xl text-center animate-fade-in'>
        <div className='mb-12'>
          <img src={logoRed} alt='Logo' className='w-24 h-24 mx-auto mb-8' />
        </div>

        <h1 className='text-4xl md:text-6xl font-light mb-8 leading-tight tracking-tight'>Josefine Luther</h1>

        <p className='text-lg md:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto'>
          Crafting clean, functional web experiences with attention to detail
        </p>

        <div className='flex gap-6 justify-center'>
          <a href='#projects' className='text-sm tracking-wider hover:opacity-60 transition-opacity border-b-2 border-secondary pb-1'>
            VIEW WORK
          </a>
          <a href='#contact' className='text-sm tracking-wider hover:opacity-60 transition-opacity border-b-2 border-secondary pb-1'>
            CONTACT
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
