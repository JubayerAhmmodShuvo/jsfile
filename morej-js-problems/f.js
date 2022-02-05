//write a function to print frist odd name in an array
function firstOdd(arr) {

    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            odd.push(arr[i]);
        }
        return odd[0];
    }
}

var arri = firstOdd("ami", "bd", "csdf", "ddf", "eggs", "f", "g", "h", "i", "j");
console.log(arri);