import { Link, useLocation } from "react-router-dom";

const linkStyle = (active) => ({
  marginRight: "16px",
  textDecoration: "none",
  fontWeight: active ? "bold" : "normal",
  color: active ? "#1976d2" : "#333"
});

export default function Header() {
  const location = useLocation();

  return (
    <header
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #ddd",
        marginBottom: "16px"
      }}
    >
      <nav>
        <Link to="/" style={linkStyle(location.pathname === "/")}>Дошка</Link>
        <Link to="/stats" style={linkStyle(location.pathname === "/stats")}>Статистика</Link>
        <Link to="/settings" style={linkStyle(location.pathname === "/settings")}>Налаштування</Link>
      </nav>
    </header>
  );
}
