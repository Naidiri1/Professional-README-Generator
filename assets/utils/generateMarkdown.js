// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return ""
    } else {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return ""
    } else {
        return `- [license](#license)`
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return ""
    } else {
        return "## License"
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ## Table of Contents 
  - [Installation](#installation)
  - [description](#description)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Contribution](#contribution)
  ${renderLicenseLink(data.license)}

  ## Installation
    ${data.installation}

  ## Description 
  ${data.description}

  ## Usage 
  ${data.usage}

  ## Tests
  ${data.test}

  ## Questions 
 - [Contact me](mailto:${data.email})
 
 - [GitHub](https://github.com/${data.github})
 
  ## Contribution
  ${data.contribution}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
`;
}
//  exported values and functions from that module. 
module.exports = generateMarkdown;

