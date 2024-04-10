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
