import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const linkStyle = (active) => ({
  marginRight: "16px",
  textDecoration: "none",
  fontWeight: active ? "bold" : "normal",
  color: active ? "#1976d2" : "#ccc"
});

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #333",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ fontWeight: "bold" }}>StudyBoard</div>
      <nav>
        <Link to="/" style={linkStyle(location.pathname === "/")}>
          {t("nav.board")}
        </Link>
        <Link to="/stats" style={linkStyle(location.pathname === "/stats")}>
          {t("nav.stats")}
        </Link>
        <Link to="/settings" style={linkStyle(location.pathname === "/settings")}>
          {t("nav.settings")}
        </Link>
      </nav>
    </header>
  );
}
