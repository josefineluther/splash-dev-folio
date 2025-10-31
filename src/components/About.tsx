const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate frontend developer who loves turning ideas into elegant, user-friendly interfaces. 
            With a keen eye for design and a deep understanding of modern web technologies, I create experiences 
            that not only look great but also perform flawlessly.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My approach combines clean code practices with creative problem-solving, always keeping the user 
            at the center of every decision. I'm constantly learning and adapting to new technologies to deliver 
            cutting-edge solutions.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
            or experimenting with the latest frontend frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
