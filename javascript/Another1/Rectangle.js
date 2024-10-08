import { Shape } from './Shape.js';
class Rectangle extends Shape{
    constructor(name, length, width) {
        super(name);
        this.width = width;
        this.length = length;
    }

    calculateArea() {
        this.area = this.length * this.width;
        return this.area
    }

    isSquare(){
        return this.length === this.width
    }
}

const myRectangle = new Rectangle("Rectangle", 5, 10)
console.log("shape name ", myRectangle.getName())
console.log(myRectangle.calculateArea())
console.log(myRectangle.isSquare())

const mySquare = new Rectangle("Square", 10, 10)
console.log(mySquare.getName())
console.log(mySquare.calculateArea())
console.log(mySquare.isSquare())