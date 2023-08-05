const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes.js');
const { writeFile } = require("fs/promises");
const { choices } = require('yargs');

class CreateShape {
    questions = [
        {
            type: 'input',
            message: 'What text do you want inside the logo?',
            name: logoText
        },
        {
            type: 'list',
            message: 'Which shape would you like?',
            name: shape,
            choices: ['Triangle', 'Square', 'Circle']
        },
        {
            type: 'input',
            message: 'What color would you like?',
            name: color
        }
    ]
}