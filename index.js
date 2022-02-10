const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('Please enter one of the following operators: +, -, * or /: ');
const operatorInput = readline.prompt();

console.log('Please enter the first number: ');
const firstNumber = readline.prompt();

console.log('Please enter the second number: ');
const secondNumber = readline.prompt();

let result;

if (operatorInput === '+') {
 result = +firstNumber + +secondNumber;
} else if (operatorInput === '-') {
    result = +firstNumber - +secondNumber;
} else if (operatorInput === '*') {
    result = +firstNumber * +secondNumber;
} else if (operatorInput === '/') {
    result = +firstNumber / +secondNumber;
}

!isNaN(result) ? console.log('The result is: ' + result) : console.log('Invalid input.');
