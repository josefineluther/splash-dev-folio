const About = () => {
  return (
    <section id='about' className='py-20 md:py-32 px-4 bg-muted/30'>
      <div className='container mx-auto max-w-3xl'>
        <h2 className='text-2xl md:text-4xl font-light mb-6 md:mb-16 tracking-tight'>ABOUT</h2>

        <div className='space-y-6 text-muted-foreground font-light text-md md:text-lg leading-relaxed'>
          <p>Hi, I’m Josefine — a fullstack developer with a background in UI design and communication.</p>

          <p>
            I studied frontend development at IT-Högskolan in Gothenburg and hold a bachelor’s degree in media and communication studies from Uppsala University.
            My strength lies in combining the technical with the communicative, resulting in digital experiences with a focus on UX and usability.
          </p>

          <p>When I’m not coding, I enjoy crocheting, singing, running and spending time with my family, friends and my cat.</p>
        </div>
      </div>
    </section>
  )
}

export default About
