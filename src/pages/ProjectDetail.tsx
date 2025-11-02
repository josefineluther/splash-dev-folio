import { useParams, useNavigate, Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "E-Commerce Platform",
    shortDescription: "Modern e-commerce solution",
    fullDescription: "A modern, fully responsive e-commerce solution with cart management, payment integration, and real-time inventory tracking. Built with React and TypeScript, this platform provides a seamless shopping experience with advanced filtering, wishlist functionality, and secure checkout processes.",
    tags: ["React", "TypeScript", "Stripe", "Tailwind"],
    gradient: "from-primary to-primary/60",
    date: "March 2024",
    role: "Full Stack Developer"
  },
  {
    id: 1,
    title: "Task Management App",
    shortDescription: "Collaborative productivity tool",
    fullDescription: "Collaborative task manager with drag-and-drop functionality, real-time updates, and team collaboration features. This application helps teams organize their workflow with kanban boards, time tracking, and project analytics.",
    tags: ["Next.js", "Firebase", "Framer Motion"],
    gradient: "from-accent to-accent/60",
    date: "January 2024",
    role: "Frontend Developer"
  },
  {
    id: 2,
    title: "Portfolio Generator",
    shortDescription: "AI-powered portfolio creator",
    fullDescription: "AI-powered tool that helps developers create stunning portfolios in minutes with customizable templates. Uses OpenAI's API to generate personalized content and suggests optimal layouts based on user's skills and experience.",
    tags: ["React", "OpenAI", "Supabase", "shadcn/ui"],
    gradient: "from-primary to-accent",
    date: "December 2023",
    role: "Lead Developer"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDescription: "Interactive weather application",
    fullDescription: "Beautiful weather app with forecasts, interactive maps, and location-based recommendations. Features include hourly and weekly forecasts, weather alerts, and personalized activity suggestions based on weather conditions.",
    tags: ["Vue 3", "Chart.js", "OpenWeather API"],
    gradient: "from-accent to-primary",
    date: "November 2023",
    role: "Frontend Developer"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id || "0");
  const project = projects[projectId];

  if (!project) {
    navigate("/");
    return null;
  }

  const prevId = projectId > 0 ? projectId - 1 : projects.length - 1;
  const nextId = projectId < projects.length - 1 ? projectId + 1 : 0;

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-8 right-8 z-50 flex gap-6">
        <Link
          to={`/project/${prevId}`}
          className="text-primary hover:opacity-60 transition-opacity"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </Link>
        <Link
          to={`/project/${nextId}`}
          className="text-primary hover:opacity-60 transition-opacity"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </Link>
        <Link
          to="/"
          className="text-primary hover:opacity-60 transition-opacity"
        >
          <X size={32} strokeWidth={1.5} />
        </Link>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          <div className={`aspect-square bg-gradient-to-br ${project.gradient} rounded-lg`} />
          
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight uppercase">
              {project.title}
            </h1>
            
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              {project.role}, {project.date}
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground pt-4 border-t-2 border-secondary">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
                  {tag}{tagIndex < project.tags.length - 1 ? ' /' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
