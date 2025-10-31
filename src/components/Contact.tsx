import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
        
        <footer className="text-muted-foreground text-sm">
          <p>© 2024 Frontend Developer. Built with React, TypeScript & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
