import { Mail, Github, Linkedin, Dumbbell, CloudRain, Heart, QrCode } from "lucide-react";

const Index = () => {
  const links = [
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      description: "Check out my code and projects",
      url: "https://github.com/nishchaydev",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      url: "https://linkedin.com/in/nishchaydev",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      description: "Get in touch directly",
      url: "mailto:nishchay.gupta@cdgi.edu.in",
    },
    {
      icon: <Dumbbell className="w-5 h-5" />,
      title: "Gym Management System",
      description: "TriStar Fitness Management Platform",
      url: "https://github.com/nishchaydev/tristar-fitness-clean",
    },
    {
      icon: <CloudRain className="w-5 h-5" />,
      title: "Smart India Hackathon Project",
      description: "Innovation in climate tech",
      url: "https://github.com/nishchaydev/SIH-",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Personal Tracker",
      description: "Track habits and personal growth",
      url: "https://github.com/nishchaydev/tracker",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto py-12">
        {/* Header */}
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Nishchay Gupta
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            AI & Full Stack Developer | TypeScript | Python | ML Enthusiast
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            I build, learn, and experiment with code, AI tools, and problem-solving.
          </p>
        </header>

        {/* Links */}
        <div className="space-y-4 mb-16">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-link-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgb(37_99_235_/_0.3)] hover:border-primary hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built by Nishchay Gupta</span>
            <QrCode className="w-4 h-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
