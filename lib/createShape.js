const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes.js');
const { writeFile } = require("fs/promises");

class CreateShape {
    // List of inquirer questions
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

    // creates svg
    init() {
        inquirer.prompt(questions)
          .then((data) => {

            // Creates shape
            let shape = new `${data.shape}()`;

            // add color to the shape
            shape.addColor()

            console.log('Generating logo...')

        });
    }

}

module.exports = CreateShape;