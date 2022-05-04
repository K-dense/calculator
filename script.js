const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const upperScreen = document.getElementById('prev-num');
const lowerScreen = document.getElementById('curr-num');
const clearEntry = document.getElementById('CE');
const clear = document.getElementById('C');
const backspace = document.getElementById('backspace');
const equals = document.getElementById('equals');

let currentNum = '';
let previousNum = '';
let oper;

function clearEntryHandler() {
  currentNum = '';
}

function clearHandler() {
  currentNum = '';
  previousNum = '';
  oper = undefined;
}

function backspaceHandler() {
  currentNum = currentNum.slice(0, -1);
}

function appendNumber(number) {
  if (number === '.' && currentNum.includes('.')) return
  return currentNum = currentNum + number;
}

function chooseOperation(operation) {
  if (currentNum === '') return
  if (previousNum != '') {
    compute();
  }
  oper = operation;
  previousNum = currentNum;
  currentNum = '';
}

function compute() {
  let computation;
  const prev = parseFloat(previousNum);
  const current = parseFloat(currentNum);
  if (isNaN(prev) || isNaN(current)) return
  switch (oper) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '×':
      computation = prev * current
      break
    case '÷':
      if (current === 0) {
        computation = 'No'
      } else {
        computation = prev / current
      }
      break
    default:
      return
  }
  currentNum = computation;
  oper = undefined;
  previousNum = '';
}

function updateDisplay() {
  lowerScreen.innerText = currentNum;
  upperScreen.innerText = previousNum;
  if (oper != undefined) {
    upperScreen.innerText = `${previousNum} ${oper}`;
  }
}

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.innerText);
    updateDisplay();
  })
})

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText);
    updateDisplay();
  })
})

clearEntry.addEventListener('click', () => {
  clearEntryHandler();
  updateDisplay();
});

clear.addEventListener('click', () => {
  clearHandler();
  updateDisplay();
});

backspace.addEventListener('click', () => {
  backspaceHandler();
  updateDisplay();
});

equals.addEventListener('click', () => {
  compute();
  updateDisplay();
});