export class Logger {
  static info(message, context) {
    console.info("[StudyBoard]", message, context ?? "");
  }

  static error(message, context) {
    console.error("[StudyBoard]", message, context ?? "");
  }
}
