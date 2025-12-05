import { DragDropContext } from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";
import { useBoardStore } from "../../state/useBoardStore.js";
import Column from "./Column.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

export default function BoardPage() {
  const { t } = useTranslation();
  const board = useBoardStore((state) => state.board);
  const addTask = useBoardStore((state) => state.addTask);
  const moveTask = useBoardStore((state) => state.moveTask);

  const todoTasks = board.getTasksByStatus("todo");
  const inProgressTasks = board.getTasksByStatus("in-progress");
  const doneTasks = board.getTasksByStatus("done");

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    moveTask(draggableId, destination.droppableId);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>{t("board.title")}</h2>

      <AddTaskForm courses={board.courses} onAdd={addTask} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Column title={t("board.columnTodo")} status="todo" tasks={todoTasks} />
          <Column
            title={t("board.columnInProgress")}
            status="in-progress"
            tasks={inProgressTasks}
          />
          <Column title={t("board.columnDone")} status="done" tasks={doneTasks} />
        </div>
      </DragDropContext>
    </div>
  );
}
