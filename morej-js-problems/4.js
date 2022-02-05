//solution of problem 4

function oddFriend(array) {
    if (typeof array == 'number') {
        console.log("Enter valid array");
    } else {
        var odd = [];
        for (const element of array) {
            var size = element.length;
            if (size % 2 != 0) {
                odd.push(element);
            }
        }
        return odd[0];
    }
}

var names = ['ahmadullah', 'prince', 'hablu', 'dablu', 'bablu', 'mohammad'];
// var names = 100;


var oddName = oddFriend(names);
console.log(oddName);