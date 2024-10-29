const screenResultElement = document.getElementById('calc__result');
const screenHistoryElement = document.getElementById('calc__history');
const calcButtonsElement = document.getElementById('calc__btn-container');

let calcNumberA;
let calcNumberB;
let calcOperator;
let currentNumber = '';
let hasPoint = false
const numbers = ['0','1','2','3','4','5','6','7','8','9']

calcButtonsElement.addEventListener('click', recordPresses);

function recordPresses(e) {
    if (!e.target.classList.contains('calc__btn')) return;
    switch (true) {
        case e.target.dataset.id === '.':
            currentNumber += hasPoint ? '' : '.';
            hasPoint = true;
            break;
        case numbers.includes(e.target.dataset.id):
            currentNumber += e.target.dataset.id;
            break;
        default:
            currentNumber = '0';
            break;
    }
    screenResultElement.textContent = currentNumber;
};


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(calcOperator, calcNumberA, calcNumberB) {
    switch (calcOperator) {
        case '+':
            return add(calcNumberA, calcNumberB);
        case '-':
            return subtract(calcNumberA, calcNumberB);
        case 'x':
            return multiply(calcNumberA, calcNumberB);
        case '/':
            return divide(calcNumberA, calcNumberB);
    }
}