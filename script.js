const numbers = document.querySelectorAll('.numbers');
const decimal = document.getElementById('decimal');
const lowerScreen = document.getElementById('result');
const clearEntry = document.getElementById('CE');

const addBtn = document.getElementById('add');

let displayValue = [];
let valueHolder = 0;
let decimalSwitch = true; // To stop more than one dot (decimal)
let operator = null;

function showInScreen() {
  if(lowerScreen.textContent.length < 10) {
    lowerScreen.textContent = displayValue.join('');
  }
}

function clearCurrentEntry(displayOnTopScreen) {
  if (displayOnTopScreen) {
    displayValue = [];
    lowerScreen.textContent = valueHolder;
  } else {
    displayValue = [];
    lowerScreen.textContent = '0';
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else {
    return divide(num1, num2);
  }
}

//Event listeners

numbers.forEach(number => {
  number.addEventListener('click', () => {
   displayValue.push(number.getAttribute('data-value'));
   showInScreen();
  })
})

decimal.addEventListener('click', () => {
  if (lowerScreen.textContent === '0') {
    displayValue.push('0' + decimal.getAttribute('data-value'));
    decimalSwitch = false;
    console.log(displayValue);
    showInScreen();
  } else if (decimalSwitch === true) {
    displayValue.push(decimal.getAttribute('data-value'));
    decimalSwitch = false;
    showInScreen();
  }
})

clearEntry.addEventListener('click', () => {
  displayValue = [];
  decimalSwitch = true;
  clearCurrentEntry();
})

addBtn.addEventListener('click', () => {
  if (operator === null) {
    operator = '+';
    valueHolder = Number(displayValue.join(''));
    clearCurrentEntry();
  } else if (operator === '+') {
    operator = '+';
    console.log(valueHolder += Number(displayValue.join('')));
    clearCurrentEntry(true);
  }
})