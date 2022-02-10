const readline = require('readline-sync');

console.log('Please enter the first number: ');
const firstNumber = readline.prompt();

console.log('Please enter the second number: ');
const secondNumber = readline.prompt();

const result = +firstNumber * +secondNumber;
!isNaN(result) ? console.log(result) : console.log('Invalid input.');
