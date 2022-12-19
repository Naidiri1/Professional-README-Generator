// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "None"){
    return ""
}else{
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
      return ""
      }else{
        return `- [license](#license)`
      }
    }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === "None") {
    return ""
}else {
  return "## License"
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents 
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
  make it mailto link
  ${data.email}
  Make github link so when they click, it takes them to the github profile
  ${data.github}

  ## Contribution
  ${data.contribution}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
`;
}

module.exports = generateMarkdown;
