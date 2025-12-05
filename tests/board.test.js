import { Board } from "../studyboard/src/domain/Board.js";

describe("Board class", () => {
  test("додає нову задачу", () => {
    const board = new Board({ tasks: [], courses: [] });

    board.addTask({
      id: "t1",
      title: "Test task",
      description: "",
      status: "todo",
      priority: "medium",
      courseId: "course-oop"
    });

    expect(board.tasks.length).toBe(1);
    expect(board.tasks[0].title).toBe("Test task");
  });

  test("переміщує задачу між статусами", () => {
    const board = new Board({
      tasks: [
        {
          id: "t1",
          title: "Task",
          status: "todo",
          priority: "medium",
          courseId: "course-oop"
        }
      ],
      courses: []
    });

    board.moveTask("t1", "in-progress");

    expect(board.tasks[0].status).toBe("in-progress");
  });

  test("видаляє задачу", () => {
    const board = new Board({
      tasks: [
        { id: "t1", title: "Test", status: "todo", courseId: "course-oop" }
      ],
      courses: []
    });

    board.removeTask("t1");

    expect(board.tasks.length).toBe(0);
  });
});
