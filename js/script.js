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
    return b == 0 ? "UNDEFINED" : a / b;
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
let operatorVariable;

//display
let displayVariable;
const display = document.querySelector('.display');
function updateDisplay() {
    display.textContent = displayVariable;
}

//digit buttons
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', () => {
    if (display.textContent == 0) {
        displayVariable = digit.textContent;
    }
    else {
        !operatorVariable ? displayVariable += digit.textContent: displayVariable += digit.textContent;
    }
    updateDisplay();
}))

//operator buttons
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', () => {
    operatorVariable = operator.id;
    firstNumber = parseFloat(displayVariable);
    displayVariable = '';
}))
const equals = document.getElementById('equals');
equals.addEventListener('click', () => { 
    secondNumber = parseFloat(displayVariable);
    operate(operatorVariable, firstNumber, secondNumber);
    displayVariable = '';
    operatorVariable = null;
});

//top buttons
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    displayVariable = 0;
    operatorVariable = null;
    updateDisplay();
})
const sign = document.getElementById('sign');
sign.addEventListener('click', () => {
    displayVariable = parseFloat(displayVariable);
    displayVariable *= -1;
    !firstNumber || !operatorVariable ? firstNumber = displayVariable
    : secondNumber = displayVariable;
    updateDisplay();
})
const percentage = document.getElementById('percentage');
percentage.addEventListener('click', () => {
    displayVariable = parseFloat(displayVariable);
    displayVariable /= 100;
    !firstNumber || !operatorVariable ? firstNumber = displayVariable
    : secondNumber = displayVariable;
    updateDisplay();
})

//decimal button
const decimal = document.getElementById('dot');
decimal.addEventListener('click', () => {
    displayVariable += '.';
    updateDisplay();
})