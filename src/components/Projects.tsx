import { Link } from "react-router-dom";

const projects = [
  {
    id: 0,
    title: "E-Commerce Platform",
    tags: ["React", "TypeScript", "Stripe", "Tailwind"],
    gradient: "from-primary to-primary/60"
  },
  {
    id: 1,
    title: "Task Management App",
    tags: ["Next.js", "Firebase", "Framer Motion"],
    gradient: "from-accent to-accent/60"
  },
  {
    id: 2,
    title: "Portfolio Generator",
    tags: ["React", "OpenAI", "Supabase", "shadcn/ui"],
    gradient: "from-primary to-accent"
  },
  {
    id: 3,
    title: "Weather Dashboard",
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
            <Link
              key={index}
              to={`/project/${project.id}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
