import { useTranslation } from "react-i18next";
import { useBoardStore } from "../../state/useBoardStore.js";
import Charts from "./Charts.jsx";

export default function StatsPage() {
  const { t } = useTranslation();
  const board = useBoardStore((state) => state.board);

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>{t("stats.title")}</h2>
      <Charts board={board} />
    </div>
  );
}
