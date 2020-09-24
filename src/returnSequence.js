function returnSequence(arrayA, arrayB) {
    const isPrimeOccurrences = primeNumbers(arrayB.length, arrayB);

    return arrayA.filter(num => !isPrimeOccurrences[num]);
}

function primeNumbers(n, arrayB) {
    const digitTimes = occurrencesCounter(n, arrayB);

    return isPrimeTimes(digitTimes);
}

function occurrencesCounter(n, arrayB) {
    let digitCounter = {};

    for (let i = 0; i < n; i++) {
        const key = [arrayB[i]];
        digitCounter = {...digitCounter, [key]: (digitCounter[key] || 0) + 1};
    }

    return digitCounter;
}

function isPrimeTimes(digitTimes) {
    const digitsCounter = digitTimes;

    for (let key in digitsCounter) {
        digitsCounter[key] = isPrime(digitsCounter[key]);
    }
    return digitsCounter;
}

function isPrime(num) {
    for (let i = 2, squareRoot = Math.sqrt(num); i <= squareRoot; i++)
        if (num % i === 0) return false;
    return num > 1;
}

returnSequence(
    [2, 3, 9, 2, 5, 1, 3, 7, 10],
    [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]
);

module.exports = {
    returnSequence,
    primeNumbers,
    occurrencesCounter,
    isPrimeTimes,
    isPrime
};