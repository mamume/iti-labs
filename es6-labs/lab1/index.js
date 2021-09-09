// Shape Class
class Shape {
    // Initialize x, y with zero
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Method to display circumference, area, type of object
    log() {
        console.log(`
        Circumference: ${this.getCircumference()},
        Area: ${this.getArea()},
        Type: ${this.constructor.name}
        `);
    }

    // Dummy Method
    getCircumference() { return 0; }

    // Dummy Methods
    getArea() { return 0; }
}

// Rectangle class ia a child of Shape class
class Rectangle extends Shape {
    constructor(p1, p2) {
        // Check if the first parameter is an object of Rectagle
        if (p1 instanceof Rectangle) {
            console.log(`Received object of type ${p1.constructor.name}`);
            // Send x, y of the passed object to parent
            super(p1.x, p1.y);
        }
        // The passed parameters are width and height
        else {
            super(p1, p2);
        }
    }

    // Circumference Method
    getCircumference() {
        return (this.x + this.y) * 2;
    }

    // Area Method
    getArea() {
        return this.x * this.y;
    }
}

// Square class a child of Rectangle class
class Square extends Rectangle {
    constructor(p) {
        // Check if the parameter is a Square object
        if (p instanceof Square) {
            console.log(`Received object of type ${p.constructor.name}`);
            // Pass the object length to parent
            super(p.x, p.x);
        }
        // The Passed parameter is length
        else
            super(p, p);
    }
}

// Oval class is a child of Shape class
class Oval extends Shape {
    constructor(p1, p2) {
        // Check if the first paramter is an Oval object
        if (p1 instanceof Oval) {
            console.log(`Received object of type ${p1.constructor.name}`);
            // Pass the x, y of the passed object to parent
            super(p1.x, p1.y);
        }
        // The passed arguments are a and b
        else {
            // Pass a and b to parent
            super(p1, p2);
        }
    }

    // Calculate Circumference Method
    getCircumference() {
        return ((this.x + this.y) * Math.PI).toFixed(2);
    }

    // Calculate Area Method
    getArea() {
        return (this.x * this.y * Math.PI).toFixed(2);
    }
}

// Circle class is a child of Oval class
class Circle extends Oval {
    constructor(p) {
        // Check if the passed paramter is a Circle Object
        if (p instanceof Circle) {
            console.log(`Received object of type ${p.constructor.name}`);
            // Pass the radius of pass object to parent
            super(p.x, p.x);
        }
        // The passed argument is a radius
        else
            // Pass the radius to the parent
            super(p, p);
    }
}

class DrawArea {
    constructor() {
        // Initialize shapes array
        this.shapes = [];
    }

    // Add shape to shapes array
    add(shape) {
        this.shapes.push(shape);
    }

    // trigger log function for every shape in shapes array.
    log() {
        this.shapes.forEach(shape => shape.log());
    }
}

const shapes = new DrawArea();

const shape = new Shape();
shapes.add(shape);

const rectangle = new Rectangle(10, 5);
// rectangle.log();
shapes.add(rectangle);

const square = new Square(5);
// square.log();
shapes.add(square);

const oval = new Oval(10, 5);
// oval.log();
shapes.add(oval);

const circle = new Circle(5);
// circle.log();
shapes.add(circle);

shapes.log();

// CHECK FOR BONUS PART

// const rect = new Rectangle(rectangle);
// rect.log();

// const sqr = new Square(square);
// sqr.log();

// const ovl = new Oval(oval);
// ovl.log();

// const crcl = new Circle(circle);
// crcl.log();
