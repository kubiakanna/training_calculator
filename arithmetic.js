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
                .slice(1)
                .filter(num => num !== 0)
                .reduce((acc, curr) => {
                    return acc / curr;
                }, numbers[0]);
            break;

        default:
            break;
    }
    return result;
}

const performOneArithmeticCalculation = () => {
    try {
        var operator = getOperator();
    } catch (e) {
        console.error(e.message);
    }
    const howMany = howManyNumbers();
    const arrNumbers = getArrOfNumbers(howMany);
    const answer = calculateResult(operator, arrNumbers);
    console.log(`The result is: ${answer}`);

}

export default performOneArithmeticCalculation;