const {
    returnSequence,
    primeNumbers,
    occurrencesCounter,
    isPrimeTimes,
    isPrime
} = require('../returnSequence');

test("check task recruit", () => {
    const receiveNumbersTest = returnSequence(
        [2, 3, 9, 2, 5, 1, 3, 7, 10],
        [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]
    );

    expect(receiveNumbersTest).toStrictEqual([2, 9, 2, 5, 7, 10]);
});

test("check if occurrences are prime numbers or not", () => {
    const input = primeNumbers(5, [2, 3, 4, 5, 6]);
    const output = {"2": false, "3": false, "4": false, "5": false, "6": false};

    expect(input).toStrictEqual(output);
});

test("check occurrences counter", () => {
    const occurrences = occurrencesCounter(13, [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10]);
    const output = {"1": 2, "10": 4, "2": 1, "3": 2, "4": 1, "6": 2, "7": 1};

    expect(occurrences).toStrictEqual(output);
});

test("check isPrimeTimes", () => {
    const primeTimes = isPrimeTimes({"1": 2, "10": 4, "2": 1, "3": 2, "4": 1, "6": 2, "7": 1});
    const output = {"1": true, "10": false, "2": false, "3": true, "4": false, "6": true, "7": false};

    expect(primeTimes).toStrictEqual(output);
});

describe("check is prime number", () => {
    it("check if provided number is not a prime number", () => {
        const checkPrimeNumber = isPrime(123);

        expect(checkPrimeNumber).toBeFalsy();
    });

    it("check if number one is not a prime number", () => {
        const checkPrimeNumber = isPrime(1);

        expect(checkPrimeNumber).toBeFalsy();
    });

    it("check if provided number is a prime number", () => {
        const checkPrimeNumber = isPrime(2);

        expect(checkPrimeNumber).toBeTruthy();
    });

    it("check if provided big number is a prime number", () => {
        const checkPrimeNumber = isPrime(127);

        expect(checkPrimeNumber).toBeTruthy();
    });
});