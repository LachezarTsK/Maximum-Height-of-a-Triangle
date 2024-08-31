
/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
    return Math.max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red));
};

/**
 * @param {number} numberOfBalls
 * @return {number}
 */
function calculateMaxNumberOfOddRowsStartingFromOne(numberOfBalls) {
    return Math.floor(Math.sqrt(numberOfBalls));
}

/**
 * @param {number} numberOfBalls
 * @return {number}
 */
function calculateMaxNumberOfEvenRowsStartingFromTwo(numberOfBalls) {
    return Math.floor((-1 + Math.sqrt(1 + 4 * numberOfBalls)) / 2);
}

/**
 * @param {number} firstColor
 * @param {number} secondColor
 * @return {number}
 */
function calculateMaxHeightOfTriangle(firstColor, secondColor) {
    const numberOfRowsWithFirstColorStaringFromOne = calculateMaxNumberOfOddRowsStartingFromOne(firstColor);
    const numberOfRowsWithSecondColorStartingFromTwo = calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor);

    if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo) {
        return numberOfRowsWithFirstColorStaringFromOne * 2;
    }
    return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1;
}
