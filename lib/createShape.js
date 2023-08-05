const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes.js');
const { writeFile } = require("fs/promises");
const Svg = require('./svg.js');

class CreateShape {
 
    // creates svg
    init() {
        inquirer.prompt([
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
        ])
          .then((data) => {
            console.log(data);
            // Creates shape
            let shape = ""
            if (data.shape === 'Triangle') {
                shape = new Triangle();
                return shape
            }
            else if (data.shape === 'Circle') {
                shape = new Circle();
                return shape
            }
            else if (data.shape === 'Square') {
                shape = new Square();
                return shape
            }

            // add color to the shape
            shape.addColor()

            // create svg file 
            const svg = new Svg();
            svg.renderText(data.logoText, data.textColor);
            svg.renderShape(shape);

            console.log('Generating logo...')
            // writes to file
            return writeFile('logo.svg', svg.render());

        });
    }

}

module.exports = CreateShape;