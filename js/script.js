//Calculator functions
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return b == 0 ? "Division by 0" : a / b;
}

const operate = function(operator, a, b) {
    if (operator == 'add') {
        firstNumber = add(a, b);
        secondNumber = null;
        displayVariable = add(a, b);
        updateDisplay();
    } else if (operator == 'subtract') {
        firstNumber = subtract(a, b);
        secondNumber = null;
        displayVariable = subtract(a, b);
        updateDisplay();
    } else if (operator == 'multiply') {
        firstNumber = multiply(a, b);
        secondNumber = null;
        displayVariable = multiply(a, b);
        updateDisplay();
    } else if (operator == 'divide') {
        firstNumber = divide(a, b);
        secondNumber = null;
        displayVariable = divide(a, b);
        updateDisplay();
    }
}
//number variables
let firstNumber;
let secondNumber;

//display
let displayVariable;
const display = document.querySelector('.display');
function updateDisplay() {
    display.textContent = displayVariable;
}

//digit buttons
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', () => {
    displayVariable = digit.textContent;
    updateDisplay();
    !firstNumber || !operatorVariable ? firstNumber = parseInt(digit.textContent) 
    : secondNumber = parseInt(digit.textContent);
}))

//operator buttons
let operatorVariable;
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => {
    operatorVariable = operator.id;
}))
const equals = document.getElementById('equals');
equals.addEventListener('click', () => operate(operatorVariable, firstNumber, secondNumber));

//top buttons
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    displayVariable = 0;
    operatorVariable = null;
    updateDisplay();
})