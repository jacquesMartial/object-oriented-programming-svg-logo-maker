class Shape {
  constructor(textColor, shapeColor) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  getTextColor() {
    return this.textColor;
  }
  getShapeColor() {
    return this.shapeColor;
  }
}

module.exports = Shape;
