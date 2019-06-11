function parenthesisCombinations(n) {
    if (n % 2 === 1) {
        return null;
    }

    const result = [];

    findParenthesisCombinations(n, 0, 0, "", result);

    return result;
}

function findParenthesisCombinations(total, opened, closed, combination, result) {
    if ((opened + closed) === total) {
        result.push(combination);
        return;
    }

    if (opened > closed) {
        findParenthesisCombinations(
            total,
            opened,
            closed + 1,
            combination + ")",
            result
        );
    }

    const remaining = ( total - (closed + opened) );
    const unclosed = opened - closed;

    if (remaining >= unclosed + 1) {
        findParenthesisCombinations(
            total,
            opened + 1,
            closed,
            combination + "(",
            result
        );
    }
}

const test = () => {
    console.log(2, parenthesisCombinations(2).length)
    console.log(4, parenthesisCombinations(4).length)
    console.log(6, parenthesisCombinations(6).length)
    console.log(8, parenthesisCombinations(8).length)
    console.log(10, parenthesisCombinations(10).length)
    console.log(12, parenthesisCombinations(12).length)
    console.log(14, parenthesisCombinations(14).length)
}

test();