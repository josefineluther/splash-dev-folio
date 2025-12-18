const About = () => {
  return (
    <section id='about' className='py-20 md:py-32 px-4 bg-muted/30'>
      <div className='container mx-auto max-w-3xl'>
        <h2 className='text-2xl md:text-4xl font-light mb-6 md:mb-16 tracking-tight'>ABOUT</h2>

        <div className='space-y-6 text-muted-foreground font-light text-md md:text-lg leading-relaxed'>
          <p>
            Hi, I’m Josefine — a frontend developer with a background in media and communication. I’m passionate about creating digital experiences that are not
            only functional, but also visually engaging and user-friendly.
          </p>

          <p>
            My studies in Media and Communication, along with courses in web development, UX, and UI design, have given me a strong foundation to build on.
            Currently, I’m studying Frontend Development at IT-Högskolan in Gothenburg, where I’ve deepened my knowledge in modern web technologies.
          </p>

          <p>When I'm not coding, I enjoy crocheting, singing, running and spending time with my family, friends and my cat.</p>
        </div>
      </div>
    </section>
  )
}

export default About
