import { Code2, Palette, Zap, Smartphone, Database, GitBranch } from "lucide-react";

const skills = [
  {
    icon: <Code2 size={28} strokeWidth={1.5} />,
    name: "REACT"
  },
  {
    icon: <Code2 size={28} strokeWidth={1.5} />,
    name: "TYPESCRIPT"
  },
  {
    icon: <Palette size={28} strokeWidth={1.5} />,
    name: "TAILWIND CSS"
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    name: "NEXT.JS"
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    name: "RESPONSIVE"
  },
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    name: "STATE MGMT"
  },
  {
    icon: <GitBranch size={28} strokeWidth={1.5} />,
    name: "GIT"
  },
  {
    icon: <Code2 size={28} strokeWidth={1.5} />,
    name: "JAVASCRIPT"
  }
];

const Skills = () => {
  const colors = ['text-primary', 'text-secondary', 'text-accent', 'text-foreground'];
  
  return (
    <section id="skills" className="py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-light mb-16 tracking-tight">
          SKILLS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 bg-card"
            >
              <div className={`${colors[index % colors.length]} mb-3 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110`}>
                {skill.icon}
              </div>
              <h3 className="font-light text-sm tracking-wider">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
