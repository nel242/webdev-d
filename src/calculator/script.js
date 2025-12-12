const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    // Selects the input field to update its value
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        // Overwrite '0' if the current value is '0', otherwise append the digit
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    // If an operator was just pressed, ignore the decimal for now
    if (calculator.waitingForSecondOperand === true) return;

    // Ensure a decimal point is only added once
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    // If an operator is already set AND we are waiting for the next number,
    // update the operator and exit (e.g., user presses + then *).
    if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        return;
    }

    // Set the firstOperand if it's currently null
    if (firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        // If an operator exists, perform the calculation
        const result = calculate(firstOperand, inputValue, operator);

        // Update display and store the result as the new firstOperand for chaining
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`; // Limit float precision
        calculator.firstOperand = result;
    }

    // Set flags for the next operation
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator === '=' ? null : nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            // Simple check for division by zero
            if (secondOperand === 0) {
                return 'Error';
            }
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

// ---------------------------------------------------------------------
// FIX APPLIED HERE: Initialize function that waits for the DOM to load
// ---------------------------------------------------------------------
function initializeCalculator() {
    const keys = document.querySelector('.calculator-keys');
    
    // Attach event listener to the container (event delegation)
    keys.addEventListener('click', (event) => {
        const { target } = event;
        const { value } = target;

        // Check if the clicked element is a button
        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '=': // Handle operators, including equals
                handleOperator(value);
                break;
            case '.':
                inputDecimal(value);
                break;
            case 'all-clear':
                resetCalculator();
                break;
            default:
                // Handle number inputs
                if (Number.isInteger(parseFloat(value))) {
                    inputDigit(value);
                }
        }

        updateDisplay();
    });
    
    // Initial call to set the display to '0'
    updateDisplay();
}

// Ensure the script runs only after the entire page (DOM) is loaded
document.addEventListener('DOMContentLoaded', initializeCalculator);