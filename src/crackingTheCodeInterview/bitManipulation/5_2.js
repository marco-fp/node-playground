function binaryToString(num) {
    let value = num;

    if (value >= 1 || value <= 0) {
        return 'Error';
    }

    let result = "0.";

    while (value > 0) {
        if (result.length > 32) {
            return 'Error';
        }

        let r = value * 2;

        if (r >= 1) {
            result += '1';
            value = r - 1;
        } else {
            result += '0';
            value = r;
        }
    }

    return result;
}

const test = () => {
    console.log(binaryToString(0.375))
}

test();