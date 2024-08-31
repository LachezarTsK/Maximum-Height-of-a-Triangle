
public class Solution {

    public int maxHeightOfTriangle(int red, int blue) {
        return Math.max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red));
    }

    private int calculateMaxNumberOfOddRowsStartingFromOne(int numberOfBalls) {
        return (int) Math.floor(Math.sqrt(numberOfBalls));
    }

    private int calculateMaxNumberOfEvenRowsStartingFromTwo(int numberOfBalls) {
        return (int) Math.floor((-1 + (int) Math.floor(Math.sqrt(1 + 4 * numberOfBalls))) / 2);
    }

    private int calculateMaxHeightOfTriangle(int firstColor, int secondColor) {
        int numberOfRowsWithFirstColorStaringFromOne = calculateMaxNumberOfOddRowsStartingFromOne(firstColor);
        int numberOfRowsWithSecondColorStartingFromTwo = calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor);

        if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo) {
            return numberOfRowsWithFirstColorStaringFromOne * 2;
        }
        return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1;
    }
}
