import { Code2, Palette, Zap, Smartphone, Database, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Modern Frameworks",
    description: "React, Vue, Next.js, TypeScript",
    color: "primary"
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Tailwind, CSS-in-JS, Figma to Code",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Lazy Loading, SSR",
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, Cross-browser",
    color: "accent"
  },
  {
    icon: Database,
    title: "State Management",
    description: "Redux, Zustand, React Query",
    color: "primary"
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git, GitHub, CI/CD",
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-${skill.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-7 h-7 text-${skill.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
