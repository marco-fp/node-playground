function palindromePermutation(input) {
    const repMap = {};
    let palindromeLength = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            palindromeLength += 1;
            const chr = input[i].toLowerCase();
            repMap[chr] = repMap[chr] ? repMap[chr] + 1 : 1;
        }
    }

    const isOdd = palindromeLength % 2;
    let checkedOddMiddle = false;

    for (let key in repMap) {
        const rep = repMap[key];
        if (rep % 2 === 0) {
            continue;
        }

        if (!isOdd || checkedOddMiddle) {
            return false;
        }

        checkedOddMiddle = true;
    }

    return true;
}

console.log(palindromePermutation('taaco cat'))