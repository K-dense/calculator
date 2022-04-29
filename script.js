const numbers = document.querySelectorAll('.numbers');
const decimal = document.getElementById('decimal');
const lowerScreen = document.getElementById('result');
const clearEntry = document.getElementById('CE');

let displayValue = [];

function showInScreen() {
  if(lowerScreen.textContent.length < 10) {
    lowerScreen.textContent = displayValue.join('');
  }
}

function clearCurrentEntry() {
  lowerScreen.textContent = '0';
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
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
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
   console.log(displayValue);
  })
})

decimal.addEventListener('click', () => {
  if (lowerScreen.textContent === '0') {
    displayValue.push('0' + decimal.getAttribute('data-value'));
    showInScreen();
  }
})

clearEntry.addEventListener('click', () => {
  displayValue = [];
  clearCurrentEntry();
})