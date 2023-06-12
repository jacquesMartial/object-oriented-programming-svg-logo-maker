const Shape = require("./Shape");

class Square extends Shape {
  constructor(textColor, shapeColor) {
    super(textColor, shapeColor);
  }

  getShapeType() {
    return "Square";
  }
}
