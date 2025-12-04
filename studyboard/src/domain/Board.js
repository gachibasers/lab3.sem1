import { Task } from "./Task.js";
import { Course } from "./Course.js";

export class Board {
  constructor({ tasks = [], courses = [] } = {}) {
    this.tasks = tasks.map((t) => (t instanceof Task ? t : new Task(t)));
    this.courses = courses.map((c) => (c instanceof Course ? c : new Course(c)));
  }

  addCourse(courseData) {
    const course = courseData instanceof Course ? courseData : new Course(courseData);
    this.courses.push(course);
    return course;
  }

  addTask(taskData) {
    const task = taskData instanceof Task ? taskData : new Task(taskData);
    this.tasks.push(task);
    return task;
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  moveTask(taskId, newStatus) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task) return;
    task.status = newStatus;
  }

  getTasksByStatus(status) {
    return this.tasks.filter((t) => t.status === status);
  }
}
