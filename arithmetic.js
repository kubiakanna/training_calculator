import { getOperator, howManyNumbers, getArrOfNumbers } from "./userInput.js";

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
            result = numbers
                .filter(num => num !== 0 || num === numbers[0])
                .reduce((acc, curr) => {
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

export default performOneArithmeticCalculation;