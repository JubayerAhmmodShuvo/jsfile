//factorial with loop

var factorial = 1;
for (var i = 1; i <= 7; i++) {

    console.log(i);

    factorial = factorial * i;
}
console.log(factorial);


function getFactorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
var factorialNumber = getFactorial(10);
console.log(factorialNumber);

//factorial with while loop increment and decrement

function toFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;

        i++;
    }
    return factorial;
}