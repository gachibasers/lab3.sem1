import { Draggable } from "@hello-pangea/dnd";
import { useBoardStore } from "../../state/useBoardStore.js";

export default function TaskCard({ task, index }) {
  const removeTask = useBoardStore((state) => state.removeTask);
  const getCourseById = useBoardStore((state) => state.getCourseById);

  const course = getCourseById(task.courseId);
  const courseColor = course?.color ?? "#444";

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (confirm(`Delete task "${task.title}"?`)) {
      removeTask(task.id);
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-card"
          style={{
            ...provided.draggableProps.style,
            borderLeft: `6px solid ${courseColor}`, // кольорова смуга
            "--course-color": courseColor,          // CSS-змінна для glow
          }}
        >
          <div className="task-card__top">
            <div>
              {/* Плашка курсу */}
              {course && (
                <div className="task-card__course-tag">
                  {course.name}
                </div>
              )}
              <div className="task-card__title">{task.title}</div>
            </div>

            <button
              type="button"
              className="task-card__delete"
              onClick={handleDeleteClick}
              title="Delete task"
            >
              ×
            </button>
          </div>

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
