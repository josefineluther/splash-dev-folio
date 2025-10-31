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
  return (
    <section id="skills" className="py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-light mb-16 tracking-tight">
          SKILLS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="text-foreground mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
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
