/* //find fibonacci number of a given series of numbers

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please give a n umber';
    }
    if (num < 2) {
        return 'please enter a positive number grater than 1';
    }


    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacci_series = fibonacciSeries(10);
console.log(fibonacci_series);