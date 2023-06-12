const Shape = require("./Shape");

class Triangle extends Shape {
  constructor(textColor, shapeColor) {
    super(textColor, shapeColor);
  }

  getShapeType() {
    return "Triangle";
  }
}
