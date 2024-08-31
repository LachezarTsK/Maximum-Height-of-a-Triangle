
import kotlin.math.sqrt
import kotlin.math.max

class Solution {

    fun maxHeightOfTriangle(red: Int, blue: Int): Int {
        return max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red))
    }

    private fun calculateMaxNumberOfOddRowsStartingFromOne(numberOfBalls: Int): Int {
        return (sqrt(numberOfBalls.toDouble())).toInt()
    }

    private fun calculateMaxNumberOfEvenRowsStartingFromTwo(numberOfBalls: Int): Int {
        return ((-1 + sqrt(1.0 + 4 * numberOfBalls)) / 2).toInt()
    }

    private fun calculateMaxHeightOfTriangle(firstColor: Int, secondColor: Int): Int {
        val numberOfRowsWithFirstColorStaringFromOne = calculateMaxNumberOfOddRowsStartingFromOne(firstColor)
        val numberOfRowsWithSecondColorStartingFromTwo = calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor)

        if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo) {
            return numberOfRowsWithFirstColorStaringFromOne * 2
        }
        return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1
    }
}
