const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
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
        type:"input",
        message: "List any and all collaborators with links to their GitHub pages",
        name:"credits"
    },
    {
        type:"list",
        message:"Select the license you would like to use.",
        name:"license",
        choices:["MIT", "GPL", "Apache 3.0", "Apache 2.0", "BSD"]
    },
    {
        type:"input",
        message: "Please enter any badges:",
        name:"badges"
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
    }
  ])

  function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="title">${answers.title}</h1>
      <p class="desc">${answers.description}.</p>      
      <p class="install">${answers.title}.</p>
      <p class="use">${answers.description}.</p>  
      <p class="credits">${answers.title}.</p>
      <p class="license">${answers.description}.</p>  
      <p class="badges>${answers.title}.</p>
      <p class="contributing>${answers.description}.</p>  
      <p class="contributing>${answers.description}.</p>  
    </div>
  </div>
  </body>
  </html>`;
  }
  
  promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return fs.writeFileAsync("index.html", html);
})
.then(function() {
    console.log("Successfully wrote to index.html");
})
.catch(function(err) {
    console.log(err);
})

