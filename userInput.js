import readline from 'readline-sync';

const possibleOperators = ['+', '-', '*', '/'];

export const getInfo = (message) => {
    console.log(message);
    const userInput = readline.prompt();
    return userInput;
}

export const getOperator = () => {
    let operatorInput = getInfo('Please enter one of the following operators: +, -, * or /: ');
    while (!possibleOperators.includes(operatorInput)) {
        operatorInput = getInfo('Incorrect input. Please enter one of the following operators: +, -, * or /: ');
    }
    return operatorInput;
}

export const howManyNumbers = () => {
    let howMany = parseFloat(getInfo('How many numbers do you want to operate on? '));
    while (isNaN(howMany) || !Number.isInteger(howMany)) {
        howMany = parseFloat(getInfo('Incorrect input. How many numbers do you want to operate on? '));
    }
    return howMany;
}

export const getArrOfNumbers = (size) => {
    let arrNumbers = [];
    for (let i = 0; i < size; i++) {
        arrNumbers[i] = parseFloat(getInfo(`Please enter number ${i + 1}: `));
        while (isNaN(arrNumbers[i])) {
            arrNumbers[i] = parseFloat(getInfo(`Incorrect input. Please enter number ${i + 1}: `));
        }
    }
    return arrNumbers;
}