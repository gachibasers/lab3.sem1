import { useTranslation } from "react-i18next";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Charts({ board }) {
  const { t } = useTranslation();
  const tasks = board.tasks;

  const todo = board.getTasksByStatus("todo").length;
  const inProgress = board.getTasksByStatus("in-progress").length;
  const done = board.getTasksByStatus("done").length;

  const tasksByCourse = board.courses.map((c) => ({
    course: c.name,
    count: tasks.filter((t) => t.courseId === c.id).length,
  }));

  return (
    <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
      <div style={{ width: "300px" }}>
        <h3>{t("stats.tasksByStatus")}</h3>
        <Pie
          data={{
            labels: [
              t("stats.labelTodo"),
              t("stats.labelInProgress"),
              t("stats.labelDone"),
            ],
            datasets: [
              {
                label: t("stats.labelNumberOfTasks"),
                data: [todo, inProgress, done],
                backgroundColor: ["#ff6384", "#36a2eb", "#4caf50"],
              },
            ],
          }}
        />
      </div>

      <div style={{ width: "400px" }}>
        <h3>{t("stats.tasksByCourse")}</h3>
        <Bar
          data={{
            labels: tasksByCourse.map((x) => x.course),
            datasets: [
              {
                label: t("stats.labelNumberOfTasks"),
                data: tasksByCourse.map((x) => x.count),
                backgroundColor: "#36a2eb",
              },
            ],
          }}
          options={{
            responsive: true,
            scales: { y: { beginAtZero: true } },
          }}
        />
      </div>
    </div>
  );
}
