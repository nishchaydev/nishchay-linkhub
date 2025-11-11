function Index() {
  const links = [
    {
      title: "GitHub",
      description: "Check out my code and projects",
      url: "https://github.com/nishchaydev",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      url: "https://linkedin.com/in/nishchaydev",
    },
    {
      title: "Email",
      description: "Get in touch directly",
      url: "mailto:nishchay.gupta@cdgi.edu.in",
    },
    {
      title: "Gym Management System",
      description: "TriStar Fitness Management Platform",
      url: "https://github.com/nishchaydev/tristar-fitness-clean",
    },
    {
      title: "Smart India Hackathon Project",
      description: "Innovation in climate tech",
      url: "https://github.com/nishchaydev/SIH-",
    },
    {
      title: "Personal Tracker",
      description: "Track habits and personal growth",
      url: "https://github.com/nishchaydev/tracker",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #eff6ff, #e0e7ff)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: "42rem", margin: "0 auto", paddingTop: "48px", paddingBottom: "48px" }}>
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#111827", margin: "0 0 16px 0" }}>
            Nishchay Gupta
          </h1>
          <p style={{ fontSize: "20px", color: "#374151", fontWeight: "500", margin: "0 0 12px 0" }}>
            AI & Full Stack Developer | TypeScript | Python | ML Enthusiast
          </p>
          <p style={{ fontSize: "16px", color: "#4b5563", margin: "0 auto" }}>
            I build, learn, and experiment with code, AI tools, and problem-solving.
          </p>
        </header>

        <div style={{ marginBottom: "64px" }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: "100%",
                background: "white",
                border: "2px solid #e5e7eb",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "16px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", margin: "0 0 4px 0" }}>
                    {link.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
                    {link.description}
                  </p>
                </div>
                <svg
                  style={{ width: "24px", height: "24px", color: "#9ca3af", marginLeft: "16px", flexShrink: 0 }}
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
            </a>
          ))}
        </div>

        <footer style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
            Built by Nishchay Gupta
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Index;
