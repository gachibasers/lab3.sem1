import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "8px",
            marginBottom: "8px",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            // обов'язково додаємо стилі від DnD, щоб працювала анімація
            ...provided.draggableProps.style,
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{task.title}</div>
          {task.description && (
            <div style={{ fontSize: "0.9rem", marginBottom: "4px" }}>
              {task.description}
            </div>
          )}
          <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Priority: {task.priority ?? "medium"}
          </div>
        </div>
      )}
    </Draggable>
  );
}
