function tripleStep(steps) {
    let count = 0;
    const memo = new Array(steps);

    for (let i = 1; i <= 3; i++) {
        count += takeSteps(i, 0, steps, memo);
    }

    return count;
}

function takeSteps(stepsToTake, currentStep, totalSteps, memo) {
    const step = stepsToTake + currentStep;

    if (step > totalSteps) {
        return 0;
    }

    if (step === totalSteps) {
        return 1;
    }

    if (memo[step]) {
        return memo[step];
    }

    memo[step] = 0;

    for (let i = 1; i <= 3; i++) {
        memo[step] += takeSteps(i, step, totalSteps, memo);
    }

    return memo[step];
}

const test = () => {
    console.log(tripleStep(5))
}

test();