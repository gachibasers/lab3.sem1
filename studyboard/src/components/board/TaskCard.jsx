import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-card"
          style={provided.draggableProps.style}
        >
          <div className="task-card__title">{task.title}</div>

          {task.description && (
            <div className="task-card__description">{task.description}</div>
          )}

          <div className="task-card__meta">
            Priority: {task.priority ?? "medium"}
          </div>
        </div>
      )}
    </Draggable>
  );
}
