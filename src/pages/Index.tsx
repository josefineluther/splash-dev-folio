import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition className="bg-background text-foreground" restoreScroll>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </PageTransition>
  );
};

export default Index;
