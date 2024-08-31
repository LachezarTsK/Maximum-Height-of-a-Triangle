
using System;


public class Solution
{
    public int MaxHeightOfTriangle(int red, int blue)
    {
        return Math.Max(CalculateMaxHeightOfTriangle(red, blue), CalculateMaxHeightOfTriangle(blue, red));
    }

    private int CalculateMaxNumberOfOddRowsStartingFromOne(int numberOfBalls)
    {
        return (int)(Math.Sqrt(numberOfBalls));
    }

    private int CalculateMaxNumberOfEvenRowsStartingFromTwo(int numberOfBalls)
    {
        return (int)((-1 + Math.Sqrt(1 + 4 * numberOfBalls)) / 2);
    }

    private int CalculateMaxHeightOfTriangle(int firstColor, int secondColor)
    {
        int numberOfRowsWithFirstColorStaringFromOne = CalculateMaxNumberOfOddRowsStartingFromOne(firstColor);
        int numberOfRowsWithSecondColorStartingFromTwo = CalculateMaxNumberOfEvenRowsStartingFromTwo(secondColor);

        if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo)
        {
            return numberOfRowsWithFirstColorStaringFromOne * 2;
        }
        return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1;
    }
}
