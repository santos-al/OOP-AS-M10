// Class for all shapes

class Shape {
    constructor() {
        this.color = "";
    }

    addColor(color) {
        this.color = color;
    }
}

class Square extends Shape {
    create() {
        let square = `<rect x="10" y="10" width="300" height="200" fill="${this.color}"/>`
        return square;
    }
}

class Circle extends Shape {
    create() {
        let circle = `<circle cx="145" cy="100" r="100" fill="${this.color}"/>`
        return circle;
    }
}

class Triangle extends Shape {
    create() {
        let triangle = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
        return triangle;
    }
}

module.exports = { Square, Triangle, Circle};