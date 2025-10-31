import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-fade-in" />
      
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-sm animate-scale-in">
          <span className="text-sm text-muted-foreground">Available for hire</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Frontend Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Crafting beautiful, responsive web experiences with modern technologies and creative problem-solving
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="animate-bounce mt-16">
          <ArrowDown className="w-6 h-6 mx-auto text-primary/60" />
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
