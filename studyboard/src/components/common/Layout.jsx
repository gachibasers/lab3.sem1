import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1, padding: "16px" }}>
        {children}
      </main>
      <footer style={{ textAlign: "center", padding: "8px", opacity: 0.6 }}>
        StudyBoard © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
