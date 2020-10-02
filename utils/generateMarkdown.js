// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Description
  ${answers.description}

  ## Installation
  \`\`\`
  ${answers.installation}
  \`\`\`

  ## Usage
  \`\`\`
  ${answers.usage}
  \`\`\`

  ## License
  ![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

`;
}

module.exports = generateMarkdown;
