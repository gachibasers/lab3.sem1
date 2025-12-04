import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard.jsx";

export default function Column({ title, status, tasks }) {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            flex: 1,
            margin: "0 8px",
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            padding: "8px",
            minHeight: "200px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "8px" }}>{title}</h3>
          {tasks.length === 0 ? (
            <div
              style={{
                fontSize: "0.85rem",
                opacity: 0.6,
                textAlign: "center",
                padding: "8px 0",
              }}
            >
              No tasks
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
