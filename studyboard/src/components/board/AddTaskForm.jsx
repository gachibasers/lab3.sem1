import { useState } from "react";
import { useTranslation } from "react-i18next";

function generateId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `t-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function AddTaskForm({ courses, onAdd }) {
  const { t } = useTranslation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      courseId: courseId || null,
      status: "todo",
      priority,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("board.addTaskPlaceholder")}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder={t("board.addDescriptionPlaceholder")}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      >
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
        {courses.length === 0 && <option value="">No courses</option>}
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">{t("board.addTaskButton")}</button>
    </form>
  );
}
