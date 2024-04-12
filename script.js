function appendToDisplay(value) {
    document.querySelector('.display').value += value;
}

function clearDisplay() {
    document.querySelector('.display').value = '';
}

function calculate() {
    let result = eval(document.querySelector('.display').value);
    document.querySelector('.display').value = result;
}

function toggleSign() {
    let displayValue = document.querySelector('.display').value;
    if (displayValue !== '' && displayValue !== '0') {
        document.querySelector('.display').value = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
    }
}

function addDecimal() {
    let displayValue = document.querySelector('.display').value;
    if (displayValue.indexOf('.') === -1) {
        document.querySelector('.display').value += '.';
    }
}
