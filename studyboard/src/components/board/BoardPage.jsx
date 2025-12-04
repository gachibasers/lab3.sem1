import { useBoardStore } from "../../state/useBoardStore.js";
import Column from "./Column.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

export default function BoardPage() {
  const board = useBoardStore((state) => state.board);
  const addTask = useBoardStore((state) => state.addTask);

  const todoTasks = board.getTasksByStatus("todo");
  const inProgressTasks = board.getTasksByStatus("in-progress");
  const doneTasks = board.getTasksByStatus("done");

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>StudyBoard – Kanban</h2>

      <AddTaskForm courses={board.courses} onAdd={addTask} />

      <div style={{ display: "flex", gap: "8px" }}>
        <Column title="To Do" tasks={todoTasks} />
        <Column title="In Progress" tasks={inProgressTasks} />
        <Column title="Done" tasks={doneTasks} />
      </div>
    </div>
  );
}
