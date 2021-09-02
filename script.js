const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const path = require('path');
const generateReadMe = require('./utils/generateMarkdown');

const writeToFileAsync = util.promisify(fs.writeFile);

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the project discription?",
    },
    {
      type: "input",
      name: "installation",
      message: "How should I install this?",
    },
    {
      type: "input",
      name: "information",
      message: "How should I use this?",
    },
    {
      type: "input",
      name: "guidelines",
      message: "How can I contribute to this project?",
    },
    {
      type: "input",
      name: "testing",
      message: "How can I test this?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose your licenses",
      choices: ['GPL_3.0', 'BSD_3', 'None', 'MIT'],
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub profile?",
    },
    {
      type: "input",
      name: "questions",
      message: "If you have any question, please enter below.",
    },
  ]);
};

function writeToFile(fileName, data) {
  return writeToFileAsync(path.join(process.cwd(), fileName), data)
};

// const generateReadMe = (questions)

const init = () => {
    questions ()
        .then((answers) => writeToFile('README.md', generateReadMe(answers)))
        .then(() => console.log('Successfully generated readme.md'))
        .catch((err) => console.error(err));
};

init();
