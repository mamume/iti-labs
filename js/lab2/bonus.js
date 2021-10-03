// Ask user to enter the shape name
// ask for dimensions
// calculate area
// display area

function circle() {
    const PI = 3.14
    const r = Number(prompt('Enter radius of the circle:'))

    const area = PI * r * r
    alert(`The area of the circle = ${area}`)
}

function triangle() {
    const b = Number(prompt('Enter base:'))
    const h = Number(prompt('Enter height:'))

    const area = 0.5 * b * h
    alert(`The area of the triangle = ${area}`)
}

function square() {
    const a = Number(prompt('Enter length of side:'))

    const area = a * a
    alert(`The area of the square = ${area}`)
}

function rectangle() {
    const l = Number(prompt('Enter length:'))
    const w = Number(prompt('Enter width:'))

    const area = l * w
    alert(`The area of the rectangle = ${area}`)
}

function parrallelogram() {
    const b = Number(prompt('Enter base:'))
    const h = Number(prompt('Enter vertical height:'))

    const area = b * h
    alert(`The area of the parrallelogram = ${area}`)
}

function trapezium() {
    const a = Number(prompt('Enter the first length of the parallel sides:'))
    const b = Number(prompt('Enter the second length of the parrallel sides:'))
    const h = Number(prompt('Enter height:'))

    const area = 0.5 * (a + b) * h
    alert(`The area of the trapezium = ${area}`)
}

function ellipse() {
    const PI = 3.14
    const a = Number(prompt('Enter half of minor axis:'))
    const b = Number(prompt('Enter half of major axis:'))

    const area = PI * a * b
    alert(`The area of the ellipse = ${area}`)
}

let shapeName

do {
    shapeName = prompt("Enter shape name (circle, triangle, square, rectangle, parallelogram, trapezium, ellipse):")

    switch (shapeName) {
        case 'circle':
            circle()
            break
        case 'triangle':
            triangle()
            break
        case 'square':
            square()
            break
        case 'rectangle':
            rectangle()
            break
        case 'parallelogram':
            parrallelogram()
            break
        case 'trapezium':
            trapezium()
            break
        case 'ellipse':
            ellipse()
            break
        case null:
            alert('Closing App...')
            break
        default:
            alert('Invalid shape name')
    }
} while (shapeName)