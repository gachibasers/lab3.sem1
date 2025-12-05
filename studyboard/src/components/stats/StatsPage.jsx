import { useBoardStore } from "../../state/useBoardStore.js";
import Charts from "./Charts.jsx";

export default function StatsPage() {
  const board = useBoardStore((state) => state.board);

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>Statistics</h2>
      <Charts board={board} />
    </div>
  );
}
