function appendToDisplay(value) {
    let displayValue = document.querySelector('.display').value;
    if (displayValue === '0' || displayValue === 'Error') {
        document.querySelector('.display').value = value;
    } else {
        document.querySelector('.display').value += value;
    }
}

function clearDisplay() {
    document.querySelector('.display').value = '0';
}

function clearEntry() {
    let currentValue = document.querySelector('.display').value;
    document.querySelector('.display').value = currentValue.slice(0, -1);
    if (document.querySelector('.display').value === '') {
        document.querySelector('.display').value = '0';
    }
}

function backspace() {
    let displayValue = document.querySelector('.display').value;
    document.querySelector('.display').value = displayValue.slice(0, -1);
    if (document.querySelector('.display').value === '') {
        document.querySelector('.display').value = '0';
    }
}

function calculate() {
    let expression = document.querySelector('.display').value;
    try {
        let result = eval(expression);
        document.querySelector('.display').value = result;
    } catch (error) {
        document.querySelector('.display').value = 'Error';
    }
}

function toggleSign() {
    let displayValue = document.querySelector('.display').value;
    if (displayValue !== '0') {
        document.querySelector('.display').value = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
    }
}

function reciprocal() {
    let displayValue = parseFloat(document.querySelector('.display').value);
    document.querySelector('.display').value = 1 / displayValue;
}

function square() {
    let displayValue = parseFloat(document.querySelector('.display').value);
    document.querySelector('.display').value = displayValue * displayValue;
}

function squareRoot() {
    let displayValue = parseFloat(document.querySelector('.display').value);
    document.querySelector('.display').value = Math.sqrt(displayValue);
}
