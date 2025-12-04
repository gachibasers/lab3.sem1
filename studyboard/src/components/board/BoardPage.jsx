import { DragDropContext } from "@hello-pangea/dnd";
import { useBoardStore } from "../../state/useBoardStore.js";
import Column from "./Column.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

export default function BoardPage() {
  const board = useBoardStore((state) => state.board);
  const addTask = useBoardStore((state) => state.addTask);
  const moveTask = useBoardStore((state) => state.moveTask);

  const todoTasks = board.getTasksByStatus("todo");
  const inProgressTasks = board.getTasksByStatus("in-progress");
  const doneTasks = board.getTasksByStatus("done");

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // Якщо впало в ту саму колонку на те саме місце — нічого не робимо
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // droppableId = статус колонки ("todo" / "in-progress" / "done")
    moveTask(draggableId, destination.droppableId);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "16px" }}>StudyBoard – Kanban</h2>

      <AddTaskForm courses={board.courses} onAdd={addTask} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Column title="To Do" status="todo" tasks={todoTasks} />
          <Column title="In Progress" status="in-progress" tasks={inProgressTasks} />
          <Column title="Done" status="done" tasks={doneTasks} />
        </div>
      </DragDropContext>
    </div>
  );
}
