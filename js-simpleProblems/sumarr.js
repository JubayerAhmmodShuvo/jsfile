// sum of all numbers in array of

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (let i = 0; i < arr.length; i++) {


    sum = sum + arr[i];


}
console.log(sum);

// array total in function
function arrayTotal(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

var totals = arrayTotal([33, 55, 66, 77, 88, 99, 100]);
console.log(totals);