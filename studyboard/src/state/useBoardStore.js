import { create } from "zustand";
import { Board } from "../domain/Board.js";
import { StorageService } from "../services/StorageService.js";
import { Logger } from "../services/Logger.js";

function createInitialBoard() {
  const stored = StorageService.loadBoard();
  if (stored) {
    Logger.info("Loaded board from storage");
    return stored;
  }

  const initialCourses = [
    { id: "course-oop", name: "OOP", color: "#1976d2" },
    { id: "course-math", name: "Math analysis", color: "#d32f2f" },
  ];

  const initialTasks = [
    {
      id: "t1",
      title: "Read OOP lecture",
      description: "Classes, inheritance, polymorphism",
      courseId: "course-oop",
      status: "todo",
      priority: "high",
    },
    {
      id: "t2",
      title: "Solve problems on limits",
      courseId: "course-math",
      status: "in-progress",
      priority: "medium",
    },
    {
      id: "t3",
      title: "Prepare questions for seminar",
      courseId: "course-oop",
      status: "done",
      priority: "low",
    },
  ];

  Logger.info("Using initial hardcoded board");
  return new Board({ tasks: initialTasks, courses: initialCourses });
}

export const useBoardStore = create((set, get) => ({
  board: createInitialBoard(),

  addTask(taskData) {
    const currentBoard = get().board;
    const newBoard = new Board({
      tasks: currentBoard.tasks,
      courses: currentBoard.courses,
    });

    newBoard.addTask(taskData);
    StorageService.saveBoard(newBoard);
    Logger.info("Task added", taskData);

    set({ board: newBoard });
  },

  moveTask(taskId, newStatus) {
    const currentBoard = get().board;
    const newBoard = new Board({
      tasks: currentBoard.tasks,
      courses: currentBoard.courses,
    });

    newBoard.moveTask(taskId, newStatus);
    StorageService.saveBoard(newBoard);
    Logger.info("Task moved", { taskId, newStatus });

    set({ board: newBoard });
  },
}));
