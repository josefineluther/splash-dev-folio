const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-3xl text-center animate-fade-in relative z-10">
        <div className="mb-12">
          <div className="inline-block border-2 border-primary px-6 py-3 mb-8 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
            <span className="text-sm font-medium tracking-wider text-primary">FD</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
          Frontend Developer
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
          Crafting <span className="text-primary font-medium">clean</span>, functional web experiences with <span className="text-secondary font-medium">attention to detail</span>
        </p>
        
        <div className="flex gap-6 justify-center">
          <a href="#projects" className="text-sm tracking-wider hover:text-primary transition-colors border-b-2 border-primary pb-1 font-medium">
            VIEW WORK
          </a>
          <a href="#contact" className="text-sm tracking-wider hover:text-secondary transition-colors border-b-2 border-secondary pb-1 font-medium">
            CONTACT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
