
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

const responses = [
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
];

function init() {
  inquirer
    .prompt(responses)

    .then((data) => {
      fs.writeFileSync("./README.md", markdown(data), (err) =>
      err ? console.error(err) : console.log('Yes!')
      );
    });
}
init();

//Need: project title, description, table of contents, installation, usage, license, contributing, tests, and questions, choose license from a list of options, license corresponds to a badge, questions section includes github username/url link, email address is added, table of contents has to move section to section
