import { Droppable } from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";
import TaskCard from "./TaskCard.jsx";

export default function Column({ title, status, tasks }) {
  const { t } = useTranslation();

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="board-column"
        >
          <h3 className="board-column__title">{title}</h3>

          {tasks.length === 0 ? (
            <div className="board-column__empty">{t("board.noTasks")}</div>
          ) : (
            tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))
          )}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
