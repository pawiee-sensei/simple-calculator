function calculateResult() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorSelect = document.getElementById("operator");
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    const operator = operatorSelect.value;

    if (num1 === "" || num2 === "") {
        displayResult("Please enter both numbers");
        return;
    }

    const firstNumber = Number(num1);
    const secondNumber = Number(num2);
    let result;

    if (operator === "add") {
        result = firstNumber + secondNumber;
    } else if (operator === "subtract") {
        result = firstNumber - secondNumber;
    } else if (operator === "multiply") {
        result = firstNumber * secondNumber;
    } else if (operator === "divide") {
        if (secondNumber === 0) {
            displayResult("Cannot divide by zero");
            return;
        }
        result = firstNumber / secondNumber;
    }

    displayResult(result);
}

function displayResult(value) {
    const resultEl = document.getElementById("result");
    resultEl.innerText = "Result: " + value;
}
