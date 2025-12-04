export class Course {
  constructor({ id, name, color = "#1976d2" }) {
    this.id = id;
    this.name = name;
    this.color = color;
  }

  rename(newName) {
    this.name = newName;
  }

  changeColor(newColor) {
    this.color = newColor;
  }
}
