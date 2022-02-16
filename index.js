const readline = require('readline-sync');

const possibleOperators = ['+', '-', '*', '/'];

const printWelcomeMessage = () => {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

const getInfo = (message) => {
    console.log(message);
    const userInput = readline.prompt();
    return userInput;
}

const performCalculations = (operator, numbers) => {
    let result;
    switch (operator) {
        case '+':
            result = numbers.reduce((acc, curr) => {
                return acc + curr;
            });
            break;

        case '-':
            result = numbers.reduce((acc, curr) => {
                return acc - curr;
            });
            break;

        case '*':
            result = numbers.reduce((acc, curr) => {
                return acc * curr;
            });
            break;

        case '/':
            result = numbers.reduce((acc, curr) => {
                return acc / curr;
            });
            break;

        default:
            break;
    }
    console.log('The result is: ' + result);
}

printWelcomeMessage();

let runAgain = 'Y';
while (runAgain.toUpperCase() === 'Y') {

    let operatorInput = getInfo('Please enter one of the following operators: +, -, * or /: ');
    while (!possibleOperators.includes(operatorInput)) {
        operatorInput = getInfo('Incorrect input. Please enter one of the following operators: +, -, * or /: ');
    }

    let howMany = parseFloat(getInfo('How many numbers do you want to operate on? '));
    while (isNaN(howMany) || !Number.isInteger(howMany)) {
        howMany = parseFloat(getInfo('Incorrect input. How many numbers do you want to operate on? '));
    }

    let arrNumbers = [];
    for (let i = 0; i < howMany; i++) {
        arrNumbers[i] = parseFloat(getInfo(`Please enter number ${i + 1}: `));
        while (isNaN(arrNumbers[i])) {
            arrNumbers[i] = parseFloat(getInfo(`Incorrect input. Please enter number ${i + 1}: `));
        }
    }

    performCalculations(operatorInput, arrNumbers);

    runAgain = getInfo('If you want to calculate again type Y, to exit type anything else. ');
}