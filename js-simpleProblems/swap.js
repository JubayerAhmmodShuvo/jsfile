/* var first = 5;
var second = 7;
console.log(first, second);
var temp = first;
first = second;
second = temp;
console.log(first, second); */

function largestNumber(first, second, third) {
    if (first > second && first > third) {
        return first;
    } else if (second > first && second > third) {
        return second;
    } else {
        return third;
    }

}
const max = largestNumber(5, 7, 9);
console.log(max);

// write a function to find the smallest of three numbers
function smallestNumber(first, second, third) {
    if (first < second && first < third) {
        return first;
    } else if (second < first && second < third) {
        return second;
    } else {
        return third;
    }
}
const min = smallestNumber(5, 7, 9);
console.log(min);