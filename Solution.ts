
function maxHeightOfTriangle(red: number, blue: number): number {
    return Math.max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red));
};

function calculateMaxNumberOfOddRowsStartingFromOne(numberOfBalls: number): number {
    return Math.floor(Math.sqrt(numberOfBalls));
}

function calculateMaxNumberOfEvenRowsStartingFromTwo(numberOfBalls: number): number {
    return Math.floor((-1 + Math.floor(Math.sqrt(1 + 4 * numberOfBalls))) / 2);
}

function calculateMaxHeightOfTriangle(firstColor: number, secondColor: number): number {
    const numberOfRowsWithFirstColorStaringFromOne = calculateMaxNumberOfOddRowsStartingFromOne(firstColor);
    const numberOfRowsWithSecondColorStartingFromTwo = calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor);

    if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo) {
        return numberOfRowsWithFirstColorStaringFromOne * 2;
    }
    return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1;
}
