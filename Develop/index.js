// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// title
// Description: - what was your motivation? - why did you build this project? - what problem does it solve? - what did you learn?
// Table of Contents (optional)- installation, -usage -credits- license
// Installation - what are the steps required to install your project?
// USage
const questions = [
  {
    type: 'input', 
    name: 'title',
    questions: 'What is title of your project?',
    validate: titleInput => {
      if(titleInput){
        
      }
    }


  }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
