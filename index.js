// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
  .prompt([
    // {
    //   name: "name",
    //   type: "input",
    //   message: "What's your name?",
    // },
    // {
    //   name: "iceCream",
    //   type: "list",
    //   message: "Which is your favorite of the following ice cream flavors?",
    //   choices: ["green tea", "poppyseed jam", "chile", "vanilla"],
    //   default: 3,
    // },

    {
      name: "projectTitle",
      type: "input",
      message: "What is the project title?",
    },
    {
      name: "description",
      type: "input",
      message: "What is the description of your project?",
    },
    {
      name: "installation",
      type: "input",
      message: "How to install the project:",
    },
    {
      name: "usage",
      type: "input",
      message: "What is the usage?",
    },
    {
      name: "contributing",
      type: "input",
      message: "Who is contribtuing?",
    },

    {
      name: "tests",
      type: "input",
      message: "What are the tests?",
    },
    {
      name: "userName",
      type: "input",
      message: "What is your username on GitHub?",
    },
    {
      name: "email",
      type: "input",
      message: "What is your email address?",
    },
    {
      type: "list",
      name: "license",
      message: "Which Which license would you like to use?",
      choices: ["a", "b", "c", "d"],
    },
  ])
  .then((answers) => {
    console.log(answers);
    var markdown = generateMarkdown(answers);
    console.log(markdown);
    const fs = require("fs");
    fs.writeFileSync("./markdown.md", markdown);
  });

//project title, description, table of contents, installation,
//usage, license, contributing, tests, and questions
//choose license from a list of options
//license corresponds to a badge
//questions section includes github username/url link, email address is added
//table of contents has to move section to section
