const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle', () => {
    test("Test to see if its a triangle", () => {
        const triangleTest = new Triangle();
        triangleTest.addColor("blue");
        expect(triangleTest.create()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});

describe('Circle', () => {
    test("Test to see if its a circle", () => {
        const circleTest = new Circle();
        circleTest.addColor("red");
        expect(circleTest.create()).toEqual('<circle cx="145" cy="100" r="100" fill="red"/>');
    });
});

describe('Square', () => {
    test("Test to see if its a square", () => {
        const squareTest = new Square();
        squareTest.addColor("green");
        expect(squareTest.create()).toEqual('<rect x="10" y="10" width="300" height="200" fill="green"/>');
    });
});
    