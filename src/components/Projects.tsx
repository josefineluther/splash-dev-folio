import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const projects = [
  {
    title: "E-Commerce Platform",
    shortDescription: "Modern e-commerce solution",
    fullDescription: "A modern, fully responsive e-commerce solution with cart management, payment integration, and real-time inventory tracking. Built with React and TypeScript, this platform provides a seamless shopping experience with advanced filtering, wishlist functionality, and secure checkout processes.",
    tags: ["React", "TypeScript", "Stripe", "Tailwind"],
    gradient: "from-primary to-primary/60",
    date: "March 2024",
    role: "Full Stack Developer"
  },
  {
    title: "Task Management App",
    shortDescription: "Collaborative productivity tool",
    fullDescription: "Collaborative task manager with drag-and-drop functionality, real-time updates, and team collaboration features. This application helps teams organize their workflow with kanban boards, time tracking, and project analytics.",
    tags: ["Next.js", "Firebase", "Framer Motion"],
    gradient: "from-accent to-accent/60",
    date: "January 2024",
    role: "Frontend Developer"
  },
  {
    title: "Portfolio Generator",
    shortDescription: "AI-powered portfolio creator",
    fullDescription: "AI-powered tool that helps developers create stunning portfolios in minutes with customizable templates. Uses OpenAI's API to generate personalized content and suggests optimal layouts based on user's skills and experience.",
    tags: ["React", "OpenAI", "Supabase", "shadcn/ui"],
    gradient: "from-primary to-accent",
    date: "December 2023",
    role: "Lead Developer"
  },
  {
    title: "Weather Dashboard",
    shortDescription: "Interactive weather application",
    fullDescription: "Beautiful weather app with forecasts, interactive maps, and location-based recommendations. Features include hourly and weekly forecasts, weather alerts, and personalized activity suggestions based on weather conditions.",
    tags: ["Vue 3", "Chart.js", "OpenWeather API"],
    gradient: "from-accent to-primary",
    date: "November 2023",
    role: "Frontend Developer"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
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
                onClick={() => setSelectedProject(project)}
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

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 gap-0">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-primary text-primary-foreground p-2 hover:opacity-80 transition-opacity"
          >
            <X size={20} />
          </button>
          
          {selectedProject && (
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`aspect-square bg-gradient-to-br ${selectedProject.gradient}`} />
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight uppercase">
                  {selectedProject.title}
                </h2>
                
                <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                  {selectedProject.role}, {selectedProject.date}
                </p>
                
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>
                      {tag}{tagIndex < selectedProject.tags.length - 1 ? ' /' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
