let displayValue = "0";
let firstOperand = null;
let secondOperand = false;
let operator = null;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (secondOperand) {
    displayValue = number;
    secondOperand = false;
  } else {
    displayValue = displayValue === "0" ? number : displayValue + number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) calculate();
  firstOperand = parseFloat(displayValue);
  operator = op;
  secondOperand = true;
}

function calculate() {
  if (operator === null || secondOperand) return;

  const secondOperandValue = parseFloat(displayValue);
  let result;
  switch (operator) {
    case "+":
      result = firstOperand + secondOperandValue;
      break;
    case "-":
      result = firstOperand - secondOperandValue;
      break;
    case "×":
      result = firstOperand * secondOperandValue;
      break;
    case "÷":
      result = firstOperand / secondOperandValue;
      break;
    default:
      return;
  }

  displayValue = String(result);
  operator = null;
  secondOperand = false;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  firstOperand = null;
  operator = null;
  secondOperand = false;
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : "0";
  updateDisplay();
}

//calc basica
