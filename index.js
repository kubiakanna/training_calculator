const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('Please enter one of the following operators: +, -, * or /: ');
let operatorInput = readline.prompt();

console.log('How many numbers do you want to operate on? ');
let howMany = readline.prompt();

let arrNumbers = [];

for (let i = 0; i < howMany; i++) {
    console.log(`Please enter number ${i+1}: `);
    arrNumbers[i] = +readline.prompt();
}

let result;

switch (operatorInput) {
    case '+':
        result = arrNumbers.reduce((acc, curr) => {
            return acc + curr;
        });
        break;
     
    case '-':
        result = arrNumbers.reduce((acc, curr) => {
            return acc - curr;
        });
        break;
     
    case '*':
        result = arrNumbers.reduce((acc, curr) => {
            return acc * curr;
        });
        break;
     
    case '/':
        result = arrNumbers.reduce((acc, curr) => {
            return acc / curr;
        });
        break;

    default:
        break;
}
!isNaN(result) ? console.log('The result is: ' + result) : console.log('Invalid input.');
