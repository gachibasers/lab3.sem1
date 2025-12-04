import { useState } from "react";

function generateId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `t-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function AddTaskForm({ courses, onAdd }) {
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
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "16px",
        display: "flex",
        gap: "8px",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "6px 8px", minWidth: "220px" }}
      />

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "6px 8px", minWidth: "260px" }}
      />

      <select
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        style={{ padding: "6px 8px" }}
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
        style={{ padding: "6px 8px" }}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add task
      </button>
    </form>
  );
}
