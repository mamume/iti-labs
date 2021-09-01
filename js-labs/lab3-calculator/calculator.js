// For operation result
let result = ''
// Operation symbol
let currentOp = ''

// Triggered on click on 'C' button
function clear() {
    // Clear result and operation variables
    result = ''
    currentOp = ''

    // Clear the displays
    document.querySelector('#display').innerText = ''
    document.querySelector('th').innerText = 'Calculator'
}

// Triggered on click on '=' button, or when adding multi operation symbols
function displayResult() {
    // Calculate The result
    calculate()

    // Update displays by results
    document.querySelector('#display').innerText = result
    document.querySelector('th').innerHTML = result

    // Clear operation symbol 
    currentOp = ''
}

// Calculate the operation result
function calculate() {
    // Constant refers to the first display
    const calcScreen = document.querySelector('th')

    // Get the index of the operation symbol
    const opIndex = calcScreen.innerText.lastIndexOf(currentOp)

    // If opretion symbol is the last of the input return
    // In case user entered an opreation symbol multi times 
    if (opIndex === calcScreen.innerText.length - 1)
        return

    // Get the new operand after is after the operation index
    const operand = Number(calcScreen.innerText.slice(opIndex + 1))

    // Calculate the result depending on the operation type
    switch (currentOp) {
        case '+':
            result += operand
            break
        case '-':
            result -= operand
            break
        case 'x':
            result *= operand
            break
        case '/':
            result /= operand
            break
        case '%':
            result %= operand
            break
    }
}

// Triggered if any number or operation button clicked
function btnClicked(e, type = 'num') {
    // Constant refers to the first display
    const calcScreen = document.querySelector('th')

    // If it's the begnning, clear the display
    if (calcScreen.innerText === 'Calculator' && type === 'num')
        calcScreen.innerText = ''
    // If user entered operation symbol in the beginning put 0 on the beginning
    else if (calcScreen.innerText === 'Calculator' && type === 'op') {
        calcScreen.innerHTML = '0'
    }

    // If operation symbol is entered
    if (type === 'op') {
        // Check if it's the first operation
        if (!currentOp)
            // Take the number in the display into the result
            result = Number(calcScreen.innerText)
        // Else display the result
        else
            displayResult()

        // Replace the current operation symbol with the new one
        currentOp = e.target.innerText
    }

    // Append the input in calculator screen
    calcScreen.innerHTML += e.target.innerText
}

// After DOM is loaded execute
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with number class
    const numberBtns = document.querySelectorAll('.number')
    // For each button add an event listener on click
    numberBtns.forEach(btn => (
        btn.addEventListener('click', event => btnClicked(event))
    ))

    // Select all buttons with operation class
    const opBtns = document.querySelectorAll('.operation')
    // Add an event listener for each button on click
    opBtns.forEach(btn => (
        btn.addEventListener('click', event => btnClicked(event, 'op'))
    ))

    // Add on click function for '=' button
    document.querySelector('#result').addEventListener('click', displayResult)
    // Add on click function for 'C' button
    document.querySelector('#clear').addEventListener('click', clear)
})
