const fs = require('fs');
const inquirer = require ('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {
//  let badge = '';
//  if(license === 'MIT') {
//   badege= '![]()'
//  }
  
//}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinkOption = ["MIT", "GNU GPLv3", "none"];
  let links= [
    "(https://opensource.org/licenses/MIT)",
    "(https://www.gnu.org/licenses/gpl-3.0)",
    "('')",
    


  ]
  for(let i = 0; i < licenseOption.length; i++) {
		if(license === licenseOption[i]) {
		return `[${licenseOption[i]}]${links[i]}`;
		}
	}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ##${data.description}
 
  
  ## Table of Contents
  ### *[Installation](#installation)
  ### *[Usage](#usage)
  ### *[Credits](#credits)
  ### *[Licence](#license)
  ### *[Questions](#questions)
  
  ## Installation
  ${data.install}
   
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credit}
  
  
  ${data.license}
`;
}

module.exports = generateMarkdown;
