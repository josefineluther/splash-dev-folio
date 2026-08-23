import { useEffect } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import PageTransition from '@/components/PageTransition'
import { resetWallTint } from '@/lib/wall'

const Index = () => {
  // Väggen ska inte bära ett verks kulör med sig till nästa sida.
  useEffect(() => resetWallTint, [])

  return (
    <PageTransition restoreScroll>
      <div className='relative'>
        <Nav />
        <Hero />
      </div>
      <Projects />
      <About />
      <Contact />
    </PageTransition>
  )
}

export default Index
