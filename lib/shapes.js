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
        let square = `<rect x="10" y="10" width="30" height="30 color=${this.color}"/>`
        return square;
    }
}

class Circle extends Shape {
    create() {
        let circle = `<circle cx="25" cy="75" r="20" color=${this.color}"/>`
        return circle;
    }
}

class Triangle extends Shape {
    create() {
        let triangle = `<<polygon points="0,0 20,20 40,0 color=${this.color}"/>`
        return triangle;
    }
}

module.exports = { Square, Triangle, Circle};