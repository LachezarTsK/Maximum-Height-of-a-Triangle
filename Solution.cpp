
#include <cmath>
#include <complex>
#include <algorithm>
using namespace std;

class Solution {

public:
    int maxHeightOfTriangle(int red, int blue) const {
        return max(calculateMaxHeightOfTriangle(red, blue), calculateMaxHeightOfTriangle(blue, red));
    }

private:
    int calculateMaxNumberOfOddRowsStartingFromOne(int numberOfBalls) const {
        return sqrt(numberOfBalls);
    }

    int calculateMaxNumberOfEvenRowsStartingFromTwo(int numberOfBalls) const {
        return (-1 + (sqrt(1 + 4 * numberOfBalls))) / 2;
    }

    int calculateMaxHeightOfTriangle(int firstColor, int secondColor) const {
        int numberOfRowsWithFirstColorStaringFromOne = calculateMaxNumberOfOddRowsStartingFromOne(firstColor);
        int numberOfRowsWithSecondColorStartingFromTwo = calculateMaxNumberOfEvenRowsStartingFromTwo(secondColor);

        if (numberOfRowsWithFirstColorStaringFromOne <= numberOfRowsWithSecondColorStartingFromTwo) {
            return numberOfRowsWithFirstColorStaringFromOne * 2;
        }
        return 2 * numberOfRowsWithSecondColorStartingFromTwo + 1;
    }
};
