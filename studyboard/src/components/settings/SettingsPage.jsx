import { useTranslation } from "react-i18next";

export default function SettingsPage() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>{t("settings.title")}</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>
          {t("settings.language")}:{" "}
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{ padding: "4px 8px" }}
          >
            <option value="uk">{t("settings.languageUk")}</option>
            <option value="en">{t("settings.languageEn")}</option>
          </select>
        </label>
      </div>

      <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
        {/* можна додати якийсь текст-пояснення, але не обов'язково */}
      </p>
    </div>
  );
}
