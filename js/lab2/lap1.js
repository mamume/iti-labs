// Calculate Sum & Avg of entered values
// Get the number of inputs in array
// display sum & avg

// Get the number of inputs from user
const size = Number(prompt('Enter the number of inputs:'))
// initialize an empty array for numbers
let numbers = []
// initialize sum with 0
let sum = 0

// loop for the size of inputs
for (let i = 0; i < size; i++) {
    // Add the input number to numbers array
    numbers[i] = Number(prompt(`Enter number ${i + 1}:`))
    // Add the input number to sum
    sum += numbers[i]
}

// Display sum & avg
alert(`
    Numbers Entered: ${numbers.join(', ')}
    Summation = ${sum}
    Average = ${sum / size}
    `)

