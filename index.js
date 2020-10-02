const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function promptUser() {
return inquirer
  .prompt([
    {
        type:"input",
        message:"Enter project title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter project description",
        name:"description"
    },
    {
        type:"input",
        message: "Enter the steps required to install your project:",
        name:"installation"
    },
    {
        type:"input",
        message: "Enter a description of the usage of your application:",
        name:"usage"
    },
    {
        type:"list",
        message:"Select the license you would like to use.",
        name:"license",
        choices:["MIT", "GPL", "Apache 3.0", "Apache 2.0", "BSD"]
    },
    {
        type:"input",
        message: "If you would like other developers to contribute, please add guidelines:",
        name:"contributing"
    },
    {
        type:"input",
        message: "Give explicit instructions on how to run all necessary tests (explain libraries, and supply all necessary commands):",
        name:"tests"
    },
    {
        type:"input",
        message: "Any questions:",
        name:"questions"
    },
  ]);
}
  
  promptUser() 
     
  .then(function(answers) {
    const html = generateMarkdown(answers);
    fs.writeFile('./utils/generateMarkdown.md', html, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
    })




