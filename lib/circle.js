const Shape = require("./Shape");

class Circle extends Shape {
  constructor(textColor, shapeColor) {
    super(textColor, shapeColor);
  }

  getShapeType() {
    return "Circle";
  }
}
