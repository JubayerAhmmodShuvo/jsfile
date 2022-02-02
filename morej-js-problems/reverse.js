const greetings = 'hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {

        reverse = letter + reverse;

    }
    console.log(reverse);
}
const reversed = reverseString(greetings);
console.log(reversed);