let currentDisplay = '';
let previousDisplay = '';
let currentOperator = null;
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equal]');
const acButton = document.querySelector('[data-AC]');
const plusMinus = document.querySelector('[data-plus-minus]');
const percentage = document.querySelector('[data-percentage]');
const operationText = document.querySelector('[data-operation]');
const resultText = document.querySelector('[data-result]');

function addingNumberToDisplay(number) {
    if (number === '.' && currentDisplay.includes('.')) return;
    currentDisplay += number;
}

function displayUpdate() {
    resultText.textContent = currentDisplay;
    if (currentOperator) {
        operationText.textContent = previousDisplay + ' ' + currentOperator;
    } else {
        operationText.textContent = previousDisplay + '';
    }
}

function secureEval(expression) {
    const safePattern = /^[0-9+\-*/%.() ]+$/;
    if (!safePattern.test(expression)) {
        throw new Error("Invalid characters in expression.");
    }
    try {
        return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        throw new Error("Error evaluating expression.");
    }
}

function compute() {
    let calculation = previousDisplay + ' ' + currentOperator + ' ' + currentDisplay;
    calculation = calculation.replace(/÷/g, '/').replace(/x/g, '*');
    const prevValue = parseFloat(previousDisplay);
    const currentValue = parseFloat(currentDisplay);
    if (isNaN(prevValue) || isNaN(currentValue)) return;
    try {
        currentDisplay = secureEval(calculation);
        currentOperator = null;
        previousDisplay = '';
    } catch (error) {
        alert('Unable to do calculation')
        currentDisplay = '';
        previousDisplay = '';
    }
}

function operatorSelector(operators) {
    if (currentDisplay === '') return;
    if (previousDisplay !== '') {
        compute();
    }
    currentOperator = operators;
    previousDisplay = currentDisplay;
    currentDisplay = '';
}

function clear() {
    currentDisplay = '';
    previousDisplay = '';
    currentOperator = null;
}

function del() {
    currentDisplay = currentDisplay.slice(0, -1);
    resultText.textContent = currentDisplay;
}

function $(id) {
    return document.getElementById(id);
}

function flashButton(id) {
    const button = $(id);
    if (!button) return;
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100);
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
        addingNumberToDisplay(button.textContent);
        displayUpdate();
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        operatorSelector(button.textContent);
        displayUpdate();
    });
});

equals.addEventListener('click', () => {
    compute();
    displayUpdate();
});

acButton.addEventListener('click', () => {
    clear();
    displayUpdate();
});

plusMinus.addEventListener('click', () => {
    if(currentDisplay) {
        currentDisplay = (parseFloat(currentDisplay) * -1).toString();
    }
    displayUpdate();
});

percentage.addEventListener('click', () => {
    if(currentDisplay) {
        currentDisplay = (parseFloat(currentDisplay) / 100).toString();
    }
    displayUpdate();
});

document.addEventListener("keydown", function(event) {
    const key = event.key;
    const keyMap = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '+': 'plus',
        '-': 'minus',
        '*': 'times',
        '/': 'divide',
        '.': 'period',
        '%': 'percent',
        'Enter': 'equal',
        'Escape': 'all-clear',
        'Backspace': 'all-clear'
    };

    if ("0123456789".includes(key)) {
        addingNumberToDisplay(key);
        displayUpdate();
    } else if ("%".includes(key)) {
        if(currentDisplay) {
            currentDisplay = (parseFloat(currentDisplay) / 100).toString();
        }
        displayUpdate();
    } else if ("+-*/.".includes(key)) {
        operatorSelector(key);
        displayUpdate();
    } else if (key === "Enter") {
        event.preventDefault(); // this prevents the form from being submitted
        compute();
        displayUpdate();
    } else if (key === "Escape") {
        clear();
        displayUpdate();
    } else if (key === "Backspace") {
        del();
        displayUpdate();
    }

    const btnId = keyMap[key]; // keyMap needs to be defined above

    if (btnId) {
        flashButton(btnId); // flashButton needs to be defined. I gave you this already.
    }
});