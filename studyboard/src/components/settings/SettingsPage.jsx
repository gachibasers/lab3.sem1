import { useTranslation } from "react-i18next";

export default function SettingsPage() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h2 className="page-title">{t("settings.title")}</h2>

      <div className="settings-card">
        <div className="settings-row">
          <label>
            {t("settings.language")}{" "}
            <select value={i18n.language} onChange={handleLanguageChange}>
              <option value="uk">{t("settings.languageUk")}</option>
              <option value="en">{t("settings.languageEn")}</option>
            </select>
          </label>
        </div>

        <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
          Мова зберігається в localStorage, тому після перезавантаження сторінки
          вибір не губиться.
        </p>
      </div>
    </div>
  );
}
