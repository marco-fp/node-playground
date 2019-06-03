function compressString(input) {
    if (input.length <= 2) {
        return input;
    }

    let compressed = "";
    let count = 1;
    let currentChr = input[0];

    for(let i = 1; i < input.length; i++) {
        if(input[i] !== currentChr) {
            compressed += `${currentChr}${count}`;
            count = 1;
            currentChr = input[i];
        } else {
            count++;
        }
    }

    compressed += `${currentChr}${count}`;

    return compressed.length < input.length ? compressed : input;
}

console.log(compressString('aabcccccaaa'))

console.log(compressString('abcca'))