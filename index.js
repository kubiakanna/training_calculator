import { getInfo } from './userInput.js';
import performOneArithmeticCalculation from './arithmetic.js';
import performOneVowelCountingCalculation from './vowelCounting.js';

const printWelcomeMessage = () => {
    console.log(`Welcome to the calculator!
==========================`);
}

const getCalculationMode = () => {
    let calcMode = getInfo(`Which calculator mode do you want?
${ARITHMETIC_MODE}) Arithmetic
${VOWEL_COUNTING_MODE}) Vowel counting`)
    while (calcMode !== '1' && calcMode !== '2') {
        calcMode = getInfo('Please enter 1 or 2 for chosen calculator mode: ');
    }
    return calcMode;
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