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

let calcNumberA
let calcNumberB
let calcOperator