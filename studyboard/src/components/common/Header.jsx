import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const linkClass = (active) =>
  "app-nav__link" + (active ? " app-nav__link--active" : "");

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header className="app-header">
      <div className="app-header__title">StudyBoard</div>
      <nav>
        <Link to="/" className={linkClass(location.pathname === "/")}>
          {t("nav.board")}
        </Link>
        <Link to="/stats" className={linkClass(location.pathname === "/stats")}>
          {t("nav.stats")}
        </Link>
        <Link
          to="/settings"
          className={linkClass(location.pathname === "/settings")}
        >
          {t("nav.settings")}
        </Link>
      </nav>
    </header>
  );
}
