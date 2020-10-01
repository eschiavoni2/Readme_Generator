// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Title
  # ${answers.title}

  ## Description
  ${answers.description}

  ### Installation
  ${answers.installation}

  ### Usage
  ${answers.usage}

  #### Credits
  ${answers.credits}

  ##### License
  ${answers.license}

  ###### Badges
  ${answers.badges}

  ####### Contributing
  ${answers.contributing}

  ######## Tests
  ${answers.tests}

`;
}

module.exports = generateMarkdown;
