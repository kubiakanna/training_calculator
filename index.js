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

const getOperator = () => {
    let operatorInput = getInfo('Please enter one of the following operators: +, -, * or /: ');
    while (!possibleOperators.includes(operatorInput)) {
        operatorInput = getInfo('Incorrect input. Please enter one of the following operators: +, -, * or /: ');
    }
    return operatorInput;
}

const howManyNumbers = () => {
    let howMany = parseFloat(getInfo('How many numbers do you want to operate on? '));
    while (isNaN(howMany) || !Number.isInteger(howMany)) {
        howMany = parseFloat(getInfo('Incorrect input. How many numbers do you want to operate on? '));
    }
    return howMany;
}

const getArrOfNumbers = (size) => {
    let arrNumbers = [];
    for (let i = 0; i < size; i++) {
        arrNumbers[i] = parseFloat(getInfo(`Please enter number ${i + 1}: `));
        while (isNaN(arrNumbers[i])) {
            arrNumbers[i] = parseFloat(getInfo(`Incorrect input. Please enter number ${i + 1}: `));
        }
    }
    return arrNumbers;
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
    return result;
}

const performOneCalculation = () => {
    const operator = getOperator();
    const howMany = howManyNumbers();
    const arrNumbers = getArrOfNumbers(howMany);
    const answer = performCalculations(operator, arrNumbers);

    console.log('The result is: ' + answer);
}

printWelcomeMessage();

let runAgain = 'Y';
while (runAgain.toUpperCase() === 'Y') {
    performOneCalculation();

    runAgain = getInfo('If you want to calculate again type Y, to exit type anything else. ');
}