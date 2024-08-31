
using System;

public class Solution
{
    public int MaxHeightOfTriangle(int red, int blue)
    {
        return Math.Max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red));
    }

    private int calculateMaxNumberOfOddRowsStartingFromOne(int numberOfBalls)
    {
        return (int)(Math.Sqrt(numberOfBalls));
    }

    private int calculateMaxNumberOfEvenRowsStartingFromTwo(int numberOfBalls)
    {
        return (int)((-1 + Math.Sqrt(1 + 4 * numberOfBalls)) / 2);
    }

    private int calculateMaxHeightOfTriangle(int firstColor, int secondColor)
    {
        int numberOfRowsWithFirstColorStaringFromOne = calculateMaxNumberOfOddRowsStartingFromOne(firstColor);
        int numberOfRowsWithSecondColorStartingFromTwo = calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor);

        if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo)
        {
            return numberOfRowsWithFirstColorStaringFromOne * 2;
        }
        return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1;
    }
}
