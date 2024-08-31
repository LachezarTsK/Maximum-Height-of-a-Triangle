
package main

import (
    "fmt"
    "math"
)

func maxHeightOfTriangle(red int, blue int) int {
    return max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red))
}

func calculateMaxNumberOfOddRowsStartingFromOne(numberOfBalls int) int {
    return int(math.Sqrt(float64(numberOfBalls)))
}

func calculateMaxNumberOfEvenRowsStartingFromTwo(numberOfBalls int) int {
    return int((-1 + int(math.Sqrt(1+4*(float64)(numberOfBalls)))) / 2)
}

func calculateMaxHeightOfTriangle(firstColor int, secondColor int) int {
    numberOfRowsWithFirstColorStaringFromOne := calculateMaxNumberOfOddRowsStartingFromOne(firstColor)
    numberOfRowsWithSecondColorStartingFromTwo := calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor)

    if numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo {
        return numberOfRowsWithFirstColorStaringFromOne * 2
    }
    return 2*numberOfRowsWithSecondColorStartingFromTwo + 1
}
