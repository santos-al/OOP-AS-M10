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

            let shape;
            // Creates shape
            switch (data.shape) {
                case "Circle":
                  shape = new Circle();
                  break;
      
                case "Square":
                  shape = new Square();
                  break;
      
                case "Triangle":
                  shape = new Triangle();
                  break;
              }
            // add color to the shape
            shape.addColor(data.shapeColor)

            // create svg file 
            const svg = new Svg();
            svg.renderText(data.logoText, data.textColor);
            svg.renderShape(shape);

            console.log('Generating logo...')
            // writes to file
            return writeFile('./examples/logo.svg', svg.render());

        });
    }

}

module.exports = CreateShape;