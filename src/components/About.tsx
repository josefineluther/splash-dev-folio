const About = () => {
  return (
    <section id='about' className='py-20 md:py-32 px-4 bg-muted/30'>
      <div className='container mx-auto max-w-3xl'>
        <h2 className='text-2xl md:text-4xl font-light mb-6 md:mb-16 tracking-tight'>ABOUT</h2>

        <div className='space-y-6 text-muted-foreground font-light text-md md:text-lg leading-relaxed'>
          <p>
            Hi, I’m Josefine — a fullstack developer with a background in media and communication. I’m passionate about creating digital experiences that are not
            only functional, but also visually engaging and user-friendly.
          </p>

          <p>
            I’ve studied Frontend Development at IT-Högskolan in Gothenburg, as well as Media and Communication Studies, along with courses in web development,
            UX, and UI design. That combination gave me both a technical foundation and an eye for how things are communicated and experienced. Today I work as a
            fullstack developer.
          </p>

          <p>When I'm not coding, I enjoy crocheting, singing, running and spending time with my family, friends and my cat.</p>
        </div>
      </div>
    </section>
  )
}

export default About
