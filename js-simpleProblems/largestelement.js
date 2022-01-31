//find the largest element in array
function largestElement(numbers) {
    let largest = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [33, 55, 66, 77, 88, 99, 100];
const oldest = largestElement(ages);
console.log(oldest);

//find the lowest element in array
function smallestElement(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const ages1 = [55, 66, 77, 88, 99, 33, 100];
const oldest2 = smallestElement(ages1);
console.log(oldest2);