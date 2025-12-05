import { useTranslation } from "react-i18next";
import { useBoardStore } from "../../state/useBoardStore.js";
import Charts from "./Charts.jsx";

export default function StatsPage() {
  const { t } = useTranslation();
  const board = useBoardStore((state) => state.board);

  return (
    <div>
      <h2 className="page-title">{t("stats.title")}</h2>
      <div className="stats-grid">
        <Charts board={board} />
      </div>
    </div>
  );
}
