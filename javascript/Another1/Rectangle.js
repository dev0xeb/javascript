class Rectangle extends Shape{
    #length
    #width
    constructor(length, width) {
        super();
        this.#width = width;
        this.#length = length;
        this.calculateArea();
    }

    calculateArea() {
        this.area = this.length * this.length;
        return this.area
    }
}