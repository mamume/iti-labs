let num1 = Number(prompt("Enter first number:"))
let op = prompt("Enter operation: (+, -, *, /, %)")
let num2 = Number(prompt("Enter second number:"))

switch (op) {
    case '+':
        alert(num1 + num2)
        break;
    case '-':
        alert(num1 - num2)
        break;
    case '*':
        alert(num1 * num2)
        break;
    case '/':
        alert(num1 / num2)
        break;
    case '%':
        alert(num1 % num2)
        break;
    default:
        alert('ERROR: Wrong Operator')
}
