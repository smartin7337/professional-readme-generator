
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
  .prompt([

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
      message: "How do you install/run your project?",
    },
    {
      name: "usage",
      type: "input",
      message: "How will this project be used?",
    },
    {
      name: "contributing",
      type: "input",
      message: "Who is contribtuing to this project?",
    },

    {
      name: "tests",
      type: "input",
      message: "What are the tests for this project?",
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
      message: "Which license will you use?",
      choices: ["MIT Open Source License", "GNU GP License", "Apache License"],
    },
  ])
  .then((answers) => {
    console.log(answers);
    var markdown = generateMarkdown(answers);
    console.log(markdown);
    const fs = require("fs");
    fs.writeFileSync("./markdown.md", markdown);
  });

//Need: project title, description, table of contents, installation, usage, license, contributing, tests, and questions, choose license from a list of options, license corresponds to a badge, questions section includes github username/url link, email address is added, table of contents has to move section to section
