import { Board } from "../domain/Board.js";

const STORAGE_KEY = "studyboard-board";

export class StorageService {
  static saveBoard(board) {
    try {
      const data = {
        tasks: board.tasks,
        courses: board.courses,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error("Failed to save board", err);
    }
  }

  static loadBoard() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return new Board(parsed);
    } catch (err) {
      console.error("Failed to load board", err);
      return null;
    }
  }

  static clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
}
