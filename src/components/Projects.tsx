import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, fully responsive e-commerce solution with cart management, payment integration, and real-time inventory.",
    tags: ["React", "TypeScript", "Stripe", "Tailwind"],
    gradient: "from-primary to-primary/60"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop, real-time updates, and team collaboration features.",
    tags: ["Next.js", "Firebase", "Framer Motion"],
    gradient: "from-accent to-accent/60"
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered tool that helps developers create stunning portfolios in minutes with customizable templates.",
    tags: ["React", "OpenAI", "Supabase", "shadcn/ui"],
    gradient: "from-primary to-accent"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts, interactive maps, and location-based recommendations.",
    tags: ["Vue 3", "Chart.js", "OpenWeather API"],
    gradient: "from-accent to-primary"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
          PROJECTS
        </h2>
        <p className="text-muted-foreground mb-16 font-light">
          Click on project to read more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`aspect-[3/4] bg-gradient-to-br ${project.gradient} mb-4 transition-opacity duration-300 group-hover:opacity-80`} />
              
              <h3 className="text-lg font-light mb-2 group-hover:opacity-60 transition-opacity">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>
                    {tag}{tagIndex < project.tags.length - 1 ? ' /' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
