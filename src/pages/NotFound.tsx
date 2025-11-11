export default function NotFound() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "16px" }}>404</h1>
        <p style={{ fontSize: "20px", color: "#4b5563", marginBottom: "16px" }}>Oops! Page not found</p>
        <a href="/#/" style={{ color: "#3b82f6", textDecoration: "underline" }}>
          Return to Home
        </a>
      </div>
    </div>
  );
}
