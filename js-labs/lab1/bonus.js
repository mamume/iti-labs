let result = Number(prompt("Enter first number:"))
let op = prompt("Enter operation: (+, -, *, /, %)")
let num2

while (op) {
    num2 = Number(prompt("Enter second number:"))

    switch (op) {
        case '+':
            result += num2
            break;
        case '-':
            result -= num2
            break;
        case '*':
            result *= num2
            break;
        case '/':
            result /= num2
            break;
        case '%':
            result %= num2
            break;
        default:
            alert('ERROR: Wrong Operator')
    }

    op = prompt(`Result = ${result}\nEnter operator or click cancel to exit`)
}