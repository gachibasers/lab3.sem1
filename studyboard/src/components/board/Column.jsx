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
          style={{
            flex: 1,
            margin: "0 8px",
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            padding: "8px",
            minHeight: "200px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            {title}
          </h3>

          {tasks.length === 0 ? (
            <div
              style={{
                fontSize: "0.85rem",
                opacity: 0.6,
                textAlign: "center",
                padding: "8px 0",
              }}
            >
              {t("board.noTasks")}
            </div>
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
