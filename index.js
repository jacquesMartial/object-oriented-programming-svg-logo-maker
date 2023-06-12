// Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const questions = [
  {
    type: "input",
    name: "text",
    message: "enter a text of 3 characters",
    validate: (answer) => {
      if (answer.length > 3) {
        return "please type in a maximum of three characters";
      }

      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "enter text color",
  },
  {
    type: "list",
    name: "shape",
    message: "choose a shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapesColor",
    message: "enter shape color",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Genererated logo.svg")
  );
}

// Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  // creating a function to accept the user answers and build a svg file
  const svgFile = (answers) => {
    const { text, textColor, shape, shapesColor } = answers;

    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%"  />

 <${shape} cx="150" cy="100" r="80" fill="${shapesColor}green" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
  };

  // Create a function to write svg file
  const logopageContent = svgFile(answers);

  writeToFile("logo.svg", logopageContent);
}

// Function call to initialize app
init();
