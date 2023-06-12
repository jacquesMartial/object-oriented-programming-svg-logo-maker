const Shape = require("../lib/Shape");

const mockShape = new Shape("red", "white");

describe("Shape", () => {
  // check if the input for the text color is a string
  it("Does it contain a text color as a string?", () => {
    expect(mockShape.getTextColor()).toEqual(expect.any(String));
  });

  // check if the input for the shape color is a string
  it("Does it contain a shape color as a string?", () => {
    expect(mockShape.getShapeColor()).toEqual(expect.any(String));
  });
});
