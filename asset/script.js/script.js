const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const path = require('path');

const writeToFile = util.promisify(fs.writeFile);

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Project Title",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the project discription?",
    },
    {
      type: "input",
      name: "installation instructions",
      message: "How should I install this?",
    },
    {
      type: "input",
      name: "usuage information",
      message: "How should I use this?",
    },
    {
      type: "input",
      name: "contribution guidelines",
      message: "How can I contribute to this project?",
    },
    {
      type: "input",
      name: "test instructions",
      message: "How can I test this?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose your license",
      choices: [""],
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is your gitHub profile?",
    },
    {
      type: "input",
      name: "questions",
      message: "If you have any ",
    },
  ]);
};

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

const generateReadMe = (questions)

const init = () => {
    promptUser ()
        .then((answers) = writeToFile('readMe.md', generateReadMe(answers)))
        .then(() => console.log('Successfully generated readme.md'))
        .catch((err) => console.error(err));
};

init();
