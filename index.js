const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is your project's name?",
                name: "title"
            },
            {
                type: "input",
                message: "Enter a short description of your project:",
                name: "description"
            },
            {
                type: "input",
                message: "What command should be run to install?",
                name: "installation",
                default: "npm i"
            },
            {
                type: "input",
                message: "What should the user know about utilizing this repo?",
                name: "usage"
            },
            {
                type: "list",
                message: "Select the license you would like to use.",
                name: "license",
                choices: ["MIT", "GPL", "Apache 3.0", "Apache 2.0", "BSD"]
            },
            {
                type: "input",
                message: "If you would like other developers to contribute, please add guidelines:",
                name: "contributing"
            },
            {
                type: "input",
                message: "Which command should be used for tests?",
                name: "tests",
                default: "npm test"
            },
        ]);
}

promptUser()

    .then(function (answers) {
        const html = generateMarkdown(answers);
        fs.writeFile('./utils/generateMarkdown.md', html, function (err) {
            if (err) throw err;
            console.log("Success!");
        });
    })




