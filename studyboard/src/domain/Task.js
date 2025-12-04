export class Task {
  constructor({
    id,
    title,
    description = "",
    courseId = null,
    status = "todo",
    priority = "medium",
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

  updateDetails(changes) {
    Object.assign(this, changes);
  }
}
