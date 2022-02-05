/* //solution of problem 1

function anaToVori(ana) {
    if (ana < 0) {
        console.log("Enter a valid number");
    } else {
        const vori = ana * 0.0625;
        return vori;
    }
}
var totalVori = anaToVori(16);
console.log(totalVori);



//solution for problem 2


function pandaCost(singara, somusa, jilapi) {
    if (singara < 0 || somusa < 0 || jilapi < 0) {
        console.log("Enter valid numbers");
    } else {
        const perSingaraPrice = 7;
        const perSomusaPrice = 10;
        const perJilapiPrice = 15;
        var total = (singara * perSingaraPrice) + (somusa * perSomusaPrice) + (jilapi * perJilapiPrice);
        return total;
    }
}

var totalCost = pandaCost(10, 10, 10);
console.log(totalCost);


//solution of problem 3

function picnicBudget(people) {
    if (people < 0) {
        console.log("Enter a valid number");
    } else {
        var firstPerPersonPrice = 5000;
        var secondPerPersonPrice = 4000;
        var thirdPerPersonPrice = 3000;
        if (people <= 100) {
            const firstHunderedCost = people * firstPerPersonPrice;
            return firstHunderedCost;
        } else if (people <= 200) {
            const firstHunderedCost = 100 * firstPerPersonPrice;
            const restPeople = people - 100;
            const restPeopleCost = restPeople * secondPerPersonPrice;
            const totalCost = firstHunderedCost + restPeopleCost;
            return totalCost;
        } else {
            const firstHunderedCost = 100 * firstPerPersonPrice;
            const secondHunderedCost = 100 * secondPerPersonPrice;
            const restPeople = people - 200;
            const restPeopleCost = restPeople * thirdPerPersonPrice;
            const totalCost = firstHunderedCost + secondHunderedCost + restPeopleCost;
            return totalCost;

        }


    }
}

var totalCost = picnicBudget(201);
console.log(totalCost);


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
console.log(oddName); */
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