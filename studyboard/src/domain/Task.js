export class Task {
  constructor({
    id,
    title,
    description = "",
    courseId = null,
    status = "todo", // "todo" | "in-progress" | "done"
    priority = "medium", // "low" | "medium" | "high"
    deadline = null,
    createdAt = new Date().toISOString(),
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.courseId = courseId;
    this.status = status;
    this.priority = priority;
    this.deadline = deadline;
    this.createdAt = createdAt;
  }

  start() {
    this.status = "in-progress";
  }

  markDone() {
    this.status = "done";
  }

  updateDetails({ title, description, priority, deadline, courseId }) {
    if (title !== undefined) this.title = title;
    if (description !== undefined) this.description = description;
    if (priority !== undefined) this.priority = priority;
    if (deadline !== undefined) this.deadline = deadline;
    if (courseId !== undefined) this.courseId = courseId;
  }
}
