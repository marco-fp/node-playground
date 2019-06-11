function coinCombinationCount(n) {
    return coins(n, 0, {});
}

function coins(total, sum, memo) {
    if (sum === total) {
        return 1;
    }

    if (sum > total) {
        return 0;
    }

    const coinValues = [1, 5, 10, 25];

    const count = memo[sum] ? memo[sum] : coinValues.reduce((count, coin) => {
        return count += coins(total, sum + coin, memo);
    }, 0);

    memo[sum] = count;

    return count;
}

const test = () => {
    console.log(coinCombinationCount(10));
}

test();