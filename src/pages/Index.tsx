import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import PageTransition from '@/components/PageTransition'

const Index = () => (
  <PageTransition restoreScroll>
    <div className='relative'>
      <Nav />
      <Hero />
    </div>
    <main>
      <Projects />
      <About />
      <Contact />
    </main>
  </PageTransition>
)

export default Index
