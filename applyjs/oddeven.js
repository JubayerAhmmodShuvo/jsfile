//const number = 4;

const number = 145;

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const myNumberEven = 1299;
const isMyNumberEven = isEven(myNumberEven);
console.log('My Number', isMyNumberEven);

const herNumber = 1400;
const isHerNumberEven = isEven(herNumber);
console.log('Her Number', isHerNumberEven);

function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

const myNumberOdd = 1298;
const isMyNumberOdd = isOdd(myNumberOdd);
console.log('My Number', isMyNumberOdd);