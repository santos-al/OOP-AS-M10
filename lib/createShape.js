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
            validate: (logoText) => {
                if (logoText.length > 3) {
                   return 'You have put in too many characters';
                }
          
                return true;
            }
        },
        {
            type: 'input',
            message: 'What color would you like your text to be?',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Which shape would you like?',
            name: 'shape',
            choices: ['Triangle', 'Square', 'Circle']
        },
        {
            type: 'input',
            message: 'What color would you like your shape to be?',
            name: 'shapeColor'
        }
    ]
}