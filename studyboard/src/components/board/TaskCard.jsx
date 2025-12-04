export default function TaskCard({ task }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "8px",
        marginBottom: "8px",
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{task.title}</div>
      {task.description && (
        <div style={{ fontSize: "0.9rem", marginBottom: "4px" }}>{task.description}</div>
      )}
      <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
        Priority: {task.priority ?? "medium"}
      </div>
    </div>
  );
}
