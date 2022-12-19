// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your file?',
        name: 'fileName',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How did you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Do you want users to contribute to your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What test have you run in your application?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your GitHub',
        name: 'github',
    },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        name: 'license',
        choices: ['Apache2.0', 'BSD', 'MIT', 'None']
    },
];
// TODO: Create a function to write README file
function writeFile(fileName, data) {

};
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            fs.writeFileSync(`${response.fileName}.md`, generateMarkdown(response));
        })
}
// Function call to initialize app
init();
