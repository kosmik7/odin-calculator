const screenResultElement = document.getElementById('calc__result');
const screenHistoryElement = document.getElementById('calc__history');
const calcButtonsElement = document.getElementById('calc__btn-container');

let previousValue = '';
let currentValue = '0';
let operator = '';

calcButtonsElement.addEventListener('click', recordPresses);

function recordPresses(e) {
    e.preventDefault()
    if (!e.target.classList.contains('calc__btn')) return;
    const pressed = e.target.dataset.id

    if (isNumber(pressed)) handleNumber(pressed);
    else if (isOperator(pressed)) handleOperator(pressed);
    else if (pressed === '.') handleDecimal();
    else if (pressed === 'clear') handleClear();
    else if (pressed === 'backspace') handleBackspace();
    else if (pressed === '+/-') handleNegate();
    else if (pressed === '=') operate('result');
    else if (pressed === '%') handlePercentage();

    updateDisplay()
};

function isNumber(pressed) {
    return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(pressed);
}

function isOperator(pressed) {
    return ['+', '-', 'x', '/'].includes(pressed);
}

function handleNumber(pressed) {
    if (operator === '') previousValue = ''
    currentValue = currentValue === '0' ? pressed : currentValue + pressed;
};

function handleOperator(pressed) {
    if (!previousValue && currentValue === '0') return;
    if (currentValue === '') return operator = pressed;

    if (previousValue && operator) operate();
    else {
        previousValue = currentValue;
        currentValue = ''
    }
    operator = pressed;
};

function handleDecimal() {
    if (!currentValue.includes('.')) currentValue += '.';
};

function handlePercentage() {
    currentValue = Number.parseFloat((currentValue / 100).toFixed(2));
}

function handleNegate() {
    if (currentValue === '') return;
    else if (currentValue.charAt(0) === '-') currentValue = currentValue.slice(1);
    else currentValue = '-' + currentValue;
};

function handleBackspace() {
    currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
};

function handleClear() {
    previousValue = '';
    currentValue = '0';
    operator = '';
};

function updateDisplay() {
    let displayString = `${previousValue} ${operator} ${currentValue}`;
    if (displayString.length > 14) {
        screenResultElement.textContent = displayString.slice(0, 13);
    }
    else screenResultElement.textContent = displayString;
};

function operate(helper) {
    if (!previousValue || !operator || !currentValue) return;

    let a = Number.parseFloat(previousValue)
    let b = Number.parseFloat(currentValue)

    if (operator === '+') previousValue = Number.parseFloat((a + b).toFixed(2));
    else if (operator === '-') previousValue = Number.parseFloat((a - b).toFixed(2));
    else if (operator === 'x') previousValue = Number.parseFloat((a * b).toFixed(2));
    else if (operator === '/') previousValue = Number.parseFloat((a / b).toFixed(2));

    currentValue = ''
    previousValue = String(previousValue)
    if (helper === 'result') operator = ''
}