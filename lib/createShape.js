const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes.js');
const { writeFile } = require("fs/promises");
const { choices } = require('yargs');
const { validate } = require('@babel/types');

class CreateShape {
    questions = [
        {
            type: 'input',
            message: 'What text do you want inside the logo?',
            name: 'logoText',
            validate: async (logoText) => {
                if (logoText.length > 3) {
                   return 'You have inputed too many characters';
                }
          
                return true;
            }
        },
        {
            type: 'list',
            message: 'Which shape would you like?',
            name: 'shape',
            choices: ['Triangle', 'Square', 'Circle']
        },
        {
            type: 'input',
            message: 'What color would you like?',
            name: 'color'
        }
    ]
}