import { getInfo } from "./userInput.js";

const vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0
};

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

    console.log('The vowel counts are:');
    for (let vowel in answer) {
        console.log(`   ${vowel}: ${answer[vowel]}`);
    }
}

export default performOneVowelCountingCalculation;