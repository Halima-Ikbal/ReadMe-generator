// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// title
// Description: - what was your motivation? - why did you build this project? - what problem does it solve? - what did you learn?
// Table of Contents (optional)- installation, -usage -credits- license
//Badges 
// How to Contribute
const questions = [
  {
    type: 'input', 
    name: 'title',
    questions: 'What is title of your project?',
    validate: titleInput => {
      if(titleInput){
        return true;
        } else {
            console.log('Please enter a title of your project!');
            return false;
      }
    }


  },
  {
    type: 'input',
    name: 'description',
    message: 'A short description of the project such as why build the project and the usefulness of this project?',
    validate: descriptionInput => {
      if(descriptionInput) {
        return true;
      }else{
        console.log('Please provide a short description of the project!');
        return false;
      }
    }
  },
  {
    type: 'input', 
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',


  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Please Include screenshots as needed.'
  }, 
  {
   type: 'input',
   name: 'credit',
   message: 'List your collaborators, if any, with links to their GitHub profiles.'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a licence',
    choices: ['MIT', ' GNU GPLv3 ', 'NONE'],

  },


];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generatedREADME.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File Generated'
      });
    });
  });
};
// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
  .then(function(data) {
    console.log(data);
    var fileContent = generateMarkdown(data);
    writeToFile(fileContent)
  });
}

// Function call to initialize app
init();
