const readline = require('readline-sync');

const possibleOperators = ['+', '-', '*', '/'];
const vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0
};

const printWelcomeMessage = () => {
    console.log(`Welcome to the calculator!
==========================`);
}


const getInfo = (message) => {
    console.log(message);
    const userInput = readline.prompt();
    return userInput;
}

const getCalculationMode = () => {
    let calcMode = getInfo(`Which calculator mode do you want?
1) Arithmetic
2) Vowel counting`)
    while (calcMode !== '1' && calcMode !== '2') {
        calcMode = getInfo('Please enter 1 or 2 for chosen calculator mode: ');
    }
    return calcMode;
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

const calculateResult = (operator, numbers) => {
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

const performOneArithmeticCalculation = () => {
    const operator = getOperator();
    const howMany = howManyNumbers();
    const arrNumbers = getArrOfNumbers(howMany);
    const answer = calculateResult(operator, arrNumbers);

    console.log(`The result is: ${answer}`);
}

const calculateVowels = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (vowels.hasOwnProperty(string[i])) {
            vowels[string[i]] += 1;
        }
    }
    return vowels;
}

const performOneVowelCountingCalculation = () => {
    const strToCount = getInfo('Please enter a string: ').toUpperCase();
    const answer = calculateVowels(strToCount);
    console.log(`The vowel counts are:
A: ${answer.A}
E: ${answer.E}
I: ${answer.I}
O: ${answer.O}
U: ${answer.U}
`)
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();

let runAgain = 'Y';
while (runAgain.toUpperCase() === 'Y') {

    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }

    runAgain = getInfo(`If you want to calculate again type Y
If you want to exit type anything else. `);
}