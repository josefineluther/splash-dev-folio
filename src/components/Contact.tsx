import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={20} strokeWidth={1.5} />,
    url: "#",
    label: "GitHub"
  },
  {
    icon: <Linkedin size={20} strokeWidth={1.5} />,
    url: "#",
    label: "LinkedIn"
  },
  {
    icon: <Twitter size={20} strokeWidth={1.5} />,
    url: "#",
    label: "Twitter"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-light mb-16 tracking-tight">
          CONTACT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 font-light">
            <p className="text-muted-foreground">
              I'm available for freelance work and full-time opportunities.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@example.com" className="block hover:opacity-60 transition-opacity">
                hello@example.com
              </a>
              <div className="flex gap-6 pt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="hover:opacity-60 transition-opacity"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-32 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-light">
            © 2024 Frontend Developer
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
