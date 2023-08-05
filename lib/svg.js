// Create SVG file

class Svg {
    constructor() {
        this.text = "";
        this.shape = "";
    }

    render() {
        return `<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`
    }

    renderText(text, color) {
        this.text = `<text x="150 y="125" "font-size="60px" text-anchor="middle" fill=${color} font-style="Helvetica">${text}</text>`;
    }

    renderShape(shape) {
        this.shape = shape.create();
    }

}

module.exports = Svg;